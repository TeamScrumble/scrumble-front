import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CR, API_BASE_URL } from "../common";

export const ACCEPT_INVITATION_QK = "acceptInvitation"

type Res = {
  projectInviteRowid: number;
}

const acceptInvitation = async (code: string): Promise<CR<Res>> => {
  const params = new URLSearchParams({
    code: code
  })
  const res = await fetch(`${API_BASE_URL}/project-invite/?${params.toString()}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!res.ok) throw new Error("inviteProject response was not ok");
  return res.json();
};

export const useAcceptInvitation = () => {
  const queryClient = useQueryClient();
  return useMutation({  
    mutationFn: acceptInvitation,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ACCEPT_INVITATION_QK],
      });
    },
    onError: (error) => {
      console.error("요청 실패:", error);
    },
  });
};