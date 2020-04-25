export default class CommitCardList {
  constructor(container, card) {
    this.container = container;
    this.card = card;
  }
  render(commits) {
    for (const element of commits) {

      const card = this.card.create(
        element.commit.committer.name,
        element.commit.committer.email,
        element.commit.committer.date,
        element.commit.message,
        element.author.avatar_url
      );

      this.container.appendChild(card);
    }
  }
}
