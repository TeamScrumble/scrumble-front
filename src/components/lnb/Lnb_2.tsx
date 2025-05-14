interface Lnb2Props {
  isOpen: Boolean
}

const Lnb_2: React.FC<Lnb2Props> = ({isOpen}) => {
  return (
    <div className="flex text-[#1A1A1A] " style={{ height: "calc(100vh - 66px)",borderRight: "1px solid #E1E1E2"  }}>
      {/* Sidebar */}
      <div
        className={`bg-white px-3 py-7 transition-all duration-500 ${
          isOpen ? 'w-64' : 'w-18'
        }`}
      >
        <div className="whitespace-nowrap">LNB_2</div>
      </div>
    </div>
  );
};

export default Lnb_2