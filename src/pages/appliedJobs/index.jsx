import { GlobalContext } from "../../context";
import { useContext } from "react";
import { IoLocation } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ImFilesEmpty } from "react-icons/im";

function AppliedJobs() {
  // Extract appliedJobs, heartColors, and handleHeartColor from the GlobalContext
  const { appliedJobs, heartColors, handleHeartColor } =
    useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full w-full my-5 pt-4">
      {/* Display the heading only if there are applied jobs */}
      {appliedJobs.length > 0 ? (
        <h1 className="text-4xl font-bold">Applied Jobs</h1>
      ) : (
        ""
      )}

      {/* Show a message if no jobs have been applied to */}
      {appliedJobs.length === 0 ? (
        <div className="absolute top-1/2 font-bold mt-14 md:mt-0">
          <span className="md:text-4xl text-3xl">No Applied Jobs</span>
          <ImFilesEmpty className="mx-auto mt-5 text-4xl md:text-5xl" />
        </div>
      ) : (
        appliedJobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col gap-3 h-68 min-w-[20rem] max-w-[40rem] mx-3 p-2 rounded-md dark:bg-slate-900 bg-white dark:hover:bg-slate-700 hover:bg-gray-200 shadow-xl"
          >
            <div className="flex items-center justify-between gap-2">
              {/* Link to job details page with job information passed as state */}
              <Link
                to="/jobInfo"
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

              {/* Heart icon for saving/un-saving jobs */}
              <FaHeart
                onClick={() => handleHeartColor(job.id)}
                style={{ color: heartColors[job.id] || "" }}
                className="cursor-pointer flex-shrink-0 dark:text-white"
              />
            </div>

            {/* Display a brief description of the job */}
            <article className="sm:text-base text-start text-sm line-clamp-3 mb-3 dark:text-white">
              {job.description}
            </article>

            <div className="mt-2 flex justify-between">
              {/* Job location */}
              <h3 className="sm:text-lg flex items-center text-gray-500 gap-2 text-sm font-medium">
                <IoLocation className="text-blue-500" /> {job.location}
              </h3>

              {/* Job posted date */}
              <h3 className="text-sm text-gray-500">Posted {job.datePosted || "N/A"}</h3>
            </div>

            <div className="flex justify-between items-center">
              {/* Display company information with the company logo */}
              <span className="sm:text-lg flex gap-2 items-center text-sm font-semibold dark:text-white">
                <img src={job.image} className="max-w-10 rounded-full" alt="" />
                {job.company}
              </span>

              {/* Link to apply for the job */}
              <a
                href={job.jobProviders[0].url}
                target="_blank"
                className="mt-2 w-4/12 rounded-md text-center bg-blue-600 p-2 text-white hover:bg-blue-700"
              >
                <button>Apply</button>
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AppliedJobs;
