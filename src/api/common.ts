export const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

// CommonResponse
export type CR<T = unknown> = {
  status: string;
  data: T;
}