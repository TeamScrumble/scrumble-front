import { useQuery } from "@tanstack/react-query";
import { getProject, Project } from "../../api/project";
import ProjectProfile from "./ProjectProfile";
import Modal from "../common/Modal";
import CreateProjectModal from "./CreateProjectModal";
import { useState } from "react";

const Lnb_1 = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProject,
  });
  const [modalOpen, setModalOpen] = useState(false);

  if (isLoading)
    return (
      <Modal width={100} isOpen={true} onClose={() => {}}>
        <div>로딩 중...</div>
      </Modal>
    );
  if (error instanceof Error) return <div>에러 발생: {error.message}</div>;

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={
          "flex flex-col place-content-between bg-[#D1D8DD] text-white px-3 py-7 w-18"
        }
      >
        <div>
          <div className="flex flex-col gap-3">
            {data?.data?.projects?.map((project: Project, i: number) => (
              <ProjectProfile
                key={i}
                rowid={project.rowid}
                url={""}
                title={project.title}
              />
            ))}
            <div
              onClick={() => setModalOpen(true)}
              className="w-11 h-11 rounded-[6px] border border-black flex items-center justify-center text-2xl text-black cursor-pointer hover:bg-gray-300"
            >
              +
            </div>
            <CreateProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)}/>
          </div>
        </div>
        {/* 유저 아이콘 */}
        <button className="flex h-12 flex-col justify-center items-center cursor-pointer rounded-[6px] border border-black bg-white">
          <img src="/user.svg" alt="User"/>
        </button>
      </div>
    </div>
  );
};

export default Lnb_1;