import { API_BASE_URL, CommonResponse } from "./common";

export type ProductBacklog = {
  productBacklogRowid: number;
  title: string;
  description: string;
  regDate: Date;
}

export async function fetchProductBacklog(
  request: FetchProductBacklogRequest
): Promise<FetchProductBacklogResponse> {
  const res = await fetch(`${API_BASE_URL}/product-backlogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export type FetchProductBacklogRequest = {
  projectRowid: number;
};

export type FetchProductBacklogResponse = CommonResponse & {
  data: ProductBacklog[];
};

export async function createProductBacklog(
  request: CreateProductBacklogRequest
): Promise<CreateProductBacklogResponse> {
  const res = await fetch(`${API_BASE_URL}/product-backlog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
    credentials: "include",
  });

  if (!res.ok) throw new Error("User creation failed");
  return res.json();
}

export type CreateProductBacklogRequest = {
  productBacklogRowid: number;
  title: string;
  description: string;
};

export type CreateProductBacklogResponse = CommonResponse & {
  data: ProductBacklog;
};
