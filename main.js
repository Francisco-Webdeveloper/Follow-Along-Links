// Select Element
const triggers = document.querySelectorAll('a');

// Create Element
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function setHighlight() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY,
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// Listeners
triggers.forEach((trigger) => {
  trigger.addEventListener('mouseover', setHighlight);
});