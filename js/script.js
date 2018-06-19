hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerLines = document.querySelectorAll('.hamburger');
leftMenu = document.querySelector('#left-menu');
mainContent = document.querySelector('#main-content');
filter = document.querySelector('#filter');

hamburgerMenu.addEventListener('click', function(e){
    if(leftMenu.style.width=="16.5%"){
    leftMenu.style.transition = "width 1s";
    leftMenu.style.width= 0;
    hamburgerMenu.style.position= 'fixed';
    hamburgerMenu.style.width = '1.5%';
 } else{
   leftMenu.style.width='16.5%';
 }
})
