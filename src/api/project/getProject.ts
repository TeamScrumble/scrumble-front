import { Project } from "../../@types/project";
import { API_BASE_URL, CR } from "../common";

export const GET_PROJECT_QK = "getProject"

export type Res = {
  projects: Project[];
}

export const getProject = async (): Promise<CR<Res>> => {
  const res = await fetch(`${API_BASE_URL}/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "omit",
  });
  if (!res.ok) throw new Error("fetchProject response was not ok");
  return res.json();
}