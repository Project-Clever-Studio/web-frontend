import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";

//Css
import "./App.scss";
import Navbar from "./components/Navbar";
import Cursor from "./components/CustomCursor";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
