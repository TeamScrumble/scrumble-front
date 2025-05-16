// import { useQuery } from "@tanstack/react-query";
import { FetchProjectResponse } from "../../api/project";
import ProjectProfile from "./ProjectProfile";
import ProjectAddBtn from "./ProjectAddBtn";


const Lnb_1 = () => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['project'],
  //   queryFn: fetchProject,
  // });

  // if (isLoading) return <div>로딩 중...</div>;
  // if (error instanceof Error) return <div>에러 발생: {error.message}</div>;

  const dummyProjects: FetchProjectResponse[] = [
    {
      rowid: 1,
      title: "Project Alpha",
      regDate: new Date("2024-12-01"),
    },
    {
      rowid: 2,
      title: "Beta Launch",
      regDate: new Date("2025-01-15"),
    },
    {
      rowid: 3,
      title: "Gamma UI",
      regDate: new Date("2025-02-20"),
    },
    {
      rowid: 4,
      title: "Delta Build",
      regDate: new Date("2025-03-10"),
    },
    {
      rowid: 5,
      title: "Epsilon",
      regDate: new Date("2025-04-05"),
    },
  ];

  return (
    <div className="flex" style={{ height: "calc(100vh - 66px)" }}>
      {/* Sidebar */}
      <div
        className={"flex flex-col place-content-between  bg-[#d9d9d9] text-white px-3 py-7 w-18"}
      >
        <div>
          <div className="flex flex-col gap-3">
            {dummyProjects?.map((project: FetchProjectResponse) => (
              <ProjectProfile url={""} title={project.title}/>
            ))}
            <ProjectAddBtn/>
          </div>
        </div>
        <div className="flex">
          멤버
        </div>
      </div>
    </div>
  )
}

export default Lnb_1