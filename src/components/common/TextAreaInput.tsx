type Props = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  required: boolean;
  isValid: boolean;
  errorMessage: string;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLTextAreaElement>
  ) => void;
};

const TextAreaInput = ({
  label,
  name,
  value,
  placeholder = "",
  required = false,
  isValid,
  errorMessage = "",
  onChange,
  onBlur
}: Props) => {
  let borderColor;
  if (isValid) {
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
        onBlur={onBlur}
        placeholder={placeholder}
        className={`flex h-[120px] pt-3 pb-3 pl-4 pr-4 items-center gap-6 self-stretch border ${borderColor} bg-white rounded-sm`}
      />
      {!isValid && <div className="text-red-500">{errorMessage}</div>}
    </div>
  );
};

export default TextAreaInput;
