import MyContext from "./MyContext";
import { useEffect } from "react";

import React, { useState } from "react";

const MyStates = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [profile, setProfile] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [jobArrays, setJobArrays] = useState([]);

  const profileOptions = [
    {
      label: "None",
      value: "",
    },
    {
      label: "Data Science Intern",
      value: "Data Science Intern",
    },
    {
      label: "Product Management Intern",
      value: "Product Management Intern",
    },
    {
      label: "Brand Management Intern",
      value: "Brand Management Intern",
    },
    {
      label: "Business Analytics Intern",
      value: "Business Analytics Intern",
    },
    {
      label: "Android App Development Intern",
      value: "Android App Development Intern",
    },
  ];

  const locationOptions = [
    {
      label: "None",
      value: "",
    },
    {
      label: "Work from home",
      value: "Work from home",
    },
    {
      label: "Delhi",
      value: "Delhi",
    },
    {
      label: "Gurgaon",
      value: "Gurgaon",
    },
    {
      label: "Banga",
      value: "Banga",
    },
    {
      label: "Tarn Taran",
      value: "Tarn Taran",
    },
    {
      label: "Munnar",
      value: "Munnar",
    },
  ];

  const durationOptions = [
    {
      label: "None",
      value: "",
    },
    {
      label: "1 Months",
      value: "1 Months",
    },
    {
      label: "2 Months",
      value: "2 Months",
    },
    {
      label: "3 Months",
      value: "3 Months",
    },
    {
      label: "4 Months",
      value: "4 Months",
    },
    {
      label: "5 Months",
      value: "5 Months",
    },
    {
      label: "6 Months",
      value: "6 Months",
    },
  ];

  const items = [
    {
      key: "1",
      label:
        "Q. How do i search for internships in my preffered category/profile ?",
      children: (
        <p>
          Click <span className="text-blue-600">here</span> if you are looking
          for internships. Next, update your preferred profile or location on
          the web page and use relevant filters to find internships as per your
          preference.
        </p>
      ),
      showArrow: false,
    },
    {
      key: "2",
      label: "Q. How can i apply for internships on internshala ?",
      children: (
        <p>
          You can apply for an internship on Internshala using the following
          steps...
        </p>
      ),
      showArrow: false,
    },
    {
      key: "3",
      label: "Q. Do i need to pay to apply for an internship on internshala ?",
      children: (
        <p>
          Absolutely not! Internshala is a free platform. You don't have to pay
          anything to apply for internships on Internshala.
        </p>
      ),
      showArrow: false,
    },
    {
      key: "4",
      label: "Q. What all internships are avaliable on internshala ?",
      children: (
        <p>
          You can find 45,000+ internships, work from home internships and part
          time internships in your preferred location or profile on Internshala.
        </p>
      ),
      showArrow: false,
    },
    {
      key: "5",
      label: "Q. Are there any courses that offere a placement guarantee ?",
      children: (
        <p>
          You can check out the following courses for a placement guarantee...
        </p>
      ),
      showArrow: false,
    },
    {
      key: "6",
      label: "Q. How do i get certified online ?",
      children: (
        <p>
          Internshala offers a number of certified courses to improve your skill
          set. Check them out here...
        </p>
      ),
      showArrow: false,
    },
  ];

  return (
    <MyContext.Provider
      value={{
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
        profileOptions,
        locationOptions,
        durationOptions,
        items,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyStates;
