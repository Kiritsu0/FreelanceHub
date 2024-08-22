import { BiEdit } from "react-icons/bi";

const Profile = ({ name, email }) => {
  return (
    <div className="ml-7">
      <div>
        <img />
        <h1></h1>
      </div>
      {/* Name */}
      <div className="max-w-96 mx-auto mt-5">
        <form className="flex flex-col gap-1 ml-5">
          <label
            className="flex items-center gap-2 justify-between mb-3 cursor-pointer"
            htmlFor="name"
          >
            <h2 className="text-2xl font-semibold">Username</h2>
            <BiEdit className="text-2xl" />
          </label>
          <div className="flex justify-between">
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="rounded-md px-3 py-1 placeholder-slate-400 outline-none"
            />
            <button className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
              Save
            </button>
          </div>
        </form>

        <hr className="my-8" />

        {/* Email */}
        <form className="flex flex-col gap-1 ml-5">
          <label
            className="flex items-center gap-2 justify-between mb-3 cursor-pointer"
            htmlFor="email"
          >
            <h2 className="text-2xl font-semibold">Email</h2>
            <BiEdit className="text-2xl" />
          </label>
          <div className="flex justify-between">
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="rounded-md px-3 py-1 placeholder-slate-400 outline-none"
            />
            <button className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
              Save
            </button>
          </div>
        </form>

        <hr className="my-8" />

        {/* Password */}
        <form className="flex flex-col gap-1 ml-5">
          <label
            className="flex items-center gap-2 justify-between mb-3 cursor-pointer"
            htmlFor="password"
          >
            <h2 className="text-2xl font-semibold">Password</h2>
            <BiEdit className="text-2xl" />
          </label>
          <div className="flex justify-between">
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="rounded-md px-3 py-1 placeholder-slate-400 outline-none"
            />
            <button className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
              Save
            </button>
          </div>
        </form>

        <hr className="my-8" />

        <form className="flex flex-col gap-1 ml-5">
          <label
            className="flex items-center gap-2 justify-between mb-3 cursor-pointer"
            htmlFor="image"
          >
            <h2 className="text-2xl font-semibold">Profile Image</h2>
            <BiEdit className="text-2xl" />
          </label>
          <div className="flex justify-between">
            <input
              type="file"
              id="image"
              placeholder="Enter your Password"
              className="rounded-md px-3 py-1 placeholder-slate-400 outline-none"
            />
            <button className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
