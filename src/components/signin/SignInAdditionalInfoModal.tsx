import React, { useState } from "react";
import Modal from "../common/Modal";
import TextInput from "../common/TextInput";
import useCheckingSet from "../../hook/useCheckingSet";
import { State } from "../../@types/common";
import { createUserValidators } from "../../validation/user";
import useAllValid from "../../hook/useAllValid";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (data: { nickname: string; role: string; }) => void;
  email?: string;
};

const SignInAdditionalInfoModal = ({ isOpen, onClose, onComplete, email }: Props) => {
  const [formData, setFormData] = useState<State>({
    nickName: { value: "", isValid: false, message: "" },
    customRole: { value: "", isValid: false, message: "" }
  });
  const allValid = useAllValid(formData)
  const { checkField } = useCheckingSet(createUserValidators, setFormData);
  const [role, setRole] = useState("");
  const [customRole, setCustomRole] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const roleOptions = [
    // 일단 더미 데이터
    { value: "custom", label: "Custom Role (Enter manually)" },
    { value: "developer", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "pm", label: "PM" }
  ];

  const selectRoleHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    if (selectedRole !== "custom") {
      setCustomRole(""); // Custom이 아닐 경우 커스텀 역할 초기화
      checkField("customRole", "");
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = () => {

  };

  return (
    <Modal width={408} isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col bg-white h-207 w-full">
        {/* 타이틀 */}
        <div className="text-2xl font-semibold mb-5 pb-4 border-b border-[#DBDEE3]">추가 정보 입력</div>
        
        {/* 이미지 가이드 영역 */}
        <div className="w-full bg-[#FFEDDF] rounded px-2 py-2 mb-5">
          <div className="flex">
            <img src="/info-circle-filled-orange.svg" alt="Info" className="mr-1"/>
            <div className="text-[#FB923C] text-sm font-bold">이미지 가이드</div>
          </div>
          <div className="text-xs ml-3">
            <div>• 10MB 이하의 JPG, JPEG, PNG 파일</div>
            <div>• 권장 사이즈: 1:1 비율 (512x512px)</div>
          </div>
        </div>
        
        {/* 프로필 이미지 영역 */}
        <div className="relative mb-7.5">
          <label className="inline-block cursor-pointer w-fit">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <img
              src={imageUrl || "/scrumble.svg"}
              alt="profile"
              className="w-[150px] h-[150px] rounded-full object-cover border"
            />
            <img src="/camera.svg" alt="" className="absolute bottom-2 left-30 bg-black bg-opacity-60 rounded-full p-1 w-7.5 h-7.5 p-1.5" />
          </label>
        </div>

        {/* Nickname */}
        <div className="w-full mb-4">
          <TextInput
            label="Nickname"
            name="title"
            placeholder="프로젝트 제목을 입력해주세요."
            value={formData.nickName.value}
            required={true}
            isValid={formData.nickName.isValid}
            errorMessage={""}
            onChange={(e) => checkField("nickName", e.target.value)}
            onBlur={(e) => checkField("nickName", e.target.value)}
          />
          {/* 밸리데이션에 대해서 어떻게 해야할 지 고민해봐야겠음 */}
          <div className="flex flex-col gap-1.5 mt-1 text-xs">
            {(formData.nickName.isValid && formData.nickName.message !== "length") ? (
              <div className="text-green-600">✔ 최소 2자 이상 15자 이하로 입력해 주세요.</div>
            ) : (
              <div className="text-red-500">✖ 최소 2자 이상 15자 이하로 입력해 주세요.</div>
            )}
            {(formData.nickName.isValid && formData.nickName.message !== "onlyKorEngNumUnder") ? (
              <div className="text-green-600">✔ 한글, 영문, 숫자, 언더스코어(_)만 사용할 수 있어요.</div>
            ) : (
              <div className="text-red-500">✖ 한글, 영문, 숫자, 언더스코어(_)만 사용할 수 있어요.</div>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="w-full mb-7.5">
          <div className="block text-sm font-medium mb-2.5">Email</div>
          <div className="w-full rounded px-2.5 py-3 text-sm bg-[#7176800D] text-[#BCC0C6]">
            {email || "scrumble@gmail.com"}
          </div>
        </div>

        {/* Role */}
        <div className="w-full mb-6">
          <div className="block text-sm font-medium mb-2.5">
            Role <span className="text-red-500">*</span>
          </div>

          <select
            className="w-full border border-[#DBDEE3] rounded px-2.5 py-3 text-sm"
            value={role}
            onChange={e => selectRoleHandler(e)}
          >
            {roleOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {role === "custom" && (
            <div className="mt-1">
              <TextInput
                label=""
                name="customRole"
                placeholder="직무를 직접 입력해 주세요."
                value={formData.customRole.value}
                required={true}
                isValid={formData.customRole.isValid}
                errorMessage={formData.customRole.message}
                onChange={(e) => checkField("customRole", e.target.value)}
                onBlur={(e) => checkField("customRole", e.target.value)}
              />
            </div>
          )}
        </div>
        {/* 완료 버튼 */}
        <button
          className={`w-full py-3 rounded bg-gray-300 text-white font-semibold text-base ${allValid && (role || customRole) ? "bg-orange-400 hover:bg-orange-500 cursor-pointer" : "cursor-not-allowed"}`}
          // disabled={!(isNicknameValid && isNicknameFormat && (role || customRole))}
          onClick={handleSubmit}
        >
          완료
        </button>
      </div>
    </Modal>
  );
};

export default SignInAdditionalInfoModal;