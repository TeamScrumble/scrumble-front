import { API_BASE_URL } from "./baseUrl"

export async function fetchProject(): Promise<FetchProjectResponse[]> {
  const res = await fetch(`${API_BASE_URL}/project`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (!res.ok) throw new Error('fetchProject response was not ok');
  return res.json();
}

export type FetchProjectResponse = {
  rowid: number,
  title: string,
  regDate: Date
}

export async function createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
  const res = await fetch(`${API_BASE_URL}/project`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });
  if (!res.ok) throw new Error('createProject response was not ok');
  return res.json();
}

export type CreateProjectRequest = {
  title: string
}

export type CreateProjectResponse = {
  rowid: number
}