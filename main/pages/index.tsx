import React from "react";
import { Inter } from "next/font/google";
import { GiNestBirds } from "react-icons/gi";
import { HiOutlineUsers } from "react-icons/hi";
import {
  BiSolidHomeCircle,
  BiSearch,
  BiSolidBell,
  BiSolidMessageSquareDetail,
  BiBookmarkAlt,
  BiSolidUser,
} from "react-icons/bi";
import FeedCard from "@/components/FeedCard";

const inter = Inter({ subsets: ["latin"] });
interface chirperSideBar {
  title: string;
  icon: React.ReactNode;
}
const sideBarMenuItems: chirperSideBar[] = [
  {
    title: "Home",
    icon: <BiSolidHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiSearch />,
  },
  {
    title: "Notifications",
    icon: <BiSolidBell />,
  },
  {
    title: "Messages",
    icon: <BiSolidMessageSquareDetail />,
  },
  {
    title: "Bookmarks",
    icon: <BiBookmarkAlt />,
  },
  {
    title: "Communites",
    icon: <HiOutlineUsers />,
  },
  {
    title: "Profile",
    icon: <BiSolidUser />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-8">
          <div className="text-4xl h-fit w-fit hover:bg-slate-600 rounded-full p-1 cursor-pointer transition-all ">
            <GiNestBirds />
          </div>
          <div className="mt-4 text-2xl  pr-4">
            <ul>
              {sideBarMenuItems.map((items) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-slate-600 rounded-full cursor-pointer transition-all px-5 py-2  w-fit mt-2"
                  key={items.title}
                >
                  <span>{items.icon}</span>
                  <span>{items.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className=" bg-[#1d9bf0] font-semibold text-lg p-4 rounded-full w-full hover:bg-[#3380b4] transition-all">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] border-gray-500">
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
