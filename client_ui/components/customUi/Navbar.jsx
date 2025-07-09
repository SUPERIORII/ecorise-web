"use client";
import React, { useState } from "react";

Menu;
import { User2Icon, Menu, XIcon, Mail } from "lucide-react";
import { navLinks, accountUserOPtions, guestUserOPtions } from "@/lib/sources";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const isLogin = true;
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userOption, setuserOPtion] = useState(false);
  return (
    <nav className="sticky left-0 right-0 h-16 bg-base-300 flex items-center justify-between z-[100] px-6 bg-white shadow">
      <div className="flex gap-16 item-center">
        <div className="cursor-pointer transition-opacity duration-300 z-50 flex items-center gap-5">
          <button
            className="text-3xl md:hidden"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            {mobileMenu ? <XIcon size={30} /> : <Menu size={30} />}
          </button>

          <Link href="/">
            <Image
              src="/images/logo.png"
              width={50}
              height={50}
              className="h-10 hidden md:block"
              alt="Ecorise Logo"
            />
          </Link>

          <input
            type="text"
            placeholder="search Ecorise"
            className="bg-slate-50 h-10 p-4 rounded-4xl w-2xs hidden lg:block"
          />
        </div>

        <ul className="hidden gap-8 items-center md:flex ">
          {/* NAVLINKS */}
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="hover:bg-slate-200 p-2 text-[13px] rounded-lg transition duration-300"
              >
                <span>{link.text}</span>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* RIGHT NAVBAR */}
      <div className="flex items-end gap-5">
        {isLogin ? (
          <div className="relative cursor-pointer flex gap-2 items-center">
            <span className="font-medium text-sm text-shadow-md md:hidden">
              Welcome Abraham
            </span>
            {/* <NotebookIcon size={14} /> */}
            <div className="" onClick={() => setuserOPtion((prev) => !prev)}>
              <Image
                width={24}
                height={24}
                priority
                className="w-10 h-10 rounded-full border"
                src="/images/img-1.jpg"
                alt="profile"
              />
            </div>

            {/* ADDITION USER OPTION */}
            {userOption && (
              <section className="absolute top-14 right-0 bg-white shadow min-w-60 text-sm">
                <aside className="flex flex-col">
                  {accountUserOPtions.map((option) => {
                    const { id, text, icon, href } = option;
                    return (
                      <Link
                        href={href}
                        key={id}
                        className="capitalize flex items-center gap-2 font-medium cursor-pointer hover:bg-[rgba(233,233,233,0.5)] px-4 py-3"
                      >
                        {icon}
                        <span>{text}</span>
                      </Link>
                    );
                  })}
                </aside>
              </section>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/" className="cursor-pointer">
              <Mail />
            </Link>

            {/* NORMAL USER ADDITIONAL OPTIONS */}
            <div
              className="relative cursor-pointer"
              onClick={() => setuserOPtion((prev) => !prev)}
            >
              <div className="flex items-center border rounded-2xl p-1.5 gap-2">
                <span className="text-xs">Guest</span>

                <div className="w-full rounded-full border border-blue-600">
                  <User2Icon className="text-blue-600" />
                </div>
              </div>

              {userOption && (
                <section className="absolute top-14 right-0  bg-white shadow min-w-60 text-sm">
                  <aside className="flex flex-col">
                    {guestUserOPtions.map((option) => {
                      const { id, text, icon, href } = option;
                      return (
                        <Link
                          href={href}
                          key={id}
                          className="capitalize flex items-center gap-2 font-medium cursor-pointer hover:bg-[rgba(233,233,233,0.5)] px-4 py-3"
                        >
                          {icon}
                          <span>{text}</span>
                        </Link>
                      );
                    })}
                  </aside>
                </section>
              )}
            </div>
          </div>
        )}
      </div>

      {/* mobile navigation */}
      {mobileMenu && (
        <ul className="absolute top-16 left-0 border-t shadow w-screen flex flex-col bg-slate-50 px-5 py-2 md:hidden space-y-2">
          {/* NAVLINKS */}
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="hover:bg-slate-200 p-2 text-[13px] rounded-lg transition duration-300"
              >
                <span>{link.text}</span>
              </Link>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
