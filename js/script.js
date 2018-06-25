leftHamburgerMenu = document.querySelector('#left-menu .hamburger-menu');
leftMenu = document.querySelector('#left-menu');
mainContentMenu = document.querySelector('#main-content .hamburger-menu');
mainContentContainer = document.querySelector('#main-content .container');
filter = document.querySelector('#filter');

leftHamburgerMenu.addEventListener('click', function(e){
    leftMenu.style.transition = "transform 1s ease";
    leftMenu.style.transform= "translate(-150%)";
    if(window.matchMedia("(min-width: 300px) and (max-width: 800px)").matches){
      mainContentContainer.style.width= "80%";
      mainContentContainer.style.margin="5% 10% 0% 10%";
<<<<<<< HEAD
      mainContentContainer.style.overflow="auto";
=======
>>>>>>> ac3aeab1c589839f8b4d9c251f538512b79e168b
    } else{
    mainContentContainer.style.margin = "5% 15% 0 15%";
    mainContentContainer.style.transition = "width 0.8s ease";
    mainContentContainer.style.width= "70%";
  }
});

mainContentMenu.addEventListener('click', function(e){
  leftMenu.style.transition = "transform 1s ease";
  leftMenu.style.transform= "translate(0)";

  if(window.matchMedia("(min-width: 300px) and (max-width: 500px)").matches){
    mainContentContainer.style.width= "80%";
    mainContentContainer.style.margin="5% 10% 0% 10%";
  } else{
  mainContentContainer.style.margin = "5% 15% 0% 15%";
  mainContentContainer.style.transition = "width 0.8s ease";
  mainContentContainer.style.width= "55%";
  }
});
