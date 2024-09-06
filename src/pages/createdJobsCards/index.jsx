import { GlobalContext } from "../../context";
import { useContext } from "react";
import { ImFilesEmpty } from "react-icons/im";
import Jobcard from "../../components/jobsCards"
function CreatedJobsCards() {
  // Extract necessary values and functions from GlobalContext
  const { createdJobsData } =
    useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full w-full pt-4">
      {createdJobsData.length === 0 ? (
        <div className="absolute top-1/2 font-bold mt-14 md:mt-0 text-center">
          <span className="md:text-4xl text-3xl">No Created Jobs Cards!</span>
          <ImFilesEmpty className="mx-auto mt-5 text-4xl md:text-5xl" />
        </div>
      ) : (
        // Map over createdJobsData to render each job card
        createdJobsData.map((job) => <Jobcard job={job} key={job.id} />)
      )}
    </div>
  );
}

export default CreatedJobsCards;
