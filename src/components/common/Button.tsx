type Props = {
  label: string;
  buttonType: BUTTON_TYPES;
  colorType: COLOR_TYPES;
  onClick?: () => void;
};

type BUTTON_TYPES = "submit" | "button" | "reset";

type COLOR_TYPES = "primary" | "secondary";

const css = {
  primary: "bg-primary-500 text-white",
  secondary: "border border-solid border-primary-500 bg-white text-primary-500",
};

const Button = ({
  label,
  buttonType,
  colorType,
  onClick = () => {},
}: Props) => {
  return (
    <button
      type={buttonType}
      className={`min-w-[80px] pt-3 pb-3 pl-4 pr-4 flex justify-center align-middle rounded-md cursor-pointer ${css[colorType]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
