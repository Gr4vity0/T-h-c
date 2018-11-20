var prevScrollpos = window.pageYOffset;
console.log(prevScrollpos);
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.display = "block";
  } else {
    document.querySelector(".navbar").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}