hamburgerMenu = document.querySelector('.hamburger-menu');
leftMenu = document.querySelector('#left-menu');
mainContentMenu = document.querySelector('#main-content .hamburger-menu');
mainContentContainer = document.querySelector('#main-content .container');
filter = document.querySelector('#filter');

hamburgerMenu.addEventListener('click', function(e){
    leftMenu.style.transition = "transform 1s ease";
    leftMenu.style.transform= "translate(-150%)";
    if(window.matchMedia("(min-width: 300px) and (max-width: 800px)").matches){
      mainContentContainer.style.width= "80%";
      mainContentContainer.style.margin="5% 10% 0% 10%";
    } else{
    mainContentContainer.style.margin = "5% 15% 0 15%";
    mainContentContainer.style.transition = "width 0.8s ease";
    mainContentContainer.style.width= "70%";
  }
});

mainContentMenu.addEventListener('click', function(e){
  leftMenu.style.transition = "transform 1s ease";
  leftMenu.style.transform= "translate(0)";

  /*if(window.matchMedia("(min-width: 300px) and (max-width: 500px)").matches){
    mainContentContainer.style.width= "60%";
    mainContentContainer.style.margin="5% 10% 0% 10%";
  } else{
  mainContentContainer.style.margin = "5% 15% 0% 15%;";
  mainContentContainer.style.transition = "width 0.8s ease";
  mainContentContainer.style.width= "55%";
  }
});
