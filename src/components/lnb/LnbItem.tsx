
type LnbItemProps = {
  isOpen: boolean
  label: string
  icon: string
  active?: boolean
  onClick?: () => void
}

const LnbItem = ( { isOpen, label, icon, active = false, onClick }: LnbItemProps) => {
  return (
    <li
      className={`flex ${isOpen ? 'w-[232px] py-[10px] px-4' : 'w-12 p-3'} items-center cursor-pointer rounded-full bg-white shadow-[0px_1px_2px_0px_rgba(26,26,26,0.08)]
                ${active ? ' border-2 border-[#FB923C]' : ''} transition-all duration-300`}
      onClick={onClick}
    >
      <img src={icon} alt={label} className= 'w-6 h-6'></img>
      {
      isOpen 
        && 
      <div className={`transition-all duration-300 ml-2 overflow-hidden text-ellipsis text-nowrap`}><span>{label}</span></div>
      }
    </li>
  );
};

export default LnbItem;