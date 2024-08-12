import Eventcard from "../../eventsCards";
import { GlobalContext } from "../../context";
import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";

const Volunteer = () => {
  const { jobTitle, setJobtitle, handleSubmit } = useContext(GlobalContext);
  return (
    <div className="mt-3 pb-5">
      <div className="">
        <form onSubmit={handleSubmit} className="flex items-center gap-5">
          <div className="flex bg-slate-200 gap-3 p-2 rounded-full w-1/3 ml-4 sm:ml-0">
            <IoIosSearch className="text-2xl" />
            <input
              placeholder="Search"
              className="bg-slate-200 outline-none w-full"
              value={jobTitle}
              onChange={(event) => setJobtitle(event.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Search"
            className="bg-slate-200 py-2 px-3 rounded-full cursor-pointer"
          />
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
