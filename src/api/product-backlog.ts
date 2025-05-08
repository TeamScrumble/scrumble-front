import { API_BASE_URL } from "./baseUrl"

export async function fetchProductBacklog(request: FetchProductBacklogRequest): Promise<FetchProductBacklogResponse> {
  const res = await fetch(`${API_BASE_URL}/product-backlog`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request)
  });
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}

export type FetchProductBacklogRequest = {
	projectRowid: number
}

export type FetchProductBacklogResponse = {
	productBacklogRowid: number,
	title: string,
  description: string,
	regDate: Date
}

export async function createProductBacklog(request: CreateProductBacklogRequest): Promise<CreateProductBacklogResponse> {
  const res = await fetch(`${API_BASE_URL}/product-backlog`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!res.ok) throw new Error('User creation failed');
  return res.json();
}

export type CreateProductBacklogRequest = {
  projectRowid: number,
  title: string,
  description: string,
}

export type CreateProductBacklogResponse = {
  productBacklogRowid: number,
	title: string,
	description: string,
	regDate: Date
}