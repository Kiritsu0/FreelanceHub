import { GlobalContext } from "../../context";
import { useContext } from "react";
import { ImFilesEmpty } from "react-icons/im";
import { IoLocation } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Jobcard = () => {
  const { data, heartColors, handleHeartColor, setApplied } = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full w-full pt-4">
      {data.length === 0 ? (
        <div className="absolute top-1/2 font-bold mt-14 md:mt-0">
          <span className="md:text-4xl text-3xl">
            Not Found, Please Search Again!
          </span>
          <ImFilesEmpty className="mx-auto mt-5 text-4xl md:text-5xl" />
        </div>
      ) : null}
      {data.map((job, index) => (
        <div
          key={job.id}
          className="flex flex-col gap-3 h-68 max-w-[40rem] mx-3 p-2 rounded-md dark:bg-slate-900 bg-white dark:hover:bg-slate-700 hover:bg-gray-200 shadow-xl"
        >
          <div className="flex items-center justify-between gap-2">
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
              className="self-start text-green-500 hover:underline text-lg line-clamp-2 sm:text-2xl font-semibold"
            >
              {job.title}
            </Link>
            <FaHeart
              onClick={() => handleHeartColor(job.id)}
              style={{ color: heartColors[job.id] || "" }}
              className="cursor-pointer flex-shrink-0 dark:text-white"
            />
          </div>
          <article className="sm:text-base text-start dark:text-white text-sm line-clamp-3 mb-3">
            {job.description}
          </article>
          <div className="mt-2 flex justify-between">
            <h3 className="sm:text-lg flex items-center text-gray-500 gap-2 text-sm font-medium">
              <IoLocation className="text-green-500" /> {job.location}
            </h3>
            <h3 className="text-sm text-gray-500">Posted {job.datePosted}</h3>
          </div>
          <div className="flex justify-between items-center">
            <span className="sm:text-lg flex dark:text-white gap-2 items-center text-sm font-semibold">
              <img src={job.image} className="max-w-10 rounded-full" alt="" />
              {job.company}
            </span>
            <a
              href={job.jobProviders[0].url}
              target="_blank"
              className="mt-2 w-4/12 rounded-md text-center bg-green-600 p-2 text-white hover:bg-green-700"
              onClick={() => setApplied((previous) => { 
                if (!previous.includes(job)) {
                  return [...previous, job]
                } else {
                  return previous;
                }
              })}
            >
              <button>Apply</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobcard;
