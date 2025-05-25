export interface Valid {
  isValid: boolean;
  message: string;
}

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
