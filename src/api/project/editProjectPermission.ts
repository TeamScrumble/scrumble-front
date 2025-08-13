import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL, CR } from "../common";

export const EDIT_PROJECT_PERMISSION_QK = "editProjectPermission";

export type Req = {
  projectRowid: number;
  memberRowid: number;
  permission: string;
};

export type Res = {
  projectMemberRowid: number;
};

const editProjectPermission = async (
  request: Req
): Promise<CR<Res>> => {
  const res = await fetch(`${API_BASE_URL}/project-member/permission`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
    credentials: "include",
  });
  if (!res.ok) throw new Error("createProject response was not ok");
  return res.json();
}

export const useEditProjectPermission = () => {
  const queryClient = useQueryClient();
  return useMutation({  
    mutationFn: editProjectPermission,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [EDIT_PROJECT_PERMISSION_QK],
      });
    },
    onError: (error) => {
      console.error("요청 실패:", error);
    },
  });
};