import { useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Lnb_1 from "../components/lnb/Lnb_1";
import Lnb_2 from "../components/lnb/Lnb_2";

const LnbLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Lnb_1 />
        <Lnb_2 isOpen={isOpen} />
        <Outlet />
      </div>
    </>
  );
};

export default LnbLayout;
