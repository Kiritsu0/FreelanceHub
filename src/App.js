import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Choose from "./pages/choose";
import Freelancer from "./pages/home/freelancer";
import Organization from "./pages/home/organization";
import Context from "./context";
import JobInfo from "./pages/jobInfo";
import SavedJobs from "./pages/savedJobs";
import AppliedJobs from "./pages/appliedJobs";
import Profile from "./pages/profile";
import CreatedJobsCards from "./pages/createdJobsCards";
import Loader from "./components/loader";

function App() {
  return (
    <div>
      <Context>
        <BrowserRouter>
          <Loader />
          <Routes>
            <Route path="/" element={<Choose />} />
            <Route element={<Layout />}>
              <Route path="/freelancer" element={<Freelancer />} />
              <Route path="/freelancer/jobInfo" element={<JobInfo />} />
              <Route path="/freelancer/savedJobs" element={<SavedJobs />} />
              <Route path="/freelancer/appliedJobs" element={<AppliedJobs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/organization/createdJobs" element={<CreatedJobsCards />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Context>

    </div>
  );
}

export default App;
