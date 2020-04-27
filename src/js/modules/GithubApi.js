import { errorElement, sideFadeElements } from '../constants/constants';

export default class GithubApi {
  constructor(url) {
    this.url = url;
  }
  getCommits() {
    let req = new Request(this.url);

    return fetch(req)
      .then(res => res.ok ? res.json() : Promise.reject())
      .catch(() => {
          sideFadeElements.forEach((element) => {
            element.classList.toggle('hidden');
          })
          errorElement.classList.toggle('hidden');
          errorElement.textContent = new Error('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        }
      )
    }
}
