import SearchInput from "../common/SearchInput"

interface HeaderProps {
  toggleSidebar: () => void
}

const Header :React.FC<HeaderProps> = ({toggleSidebar}) => {
  const searchEnterEvent = () => {
    // 엔터 이벤트 주기
  }

  return (
    <div className="flex w-screen bg-[#F6F6F6] items-center h-[66px]">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="ml-5 w-16 bg-white px-4 py-2 rounded shadow"
        >
          {"메뉴"}
        </button>

        <div className="ml-4 text-[32px] font-bold leading-[24px] text-[#FBAC6B]">
          Scrumble
        </div>
      </div>

      <div className="flex w-full place-content-center">
        <SearchInput enterEvent={searchEnterEvent}/>
      </div>
    </div>
  )
}

export default Header