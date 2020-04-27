import { analyticsTitleKeyword, newsCount, keywordInTitles, day, weekday, diagrams, dateElements } from '../constants/constants';

export default class Statistics {
  constructor(data) {
    this.data = data.articles;
    this.oneDay = 24 * 3600 * 1000;
  }
  setDate() {
    dateElements.reverse().forEach((element, index) => {
      let parseDateString = new Date(Date.now() - this.oneDay * index);
      element.textContent = `${
        parseDateString.toLocaleDateString('ru', weekday) + ', ' +
        parseDateString.toLocaleDateString('ru', day)
      }`;
    });
  }
  buildDiagrams() {
    diagrams.reverse().forEach((element, index) => {
      const thisDateArray = this.data.filter((item) => {
        let parseDateString = new Date(Date.now() - this.oneDay * index);
        return item.publishedAt.slice(0, 10) === parseDateString.toISOString().slice(0, 10);
      })
      const countArray = thisDateArray.filter((count) => {
        let reg = new RegExp(localStorage.getItem('keyword'), 'ig');
        if (count.title.match(reg) && count.description.match(reg)) {
          return count.title.match(reg).concat(count.description.match(reg));
        }
        if (count.title.match(reg)) {
          return count.title.match(reg);
        }
        if (count.description.match(reg)) {
          return count.description.match(reg);
        }
        else return [];
      })
      element.style.width = `${countArray.length}%`;
      element.textContent = `${countArray.length}`;
    });
  }
  setHeaderData() {
    let reg = new RegExp(localStorage.getItem('keyword'), 'i');
    const titlesCount = this.data.filter((item) => {
      return item.title.match(reg);
    });
    analyticsTitleKeyword.textContent = localStorage.getItem('keyword');
    newsCount.textContent = this.data.length;
    keywordInTitles.textContent = titlesCount.length;
  }
}
