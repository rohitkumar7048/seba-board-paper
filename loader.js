var preloader = document.querySelector(".preloader");
var loading = document.querySelector(".loading");

window.addEventListener("load", function() {
  setTimeout(function() {
    loading.style.display = "none";
    preloader.style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 2000);
});

