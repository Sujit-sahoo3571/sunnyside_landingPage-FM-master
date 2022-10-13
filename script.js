

const menu = document.querySelector(".hamburger");
const navList = document.querySelector(".navLists");
console.log(navList);

// Toggle Burger menu on mobile
menu.addEventListener("click", () => {
  navList.classList.toggle("active");
});
