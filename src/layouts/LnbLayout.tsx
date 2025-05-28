import { useState } from "react";
import { Outlet, useParams } from "react-router";
import Header from "../components/header/Header";
import Lnb_1 from "../components/lnb/Lnb_1";
import Lnb_2 from "../components/lnb/Lnb_2";

const LnbLayout = () => {
  const { projectRowid } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Lnb_1 />
        <div
          className={`
            flex transition-all duration-500
            ${projectRowid ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
          `}
        >
          {projectRowid && <Lnb_2 isOpen={isOpen} />}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default LnbLayout;
