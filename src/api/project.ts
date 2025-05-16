import { useMutation } from "@tanstack/react-query";
import { API_BASE_URL } from "./baseUrl";

export async function fetchProject(): Promise<FetchProjectResponse[]> {
  const res = await fetch(`${API_BASE_URL}/project`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!res.ok) throw new Error("fetchProject response was not ok");
  return res.json();
}

export type FetchProjectResponse = {
  rowid: number;
  title: string;
  regDate: Date;
};

async function createProject(
  request: CreateProjectRequest
): Promise<CreateProjectResponse> {
  const res = await fetch(`${API_BASE_URL}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
    credentials: "include",
  });
  if (!res.ok) throw new Error("createProject response was not ok");
  return res.json();
}

export type CreateProjectRequest = {
  title: string;
};

export type CreateProjectResponse = {
  rowid: number;
};

export const useCreateProject = () => {
  return useMutation({
    mutationFn: createProject,
    onSuccess: (data) => {
      console.log("요청 성공:", data);
    },
    onError: (error) => {
      console.error("요청 실패:", error);
    },
  });
};
