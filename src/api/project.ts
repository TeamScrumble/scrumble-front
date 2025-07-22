import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, CR } from "./common";

export type Project = {
  rowid: number;
  title: string;
  regDate: Date;
};

export const getProject = async (): Promise<CR<GetProject>> => {
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


export type GetProject = {
  projects: Project[];
}

const createProject = async (
  request: CreateProjectRequest
): Promise<CR<CreateProject>> => {
  const formData = new FormData();
  const requestBlob = new Blob(
  [JSON.stringify({
    title: request.title.trim(),
    description: request.description.trim()
  })], 
  { type: "application/json" }
);
formData.append("request", requestBlob);

  // 파일이 올 경우에만 파일 넣어주기
  if (request.thumbnail) {
    formData.append("thumbnail", request.thumbnail);
  }

  const res = await fetch(`${API_BASE_URL}/project`, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  
  return res.json();
}

export type CreateProjectRequest = {
  title: string;
  description: string;
  thumbnail: File | null;
};

export type CreateProject = {
  projectRowid: number;
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
      navigate(`/project/${data.projectRowid}/dashboard`);
    },
    onError: (error) => {
      console.error("요청 실패:", error);
    },
  });
};
