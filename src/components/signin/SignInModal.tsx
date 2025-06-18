import React from "react";
import Modal from "../common/Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void; // 로그인 성공 시 호출되는 함수
};

const SignInModal = ({ isOpen, onClose, onLoginSuccess }: Props) => {
  const handleGoogleSignIn = () => {
    // 여기에 Google 로그인 로직 추가
    if(onLoginSuccess) onLoginSuccess(); // 로그인 성공 시 onLoginSuccess 호출
    onClose(); // 모달 닫기
  };

  const backEvent = () => {
    onClose();
  }

  return (
    <Modal width={547} isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center h-160 bg-white w-full">
        <button className="cursor-pointer absolute top-4 left-4 px-4 py-2 rounded-full border text-sm hover:bg-gray-100" onClick={backEvent}>
           <span><img src="/chevron-left.svg" alt="Back" className="inline-block w-4 h-4 mr-1" /></span>Back
        </button>

        <img
          src="/scrumble.svg"
          alt="Scrumble logo"
          width={150}
          height={150}
        />

        <h1 className="text-3xl font-semibold mt-9">Sign in to Scrumble</h1>

        <button
          onClick={handleGoogleSignIn}
          className="cursor-pointer flex items-center gap-3 px-6 py-3 border rounded-full shadow-sm hover:bg-gray-100 transition mt-9"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
        </button>
      </div>
    </Modal>
  );
};

export default SignInModal;
