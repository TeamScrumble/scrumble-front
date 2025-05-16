import { useRef, useState } from "react";

type Props = {
  onFileSelect: (file: File) => void;
};

const FileUploadBox = ({ onFileSelect }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      onFileSelect(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result as string); // base64
      };
      reader.readAsDataURL(file);
    }
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
        <div className="text-gray-400">파일 업로드</div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default FileUploadBox;
