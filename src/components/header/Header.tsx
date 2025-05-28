import React, { useState } from "react";
import SearchInput from "../common/SearchInput";
import SignInModal from "../signin/SignInModal";
import SignInCompleteModal from "../signin/SignInCompleteModal";
import SignInAdditionalInfoModal from "../signin/SignInAdditionalInfoModal";

type Props = {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: Props) => {
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signInCompleteModalOpen, setSignInCompleteModalOpen] = useState(false);
  const [signInAdditionalInfoModalOpen, setSignInAdditionalInfoModalOpen] = useState(false);
  const searchEnterEvent = () => {
    // 엔터 이벤트 주기
  };
  

  return (
    <>
      <div className="flex w-screen bg-[#E8EEF2] items-center h-[66px] justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="w-6 h-6 cursor-pointer ml-5"
            >
            <img src="/menu.svg" alt="User"/>
          </button>

          <div
            className="ml-4 w-38 h-8 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: 'url(/logo.svg)' }}
          />
        </div>

        <div className="w-150">
          <SearchInput placeholder="Please search for a project" enterEvent={searchEnterEvent} />
        </div>

        <div className="cursor-pointer text-sm font-normal mr-8" onClick={() => setSignInModalOpen(true)}>
          Sign in
        </div>
      </div>
      <SignInModal isOpen={signInModalOpen} onClose={() => setSignInModalOpen(false)} onLoginSuccess={() => setSignInCompleteModalOpen(true)} />
      <SignInCompleteModal isOpen={signInCompleteModalOpen} onClose={() => setSignInCompleteModalOpen(false)} onNext={() => setSignInAdditionalInfoModalOpen(true)} />
      <SignInAdditionalInfoModal isOpen={signInAdditionalInfoModalOpen} onClose={() => setSignInAdditionalInfoModalOpen(false)} onComplete={() => {}} />
    </>
  );
};

export default Header;