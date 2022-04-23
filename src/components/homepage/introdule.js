import React from "react";
import Image from "../image/slide-image-1.jpg";
export default function Introdule() {
  return (
    <div className="relative">
      <img className="h-[300px] w-[1300px] object-cover" src={Image} alt="" />
      <div className="absolute top-[52px] px-[40px] text-white w-full">
        <h1 className="text-[38px] font-bold">Welcome.</h1>
        <p className="text-[28px] font-bold ">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="mt-[44px] relative">
          <input
            className="outline-0 w-full py-[10px] px-[20px] rounded-[24px] text-[rgba(0,0,0,0.5)]"
            type="text"
            placeholder="Search for a movie, tv show, person......"
          />

          <button className="absolute px-[20px] py-[10px] right-[-1px] from-[#1dd4aa] bg-gradient-to-r to-[#03b6e1] rounded-[24px]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
