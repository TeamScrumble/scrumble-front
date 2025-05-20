type Props = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  required: boolean;
  isError: boolean;
  errorMessage: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const TextAreaInput = ({
  label,
  name,
  value,
  placeholder = "",
  required = false,
  isError,
  errorMessage = "",
  onChange,
}: Props) => {
  let borderColor;
  if (!isError) {
    borderColor = "border-slate-200";
  } else {
    borderColor = "border-red-500";
  }
  return (
    <div className="flex flex-col items-start gap-2.5 self-stretch">
      <div className="self-stretch leading-4 text-[16px] font-medium">
        {label}
        {required && <span className="text-red-500">*</span>}
      </div>
      <textarea
        value={value}
        name={name}
        rows={3}
        onChange={onChange}
        placeholder={placeholder}
        className={`flex h-[120px] pt-3 pb-3 pl-4 pr-4 items-center gap-6 self-stretch border ${borderColor} bg-white rounded-sm`}
      />
      {isError && <div className="text-red-500">{errorMessage}</div>}
    </div>
  );
};

export default TextAreaInput;
