import { API_BASE_URL, CR } from "./common";

export type ProductBacklog = {
  productBacklogRowid: number;
  title: string;
  description: string;
  regDate: Date;
}

export const getProductBacklog = async (
  request: GetProductBacklogRequest
): Promise<CR<ProductBacklog>> => {
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

export type GetProductBacklogRequest = {
  projectRowid: number;
};

export const createProductBacklog = async (
  request: CreateProductBacklogRequest
): Promise<CR<ProductBacklog>> => {
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