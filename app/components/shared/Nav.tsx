"use client";
import { faBars, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggle from "./theme-toggle";
import { useContext, useState } from "react";
import LeftSidebar from "./LeftSidebar";
import { WeatherContext } from "@/app/providers/WeatherProvider";

function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const weather = useContext(WeatherContext);
  

  return (
    <>
      <nav className="fixed top-0 z-100 left-0 px-6 py-4 flex items-center justify-between w-full backdrop-blur-xs">
        <div className="sidebar flex items-center gap-7">
          <FontAwesomeIcon
            icon={faBars}
            className="text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
          <div className=" flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} className="w-4" />
            <p className="text-md text-gray-900 dark:text-white ">
              {weather.locationByState.features[0].properties.city ||
                weather.locationByState.features[0].properties.state ||
                "Unknown Location"}
              ,
              {weather.locationByState.features[0].properties.country == "Israel" ? "Palestine" : weather.locationByState.features[0].properties.country || "Unknown Country"}
            </p>
          </div>
        </div>
        <div className="theme-toggle">
          <ThemeToggle />
        </div>
      </nav>

      {isSidebarOpen && <LeftSidebar onClose={setIsSidebarOpen} />}
    </>
  );
}

export default Nav;

