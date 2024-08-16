import Jobcard from "../../eventsCards";
import { GlobalContext } from "../../context";
import { useContext, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { Grid } from "react-loader-spinner";
const Volunteer = () => {
  const {
    jobTitle,
    setJobTitle,
    location,
    setLocation,
    date,
    setDate,
    employmentTypes,
    setEmploymentTypes,
    loading,
    handleSubmit,
  } = useContext(GlobalContext);

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div className="mt-3 pb-5">
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="mx-5">
          <div className="flex md:flex-row flex-col md:bg-green-800 gap-3 p-2 rounded-full  w-full ml-4 sm:ml-0">
            <input
              placeholder="Domain"
              className="bg-white outline-none h-10 px-2 rounded-full"
              value={jobTitle}
              required
              onChange={(event) => setJobTitle(event.target.value)}
            />
            <input
              placeholder="Location"
              className="bg-white outline-none h-10 px-2 rounded-full"
              value={location}
              required
              onChange={(event) => setLocation(event.target.value)}
            />
            <select
              onChange={(event) => setDate(event.target.value)}
              value={date}
              className="bg-white outline-none h-10 px-2 rounded-full"
            >
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="3days">3 Days</option>
              <option value="today">Today</option>
            </select>
            <select
              onChange={(event) => setEmploymentTypes(event.target.value)}
              value={employmentTypes}
              className="bg-white outline-none h-10 px-2 rounded-full"
            >
              <option value="fulltime;parttime;intern;contractor">All</option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="intern">intern</option>
              <option value="contractor">Contractor</option>
            </select>
            <button
              type="submit"
              className="bg-slate-200 flex items-center justify-center gap-2 py-2 px-3 rounded-full cursor-pointer"
            >
              <IoIosSearch className="text-xl" />
              Search
            </button>
          </div>
        </form>
      </div>
      {loading ? (
        <div className="absolute top-1/2 transition loader-centered">
          <Grid
            visible={true}
            height="80"
            width="80"
            color="black"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </div>
      ) : (
        <Jobcard />
      )}
    </div>
  );
};

export default Volunteer;
