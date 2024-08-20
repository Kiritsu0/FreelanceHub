import { MdHail } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext } from "react";

const Choose = () => {
  const { setVolunteerPage } = useContext(GlobalContext);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center overflow-hidden">
      <h1 className="text-4xl font-bold cursor-pointer text-center text-white mb-12">
        Welcome to Freelance<strong className="text-green-800">Hub!</strong>
      </h1>

      <div className="p-10 bg-white rounded-md flex flex-col items-center">
        <p className="text-center font-medium mb-7">
          Choose your role below to get started:
        </p>
        <div className="flex gap-8 justify-center">
          <Link to="/freelancer" onClick={() => setVolunteerPage(true)}>
            <MdHail className="rounded-full text-4xl sm:text-5xl lg:text-6xl text-green-600 border-2 border-black p-1 mx-auto hover:bg-green-400" />
            <strong>Freelancer</strong>
          </Link>

          <Link to="/organization">
            <VscOrganization className="rounded-full text-4xl sm:text-5xl lg:text-6xl text-green-600 border-2 border-black p-1 mx-auto hover:bg-green-400" />
            <strong>Client</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Choose;
