import { useState } from "react";
import { useCreateProject } from "../../api/project";
import Modal from "../Modal";
import FileUploadBox from "../FileUploadBox";
import TextInput from "../TextInput";
import Button from "../Button";

const ProjectAddBtn = () => {
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
      description: "",
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("입력값:", formData);
    console.log("파일", file);
    mutate({ title: formData.title });
    setIsModalOpen(false);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div
        onClick={modalOpen}
        className="w-11 h-11 rounded-[6px] border border-black flex items-center justify-center text-2xl text-black cursor-pointer hover:bg-gray-300"
      >
        +
      </div>
      <Modal
        width={560}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="text-2xl font-bold">새 프로젝트 생성</div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center w-full gap-3"
        >
          <FileUploadBox onFileSelect={(f) => setFile(f)} />
          <TextInput
            inputType="text"
            label="프로젝트명"
            name="title"
            placeholder="프로젝트 제목을 입력해주세요."
            value={formData.title}
            onChange={onChange}
          />
          <TextInput
            inputType="textarea"
            label="설명"
            name="description"
            placeholder="프로젝트에 대해 설명해주세요."
            value={formData.description}
            onChange={onChange}
          />
          <div className="flex self-end gap-2">
            <Button
              buttonType="button"
              label="취소"
              colorType="secondary"
              onClick={() => setIsModalOpen(false)}
            />
            <Button buttonType="submit" label="생성" colorType="primary" />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ProjectAddBtn;
