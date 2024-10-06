import { ImFilesEmpty } from "react-icons/im";
import Jobcard from "../../../components/jobsCards";
import { GlobalContext } from "../../../context";
import SearchBar from "../../../components/searchBar";
import { useContext } from "react";
import { Grid } from "react-loader-spinner";
import Footer from "../../../components/footer";
import { Helmet } from "react-helmet-async";

const Freelancer = () => {
  // Extract the loading state from GlobalContext
  const { loading, data } = useContext(GlobalContext);

  return (
    <div className="mt-3 pb-5">
      <Helmet>
        <meta
          name="description"
          content="Find freelance jobs that match your skills and experience. Easily search and filter through opportunities to connect with clients and grow your career"
        />
        <meta
          name="keywords"
          content="freelance jobs, find freelancers, remote work, freelance marketplace, job listings, freelancers, online jobs"
        />
        <meta
          property="og:title"
          content="FreelanceHub - Find Your Next Freelance Job"
        ></meta>
        <meta
          property="og:description"
          content="Search and apply for top freelance jobs across various industries. Start your freelance career today!"
        />
        <meta
          property="og:url"
          content="https://freelancehub0.netlify.app/#/freelancer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FreelanceHub" />
        <link
          rel="canonical"
          href="https://freelancehub0.netlify.app/#/freelancer"
        />
        <title>Freelancer</title>
      </Helmet>
      {/* Render the search bar component */}
      <SearchBar />

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
        // Render Jobcard component when not loading
        <div className="">
          <main className="flex flex-col items-center justify-center gap-5 h-full w-full">
            {/* If there is no job data, display a message and icon */}
            {data.length === 0 ? (
              <div className="flex flex-col justify-center h-96 font-bold mt-14 md:mt-0 text-center">
                <span className="md:text-4xl text-3xl">
                  Not Found, Please Search Again!
                </span>
                <ImFilesEmpty className="mx-auto mt-5 text-4xl md:text-5xl" />
              </div>
            ) : (
              data.map((job) => <Jobcard job={job} key={job.id} />)
            )}
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Freelancer;
