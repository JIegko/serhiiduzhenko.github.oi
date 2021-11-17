
const colors = ['#FF7901', '#D66400', '#FF9B07', '#D98507', '#FFA27E', '#DB8B6B', '#FFCC01', '#FF611D', '#FF7E31', '#FEEAB1', '#FFF453']
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


let effect = document.getElementById("hoverEffect");

effect.addEventListener("mouseenter", function( event ) {

  event.target.style.color = `${getRandomColor()}`;
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


effect.addEventListener("mouseover", function( event ) {

  event.target.style.color = `${getRandomColor()}`;
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
