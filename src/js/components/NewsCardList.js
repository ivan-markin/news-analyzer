import { notFoundElement, cardsList, showMoreButton, isLoadingBlock } from '../constants/constants';

export default class NewsCardList {

  constructor(container, card) {
    this.container = container;
    this.card = card;
    this.startElement = 0;
  }
  renderPreloader(isLoading) {
    if (isLoading) {
      isLoadingBlock.classList.remove('hidden');
      notFoundElement.classList.add('hidden');
      cardsList.classList.add('hidden');
    }
    else {
      isLoadingBlock.classList.add('hidden');
    }
  }
  render(cardsArray) {
    if (!cardsArray) {
      cardsList.classList.add('hidden');
    } else if (cardsArray.articles.length === 0) {
      notFoundElement.classList.remove('hidden');
      cardsList.classList.add('hidden');
      localStorage.clear();
    } else {
      for (const element of cardsArray.articles.slice(this.startElement, this.startElement + 3)) {

        const card = this.card.createCard(
          element.source.name,
          element.title,
          element.publishedAt,
          element.description,
          element.urlToImage
        );

        this.container.appendChild(card);
      }

      if (cardsArray.articles.length <= 3) {
        showMoreButton.style.display = 'none';
      } else showMoreButton.style.display = 'block';

      notFoundElement.classList.add('hidden');
      cardsList.classList.remove('hidden');

      this.cardsArray = cardsArray;
    }
  }
  showMore() {
    this.startElement += 3;
    this.render(this.cardsArray);
    if (this.cardsArray.articles.slice(this.startElement).length <= 3) {
      showMoreButton.style.display = 'none';
    }
  }
}
