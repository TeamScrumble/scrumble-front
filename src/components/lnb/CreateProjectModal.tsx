import { useCallback, useMemo, useState } from "react";
import { useCreateProject } from "../../api/project";
import Modal from "../common/Modal";
import FileUploadBox from "../common/FileUploadBox";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import TextAreaInput from "../common/TextAreaInput";
import { descriptionValidator, titleValidator } from "../../validation/project";
import { State } from "../../@types/common";
import useCheckingSet from "../../hook/useCheckingSet";
import { Validators } from "../../validation/common";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateProjectModal = ({ isOpen, onClose }: Props) => {
  const { mutate } = useCreateProject();
  const [, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<State>({
    title: { value: "", isValid: true, message: "" },
    description: { value: "", isValid: true, message: "" },
  });
  const validators: Validators = useMemo(() => ({
    title: titleValidator,
    description: descriptionValidator,
  }),[]);
  const { checkField } = useCheckingSet(validators, setFormData);

  const clear = useCallback(() => {
    setFile(null);
    setFormData({
      title: { value: "", isValid: true, message: "" },
      description: { value: "", isValid: true, message: "" },
    });
  }, []);

  const closeModal = useCallback(() => {
    onClose();
    clear();
  }, [clear, onClose]);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const check1 = checkField("title", formData.title.value);
      const check2 = checkField("description", formData.description.value);
      if (check1 && check2) {
        mutate({
          title: formData.title.value,
          description: formData.description.value,
        });
        closeModal();
      }
    },
    [
      checkField,
      formData.title.value,
      formData.description.value,
      mutate,
      closeModal,
    ]
  );

  return (
    <Modal width={560} isOpen={isOpen} onClose={closeModal}>
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
          value={formData.title.value}
          required={true}
          isValid={formData.title.isValid}
          errorMessage={formData.title.message}
          onChange={(e) => checkField("title", e.target.value)}
          onBlur={(e) => checkField("title", e.target.value)}
        />
        <TextAreaInput
          label="설명"
          name="description"
          placeholder="프로젝트에 대해 설명해주세요."
          value={formData.description.value}
          required={false}
          isValid={formData.description.isValid}
          errorMessage={formData.description.message}
          onChange={(e) => checkField("description", e.target.value)}
          onBlur={(e) => checkField("description", e.target.value)}
        />
        <div className="flex self-end gap-2">
          <Button
            buttonType="button"
            label="취소"
            colorType="secondary"
            onClick={closeModal}
          />
          <Button buttonType="submit" label="생성" colorType="primary" />
        </div>
      </form>
    </Modal>
  );
};

export default CreateProjectModal;
