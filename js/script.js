hamburgerMenu = document.querySelector('.hamburger-menu');
//hamburgerLines = document.querySelectorAll('.hamburger');
leftMenu = document.querySelector('#left-menu');
mainContentMenu = document.querySelector('#main-content .hamburger-menu');
filter = document.querySelector('#filter');

hamburgerMenu.addEventListener('click', function(e){
    leftMenu.style.transition = "transform 1s ease";
    leftMenu.style.transform= "translate(-150%)";
});

mainContentMenu.addEventListener('click', function(e){
  leftMenu.style.transition = "transform 1s ease";
  leftMenu.style.transform= "translate(0)";
});
