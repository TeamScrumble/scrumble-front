import { useState } from "react";
import LnbMenuItem from "./LnbMenuItem";
import CreateProjectModal from "./CreateProjectModal";

const Lnb = () => {
  // 멤버 정보 받을거
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="w-70 bg-[#F4F6F8] h-screen flex flex-col border-r border-[#DBDBDB] p-4" style={{ boxSizing: "border-box" }}>
      {/* Logo */}
      <div>
        <img src="logo.svg" alt="Scrumble Logo" className="h-10 cursor-pointer" />
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 mt-4">
        {/* Main Menu */}
        <div className="space-y-2 mb-6">
          <LnbMenuItem iconPath="home.svg" label="Home" isActive={true} onClick={() => {}} />
          <LnbMenuItem iconPath="settings.svg" label="Settings" isActive={false} onClick={() => {}} />
        </div>

        {/* hr */}
        <hr className="my-4 border-t border-gray-200" />

        {/* Projects */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-md font-semibold text-[#797979]">Projects</div>
            <button onClick={() => setModalOpen(true)} className="cursor-pointer">
              <img src="add.svg"/>
            </button>
          </div>
        </div>
      </div>

      {/* User Profile - TODO 클릭시 메뉴? 열리게? */}
      <div className="p-2 border border-[#DBDBDB] rounded cursor-pointer" onClick={() => {}} style={{ borderRadius: 4, background: "#FFF" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            {/* <img src="" alt="img"/> */}
            <span className="text-gray-500 text-lg">조</span>
          </div>
          <div className="flex-1">
            <div className="text-md font-medium text-[#1D2027]">조현철</div>
            <div className="text-xs text-[#B7B6B6] truncate">chaoman5@mobility42.io</div>
          </div>
        </div>
      </div>
      <CreateProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Lnb;