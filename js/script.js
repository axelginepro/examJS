// Changement d'image toutes les 25 secondes

let images = [
    "images/background.jpg",
    "images/background2.jpg",
    "images/background3.jpg"
  ]

let imageChg = document.getElementById("backgroundImg");
let i = 0;
setInterval(function() {
    imageChg.style.backgroundImage = "url(" + images[i] + ")";
    i = i + 1;
    if (i == images.length) {
    i =  0;
    }
}, 1500);


// Changement de voitures au click

let containerVoiture = document.querySelector('.voiture'); 
let image = document.querySelector('.btnVoiture img');



let counter = 0;
containerVoiture.addEventListener('click', slide);


function slide() {
    if (counter == 4) {
        counter = 0;
    } 
    counter++;
    image.src = './images/vehicule' + counter + '.png';
}







// Load Scroll

$( ".voiture" ).clone().appendTo( document.body );
$( ".voiture" ).clone().appendTo( document.body );
$( ".voiture" ).clone().appendTo( document.body );
$( ".voiture" ).clone().appendTo( document.body );
$( window ).scroll(function() {
  $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
});