import { State } from "../@types/common";
import { Validators } from "../validation/common";

const useCheckingSet = (
  validators: Validators,
  setFormData: React.Dispatch<React.SetStateAction<State>>
) => {
  // 최신값을 유효성 검사한 뒤, setter로 적용합니다.
  const checkField = (fieldName: keyof State, value: string) => {
    const result = validators[fieldName](value);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: {
        value: value,
        isValid: result.isValid,
        message: result.message,
      },
    }));
    return result.isValid;
  };

  return {
    checkField,
  };
};

export default useCheckingSet;