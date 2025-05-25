import { isBlank, maxLength, validate, Validators } from "./common";

export const titleValidator = validate(
  isBlank("프로젝트명을 입력해 주세요."),
  maxLength(30, "프로젝트명을 30자 이내로 입력해 주세요.")
);

export const descriptionValidator = validate(
  maxLength(150, "프로젝트 설명을 150자 이내로 입력해 주세요.")
);

export const createProjectValidators: Validators = {
  title: titleValidator,
  description: descriptionValidator,
}