export default class DataStorage {
  addData(res) {
    localStorage.setItem('articles', JSON.stringify(res));
  }
  getData() {
    if (localStorage.articles && localStorage.articles !== 'undefined') {
      return JSON.parse(localStorage.getItem('articles'));
    }
  }
}
