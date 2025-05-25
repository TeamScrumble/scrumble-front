type Props = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  required: boolean;
  isValid: boolean;
  errorMessage: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement>
  ) => void;
};

const TextInput = ({
  label,
  name,
  value,
  placeholder = "",
  required = false,
  isValid,
  errorMessage = "",
  onChange,
  onBlur,
}: Props) => {
  return (
    <div className="flex flex-col items-start gap-2.5 self-stretch">
      <div className="self-stretch leading-4 text-[16px] font-medium">
        {label}
        {required && <span className="text-red-500">*</span>}
      </div>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`flex items-center self-stretch h-12 gap-6 pt-3 pb-3 pl-4 pr-4 bg-white border rounded-sm ${
          isValid ? "border-slate-200" : "border-red-500"
        }`}
      />
      {!isValid && <div className="text-red-500">{errorMessage}</div>}
    </div>
  );
};

export default TextInput;
