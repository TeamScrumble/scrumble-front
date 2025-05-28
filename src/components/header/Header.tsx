import { useNavigate } from "react-router-dom";
import SearchInput from "../common/SearchInput";

type Props = {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: Props) => {
  const navigate = useNavigate();
  const searchEnterEvent = () => {
    // 엔터 이벤트 주기
  };

  return (
    <div className="flex w-screen bg-[#E8EEF2] items-center h-[66px]">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="w-6 h-6 cursor-pointer ml-5"
        >
           <img src="/menu.svg" alt="User"/>
        </button>

        <button className="ml-4 cursor-pointer" onClick={() => navigate("/")}>
          <img src="/Scrumble.svg" alt="header logo"/>
        </button>
      </div>

      <div className="flex w-full place-content-center">
        <SearchInput placeholder="Please search for a project" enterEvent={searchEnterEvent} />
      </div>
    </div>
  );
};

export default Header;
