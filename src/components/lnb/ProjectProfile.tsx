import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  url: string | null
  title: string
  rowid: number
};

const ProjectProfile = ({ url, title, rowid }: Props) => {
  const { projectRowid } = useParams();
  const isActive = projectRowid === String(rowid)
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);


  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/project/${rowid}/dashboard`)
  }

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className={`flex items-center justify-center w-11 h-11 rounded-[6px] bg-amber-600 hover:bg-amber-700 overflow-hidden text-sm font-medium cursor-pointer
        ${isActive ? "border-2 border-white" : ""}`}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        {url ? (
          <img src={url} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span>{title.charAt(0).toUpperCase()}</span>
        )}
        {showInfo && (
          <div className="
            absolute flex justify-center items-center h-10 left-[48px] z-10 
          bg-amber-600 text-white rounded border-2 border-white
            whitespace-nowrap px-3 py-1 shadow-lg
          ">
            {title}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectProfile;
