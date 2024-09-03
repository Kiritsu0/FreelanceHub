import { GlobalContext } from "../../context"; // Importing the global context to access shared state and functions
import { useContext } from "react"; // Importing useContext to use the GlobalContext
import { ImFilesEmpty } from "react-icons/im";
import { IoLocation } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Jobcard = () => {
  // Destructuring the necessary data and functions from GlobalContext
  const {
    data,
    heartColors, // Object to store the color of heart icons for each job
    handleHeartColor, // Function to handle heart color toggling
    setApplied,
  } = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
      {/* If there is no job data, display a message and icon */}
      {data.length === 0 ? (
        <div className="flex flex-col justify-center h-96 font-bold mt-14 md:mt-0 text-center">
          <span className="md:text-4xl text-3xl">
            Not Found, Please Search Again!
          </span>
          <ImFilesEmpty className="mx-auto mt-5 text-4xl md:text-5xl" />
        </div>
      ) : (
        // Map through the job data and create a card for each job
        data.map((job) => (
          <div
            key={job.id} // Unique key for each job card
            className="flex flex-col gap-3 h-68 min-w-[20rem] max-w-[40rem] mx-3 p-2 rounded-md dark:bg-slate-900 bg-white dark:hover:bg-slate-700 hover:bg-gray-200 shadow-xl"
          >
            <div className="flex items-center justify-between gap-2">
              {/* Link to the job detail page, passing job data as state */}
              <Link
                to="/freelancer/jobInfo"
                state={{
                  title: job.title,
                  description: job.description,
                  region: job.location,
                  date: job.datePosted,
                  image: job.image,
                  company: job.company,
                  applyLink: job.jobProviders[0].url,
                  employmentType: job.employmentType,
                  salary: job.salaryRange,
                }}
                className="self-start text-blue-500 hover:underline text-lg line-clamp-2 sm:text-2xl font-semibold"
              >
                {job.title}
              </Link>
              {/* Heart icon for marking a job as favorite */}
              <FaHeart
                onClick={() => handleHeartColor(job.id)} // Toggle heart color on click
                style={{ color: heartColors[job.id] || "" }} // Set heart color based on job ID
                className="cursor-pointer flex-shrink-0 dark:text-white"
              />
            </div>
            {/* Job description with a maximum of three lines */}
            <article className="sm:text-base text-start dark:text-white text-sm line-clamp-3 mb-3">
              {job.description}
            </article>
            <div className="mt-2 flex justify-between">
              {/* Job location with an icon */}
              <h3 className="sm:text-lg flex items-center text-gray-500 gap-2 text-sm font-medium">
                <IoLocation className="text-blue-500" /> {job.location}
              </h3>
              {/* Job posted date */}
              <h3 className="text-sm text-gray-500">
                Posted {job.datePosted || "N/A"}
              </h3>
            </div>
            <div className="flex justify-between items-center">
              {/* Company name and logo */}
              <span className="sm:text-lg flex dark:text-white gap-2 items-center text-sm font-semibold">
                <img src={job.image} className="max-w-10 rounded-full" alt="" />
                {job.company}
              </span>
              {/* Apply button with a link to the job provider's site */}
              <a
                href={job.jobProviders[0].url}
                target="_blank"
                className="mt-2 w-4/12 rounded-md text-center bg-blue-600 p-2 text-white hover:bg-blue-700"
                onClick={() =>
                  setApplied((previous) =>
                    // Add job to the list of applied jobs if not already applied
                    !previous.includes(job) ? [...previous, job] : previous
                  )
                }
              >
                <button>Apply</button>
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Jobcard;
