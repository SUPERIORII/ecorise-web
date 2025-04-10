import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import customUrl from "../../basedUrl";
import { Wrapper, SecondSection, LocationWebSite } from "./profileStyle";
import { AiFillCamera, AiOutlineMail } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import {
  FaLocationArrow,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import ProfileBtn from "../../components/ProfileBtn";
import { BsPerson, BsThreeDotsVertical } from "react-icons/bs";
import { useAuthContext } from "../../context/AppContext";
import UploadProfile from "./UploadProfile";

const Profile = () => {
  const { currentUser } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const imgRef = useRef(null);

  // const { psudoname } = useParams();
  const psudoname = useLocation().pathname.split("/")[2];

  // open the upload container
  const uploadProfile = () => {
    setIsOpen(true);
    imgRef.current.click();
  };

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const { isError, isLoading, data } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const response = await customUrl.get("/api/user/find/" + psudoname);
      return response.data;
    },
  });

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await customUrl.post("/api/upload", formData);
    return response.data;
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (profile) => {
      customUrl.patch("/api/user", profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["currentuser"]);
    },
  });

  if (isError) return <h1>Something went wrong</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Wrapper>
      <SecondSection>
        <div className="cover-wrapper">
          <img
            src="../src/assets/profilePictures/img-7.jpg"
            alt="cover picture"
          />
        </div>
        <div className="subProfile">
          <div className="image-wrapper">
            {data.user_profile ? (
              <img src={"/upload/" + data.user_profile} alt="profile picture" />
            ) : (
              <BsPerson className="default-profile-picture" />
            )}

            {currentUser?.id === data.id ? (
              <div className="camera-icon-wrapper" onClick={uploadProfile}>
                <AiFillCamera className="camera-icon" />
                <input
                  type="file"
                  hidden
                  ref={imgRef}
                  onChange={handleFile}
                  name="file"
                />
              </div>
            ) : null}
          </div>

          <h3 className="username">{data.username}</h3>
          <span>{data.email}</span>

          <LocationWebSite>
            <div className="si">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
            </div>
            <section className="profile-info-middle">
              <div>
                <FaLocationArrow />
                <span>location</span>
              </div>

              <div>
                <BiWorld />
                <span>website link</span>
              </div>
            </section>

            <div className="si">
              <AiOutlineMail className="icon" />
              <BsThreeDotsVertical className="icon" />
            </div>
          </LocationWebSite>
          {currentUser?.id === data.id ? (
            <ProfileBtn psudoname={psudoname} />
          ) : null}
        </div>

        <div className="content">
          {/* project profile picture */}
        <section className="project-info">
          <div className="project-upper-section">
            <Link to={`/profile/abraham`}>
              <div className="cover-img">
                <img
                  src="../src/assets/91925a99b7054ef8c69f04d4e05d488d.jpg"
                  alt="profile"
                />
              </div>
            </Link>

            <div className="project-description">
              <div className="project-user-info">
                <Link to={`/`}>
                  <p className="project-creator">
                    <span>abraham</span> created a new Project
                  </p>
                </Link>
                <span className="project-duration">2 May . 2 hours ago</span>
              </div>
            </div>
          </div>

          Project description
          <p className="project-title">title</p>
        </section>

          {/* imaga */}
        <div className="project-img">
          <img
            src="../src/assets/91925a99b7054ef8c69f04d4e05d488d.jpg"
            alt="img"
          />
        </div>
        </div>
      </SecondSection>

      {isOpen && (
        <UploadProfile
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          file={file}
          setFile={setFile}
          handleFile={handleFile}
          mutation={mutation}
          upload={upload}
          data={data}
        />
      )}
    </Wrapper>
  );
};

export default Profile;
