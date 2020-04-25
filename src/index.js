import './style.css';
import './about/about.css';

import { input, cardsContainer, showMoreButton, API_KEY, PAST_DATE_STRING, TODAY_DATE_STRING } from './js/constants/constants';
import NewsApi from './js/modules/NewsApi.js';
import SearchInput from './js/components/SearchInput';
import DataStorage from './js/modules/DataStorage';
import NewsCardList from './js/components/NewsCardList';
import NewsCard from './js/components/NewsCard';

const submitCallback = function(event) {
  event.preventDefault();

  if (searchInput.validate()) {
    localStorage.clear();
    newsCardList.renderPreloader(true);
    searchInput.blockForm(true);

    while (cardsContainer.firstChild) {
      cardsContainer.removeChild(cardsContainer.firstChild);
    }

    newsApi.getNews(input.value)
      .then((res) => {
        dataStorage.addData(res);
        newsCardList.startElement = 0;
        newsCardList.render(dataStorage.getData());
      })
      .finally(() => {
        newsCardList.renderPreloader(false);
        searchInput.blockForm(false);
      })

      localStorage.setItem('keyword', input.value);
  }
}

const newsCard = new NewsCard();
const newsApi = new NewsApi(API_KEY, PAST_DATE_STRING, TODAY_DATE_STRING);
const newsCardList = new NewsCardList(cardsContainer, newsCard);
const searchInput = new SearchInput(submitCallback);
const dataStorage = new DataStorage();

showMoreButton.addEventListener('click', newsCardList.showMore.bind(newsCardList));
newsCardList.render(dataStorage.getData());
searchInput.setEventListeners();
