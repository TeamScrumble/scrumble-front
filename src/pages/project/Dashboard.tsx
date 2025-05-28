import { useState } from "react";
// import { useParams } from "react-router-dom";

const Dashboard = () => {
  // const { projectRowid } = useParams();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const dummyData = {
    projectName: "Scrumble",
    description:
      "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
  };
  const summary =
    dummyData.description.length > 74
      ? dummyData.description.substring(0, 75)
      : dummyData.description;
  // project detail에 대한 fetch가 필요함
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 border-b border-[#BCC0C6] h-32 pt-5 pb-5 pr-8 pl-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{dummyData.projectName}</h1>
          <div className="flex gap-1">
            <img src="/sharelink.svg" alt="sharelink" />
            <img src="/peoples.svg" alt="peoples" />
            <span className="text-[16px]">6</span>
          </div>
        </div>
        {isDescriptionOpen ? (
          <div>
            <p className="text-sm text-[#BCC0C6]">{summary}</p>
            <p className="text-sm text-[#BCC0C6]">{dummyData.description.substring(75,)}</p>
          </div>
        ) : (
          <div className="flex gap-3">
            <p className="text-sm text-[#BCC0C6]">{`${summary}...`}</p>
            <button className="cursor-pointer" onClick={() => setIsDescriptionOpen(true)}>
              <img src="/chevron-down.svg" alt="열기"/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
