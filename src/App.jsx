import { useEffect, useRef } from "react";
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
import { useContextProvider } from "./utils/GlobleContextProvider";
import Portfolio from "./pages/Portfolio";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const { locoScroll, setLocoScroll, setCursorSettings } = useContextProvider();
  const location = useLocation();
  const AppRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        smoothTouch: false,
      },
    });

    setLocoScroll(locomotiveScroll);

    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    const observer = new ResizeObserver(refreshScrollTrigger);
    observer.observe(AppRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const ScrollTo = (target) => {
    if (locoScroll)
      locoScroll.scrollTo(target, {
        options: {
          immediate: true,
        },
      });
  };

  useEffect(() => {
    setCursorSettings({
      size: 1,
      isSticky: false,
      color: "transparent",
      isBlending: true,
      text: "",
      border: "#00000057",
    });

    setTimeout(() => {
      ScrollTo("top");
    }, 600);
  }, [location.pathname]);

  return (
    <div ref={AppRef}>
      <Cursor />
      <Navbar />
      <AnimatePresence initial={false} mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
