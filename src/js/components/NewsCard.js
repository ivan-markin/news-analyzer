import { year, month } from '../constants/constants';

export default class NewsCard {
  createCard(sourceName, title, publishedAt, description, urlToImage) {
    let date = new Date(publishedAt);
    const cardElement = document.createElement('div');
    cardElement.classList.add('search-results__card');
    cardElement.insertAdjacentHTML(
      'afterbegin',
      `
        <img class="search-results__card-image" src="${urlToImage}" alt="">
        <p class="search-results__card-date">
          ${
            date.toLocaleDateString('ru', month) + ', ' +
            date.toLocaleDateString('ru', year)
          }
        </p>
        <h3 class="search-results__title search-results__title_card">${title}</h3>
        <p class="search-results__card-description">${description}</p>
        <p class="search-results__card-agency-name">${sourceName}</p>
      `
    );

    return cardElement;
  }
}
