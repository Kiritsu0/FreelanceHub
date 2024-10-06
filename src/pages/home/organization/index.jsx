import { GlobalContext } from "../../../context";
import Createjobs from "../../../components/createJobs";
import { useContext } from "react";
import { Grid } from "react-loader-spinner";
import Footer from "../../../components/footer";
import { Helmet } from "react-helmet-async";

const Organization = () => {
  // Extract the loading state from GlobalContext
  const { loading } = useContext(GlobalContext);

  return (
    <div className="mt-3 pb-5">
      <Helmet>
        <meta
          name="description"
          content="Post job listings to connect with skilled freelancers. Specify your project details and find the right talent to bring your ideas to life effortlessly."
        />
        <meta
          name="keywords"
          content="post jobs, hire freelancers, freelance projects, job creation, client services, find talent, project management"
        />
        <meta
          property="og:title"
          content="FreelanceHub - Create Job Listings"
        />
        <meta
          property="og:description"
          content="Easily create job postings to find the perfect freelancers for your projects. Streamline your hiring process with FreelanceHub."
        />
        <meta property="og:url" content="https://freelancehub0.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FreelanceHub" />
        <link rel="canonical" href="https://freelancehub0.netlify.app/" />
        <title>Create Job Listings - FreelanceHub</title>
      </Helmet>

      {/* Conditional rendering: Show loader if data is loading */}
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
        // Render Createjobs component when not loading
        <div>
          <Createjobs />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Organization;
