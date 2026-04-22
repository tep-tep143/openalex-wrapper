import axios from "axios";

const BASE_URL = "https://api.openalex.org";

export async function searchAuthors(name: string) {
  const response = await axios.get(`${BASE_URL}/authors`, {
    params: { search: name },
  });
  return response.data;
}