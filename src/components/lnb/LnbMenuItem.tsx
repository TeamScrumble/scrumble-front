type Props = {
  iconPath: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const LnbMenuItem = ({ iconPath, label, isActive, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer ${
        isActive ? 'bg-white' : 'hover:bg-gray-300'
      }`}
    >
      <img src={iconPath} alt={label} className="h-6 w-6 " />
      <span className="text-[16px]">{label}</span>
    </button>
  );
};

export default LnbMenuItem;