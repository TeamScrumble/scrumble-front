import { isBlank, maxLength, minLength, onlyKorEngNumUnder, validate, Validators } from "./common";

export const nickNameValidator = validate(
  minLength(2, "Length"),
  maxLength(15, "Length"),
  onlyKorEngNumUnder("onlyKorEngNumUnder")
);

export const customRoleValidator = validate(
  isBlank("직무를 입력해 주세요.")
)

export const createUserValidators: Validators = {
  nickName: nickNameValidator,
  customRole: customRoleValidator
}