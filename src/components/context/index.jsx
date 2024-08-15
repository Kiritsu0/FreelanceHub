import React from "react";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function Context({ children }) {
  const [jobTitle, setJobtitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("Month");
  const [employmentTypes, setEmploymentTypes] = useState("fulltime;parttime;intern;contractor");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://jobs-api14.p.rapidapi.com/list?query=${jobTitle}%20Developer&location=${location}%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6d3ec5f3famsh2c0106939d1dc57p108539jsnc8a76a828650",
        "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        handleSubmit,
        jobTitle,
        setJobtitle,
        location,
        setLocation,
        date,
        setDate,
        employmentTypes,
        setEmploymentTypes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
