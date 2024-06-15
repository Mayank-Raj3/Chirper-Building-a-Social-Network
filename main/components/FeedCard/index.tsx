import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiHeart, BiBookmark } from "react-icons/bi";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-b-0 border-l-0 border-r-0 border-slate-600">
      <div className="grid grid-cols-12  p-4 hover:bg-slate-900 cursor-pointer  transition-all">
        <div className="col-span-1">
          <Image
            src={"https://avatars.githubusercontent.com/u/75212485?v=4"}
            alt="user-profile"
            height={50}
            width={50}
            className=" rounded-full"
          />
        </div>
        <div className="col-span-11  pl-3 gap-3">
          <h5>Mayank Raj</h5>
          <p>
            This is normal conversation of any middle aged aggressive
            Delhi/Noida Uncles and Auntys who send 20 “Good Morning” messages in
            society and relative WhatsApp groups. #kalesh
          </p>
          <div className="flex justify-between mt-5  text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
              <BiHeart />
            </div>
            <div>
              <BiBookmark />
            </div>
            <div>
              <MdOutlineFileUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
