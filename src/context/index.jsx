import React, { createContext, useState, useEffect } from "react";

// Creating a global context for managing shared state across components
export const GlobalContext = createContext(null);

function Context({ children }) {
  // States for managing form inputs and data
  const [jobTitle, setJobTitle] = useState(""); // State for job title input
  const [location, setLocation] = useState(""); // State for location input
  const [date, setDate] = useState("Month"); // State for date filter
  const [employmentTypes, setEmploymentTypes] = useState(
    "fulltime;parttime;intern;contractor"
  ); // State for employment type filter

  // States for managing job data and UI states
  const [data, setData] = useState([]); // State for storing fetched job data
  const [loading, setLoading] = useState(false); // State for loading status
  const [heartColors, setHeartColors] = useState({}); // State for managing heart icon colors
  const [savedJobs, setSavedJobs] = useState([]); // State for storing saved jobs
  const [appliedJobs, setApplied] = useState([]); // State for storing applied jobs
  const [pageState, setPageState] = useState("freelancer"); // State for tracking the current page
  const [darkMode, setDarkMode] = useState(false); // State for toggling dark mode
  const [userName, setUserName] = useState("Guest"); // State for managing user name
  const [email, setEmail] = useState(""); // State for managing user email
  const [password, setPassword] = useState(""); // State for managing user password
  const [profileImage, setProfileImage] = useState(""); // State for managing user profile image
  const [createdJobsData, setCreatedJobsData] = useState([]); // State for storing jobs created by the user

  // Effect to initialize heart icon colors based on job data
  useEffect(() => {
    const initialHeartColors = {};
    // Merging data and createdJobsData to initialize heart colors
    [...data, ...createdJobsData].forEach((job) => {
      initialHeartColors[job.id] = ""; // Setting the initial color to empty (default state)
    });
    setHeartColors(initialHeartColors); // Updating state with initialized heart colors
  }, [data, createdJobsData]);

  // Function to handle the heart icon color toggle and save/remove jobs
  const handleHeartColor = (jobId) => {
    const currentItem =
      data.find((job) => job.id === jobId) ||
      createdJobsData.find((job) => job.id === jobId); // Find the job in data or createdJobsData

    if (!currentItem) return; // If no job found, exit the function

    setHeartColors((prevHeartColors) => {
      const newHeartColors = { ...prevHeartColors };
      // Toggle heart color between green and default
      newHeartColors[jobId] = newHeartColors[jobId] === "" ? "#22c55e" : "";

      // Update savedJobs state based on the heart color toggle
      setSavedJobs((prevSavedJobs) => {
        if (newHeartColors[jobId] === "#22c55e") {
          if (!prevSavedJobs.some((item) => item.id === jobId)) {
            return [...prevSavedJobs, currentItem]; // Add job to savedJobs if not already saved
          }
        } else {
          return prevSavedJobs.filter((item) => item.id !== jobId); // Remove job from savedJobs if unhearted
        }
        return prevSavedJobs; // Return the updated savedJobs state
      });

      return newHeartColors; // Return the updated heartColors state
    });
  };

  // Function to handle form submission and fetch job data
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault(); // Prevent default form submission behavior
    }

    // Encoding jobTitle and location inputs for URL query parameters
    const encodedJobTitle = encodeURIComponent(jobTitle);
    const encodedLocation = encodeURIComponent(location);

    // Constructing the API request URL with query parameters
    const url = `https://jobs-api14.p.rapidapi.com/list?query=${encodedJobTitle}%20Developer&location=${encodedLocation}%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=${date}&employmentTypes=${employmentTypes}%3Bparttime%3Bintern%3Bcontractor&index=0`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6e88e85944msh0569acbaf56dc49p175d57jsn775955742f76", // API key for authentication
        "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com", // API host
      },
    };

    try {
      setLoading(true); // Set loading state to true before fetching data
      const response = await fetch(url, options);
      const result = await response.json(); // Parsing the response JSON
      if (result?.jobs) {
        setData(result.jobs); // Set the fetched jobs data
        setLoading(false); // Set loading state to false after data is fetched
        setJobTitle(""); // Reset the jobTitle input
        setLocation(""); // Reset the location input
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
        {" "}
        {/* Conditional class for dark mode */}
        <div className="bg-green-500 dark:bg-green-700 min-h-screen">
          {" "}
          {/* Main container with dynamic background based on dark mode */}
          {children} {/* Render children components */}
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default Context;
