document.addEventListener('mousemove', mouseCoords);

let x, y;
function mouseCoords(e) {
  x = e.pageX;
  y = e.pageY;
}

const item = document.querySelector('.item')

item.addEventListener('dragstart', function (event) {
  event.target.style.left = x + 'px'
  event.target.style.top = y + 'px'
  event.target.style.transform = 'translate(-50%, -50%)';
})

item.addEventListener('dragend', (event) => {

})