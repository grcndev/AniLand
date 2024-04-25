'use client'
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link  from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname()
  const shadowNav = pathname.includes('/anime/')
  
  return (
    <div
      className={ shadowNav ? ('flex justify-evenly items-center mx-auto bg-graynav/[0.5] py-2 h-75 transition-shadow w-full shadow-filter z-100 relative text-sm text-txnav') : ("flex justify-evenly items-center mx-auto py-2 h-75 w-full bg-graynav relative text-sm text-txnav")}
      style={{ height: "75px" }}
    >
      <div>
        <Link href={`/`}><Image alt="logo" width={50} height={50} src={logo} /></Link>
      </div>
      <div className="flex justify-between items-center gap-24">
        <div className="flex  cursor-pointer items-center gap-4">
          <span className="hover:text-hovnav">Search</span>
          <span className="hover:text-hovnav">Social</span>
          <span className="hover:text-hovnav">Forum</span>
        </div>
        <div className="flex items-center gap-4">
          <span className=" cursor-pointer hover:text-hovnav">Login</span>
          <span className="px-4 py-2 bg-sgbg hover:bg-blue-50 active:bg-blue-50 rounded-md text-sgtxcol hover:bg-sgbg-50 cursor-pointer">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
