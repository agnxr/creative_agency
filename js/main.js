//hambuerger menu X
function myFunction(x) {
    x.classList.toggle("change");
}


function resizeHeaderOnScroll() {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.querySelector(".navigation");
    
    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
      headerEl.classList.remove("bigger");
    } else {
      headerEl.classList.remove("smaller");
      headerEl.classList.add("bigger");
    }
  }
  
  window.addEventListener('scroll', resizeHeaderOnScroll);


//form validation


