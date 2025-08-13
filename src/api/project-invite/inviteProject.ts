import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL, CR } from "../common";

export const INVITE_PROJECT_QK = "inviteProject"

type Req = {
  email: string;
  projectRowid: number;
};

type Res = {
  projectInviteRowid: number;
}

const inviteProject = async (
  request: Req
): Promise<CR<Res>> => {
  const res = await fetch(`${API_BASE_URL}/project-invite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
    credentials: "include",
  });
  if (!res.ok) throw new Error("inviteProject response was not ok");
  return res.json();
};

export const useInviteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({  
    mutationFn: inviteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [INVITE_PROJECT_QK],
      });
    },
    onError: (error) => {
      console.error("요청 실패:", error);
    },
  });
};