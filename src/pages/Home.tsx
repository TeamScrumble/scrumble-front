import { useState } from "react";
import CreateProjectModal from "../components/lnb/CreateProjectModal";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-1 justify-center items-center bg-white">
      <button
        className="flex justify-center items-center h-14 gap-6 pt-5 pb-5 pl-5 pr-5
       bg-[#FFF] border border-[#DBDEE3] rounded-sm cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        Add New Project
      </button>
      <CreateProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Home;
