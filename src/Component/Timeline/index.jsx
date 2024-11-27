import React, { useEffect, useState } from "react";
import clipboard from "./../../assets/clipboard.svg";
import meetingData from "./../../constants/meetingdata.json";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
export default function Timeline() {
  const [timeMeasurement, settimeMeasurement] = useState({
    hourDifference: 0,
    minutesDifference: 0,
    timeStep: 0,
  });
  const startTime = meetingData?.start;
  const endTime = meetingData?.end;
  const startHour = dayjs(startTime).format("HH");
  const startMinute = dayjs(startTime).format("mm");

  const endHour = dayjs(endTime).format("HH");
  const endMinute = dayjs(endTime).format("mm");


  useEffect(() => {
    if (startHour === endHour) {
      const minutesDifference = endMinute - startMinute;
      const minutesSteps = Math.round(minutesDifference / 60);
      settimeMeasurement({
        ...timeMeasurement,
        minutesDifference: minutesDifference,
        timeStep: minutesSteps,
      });
    }
  }, []);
  const timeSteps = new Array(10).fill(0);

  return (
    <div className="max-w-[1280px]">
      <div className=" h-[100vh] w-[100vw] flex justify-center items-center">
        <section className="bg-timeLineBgColor h-[451px] w-[1000px] rounded-xl ">
          <div className="flex justify-between items-center p-3 w-full bg-timeLineBg rounded-lg  ">
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
          <div className="w-full h-[1px] bg-[#cecece]"></div>
          {/* Time series */}
          <div>
            {timeMeasurement.minutesDifference &&
              timeSteps.map((items, index) => {
                const minutes =
                  startMinute + (index + 1) * timeMeasurement?.timeStep;
                return (
                  <>
                    <div className="text-gray-500">{`${startHour} : ${minutes}`}</div>
                  </>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
}
