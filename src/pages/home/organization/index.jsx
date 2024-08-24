import { GlobalContext } from "../../../context";
import Createjobs from "../../../components/createJobs";
import { useContext } from "react";
import { Grid } from "react-loader-spinner";

const Organization = () => {
  const { loading } = useContext(GlobalContext);

  return (
    <div className="mt-3 pb-5">
      <Createjobs />
      {loading ? (
        <div className="absolute top-1/2 transition loader-centered">
          <Grid
            visible={true}
            height="80"
            width="80"
            color="black"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Organization;
