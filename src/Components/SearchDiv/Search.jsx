import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";
import { jobs } from "../Jobs";
import Jobs from "../JobDiv/Jobs";

const Search = () => {
  const [job, setJob] = useState([]);

  const Search = (data) => {
    return data.filter(
      (items) =>
        items.job.toLowerCase().includes(job) ||
        items.company.toLowerCase().includes(job) ||
        items.location.toLowerCase().includes(job)
    );
  };

  return (
    <>
      <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
        Search
        <form action="">
          <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
            <div className="flex gap-2 items-center">
              <BiSearchAlt className="text-[25px] icon" />
              <input
                type="text "
                className=" bg-transparent text-blue-500 focus:outline-none w-[100%] "
                placeholder="Search Job Here"
                onClick={(e) => setJob(e.target.value)}
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>
            <div className="flex gap-2 items-center">
              <BsBuilding className="text-[25px] icon" />
              <input
                type="text "
                className=" bg-transparent text-blue-500 focus:outline-none w-[100%] "
                placeholder="Search By Company"
                onClick={(e) => setJob(e.target.value)}
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>
            <div className="flex gap-2 items-center">
              <HiOutlineLocationMarker className="text-[25px] icon" />
              <input
                type="text "
                className=" bg-transparent text-blue-500 focus:outline-none w-[100%] "
                placeholder="Search By Location"
                onClick={(e) => setJob(e.target.value)}
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>
          </div>
        </form>
        <div className="secDiv flex items-center gap-10 justify-center">
          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Sort by:
            </label>
            <select
              name=""
              id="relevance"
              className=" bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts with</option>
              <option value="">Conatins</option>
            </select>
          </div>
          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="Type" className="text-[#808080] font-semibold">
              Type:
            </label>
            <select
              name=""
              id="type"
              className=" bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Full-time</option>
              <option value="">Remote</option>
              <option value="">Part-time</option>
              <option value="">Internship</option>
            </select>
          </div>

          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="Level" className="text-[#808080] font-semibold">
              Sort by:
            </label>
            <select
              name=""
              id="level"
              className=" bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Senior</option>
              <option value="">Beginner</option>
              <option value="">Intermediate</option>
              <option value="">Advocate</option>
            </select>
          </div>
          <span className="text-[#a1a1a1]">clear All</span>
        </div>
      </div>
      <Jobs data={Search(jobs)} />
    </>
  );
};

export default Search;
