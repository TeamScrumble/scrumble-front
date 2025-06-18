import { useState } from "react";

type Props = {
  placeholder?: string;
  enterEvent: () => void;
}

const SearchInput = ({ placeholder, enterEvent }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Enter일 경우 여기서 원하는 동작 수행
      enterEvent();
    }
  };

  return (
    <div className="flex items-center w-full max-w-xl mx-auto border border-gray-300 rounded-full px-4.5 py-2.5 bg-white">
      <input
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder = { placeholder }
        className="flex-grow text-sm placeholder-gray-400 bg-transparent outline-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
        />
      </svg>
    </div>
  );
};

export default SearchInput;
