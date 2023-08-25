
// button top
let btnScrollToTop = document.querySelector("#btnScrollToTop");
  btnScrollToTop.addEventListener("click", function () {
     window.scrollTo({
     top: 0,
     left: 0,
     behavior: "smooth"
   });
});

// change bg nav

function changeBg(){
  var navbar = document.getElementById('navbar')
  var scrollValue = window.scrollY;

if(scrollValue > 290){
  navbar.classList.add ('navbar-scrolled');
}else{
  navbar.classList.remove('navbar-scrolled');
}}
window.addEventListener('scroll', changeBg);


// chahge nav text color --???

function chahgeNavText(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    // console.log(scrollValue);

  if (scrollValue >= innerHeight){
     navbar.classList.add('navtext-scrolled');
  }else{
  navbar.classList.remove('navtext-scrolled');
}}
document.addEventListener('scroll', chahgeNavText);



