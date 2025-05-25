import { useQuery } from "@tanstack/react-query";
import { fetchProject, Project } from "../../api/project";
import ProjectProfile from "./ProjectProfile";
import ProjectAddBtn from "./ProjectAddBtn";
import Modal from "../common/Modal";

const Lnb_1 = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProject,
  });

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
          "flex flex-col place-content-between  bg-[#d9d9d9] text-white px-3 py-7 w-18"
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
            <ProjectAddBtn />
          </div>
        </div>
        <div className="flex">멤버</div>
      </div>
    </div>
  );
};

export default Lnb_1;