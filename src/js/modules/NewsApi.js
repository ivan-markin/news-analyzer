import { notFoundElement, cardsList, serverErrorBlock } from '../constants/constants';

export default class NewsApi {
  constructor(apiKey, lastDate, currentDate) {
    this.apiKey = apiKey;
    this.lastDate = lastDate;
    this.currentDate = currentDate;
  }
  getNews(keyword) {
    let url = 'http://newsapi.org/v2/everything?' +
          'q=' + keyword + '&' +
          'from=' + this.lastDate + '&' +
          'to=' + this.currentDate + '&' +
          'pageSize=100&' +
          'sortBy=publishedAt&' +
          'apiKey=' + this.apiKey;

    let req = new Request(url);

    return fetch(req)
      .then(res => res.ok ? res.json() : Promise.reject())
      .catch(() => {
        notFoundElement.classList.add('hidden');
        cardsList.classList.add('hidden');
        serverErrorBlock.classList.toggle('hidden');
        localStorage.articles = [];
        localStorage.clear();
      })
    }
}
