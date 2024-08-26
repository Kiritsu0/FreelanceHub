import { useLocation } from "react-router-dom";

function JobInfo() {
  const location = useLocation();
  const {
    title,
    description,
    region,
    date,
    image,
    company,
    applyLink,
    employmentType,
    salary,
  } = location.state;

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white dark:bg-slate-900 max-w-4xl m-5 rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white">
              {title}
            </h1>
            <div className="flex items-center mt-2">
              <img
                src={image}
                alt={company}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
                  {company}
                </h2>
                <p className="text-gray-600">{region}</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600 dark:text-white text-sm">Posted {date || "N/A"}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Job Type</h3>
            <p className="text-green-500">{employmentType}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Salary</h3>
            <p className="text-green-500">{salary || "N/A"}</p>
          </div>
        </div>

        <div className="mb-6 rounded-md p-5">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-green-500">
            Job Description
          </h3>
          <p className="text-gray-600 dark:text-white mt-2 text-start leading-7">
            {description}
          </p>
        </div>

        <div className="text-center">
          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white text-lg font-semibold py-2 px-6 rounded-md hover:bg-green-700 transition duration-200"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobInfo;
