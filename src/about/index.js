import './about.css';
import '../blocks/logo/logo.css';
import '../blocks/content-title/content-title.css';
import '../blocks/content-small-title/content-small-title.css';
import '../blocks/content-paragraph-text/content-paragraph-text.css';
import '../blocks/about/about.css';
import '../blocks/button-link/button-link.css';
import '../blocks/footer/footer.css';

const Flickity = require('Flickity');

// Настройка слайдера
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

setupFlickity();
window.addEventListener('resize', function() {
  setupFlickity();
})
