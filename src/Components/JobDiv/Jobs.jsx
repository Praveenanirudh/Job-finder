import React from "react";
import { BiTimeFive } from "react-icons/bi";

const Jobs = ({ data }) => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {item.job}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> {item.time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{item.location}</h6>
            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
              {item.description}
            </p>
            <div className=" comapany flext items-center gap-2">
              <img src={item.logo} alt={item.company} className="w-[10%]" />
              <span className="text-[14px] py-[1rem] block group-hover:text-white">
                {item.company}
              </span>
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
