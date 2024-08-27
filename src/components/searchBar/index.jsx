import { GlobalContext } from "../../context";
import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const {
    jobTitle,
    setJobTitle,
    location,
    setLocation,
    date,
    setDate,
    employmentTypes,
    setEmploymentTypes,
    handleSubmit,
  } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      {/* Form submission triggers the handleSubmit function */}
      <form onSubmit={handleSubmit} className="mx-5">
        <div className="flex md:flex-row flex-col md:dark:bg-green-500 md:bg-green-800 gap-3 p-2 rounded-full  w-full ml-4 sm:ml-0">
          {/* Input field for job title search */}
          <input
            placeholder="Domain"
            className="bg-white outline-none h-10 px-2 rounded-full"
            value={jobTitle} // Controlled component, value linked to jobTitle state
            required
            onChange={(event) => setJobTitle(event.target.value)} // Updates jobTitle state on change
          />
          {/* Input field for location search */}
          <input
            placeholder="Location"
            className="bg-white outline-none h-10 px-2 rounded-full"
            value={location}
            required
            onChange={(event) => setLocation(event.target.value)}
          />
          {/* Select dropdown for filtering by date */}
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
          {/* Select dropdown for filtering by employment type */}
          <select
            onChange={(event) => setEmploymentTypes(event.target.value)}
            value={employmentTypes}
            className="bg-white outline-none h-10 px-2 rounded-full"
          >
            <option value="fulltime;parttime;intern;contractor">All</option>
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="intern">Intern</option>
            <option value="contractor">Contractor</option>
          </select>
          {/* Submit button with a search icon */}
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
  );
};

export default SearchBar;
