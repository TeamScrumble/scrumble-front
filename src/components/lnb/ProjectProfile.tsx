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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/project/${rowid}/dashboard`)
  }

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center w-11 h-11 rounded-[6px] bg-amber-600 hover:bg-amber-700 overflow-hidden text-sm font-medium cursor-pointer
      ${isActive ? "border-2 border-white" : ""}`}
    >
      {url ? (
        <img src={url} alt={title} className="object-cover w-full h-full" />
      ) : (
        <span>{title.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
};

export default ProjectProfile;
