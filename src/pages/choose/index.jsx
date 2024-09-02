import { MdHail } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext } from "react";
import TopUsers from "../../components/topUsers";

const Choose = () => {
  // Extract setPageState from the GlobalContext
  const { setPageState } = useContext(GlobalContext);

  return (
    <div
      className="bg-cover bg-center min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background-image1.jpg)`,
      }}
    >
      <header className="flex justify-between items-center opacity-50 w-screen min-h-14 dark:text-white dark:bg-slate-900 bg-white">
        {/* link to either freelancer or organization page based on pageState */}
        <h1 className="font-medium ml-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          Freelance
          <span className="font-bold dark:text-green-500 text-blue-800">
            Hub
          </span>
        </h1>

        <div className="flex items-center gap-5 mr-10 text-xl">
          <div className="cursor-pointer hover:text-blue-500">LogIn</div>
          <div className="cursor-pointer hover:text-blue-500">SignUp</div>
        </div>
      </header>
      <div className="flex md:flex-row flex-col justify-between items-center mx-5 mt-10">
        <div>
          {/* Title of the welcome screen */}
          <div className="text-5xl font-bold text-left self-start max-w-[27rem] text-white mb-12">
            Find the best jobs across all fields, and hire top tier talent.
          </div>

          <div className="text-xl text-white ml-10 font-semibold">
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
              <strong className="text-white">Freelancer</strong>
            </Link>

            {/* Link for the Organization role */}
            <Link
              to="/organization"
              onClick={() => setPageState("organization")}
              className="text-center"
            >
              <VscOrganization className="rounded-full text-5xl md:text-6xl text-blue-600 border-2 border-white p-1 mx-auto hover:bg-blue-400" />
              <strong className="text-white">Client</strong>
            </Link>
          </div>
        </div>
        <div className="self-center mx-auto mt-5">
          <TopUsers />
        </div>
      </div>
    </div>
  );
};

export default Choose;
