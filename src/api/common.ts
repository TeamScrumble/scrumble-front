export const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'}/api/v1`;

console.log('API_BASE_URL:', API_BASE_URL);

// CommonResponse
export type CR<T = unknown> = {
  status: string;
  data: T;
}