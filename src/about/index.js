import './about.css';
import '../blocks/logo/logo.css';
import '../blocks/content-title/content-title.css';
import '../blocks/hidden/hidden.css';
import '../blocks/error-element/error-element.css';
import '../blocks/content-small-title/content-small-title.css';
import '../blocks/content-paragraph-text/content-paragraph-text.css';
import '../blocks/about/about.css';
import '../blocks/button-link/button-link.css';
import '../blocks/footer/footer.css';

import GithubApi from '../js/modules/GithubApi';
import CommitCard from '../js/components/CommitCard';
import CommitCardList from '../js/components/CommitCardList';
import { commitsContainer } from '../js/constants/constants';
import { setupFlickity } from '../js/utils/sliderSetup';

const githubApi = new GithubApi('https://api.github.com/repos/ivan-markin/news-analyzer/commits');
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(commitsContainer, commitCard);

githubApi.getCommits()
  .then((res) => {
    if (res.length > 20) {
      commitCardList.render(res.slice(res.length, -20));
    }
    commitCardList.render(res);
    setupFlickity();
})

window.addEventListener('resize', function() {
  setupFlickity();
})
