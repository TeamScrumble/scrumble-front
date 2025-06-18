export interface Valid {
  isValid: boolean;
  message: string;
}

export type Validators = Record<string, (value: string) => Valid>

export const valid = (message: string = ""): Valid => ({
  isValid: true,
  message,
});

export const invalid = (message: string): Valid => ({
  isValid: false,
  message,
});

export const validate =
  (...validators: ((v: string) => Valid)[]) =>
  (value: string): Valid => {
    for (const validator of validators) {
      const result = validator(value);
      if (!result.isValid) return result;
    }
    return valid();
  };

export const isBlank = (message: string) => (v: string) =>
  v.trim().length == 0 ? invalid(message) : valid();

export const maxLength = (max: number, message: string) => (v: string) =>
  v.length > max ? invalid(message) : valid();


export const minLength = (min: number, message: string) => (v: string) =>
  v.length < min ? invalid(message) : valid();

// 한글, 영문, 숫자, 언더스코어(_)만 허용하는 validator
export const onlyKorEngNumUnder = (message: string) => (v: string) =>
  /^[\uAC00-\uD7A3a-zA-Z0-9_]+$/.test(v) ? valid() : invalid(message);
