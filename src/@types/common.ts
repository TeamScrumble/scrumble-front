export type Field = {
  value: string;
  isValid: boolean;
  message: string;
}

export type State = Record<string, Field>;