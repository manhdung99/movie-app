import React from "react";
import logo from "../image/logo.svg";
import Nav from "./nav";
import Features from "./features";
export default function Header() {
  return (
    <div className="h-[64px] bg-[#032541] w-full flex  items-center ">
      <div className="w-[1300px] px-[40px] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-[16px]">
            <img className="h-[20px] w-[154px]" src={logo} alt="logo" />
          </div>
          <div>
            <Nav />
          </div>
        </div>
        <div>
          <Features />
        </div>
      </div>
    </div>
  );
}
