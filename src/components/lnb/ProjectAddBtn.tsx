import { useCallback, useState } from "react";
import { useCreateProject } from "../../api/project";
import Modal from "../common/Modal";
import FileUploadBox from "../common/FileUploadBox";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import TextAreaInput from "../common/TextAreaInput";

const ProjectAddBtn = () => {
  const { mutate } = useCreateProject();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);

  const modalOpen = useCallback(() => {
    setIsModalOpen(true);
    setFile(null);
    setFormData({
      title: "",
      description: "",
    });
    setTitleError(false);
    setDescriptionError(false);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      let isTitleInvalid = false;
      if (formData.title.length > 30) {
        setTitleErrorMessage("프로젝트명을 30자 이내로 입력해 주세요.");
        isTitleInvalid = true;
      } else if (formData.title.trim().length < 1) {
        setTitleErrorMessage("프로젝트명을 입력해 주세요.");
        isTitleInvalid = true;
      }

      const isDescriptionInvalid = formData.description.length > 150;

      setTitleError(isTitleInvalid);
      setDescriptionError(isDescriptionInvalid);

      if (!isTitleInvalid && !isDescriptionInvalid) {
        mutate({
          title: formData.title,
        });
        setIsModalOpen(false);
      }
    },
    [formData, mutate]
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    [setFormData]
  );

  return (
    <>
      {/* 모달 오픈 버튼 */}
      <div
        onClick={modalOpen}
        className="w-11 h-11 rounded-[6px] border border-black flex items-center justify-center text-2xl text-black cursor-pointer hover:bg-gray-300"
      >
        +
      </div>
      {/* 모달창 */}
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
            label="프로젝트명"
            name="title"
            placeholder="프로젝트 제목을 입력해주세요."
            value={formData.title}
            required={true}
            isError={titleError}
            errorMessage={titleErrorMessage}
            onChange={onChange}
          />
          <TextAreaInput
            label="설명"
            name="description"
            placeholder="프로젝트에 대해 설명해주세요."
            value={formData.description}
            required={false}
            isError={descriptionError}
            errorMessage={"프로젝트 설명을 150자 이내로 입력해 주세요."}
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
