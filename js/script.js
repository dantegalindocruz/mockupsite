hamburgerMenu = document.querySelector('#hamburger-menu');
hamburgerLines = document.querySelectorAll('.hamburger');
leftMenu = document.querySelector('#left-menu');

hamburgerMenu.addEventListener('click', function(e){
    leftMenu.style.transition = "width 2s";
    leftMenu.style.width= 0;
    hamburgerMenu.style.position='fixed';
    hamburgerMenu.style.left = '5px';
    hamburgerMenu.style.width = '2%';
    for(var i=0; i < hamburgerLines.length; i++){
    hamburgerLines[i].style.borderBottom="2px solid #000";
   }
})
