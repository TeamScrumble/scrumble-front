import SearchInput from "../common/SearchInput";

type Props = {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: Props) => {
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

        <div className="ml-4 text-[32px] font-bold leading-[24px] text-[#FBAC6B]">
          Scrumble
        </div>
      </div>

      <div className="flex w-full place-content-center">
        <SearchInput placeholder="Please search for a project" enterEvent={searchEnterEvent} />
      </div>
    </div>
  );
};

export default Header;
