import { ProductBacklog } from "../../@types/product-backlog";
import { API_BASE_URL, CR } from "../common";

export const CREATE_PRODUCT_BACKLOG_QK = "createProductBacklog"

export type Req = {
  productBacklogRowid: number;
  title: string;
  description: string;
};

export type Res = ProductBacklog;

export const createProductBacklog = async (
  request: Req
): Promise<CR<Res>> => {
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