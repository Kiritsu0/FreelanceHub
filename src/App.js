import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Choose from "./components/choose";
import Volunteer from "./components/home/volunteer";
import Organization from "./components/home/organization";
import Context from "./components/context";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Context>
          <Routes>
            <Route path="/" element={<Choose />} />
            <Route element={<Layout />}>
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/organization" element={<Organization />} />
            </Route>
          </Routes>
        </Context>
      </HashRouter>
    </div>
  );
}

export default App;
