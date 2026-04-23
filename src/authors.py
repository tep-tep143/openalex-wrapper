import requests

BASE_URL = "https://api.openalex.org"

def search_authors(name: str):
    response = requests.get(f"{BASE_URL}/authors", params={"search": name})
    return response.json()