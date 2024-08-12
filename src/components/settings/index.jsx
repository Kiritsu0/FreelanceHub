import { BiEdit } from "react-icons/bi";

const Asettings = ({ name, email }) => {
  return (
    <div className="ml-7">
      {/* Name */}
      <form className="flex flex-col gap-1 ml-5">
        <label className="cursor-pointer" htmlFor="name">
          <div className="flex justify-between mb-3 items-center">
            <h2 className="text-2xl font-extralight">Username</h2>
            <BiEdit className="text-2xl"/>
          </div>
        </label>
        <div className="flex gap-1">
          <input 
            id="name"
            name="Input"
            aria-label="Name"
            placeholder={name} 
            className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24"
          />
          <button 
            className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
            Save
          </button>
        </div>
      </form>

      <hr className="my-8"/>

      {/* Email */}
      <form className="flex flex-col gap-1 ml-5">
        <label className="cursor-pointer" htmlFor="email">
          <div className="flex justify-between mb-3 items-center">
            <h2 className="text-2xl font-extralight">Email</h2>
            <BiEdit className="text-2xl"/>
          </div>
        </label>
        <div className="flex gap-1">
          <input 
            id="email"
            name="Input"
            aria-label="Email"
            placeholder={email} 
            className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24"
          />
          <button 
            className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
            Save
          </button>
        </div>
      </form>

      <hr className="my-8"/>

      {/* Password */}
      <form className="flex flex-col gap-1 ml-5">
        <label className="cursor-pointer" htmlFor="password">
          <div className="flex justify-between mb-3 items-center">
            <h2 className="text-2xl font-extralight">Password</h2>
            <BiEdit className="text-2xl"/>
          </div>
        </label>
        <div className="flex gap-1">
          <input 
            id="password"
            name="Input"
            aria-label="Password"
            placeholder=".........." 
            className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24"
          />
          <button 
            className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
            Save
          </button>
        </div>
      </form>
      <hr className="my-8 border-green-800 border-2"/>
    </div>
  )
}

export default Asettings