hamburgerMenu = document.querySelector('.hamburger-menu');
//hamburgerLines = document.querySelectorAll('.hamburger');
leftMenu = document.querySelector('#left-menu');
mainContentMenu = document.querySelector('#main-content .hamburger-menu');
mainContentContainer = document.querySelector('#main-content .container');
filter = document.querySelector('#filter');

hamburgerMenu.addEventListener('click', function(e){
    leftMenu.style.transition = "transform 1s ease";
    leftMenu.style.transform= "translate(-150%)";
    mainContentContainer.style.margin = "5% 15% 0 15%";
    mainContentContainer.style.transition = "width 0.8s ease";
    mainContentContainer.style.width= "70%";
});

mainContentMenu.addEventListener('click', function(e){
  leftMenu.style.transition = "transform 1s ease";
  leftMenu.style.transform= "translate(0)";
  mainContentContainer.style.margin = "5% 15% 0% 15%;";
  mainContentContainer.style.transition = "width 0.8s ease";
  mainContentContainer.style.width= "55%";
});
