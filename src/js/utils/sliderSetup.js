const Flickity = require('Flickity');

function setupFlickity() {
  let flkty;
  if (window.matchMedia("(max-width: 768px)").matches) {
    flkty = new Flickity('.main-carousel', {
      // options
      cellAlign: 'left',
      draggable: true,
      percentPosition: false,
      cellSelector: '.carousel-cell',
      wrapAround: true,
      arrowShape: {
        x0: 30,
        x1: 55, y1: 25,
        x2: 60, y2: 20,
        x3: 40
      }
      // prevNextButtons: false
    });
  } else {
    flkty = new Flickity( '.main-carousel', {
      // options
      cellAlign: 'center',
      // draggable: true,
      percentPosition: false,
      cellSelector: '.carousel-cell',
      wrapAround: true,
      prevNextButtons: true,
      arrowShape: {
        x0: 30,
        x1: 55, y1: 25,
        x2: 60, y2: 20,
        x3: 40
      }
    });
  }
}

export { setupFlickity };
