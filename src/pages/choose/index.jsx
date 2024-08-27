import { MdHail } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext } from "react";

const Choose = () => {
  // Extract setPageState from the GlobalContext
  const { setPageState } = useContext(GlobalContext);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center overflow-hidden">
      {/* Title of the welcome screen */}
      <h1 className="text-4xl font-bold cursor-pointer text-center text-white mb-12">
        Welcome to Freelance<strong className="text-green-800">Hub!</strong>
      </h1>

      {/* Container for role selection with some styling */}
      <div className="p-10 bg-white rounded-md flex flex-col items-center">
        <p className="text-center font-medium mb-7">
          Choose your role below to get started:
        </p>

        {/* Links to navigate to Freelancer or Organization pages */}
        <div className="flex gap-8 justify-center">
          {/* Link for the Freelancer role */}
          <Link
            to="/freelancer"
            onClick={() => setPageState("freelancer")}
            className="text-center"
          >
            <MdHail className="rounded-full text-4xl sm:text-5xl lg:text-6xl text-green-600 border-2 border-black p-1 mx-auto hover:bg-green-400" />
            <strong>Freelancer</strong>
          </Link>

          {/* Link for the Organization role */}
          <Link
            to="/organization"
            onClick={() => setPageState("organization")}
            className="text-center"
          >
            <VscOrganization className="rounded-full text-4xl sm:text-5xl lg:text-6xl text-green-600 border-2 border-black p-1 mx-auto hover:bg-green-400" />
            <strong>Client</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Choose;
