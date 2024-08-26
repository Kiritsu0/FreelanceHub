import React from "react";
import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

function Context({ children }) {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("Month");
  const [index, setIndex] = useState(0);
  const [employmentTypes, setEmploymentTypes] = useState(
    "fulltime;parttime;intern;contractor"
  );
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [heartColors, setHeartColors] = useState({});
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setApplied] = useState([]);
  const [pageState, setPageState] = useState("freelancer");
  const [darkMode, setDarkMode] = useState(false);
  const [userName, setUserName] = useState("Guest");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [createdJobsData, setCreatedJobsData] = useState([]);

  useEffect(() => {
    const initialHeartColors = {};
    [...data, ...createdJobsData].forEach((job) => {
      initialHeartColors[job.id] = "";
    });
    setHeartColors(initialHeartColors);
  }, [data, createdJobsData]);
  

  const handleHeartColor = (jobId) => {
    const currentItem = data.find((job) => job.id === jobId) || createdJobsData.find((job) => job.id === jobId);
    
    if (!currentItem) return;
  
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
  
  const handleSubmit = async (event, pageNumber=index) => {
    if (event) {
      event.preventDefault();
    }

    const encodedJobTitle = encodeURIComponent(jobTitle);
    const encodedLocation = encodeURIComponent(location);

    const url = `https://jobs-api14.p.rapidapi.com/list?query=${encodedJobTitle}%20Developer&location=${encodedLocation}%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=${date}&employmentTypes=${employmentTypes}%3Bparttime%3Bintern%3Bcontractor&index=${pageNumber}`;
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
        index,
        setIndex,
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
        pageState,
        setPageState,
        darkMode,
        setDarkMode,
        userName,
        setUserName,
        email,
        setEmail,
        password,
        setPassword,
        profileImage,
        setProfileImage,
        createdJobsData,
        setCreatedJobsData,
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
