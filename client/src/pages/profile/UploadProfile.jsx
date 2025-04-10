import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import Loader from "../../components/utils/Loader";

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;

  .upload-wrapper {
    position: relative;
    background-color: white;
    height: 90%;
    width: 90%;
    border-radius: 10px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
  }

  .upload-container {
    width: 50%;
    margin-inline: auto;

    display: flex;
    justify-content: center;
    /* height: 200px; */
  }

  .upload-control-container {
  }

  .choose-btn {
    background-color: green;
    color: white;
    font-size: 20px;
  }

  .fake-img-container {
    border: 1px dashed red;
    max-width: 900px;
    width: 80%;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .fake-profile {
    width: 100%;
    height: 26rem;
    object-position: center;
  }

  .upload-btn {
    position: absolute;
    left: 50%;
    bottom: 20px;
  }
  .si {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    z-index: 100;
    transition: 0.5s ease-in-out;
  }

  .icon:hover {
    background-color: var(--icon-bg);
  }
`;

const UploadProfile = ({
  isOpen,
  setIsOpen,
  setFile,
  file,
  upload,
  mutation,
  data,
}) => {
  const handleFakeImg = () => {
    URL.revokeObjectURL(file);
    setFile(null);
    setIsOpen(false);
  };

  const handleUpdate = async () => {
    let imageUrl;

    imageUrl = file ? await upload() : data.user_profile;
    mutation.mutate({ user_profile: imageUrl });
    setIsOpen(false);
    setFile(null);

  };

  return (
    <>
      <Wrapper>
        {file && (
          <div className="upload-wrapper">
            <div className="fake-img-container">
              <div className="si">
                <FaTrash className="icon" onClick={handleFakeImg} />
              </div>
              <img
                src={URL.createObjectURL(file)}
                alt="fake img"
                className="fake-profile"
              />
            </div>

            <button className="upload-btn" onClick={handleUpdate}>
              Upload profile
            </button>
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default UploadProfile;
