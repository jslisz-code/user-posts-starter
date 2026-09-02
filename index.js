API 1: "https://jsonplaceholder.typicode.com/users"
API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const usersListEl = document.querySelector('.users-list');
async function main() {
  console.log(await fetch("https://jsonplaceholder.typicode.com/users"))
  const usersData = await users.json();
  usersListEl.innerHTML = usersData.map((user) => userHTML(user)).join('');
}

main();

function showUserPost(id) {
  window.location.href = `https://127.0.0.1:5500/post.html`;
  console.log(id);
}



function userHtml(id) {
  return `<div class="user-card" onclick="showUserPost(${user.id})">
    <div class="user">
      <h2>${user.name}</h2>
      <p><b>Email: ${user.email}</b></p>
      <p><b>Phone: ${user.phone}</b></p>
      <p><b>Website: <a href="https://${user.website}" 
      target="_blank">${user.website}
      </a></p>
    </div>
  </div>
  `;
}