"use client";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const shadowNav = pathname.includes("/anime/");

  return (
    <div
      className={
        shadowNav
          ? "flex justify-center sm:justify-around items-center mx-auto bg-graynav/[0.5] hover:bg-graynav ease-in-out h-75 transition-shadow w-full collapse md:visible shadow-filter z-100 relative text-sm text-txnav delay-200"
          : "flex justify-center sm:justify-around items-center mx-auto py-2 h-75 w-full bg-graynav relative text-sm text-txnav"
      }
      style={{ height: "75px" }}
    >
      <div>
        <Link href={`/`}>
          <Image alt="logo" width={56} height={56} src={logo} />
        </Link>
      </div>
      <div className="flex justify-center sm:justify-between items-center sm:gap-24">
        <div className="flex cursor-pointer items-center gap-4">
          <Link href={`/search/anime?`}>
            {" "}
            <span className="hover:text-hovnav ml-2 sm:ml-0">Search</span>
          </Link>
          <span className="hover:text-hovnav">Social</span>
          <span className="hover:text-hovnav">Forum</span>
        </div>
        <div className="flex items-center gap-4">
          <span className=" cursor-pointer hover:text-hovnav ml-4 sm:ml-0">Login</span>
          <span className="transition ease-in-out delay-150 hover:scale-105 duration-300 mr-4 sm:mr-0 px-4 py-2 bg-royal hover:bg-blue-50 hover:shadow-filterblue active:bg-blue-50 rounded-md text-white hover:bg-royal cursor-pointer">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
