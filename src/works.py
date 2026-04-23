import requests

BASE_URL = "https://api.openalex.org"

def search_works(query: str):
    response = requests.get(f"{BASE_URL}/works", params={"search": query})
    return response.json()

def get_work_by_id(id: str):
    response = requests.get(f"{BASE_URL}/works/{id}")
    return response.json()