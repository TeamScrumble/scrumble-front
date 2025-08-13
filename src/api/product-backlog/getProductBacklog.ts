import { ProductBacklog } from "../../@types/product-backlog";
import { API_BASE_URL, CR } from "../common";

export const GET_PRODUCT_BACKLOG_QK = "getProductBacklog"

export type Req = {
  projectRowid: number;
};

export type Res = ProductBacklog;

export const getProductBacklog = async (
  request: Req
): Promise<CR<Res>> => {
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