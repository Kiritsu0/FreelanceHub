import Eventcard from "../../eventsCards";
import { GlobalContext } from "../../context";
import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";

const Volunteer = () => {
  const {
    jobTitle,
    setJobtitle,
    location,
    setLocation,
    date,
    setDate,
    employmentTypes,
    setEmploymentTypes,
    handleSubmit,
  } = useContext(GlobalContext);
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
              onChange={(event) => setJobtitle(event.target.value)}
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
      <Eventcard
        image="https://images.unsplash.com/photo-1590930180621-fc7027a21559?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Need Some Volunteer To Help Us Plant Some Trees"
        desc="Joining our tree planting initiative is easy and impactful. By becoming part of our community, you'll have the opportunity to make a real difference in the world. Together, we can create a greener, healthier planet for future generations to enjoy."
      />
      <Eventcard
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sdW50ZWVyfGVufDB8fDB8fHww"
        title="Need Some Volunteer To Help Us Plant Some Trees"
        desc="if you wanna help us to plant more tree you can join here, help will be highly appreciatable"
      />
    </div>
  );
};

export default Volunteer;
