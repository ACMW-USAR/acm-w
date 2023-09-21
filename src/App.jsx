import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Club } from "./pages/Homepage/club";
import Team from "./pages/Homepage/team";
import Event from "./pages/Homepage/event";
import { Homee } from "./pages/Homepage/homee";
import Joinus from "./pages/Homepage/joinus";
import Footermain from "./pages/Homepage/footermain";

function App() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      {/* <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes> */}
      
      <Element name="home">
        <Homee />
      </Element>
      <Element name="club">
        <Club />
      </Element>

      <Element name="team">
        <Team />
      </Element>

      <Element name="event">
        <Event />
      </Element>

      <Element name="joinus">
        <Joinus />
      </Element>

      <Element name="footermain">
        <Footermain />
      </Element>
    
    </>
  );
}

export default App;
