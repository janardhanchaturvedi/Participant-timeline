import React from "react";
import clipboard from "./../../assets/clipboard.svg";
export default function Timeline() {
  return (
    <div className="max-w-[1280px]">
      <div className=" h-[100vh] w-[100vw] flex justify-center items-center">
        <section className="bg-timeLineBgColor h-[451px] w-[1000px] rounded-xl ">
          <div className="flex justify-between items-center p-3 w-full bg-timeLineBg rounded-lg">
            <div className="flex justify-center items-center gap-2">
              <span className="">
                <img src={clipboard} alt="clipboard" />
              </span>
              <div className="text-base text-white">
                Participants wise Session Timeline
              </div>
            </div>
            <div className="text-white text-base">
              Show participant timeline
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
