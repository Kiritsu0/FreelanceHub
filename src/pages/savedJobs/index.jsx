import { GlobalContext } from "../../context";
import { useContext } from "react";
import { ImFilesEmpty } from "react-icons/im";
import Jobcard from "../../components/jobsCards";

function SavedJobs() {
  const { savedJobs } = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full w-full my-5 pt-4">
      {/* Display the heading only if there are saved jobs */}
      {savedJobs.length > 0 ? (
        <h1 className="text-4xl font-bold">Saved Jobs</h1>
      ) : (
        ""
      )}

      {/* Show a message if no jobs have been saved */}
      {savedJobs.length === 0 ? (
        <div className="absolute top-1/2 font-bold mt-14 md:mt-0">
          <span className="md:text-4xl text-3xl">No Saved Jobs</span>
          <ImFilesEmpty className="mx-auto mt-5 text-4xl md:text-5xl" />
        </div>
      ) : (
        // Map over the savedJobs array to display each saved job
        savedJobs.map((job) => <Jobcard job={job} key={job.id} />)
      )}
    </div>
  );
}

export default SavedJobs;
