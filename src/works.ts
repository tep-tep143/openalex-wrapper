import axios from "axios";

const BASE_URL = "https://api.openalex.org";

export async function searchWorks(query: string) {
  const response = await axios.get(`${BASE_URL}/works`, {
    params: { search: query },
  });
  return response.data;
}

export async function getWorkById(id: string) {
  const response = await axios.get(`${BASE_URL}/works/${id}`);
  return response.data;
}