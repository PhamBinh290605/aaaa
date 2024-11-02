const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }
);

document.querySelectorAll(".item").forEach((item) => observer.observe(item));

var mobileMenu = document.getElementById("mobile-menu");
var openMenu = document.getElementById("open");
var btnMenu = document.getElementById("header-btn");
var check = true;
mobileMenu.onclick = function () {
  if (check === true) {
    openMenu.style.display = "flex";
    btnMenu.style.top = "17%";
    check = false;
  } else {
    openMenu.style.display = "none";
    check = true;
    btnMenu.style.top = "50%";
  }
};

// function redirectToPage() {
//   window.location.href = "/Login-form/html/signin.html";
// }
