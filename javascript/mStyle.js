alert("hi");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}





/*

var slideIndex = 1;
alert("slideIndex is " + slideIndex);
showSlides();




function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
  alert("slideIndex is " + slideIndex);
}

function currentSlide(n) {
  slideIndex =n;
  showSlides(slideIndex);
}

function showSlides() {



  var idName = "slide" + slideIndex;
  alert("in showSlided idName is " + idName);
  var currentSlide = document.getElementById(idName);
  currentSlide.style.display= "none";

  slideIndex++;

  if(slideIndex >= 8){
    slideIndex = 1;
  }

  idName = "slide " + slideIndex;
   alert("in showSlided idName is " + idName);
  currentSlide.style.display= "block";



}

*/

/*

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
*/



