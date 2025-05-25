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

const TextInput = ({
  label,
  name,
  value,
  placeholder = "",
  required = false,
  isError,
  errorMessage = "",
  onChange,
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
        placeholder={placeholder}
        className={`flex items-center self-stretch h-12 gap-6 pt-3 pb-3 pl-4 pr-4 bg-white border rounded-sm ${
          !isError ? "border-slate-200" : "border-red-500"
        }`}
      />
      {isError && <div className="text-red-500">{errorMessage}</div>}
    </div>
  );
};

export default TextInput;
