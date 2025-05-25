import { useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Lnb_1 from "../components/lnb/Lnb_1";
import Lnb_2 from "../components/lnb/Lnb_2";

const LnbLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Lnb_1 />
        <Lnb_2 isOpen={isOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default LnbLayout;
