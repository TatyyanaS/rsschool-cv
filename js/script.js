let links = document.querySelectorAll("nav a");
let linkTargets = document.querySelectorAll("[id]");

function addClass(d) {
  linkTargets[d].classList.add("to_link");
}

function removeClass() {
  linkTargets.forEach((item) => {
    item.classList.remove("to_link");
  });
}

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    removeClass();
    addClass(i);
  });
});