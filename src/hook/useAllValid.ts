import { useMemo } from "react";
import { State } from "../@types/common";

/**
 * State 객체의 모든 필드의 isValid가 true인지 실시간으로 반환하는 hook
 * @param formData State 타입의 객체
 * @returns boolean (모든 필드가 유효하면 true)
 */
const useAllValid = (formData: State): boolean => {
  return useMemo(
    () => Object.values(formData).every(field => field.isValid),
    [formData]
  );
};

export default useAllValid;