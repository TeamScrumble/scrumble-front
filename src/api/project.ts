import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL, CommonResponse } from "./common";
import { useNavigate } from "react-router-dom";

export type Project = {
  rowid: number;
  title: string;
  regDate: Date;
};

export const getProject = async (): Promise<GetProjectResponse> => {
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

export type GetProjectResponse = CommonResponse & {
  data: {
    projects: Project[];
  }
}

const createProject = async (
  request: CreateProjectRequest
): Promise<CreateProjectResponse> => {
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
  description: string;
};

export type CreateProjectResponse = CommonResponse & {
  data: {
    projectRowid: number;
  }
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({  
    mutationFn: createProject,
    onSuccess: ({ data }) => {
      // Create 성공이후, 리패칭
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      navigate(`/project/${data.projectRowid}`);
    },
    onError: (error) => {
      console.error("요청 실패:", error);
    },
  });
};
