import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

//Css
import "./App.scss";
import Navbar from "./components/Navbar";
import Cursor from "./components/CustomCursor";
import gsap from "gsap";
import { AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const location = useLocation();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <AnimatePresence initial={false} mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
