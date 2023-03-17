// menu toggle responsive
function toggleMenu() {
    var x = document.getElementById("navbarShow");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // slider related item
  let defaultTransform = 0;
  function goNext() {
      defaultTransform = defaultTransform - 398;
      var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
      slider.style.transform = "translateX(" + defaultTransform + "px)";
  }
  next.addEventListener("click", goNext);
  function goPrev() {
      var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
      else defaultTransform = defaultTransform + 398;
      slider.style.transform = "translateX(" + defaultTransform + "px)";
  }
  prev.addEventListener("click", goPrev);

  
// slider product details
function thumbslide(smallImg){
  var fullImg = document.getElementById("imageFull");
  fullImg.src= smallImg.src;
}
  