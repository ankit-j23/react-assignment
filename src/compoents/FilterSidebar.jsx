import { Funnel } from "lucide-react";
import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { AutoComplete } from "antd";

const FilterSidebar = ({ setDuration, setProfile, setLocation }) => {
  const context = useContext(MyContext);
  const { showModal, setShowModal , profileOptions , locationOptions , durationOptions } = context;
  return (
    <div className="flex flex-col items-center lg:px-6 2xl:px-8 pb-14 pt-6 gap-6  max-lg:fixed max-lg:inset-0 max-lg:min-h-screen max-lg:bg-black/65 backdrop-blur-lg max-lg:items-center max-lg:justify-center">
      <div className="flex flex-col gap-3 w-full max-lg:w-[350px]  max-lg:p-10 bg-white">
        <div className="flex gap-1 place-self-center">
          <Funnel className="text-blue-500" />
          <h2>Filters</h2>
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <label htmlFor="profilesearch" className="text-md">
            Profile
          </label>
          <AutoComplete
          id="profilesearch"
            placeholder="Choose a profile"
            style={{ height: "40px" }}
            filterOption = {true}
            options={profileOptions}
            onSelect={(value)=>{setProfile(value)}}
          />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <label htmlFor="locationsearch" className="text-md">
            Location
          </label>
          <AutoComplete
          id="locationsearch"
            placeholder="Choose a location"
            style={{ height: "40px" }}
            filterOption = {true}
            options={locationOptions}
            onSelect={(value)=>{setLocation(value)}}
          />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <label htmlFor="durationsearch" className="text-md">
            Duration
          </label>
          <AutoComplete
          id="durationsearch"
            placeholder="Choose a profile"
            style={{ height: "40px" }}
            filterOption = {true}
            options={durationOptions}
            onSelect={(value)=>{setDuration(value)}}
          />
        </div>
        <button
          onClick={() => setShowModal(!showModal)}
          className="lg:hidden p-2 bg-blue-500"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
