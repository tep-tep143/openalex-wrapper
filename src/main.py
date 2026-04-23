from works import search_works, get_work_by_id
from authors import search_authors

def main():
    print("=== Searching Works ===")
    works = search_works("machine learning")
    print(works["results"][0])

    print("\n=== Searching Authors ===")
    authors = search_authors("Geoffrey Hinton")
    print(authors["results"][0])

if __name__ == "__main__":
    main()