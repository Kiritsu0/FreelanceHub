import { GlobalContext } from "../../context";
import { useContext } from "react";
import { ImFilesEmpty } from "react-icons/im";
import Jobcard from "../../components/jobsCards";

function AppliedJobs() {
  // Extract appliedJobs, heartColors, and handleHeartColor from the GlobalContext
  const { appliedJobs } =
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
        appliedJobs.map((job) => <Jobcard job={job} key={job.id} />)
      )}
    </div>
  );
}

export default AppliedJobs;
