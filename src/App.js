import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Pages from "./pages";
import { Navbar, Sidebar, Footer, GlobalWrapper } from "./components";

function App() {
  return (
    <Router>
      <GlobalWrapper>
        <div className="app">
          <Navbar />
          <Sidebar />
          <ToastContainer />
          <Routes>
            <Route exact path="/" element={<Pages.Home />} />
            <Route exact path="/search" element={<Pages.SearchJobs />} />
            <Route exact path="/job/:id" element={<Pages.JobDetails />} />
            <Route exact path="/skills" element={<Pages.Skills />} />
            <Route exact path="/favourites" element={<Pages.FavouriteJobs />} />
            <Route exact path="/about" element={<Pages.About />} />
            <Route path="*" element={<Pages.NotFound />} />
          </Routes>
          <Footer />
        </div>
      </GlobalWrapper>
    </Router>
  );
}

export default App;
