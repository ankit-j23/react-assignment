import React from "react";
import templogo from "../assets/temp-logo.png";
import {
  Banknote,
  House,
  MapPin,
  Calendar,
  History,
  Zap,
  BracesIcon,
  Briefcase,
  Dot,
  Info,
} from "lucide-react";

const InternshipCard = ({title , company_name , stipend , posted_by , duration , location }) => {

  return (
    <div className="w-full flex gap-2 justify-between p-4 shadow-xl rounded-xl">
      <div className="flex flex-col gap-2 sm:gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-sm sm:text-md  font-semibold">
            {title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-xs lg:text-md text-black/60">
              {company_name}
            </span>
            <div className="py-0.5 sm:py-1 px-2 text-[0.58rem] 2xl:text-[0.65rem] border border-blue-500 text-blue-500 rounded-2xl">
              Acitvely Hiring
            </div>
          </div>
        </div>
        <div className="flex max-sm:flex-col gap-2 sm:gap-5 text-black/85 text-xs lg:text-sm">
          <div className="flex items-center gap-2 ">
            <House className="text-black/60 size-4" />
            <MapPin className="hidden text-black/60" />
            <span>{location}</span>
            <Info className="text-black/60 size-4" />
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 items-center">
              <Banknote className="text-black/60 size-4" />
              <span>{stipend}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Calendar className="text-black/60 size-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
        <div className="flex max-[645px]:flex-col sm:items-center gap-2">
          <div className="flex items-center gap-2 bg-[#f1ffe5] py-1 px-3 rounded-2xl max-sm:self-start text-xs lg:text-md ">
            <History className="text-[#48b726] size-4" />
            <span className="text-[#48b726]">{posted_by}</span>
          </div>
          <div className="hidden">
            <Dot />
            <span>Part time</span>
          </div>
          <div className="flex gap-2 max-[557px]:flex-col">
            <div className="flex items-center bg-[#f8f8f8] gap-2 px-3 py-1 rounded-2xl max-sm:self-start text-xs lg:text-md ">
              <div className="flex items-center justify-center bg-[#ffc107] rounded-full w-4 h-4">
                <Zap className="text-white size-4" />
              </div>
              <span>Be an early applicant</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-2 px-3 py-1 rounded-2xl bg-[#fff8e5] text-[#9f5e0d] text-xs lg:text-md ">
              <Briefcase className="size-4" />
              <span>Job offer upto &#8377; 5.5LPA post internship</span>
            </div>
          </div>
        </div>
      </div>
      <div className="company-logo min-w-7 w-12">
        <img className="" src={templogo} alt="" />
      </div>
    </div>
  );
};

export default InternshipCard;
