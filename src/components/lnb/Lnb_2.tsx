type Props = {
  isOpen: boolean;
};

const Lnb_2 = ({ isOpen }: Props) => {
  return (
    <div className="flex text-[#1A1A1A] border-r border-r-border-500">
      <div
        className={`bg-white px-3 py-7 transition-all duration-500 ${
          isOpen ? "w-64" : "w-18"
        }`}
      >
        <div className="whitespace-nowrap">LNB_2</div>
      </div>
    </div>
  );
};

export default Lnb_2;
