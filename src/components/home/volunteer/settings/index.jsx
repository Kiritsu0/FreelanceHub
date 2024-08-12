"use client"

import Asettings from "@/components/vol_org_asetting";
import { useSession } from "next-auth/react";
import { useState } from "react"

// Icons
import { BiEdit } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Settings = () => {
// Variables
  const { data: session } = useSession();
  const [location, setLocation] = useState("Location")
  const [domainName, setDomainName] = useState("Add field name")
  const [description, setDescription] = useState("Description")
  const [skills, setSkills] = useState([])

// Functions


  // Handle Submition
  const handleSubmition = (event, inputValue, inputsource) => {
    event.preventDefault(); // Prevents the default form submission(default behavior sends a request to the server that reloads the page)
    if (inputValue) {
      if (inputsource === "location") {
        setLocation(inputValue);
        event.target.reset()
      }

      else if (inputsource === "description") {
        setDescription(inputValue);
        event.target.reset()
      }

      else if (inputsource === "skills") {
        setSkills(previous => [...previous,
          (
            <span key={previous.length} className="bg-white rounded-md inline-flex items-center px-2 py-1 gap-3 mr-4 mt-5">
              {inputValue}
              <RxCross2 
                className="hover:bg-slate-200 cursor-pointer rounded-full"
                onClick={() => handleSkillsDelete(previous.length)}
              />
            </span>
          )]);
          event.target.reset()
      }

      else if (inputsource === "domainname") {
        setDomainName(inputValue);
        event.target.reset()
      }
    }
  }

  // Delete skills
  const handleSkillsDelete = (index) => {
    setSkills((prevSkills) => {
      const newSkills = [...prevSkills];
      newSkills[index] = "";
      return newSkills;
    });
  }

  return (
    <div className="flex w-full h-full justify-center bg-green-500 mt-5 pt-5">
      <div className="w-1/2 pb-10">
        <div className="flex items-center gap-2 mb-5">
          <MdSettings className="text-3xl"/>
            <h1 className="text-3xl font-semibold">Settings</h1>
        </div>

        <div className="ml-7">
          {/* Account */}
          <h1 className="text-3xl mb-3 font-medium">Account:</h1>
          <Asettings 
            name={session?.user?.name} 
            email={session?.user?.email}
          />

          {/* Profile Settings */}
          <h1 className="text-3xl mb-3 font-medium">Profile Settings:</h1>
          <div className="ml-7">
            {/* Location */}
            <form onSubmit={(e) => handleSubmition(e, e.target.elements["Input"].value, "location")} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="location">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Location</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1">
                <input
                  id="location"
                  name="Input"
                  aria-label="Location"
                  placeholder={location}
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                />
                <button 
                  type="submit" 
                  className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
                  Save
                </button>
              </div>
            </form>

            <hr className="my-8"/>

            {/* Domain name */}
            <form onSubmit={(e) => handleSubmition(e, e.target.elements["Input"].value, "domainname")} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="domain_name">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Domain Name</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1">
                <input
                  id="domain_name"
                  name="Input"
                  aria-label="Domain Name"
                  placeholder={domainName}
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                />
                <button 
                  type="submit" 
                  className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
                  Save
                </button>
              </div>
            </form>

            <hr className="my-8"/>

            {/* Description */}
            <form onSubmit={(e) => handleSubmition(e, e.target.elements["Input"].value, "description")} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="description">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Description</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1 items-center">
                <textarea
                  id="description"
                  name="Input"
                  aria-label="Description"
                  placeholder={description}
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                />
                <button 
                  type="submit" 
                  className="bg-green-600 rounded-md py-1 px-2 h-7 font-semibold hover:bg-green-700">
                  Save
                </button>
              </div>
            </form>
            <hr className="my-8"/>

            {/* Skills */}
            <form onSubmit={(e) => handleSubmition(e, e.target.elements["Input"].value, "skills")} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="skills">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Skills</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1">
                <input
                  id="skills"
                  name="Input"
                  aria-label="Skills"
                  placeholder="Add Skills"
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                />
                <button 
                  type="submit"
                  className="bg-green-500 rounded-full font-semibold">
                  <IoIosAddCircle className="text-4xl text-green-700 hover:opacity-80"/>
                </button>
              </div>
            </form>
            <div className="ml-7">
              {skills}
            </div>
            <hr className="my-8"/>

            {/* Not finished, Will continue later */}
            <form onSubmit={""} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="join_event">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Joined Events</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1">
                <select
                  id="join_event"
                  name="Input"
                  aria-label="Joined Events"
                  type=""
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                >
                  <option>Work 1</option>
                  <option>Work 2</option>
                  <option>Work 3</option>
                  <option selected>Add work</option>
                </select>
                <button 
                  type="submit"
                  className="bg-green-500 rounded-full font-semibold">
                  <IoIosAddCircle className="text-4xl text-green-700 hover:opacity-80"/>
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Settings