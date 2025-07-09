import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram,FaWhatsapp } from "react-icons/fa";

const TeamGrid = ({ username, user_profile, instagram_Url, facebook_Url, whatsapp_Url }) => {
  return (
    <div className="bg-white grid grid-cols-1 p-3 rounded-2xl">
      <div className="">
        <img
          className="w-full h-[230px] object-cover object-top rounded-2xl"
          // src={user_profile}
          src="/images/img-5.jpg"
          alt="user"
        />
      </div>

      <div className="flex flex-col gap-1 pt-6 items-center md:justify-center">
        <h1 className="text-2xl font-medium capitalize">{username}</h1>
        <p className="text-sm">
          Senior Developer at{" "}
          <span className="underline text-green-800 font-medium">Ecorise</span>
        </p>
        <span>Social Account:</span>

        <div className="flex gap-2 justify-center items-center">
          <Link
            href={facebook_Url}
            className="bg-slate-200 p-2 rounded-full cursor-pointer"
          >
            <FaFacebook size={25} />
          </Link>

          <Link href={instagram_Url} className="bg-slate-200 p-2 rounded-full">
            <FaInstagram size={25} />
          </Link>

          <Link href={whatsapp_Url} className="bg-slate-200 p-2 rounded-full">
            <FaWhatsapp size={25} />
          </Link>
        </div>

        <Link
          href="/profile"
          className="border border-b-neutral-600 rounded-2xl p-2 
        flex items-center justify-center w-full hover:bg-black hover:text-white font-medium"
        >
          profile
        </Link>
      </div>
    </div>
  );
};

export default TeamGrid;
