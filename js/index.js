let sections = document.querySelector("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((link) => {
    let top = window.scrollY;
    let offset = link.offsetTop - 150;
    let height = link.offsetHeight;
    let id = link.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((a) => {
        a.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
