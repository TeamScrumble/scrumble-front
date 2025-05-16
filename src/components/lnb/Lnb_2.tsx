import { useState } from "react";
import { useCreateProject } from "../../api/project";
import Modal from "../Modal";
import FileUploadBox from "../FileUploadBox";
import TextInput from "../TextInput";
import Button from "../Button";

interface Lnb2Props {
  isOpen: boolean
}

const Lnb_2: React.FC<Lnb2Props> = ({isOpen}) => {
  const { mutate } = useCreateProject();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
      title: "",
      description: "",
    });
  
    const modalOpen = () => {
      setIsModalOpen(true);
      setFile(null);
      setFormData({
        title: "",
        description: ""
      })
    }
  
    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("입력값:", formData);
      console.log("파일", file)
      mutate({ title: formData.title });
      setIsModalOpen(false);
    };
  
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };
  
  return (
    <div className="flex text-[#1A1A1A] " style={{ height: "calc(100vh - 66px)",borderRight: "1px solid #E1E1E2"  }}>
      {/* Sidebar */}
      <div
        className={`bg-white px-3 py-7 transition-all duration-500 ${
          isOpen ? 'w-64' : 'w-18'
        }`}
      >
        <div className="whitespace-nowrap">LNB_2</div>
        <button onClick={modalOpen}>프로젝트 생성</button>
        <Modal width={560} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="text-2xl font-bold">새 프로젝트 생성</div>
          <form onSubmit={onSubmit} className="flex flex-col items-center w-full gap-3">
            <FileUploadBox onFileSelect={(f) => setFile(f)}/>
            <TextInput inputType="text" label="프로젝트명" name="title" placeholder="프로젝트 제목을 입력해주세요." value={formData.title} onChange={onChange}/>
            <TextInput inputType="textarea" label="설명" name="description" placeholder="프로젝트에 대해 설명해주세요." value={formData.description} onChange={onChange}/>
            <div className="flex self-end gap-2">
              <Button buttonType="button" label="취소" colorType="secondary" onClick={() => setIsModalOpen(false)}/>
              <Button buttonType="submit" label="생성" colorType="primary"/>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Lnb_2