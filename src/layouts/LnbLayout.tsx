import { Outlet } from "react-router";
import Lnb from "../components/lnb/Lnb";

const LnbLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-1">
        <Lnb />
        <Outlet />
      </div>
    </div>
  );
};

export default LnbLayout;
