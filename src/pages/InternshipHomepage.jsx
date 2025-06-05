import React, { useEffect, useState, useContext, useRef } from "react";
import InternshipCard from "../compoents/InternshipCard";
import FilterSidebar from "../compoents/FilterSidebar";
import { Funnel } from "lucide-react";
import MyContext from "../context/MyContext";

const InternshipHomepage = () => {
  const context = useContext(MyContext);
  const {
    setShowModal,
    showModal,
    profile,
    setProfile,
    duration,
    setDuration,
    location,
    setLocation,
    jobArrays,
    setJobArrays,
  } = context;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    let url = "https://internshala.com/hiring/search";
    let data = await fetch(url);
    let parsedData = await data.json();
    const result = Object.values(parsedData.internships_meta);
    setJobArrays(result);
  };

  const filteredJobData = jobArrays.filter((job) => {
    const profileFiltered = job.title
      .toLowerCase()
      .includes(profile.toLowerCase());
    const durationFiltered = job.duration
      .toLowerCase()
      .includes(duration.toLowerCase());
    const locationFiltered = (
      job.locations?.[0]?.locationName || "Work From Home"
    )
      .toLowerCase()
      .includes(location.toLowerCase());
    return profileFiltered && durationFiltered && locationFiltered;
  });

  return (
    <div className=" w-[96%] mx-auto my-8 min-[681px]:px-5 md:px-0">
      <div className="flex flex-col md:w-10/12 max-lg:max-w-[645px] max-2xl:max-w-[1024px] lg:w-[95%] 2xl:w-9/12 mx-auto">
        <div
          className="flex items-center gap-2 py-1 px-3 rounded-2xl border border-black/60 place-self-start lg:hidden"
          onClick={() => setShowModal(!showModal)}
        >
          <Funnel className="text-blue-500 size-4" />
          <span className=" max-sm:text-sm">Filters</span>
        </div>
        <p className="text-black/60 text-md font-semibold py-2 pl-1 max-lg:hidden">
          Home &gt; <span className="text-black">Internships</span>
        </p>
        <div className="flex flex-col items-center gap-3 py-2 w-[100%] lg:w-[67%] place-self-end">
          <h2 className=" text-sm sm:text-md lg:text-lg font-semibold">
            400 Total Internships
          </h2>
          <p className="text-black/60 text-xs sm:text-sm lg:text-md font-semibold">
            Latest Summer Internships in India
          </p>
        </div>
        <div className=" flex gap-6 2xl:gap-12">
          <div
            className={`w-[33%] 2xl:w-[35%] max-lg:${
              !showModal ? "hidden" : ""
            }  shadow-xl rounded-md self-start lg:sticky lg:top-20`}

          >
            <FilterSidebar
              setProfile={setProfile}
              setDuration={setDuration}
              setLocation={setLocation}
            />
          </div>
          <div className="flex flex-col gap-10 w-full lg:w-[67%]">
            {filteredJobData.length > 0 ? (
              filteredJobData.map((elem) => {
                return (
                  <InternshipCard
                    key={elem.id}
                    title={elem.title}
                    company_name={elem.company_name}
                    stipend={elem.stipend.salary}
                    posted_by={elem.posted_by_label}
                    duration={elem.duration}
                    location={
                      elem.locations?.[0]?.locationName || "Work from home"
                    }
                  />
                );
              })
            ) : (
              <div className="text-center pt-20 2xl:pt-40">Sorry , No internhips to show.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipHomepage;
