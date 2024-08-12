import React from "react";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function Context({ children }) {
  const [jobTitle, setJobtitle] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = async (event) => {
    console.log("start");
    event.preventDefault();
    const url = `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${jobTitle}%20Developer&location=New-York%2C%20NY%2C%20USA&radius=100`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6e88e85944msh0569acbaf56dc49p175d57jsn775955742f76",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      console.log("Fetching data...");
      const response = await fetch(url, options);
      console.log("Response received");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      console.log("Finally worked");
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <GlobalContext.Provider
      value={[handleSubmit, jobTitle, setJobtitle, location, setLocation]}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
