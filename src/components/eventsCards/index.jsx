import { GlobalContext } from "../context";
import { useContext } from "react";

const Jobcard = () => {
  const { data } = useContext(GlobalContext);
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full w-full pt-4">
      {data.map((job, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 h-68 max-w-[40rem] mx-3 p-2 rounded-md border-2 bg-gray-200 shadow-xl"
        >
          <div className="flex items-center gap-2">
            <img src={job.image} className="max-w-10" alt="" />
            <h1 className="self-start text-lg line-clamp-2 sm:text-2xl font-semibold">
              {job.title}
            </h1>
          </div>
          <article className="sm:text-base text-start text-sm line-clamp-3 mb-3">
            {job.description}
          </article>
          <div className="mt-2 flex justify-between">
            <h3 className="sm:text-lg text-sm font-semibold">
              Place: {job.location}
            </h3>
            <h3 className="sm:text-lg text-sm font-semibold">
              Date: {job.datePosted}
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <span className="sm:text-lg text-sm font-semibold">
              Company: {job.company}
            </span>
            <a
              href={job.jobProviders[0].url}
              target="_blank"
              className="mt-2 w-4/12 rounded-md bg-green-600 p-2 text-white hover:bg-green-700"
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
