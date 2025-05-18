import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  width: number;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 opacity-20 blur-sm bg-black z-50 flex justify-center items-center"
        onClick={onClose}
      />
      <div
        className={`
          w-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
        bg-white flex flex-col items-center gap-3 pt-[41px] pb-[41px] pl-6 pr-6 rounded-2xl
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>,
    document.body
  );
};

export default Modal;