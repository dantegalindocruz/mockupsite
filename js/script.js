hamburgerMenu = document.querySelector('.hamburger-menu');
//hamburgerLines = document.querySelectorAll('.hamburger');
leftMenu = document.querySelector('#left-menu');
mainContent = document.querySelector('#main-content');
filter = document.querySelector('#filter');

hamburgerMenu.addEventListener('click', function(e){
    if(leftMenu.style.transform == 'translate(0px)') {
    leftMenu.style.transition = "transform 1s ease";
    leftMenu.style.transform= "translate(-150%)";
    hamburgerMenu.style.position= 'fixed';
    hamburgerMenu.style.width = '1.8%';
    mainContent.appendChild(hamburgerMenu);
 } else{
   leftMenu.style.transition = "transform 1s ease";
   leftMenu.style.transform= "translate(0)";
 }
})
