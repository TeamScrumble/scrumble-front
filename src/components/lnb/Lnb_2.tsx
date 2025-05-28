import { useLocation, useNavigate, useParams } from "react-router-dom";
import LnbItem from "./LnbItem";

type Props = {
  isOpen: boolean;
};

const Lnb_2 = ({ isOpen }: Props) => {
  const navigate = useNavigate()
  const location = useLocation();
  const { projectRowid } = useParams()

  const menuList = [
  { label: 'Dashboard', icon: '/dashboard.svg', path: `project/${projectRowid}/dashboard` },
  { label: 'Product Backlog', icon: '/folder.svg', path: `project/${projectRowid}/backlog` },
  { label: 'Sprint', icon: '/assignment.svg', path: `project/${projectRowid}/sprint` }
];

  return (
    <div className="flex bg-[#F4F6F8] border-r border-r-border-500">
      <div
        className={`px-3 py-7 transition-all duration-300 ${
          isOpen ? "w-64" : "w-18"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {menuList.map((item) => (
            <LnbItem
              key={item.label}
              isOpen={isOpen}
              label={item.label}
              icon={item.icon}
              active={location.pathname.endsWith(item.path)}
              onClick={() => navigate(`/${item.path}`)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lnb_2;
