const createRankTemplate = (rank) => rank !== `` ? `<p class="profile__rating">${rank}</p>` : ``;

const createProfileTemplate = (stats) => {
  const rankTemplate = createRankTemplate(stats.rank);

  return `<section class="header__profile profile">
    ${rankTemplate}
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

export {createProfileTemplate};
