import { searchWorks, getWorkById } from "./works.js";
import { searchAuthors } from "./authors.js";

async function main() {
  console.log("=== Searching Works ===");
  const works = await searchWorks("machine learning");
  console.log(works.results[0]);

  console.log("=== Searching Authors ===");
  const authors = await searchAuthors("Geoffrey Hinton");
  console.log(authors.results[0]);
}

main().catch(console.error);