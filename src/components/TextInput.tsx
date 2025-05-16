type Props = {
  inputType: INPUT_TYPES;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

type INPUT_TYPES = "text" | "textarea";

const TextInput = ({ inputType, label, name, value, placeholder = "", onChange }: Props) => {
  return (
    <div className="flex flex-col items-start gap-2.5 self-stretch">
      <div className="self-stretch leading-4 text-[16px] font-medium">{label}</div>
      {inputType == "text" && <input 
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="flex h-12 pt-3 pb-3 pl-4 pr-4 items-center gap-6 self-stretch border border-slate-200 bg-white rounded-sm"
      />}
      {inputType == "textarea" && <textarea 
        value={value}
        name={name}
        rows={3}
        onChange={onChange}
        placeholder={placeholder}
        className="flex h-[120px] pt-3 pb-3 pl-4 pr-4 items-center gap-6 self-stretch border border-slate-200 bg-white rounded-sm"
      />}
    </div>
  )
}

export default TextInput;
