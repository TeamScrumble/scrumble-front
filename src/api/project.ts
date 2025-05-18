import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL, CommonResponse } from "./common";

export type Project = {
  rowid: number;
  title: string;
  regDate: Date;
};

export async function fetchProject(): Promise<FetchProjectResponse> {
  const res = await fetch(`${API_BASE_URL}/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!res.ok) throw new Error("fetchProject response was not ok");
  return res.json();
}

export type FetchProjectResponse = CommonResponse & {
  data: {
    projects: Project[];
  }
}

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

export type CreateProjectResponse = CommonResponse & {
  data: {
    rowid: number;
  }
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({  
    mutationFn: createProject,
    onSuccess: () => {
      // Create 성공이후, 리패칭
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
    onError: (error) => {
      console.error("요청 실패:", error);
    },
  });
};
