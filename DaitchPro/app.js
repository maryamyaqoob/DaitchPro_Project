document.addEventListener("mousemove", function(e) {
  const bg = document.querySelector(".bg-grid");
  bg.style.setProperty("--x", e.clientX + "px");
  bg.style.setProperty("--y", e.clientY + "px");
});


const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  const title = item.querySelector(".accordion-title");

  title.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
