import React from "react";
import Modal from "../common/Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
};

// SignInCompleteModal 컴포넌트는 회원가입 완료 후 추가 정보를 입력하도록 안내하는 모달
const SignInCompleteModal = ({ isOpen, onClose, onNext }: Props) => {
  const nextEvent = () => {
    onClose()
    onNext();
  }

  return (
    <Modal width={547} isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center bg-white py-10 h-125 gap-9">
        <h1 className="text-3xl font-semibold text-center">
          스크럼블에 오신 것을 환영합니다.
        </h1>
        <img
          src="/scrumble.svg"
          alt="로고"
          className="w-32 h-32 rounded-full object-cover"
        />
        <p className="text-center text-sm text-black">
          추가 정보를 입력하셔야 가입이 완료되며, 서비스를 이용하실 수 있습니다.
        </p>
        <button
          className="cursor-pointer w-full bg-orange-400 hover:bg-orange-500 text-white rounded-[6px] py-3 text-base font-semibold transition"
          onClick={nextEvent}
        >
          다음으로
        </button>
      </div>
    </Modal>
  );
};

export default SignInCompleteModal;