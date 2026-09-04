console.log();

async function main() {
  const id = localStorage.getItem("id")
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
}