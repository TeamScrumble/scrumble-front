import { useRef, useState } from "react";

type Props = {
  onFileSelect: (file: File) => void;
};

const FileUploadBox = ({ onFileSelect }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일 확장자 확인
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      setError("지원되지 않는 파일 형식입니다.");
      console.log("지원되지 않는 파일 형식입니다.");
      return;
    }

    // 용량 체크 (10MB = 10 * 1024 * 1024 bytes)
    if (file.size > 10 * 1024 * 1024) {
      setError("파일 용량은 10MB 이하여야 합니다.");
      console.log("파일 용량은 10MB 이하여야 합니다.");
      return;
    }

    setError("");
    console.log(error);
    onFileSelect(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnail(reader.result as string); // base64
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="w-40 h-40 flex justify-center items-center gap-2.5 shrink-0 cursor-pointer
  rounded-lg border border-solid border-[#DBDEE3]"
      onClick={handleClick}
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt="썸네일"
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <div className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M35.0333 8.33301H31.6667V4.96634C31.6667 4.06634 30.9333 3.33301 30.0333 3.33301H29.9833C29.0667 3.33301 28.3333 4.06634 28.3333 4.96634V8.33301H24.9833C24.0833 8.33301 23.35 9.06634 23.3333 9.96634V10.0163C23.3333 10.933 24.0667 11.6663 24.9833 11.6663H28.3333V15.0163C28.3333 15.9163 29.0667 16.6663 29.9833 16.6497H30.0333C30.9333 16.6497 31.6667 15.9163 31.6667 15.0163V11.6663H35.0333C35.9333 11.6663 36.6667 10.933 36.6667 10.033V9.96634C36.6667 9.06634 35.9333 8.33301 35.0333 8.33301ZM26.6667 15.0163V13.333H24.9833C24.1 13.333 23.2667 12.983 22.6333 12.3663C22.0167 11.733 21.6667 10.8997 21.6667 9.96634C21.6667 9.36634 21.8333 8.81634 22.1167 8.33301H8.33333C6.5 8.33301 5 9.83301 5 11.6663V31.6663C5 33.4997 6.5 34.9997 8.33333 34.9997H28.3333C30.1667 34.9997 31.6667 33.4997 31.6667 31.6663V17.8663C31.1667 18.1497 30.6 18.333 29.9667 18.333C28.15 18.3163 26.6667 16.833 26.6667 15.0163ZM26.6 31.6663H10C9.31667 31.6663 8.91667 30.883 9.33333 30.333L12.6333 25.9497C12.9833 25.483 13.6667 25.5163 14 25.983L16.6667 29.9997L21.0167 24.1997C21.35 23.7663 22 23.7497 22.3333 24.183L27.25 30.3163C27.6833 30.8663 27.3 31.6663 26.6 31.6663Z"
              fill="black"
              fillOpacity="0.54"
            />
          </svg>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpg,image/jpeg,image/png,image/gif"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default FileUploadBox;
