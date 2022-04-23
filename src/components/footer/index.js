import React from "react";
import logo from "../image/logo-footer.svg";
export default function Footer() {
  const footerItems = [
    {
      title: "the basic",
      items: [
        "About TMDB",
        "Contact Us",
        "Support Forums",
        "API",
        "System Status",
      ],
    },
    {
      title: "get involved",
      items: ["Contribution Bible", "Add New Movie", "Add New TV Show"],
    },
    {
      title: "community",
      items: ["Guidelines", "Discussions", "Leaderboard", "Twitter"],
    },
    {
      title: "legal",
      items: ["Terms of Use", "API Terms of Use", "Privacy Policy"],
    },
  ];

  return (
    <div className="bg-[#032541] h-[320px]">
      <div className="max-w-[800px] flex gap-x-[46px] mx-auto py-[80px] ">
        <div className="relative flex items-center flex-col">
          <img
            className="w-[130px] h-[94px] float-right inline-block absolute right-0 top-[-36px]"
            src={logo}
            alt="logo"
          />
          <p className="text-[#01b4e4] inline-block mt-[104px] font-bold px-[20px] py-[8px] bg-[#fff] rounded-[8px]">
            Hi DungNM25!
          </p>
        </div>
        {footerItems.map((data, index) => (
          <div key={index} className="text-white">
            <p className="text-[16px] uppercase font-bold ">{data.title}</p>
            <ul className="">
              {data.items.map((item) => (
                <li className="text-[14px] cursor-pointer font-bold" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
