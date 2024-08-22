import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Choose from "./pages/choose";
import Volunteer from "./pages/home/freelancer";
import Organization from "./pages/home/organization";
import Context from "./context";
import JobInfo from "./pages/jobInfo";
import SavedJobs from "./pages/savedJobs";
import AppliedJobs from "./pages/appliedJobs";
import Profile from "./pages/profile";

function App() {
  return (
    <div>
      <HashRouter>
        <Context>
          <Routes>
            <Route path="/" element={<Choose />} />
            <Route element={<Layout />}>
              <Route path="/freelancer" element={<Volunteer />} />
              <Route path="/freelancer/jobInfo" element={<JobInfo />} />
              <Route path="/freelancer/savedJobs" element={<SavedJobs />} />
              <Route path="/freelancer/appliedJobs" element={<AppliedJobs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/organization" element={<Organization />} />
            </Route>
          </Routes>
        </Context>
      </HashRouter>
    </div>
  );
}

export default App;
