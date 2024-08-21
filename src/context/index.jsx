import React from "react";
import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

function Context({ children }) {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("Month");
  const [employmentTypes, setEmploymentTypes] = useState(
    "fulltime;parttime;intern;contractor"
  );
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [heartColors, setHeartColors] = useState({});
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setApplied] = useState([]);
  const [volunteerPage, setVolunteerPage] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const initialHeartColors = {};
    data.forEach((job) => {
      initialHeartColors[job.id] = "";
    });
    setHeartColors(initialHeartColors);
  }, [data]);

  const handleHeartColor = (jobId) => {
    const currentItem = data.find((job) => job.id === jobId);

    setHeartColors((prevHeartColors) => {
      const newHeartColors = { ...prevHeartColors };
      newHeartColors[jobId] = newHeartColors[jobId] === "" ? "#22c55e" : "";
  
      setSavedJobs((prevSavedJobs) => {
        if (newHeartColors[jobId] === "#22c55e") {
          if (!prevSavedJobs.some((item) => item.id === jobId)) {
            return [...prevSavedJobs, currentItem];
          }
        } else {
          return prevSavedJobs.filter((item) => item.id !== jobId);
        }
        return prevSavedJobs;
      });
      return newHeartColors;
    });
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const url = `https://jobs-api14.p.rapidapi.com/list?query=${jobTitle}%20Developer&location=${location}%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6e4a90beeamsh4fc998abbee9eb8p1b895fjsn295e49ef32fe",
        "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();
      if (result?.jobs) {
        setData(result.jobs);
        setLoading(false);
        setJobTitle("");
        setLocation("");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        handleSubmit,
        jobTitle,
        setJobTitle,
        location,
        setLocation,
        date,
        setDate,
        employmentTypes,
        setEmploymentTypes,
        data,
        loading,
        setLoading,
        heartColors,
        handleHeartColor,
        savedJobs,
        appliedJobs,
        setApplied,
        volunteerPage,
        setVolunteerPage,
        darkMode,
        setDarkMode,
      }}
    >
      <div className={darkMode ? "dark" : ""}>
        <div className="bg-green-500 dark:bg-green-700 min-h-screen">
          {children}
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default Context;
