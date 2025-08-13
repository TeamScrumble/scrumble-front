import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, CR } from "../common";

export const CREATE_PROJECT_QK = "createProject";

export type Req = {
  title: string;
  description: string;
  thumbnail: File | null;
};

export type Res = {
  projectRowid: number;
};

const createProject = async (request: Req): Promise<CR<Res>> => {
  const formData = new FormData();
  const requestBlob = new Blob(
    [
      JSON.stringify({
        title: request.title.trim(),
        description: request.description.trim(),
      }),
    ],
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
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createProject,
    onSuccess: ({ data }) => {
      // Create 성공이후, 리패칭
      queryClient.invalidateQueries({
        queryKey: [CREATE_PROJECT_QK],
      });
      navigate(`/project/${data.projectRowid}/dashboard`);
    },
    onError: (error) => {
      console.error("요청 실패:", error);
    },
  });
};
