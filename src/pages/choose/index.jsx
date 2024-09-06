import { MdHail } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext } from "react";
import TopUsers from "../../components/topUsers";
import Footer from "../../components/footer";

const Choose = () => {
  // Extract setPageState from the GlobalContext
  const { setPageState, darkMode } = useContext(GlobalContext);

  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background-image1.jpg)`,
      }}
    >
      <header className="flex justify-between items-center opacity-80 w-screen min-h-14 dark:text-white dark:bg-slate-900 bg-white">
        <img
          src={`${process.env.PUBLIC_URL}/${
            darkMode ? "dark_logo.png" : "light_logo.png"
          }`}
          alt="FreelanceHub"
          className="w-44 md:w-60 ml-4 text-white"
        />
        <div className="flex items-center gap-5 mr-10 md:text-xl">
          <div className="cursor-pointer hover:text-blue-500 font-semibold">
            LogIn
          </div>
          <div className="cursor-pointer border-2 border-black hover:text-black hover:bg-white bg-blue-500 rounded-full px-3 py-1">
            SignUp
          </div>
        </div>
      </header>
      <div className="flex md:flex-row flex-col justify-between items-center mx-5 mt-10 mb-20">
        <div>
          {/* Title of the welcome screen */}
          <div className="text-5xl font-bold text-left self-start max-w-[27rem] mb-12 text-blue-500">
            Find the best jobs across all fields, and hire top tier talent.
          </div>

          <div className="text-xl text-black md:text-white ml-10 font-semibold">
            <ul className="list-disc">
              <li>World's largest freelance marketplace</li>
              <li>Find top jobs quickly</li>
              <li>Access diverse opportunities</li>
              <li>Any job you can possibly think of</li>
            </ul>
          </div>

          <div className="flex mt-10 justify-around">
            {/* Link for the Freelancer role */}
            <Link
              to="/freelancer"
              onClick={() => setPageState("freelancer")}
              className="text-center"
            >
              <MdHail className="rounded-full text-5xl md:text-6xl text-blue-600 border-2 border-white p-1 mx-auto hover:bg-blue-400" />
              <strong className="text-blue-500">Freelancer</strong>
            </Link>

            {/* Link for the Organization role */}
            <Link
              to="/organization"
              onClick={() => setPageState("organization")}
              className="text-center"
            >
              <VscOrganization className="rounded-full text-5xl md:text-6xl text-blue-600 border-2 border-white p-1 mx-auto hover:bg-blue-400" />
              <strong className="text-blue-500">Client</strong>
            </Link>
          </div>
        </div>
        <div className="self-center mx-auto mt-5">
          <TopUsers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Choose;
