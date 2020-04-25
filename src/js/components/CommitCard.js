import { month, year } from '../constants/constants';

export default class CommitCard {
  create(name, email, commitDate, message, avatar) {
    let date = new Date(commitDate);
    const commitCard = document.createElement('div');
    commitCard.classList.add('carousel-cell');
    commitCard.insertAdjacentHTML(
      'afterbegin',
      `
        <p class="carousel-cell__date">
          ${
            date.toLocaleDateString('ru', month) + ', ' +
            date.toLocaleDateString('ru', year)
          }
        </p>
        <div class="carousel-cell__personal-info">
          <div class="carousel-cell__avatar">
            <img class="carousel-cell__avatar_img" src="${avatar}" alt="">
          </div>
          <div class="carousel-cell__name-block">
            <h3 class="content-small-title content-small-title_carousel-cell">${name}</h3>
            <a class="carousel-cell__e-mail" href="">${email}</a>
          </div>
        </div>
        <p class="carousel-cell__commit-text">${message}</p>
      `
    );

    return commitCard;
  }
}
