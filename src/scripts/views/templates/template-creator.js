import CONFIG from '../../global/config';

const createCategorieTemplate = (categories) => {
  let categorieItem = '';
  categories.forEach((item) => {
    categorieItem += `<li class="content-detail__cat-item">${item.name}s</li>`;
  });
  return categorieItem;
};

const createMenuTemplate = (menus) => {
  let menuItem = '';
  menus.forEach((item) => {
    menuItem += `<li>${item.name}</li>`;
  });
  return menuItem;
};

const createReviewTemplate = (reviews) => {
  let reviewItem = '';
  if (reviews === null) {
    reviewItem += '<h3 class="review-item__none">Tidak ada review pada restaurant ini.</h3>';
  } else {
    reviews.forEach((item) => {
      reviewItem += `
      <div class="review-item">
        <div class="review-item__header">
          <h4 class="review-item__username">${item.name}</h4>
          <p class="review-item__date">${item.date}</p>
        </div>
        <div class="review-item__body">
          <p class="review-item__description">${item.review}</p>
        </div>
      </div>
        `;
    });
  }
  return reviewItem;
};

const createAddReviewTemplate = () => `
  <h2 class="content-detail__review-title">Add Review:</h2>
  <form class="content-detail__review-add" id="form-review">
  <label for="username">Username:</label>
  <input type="text" class="input-form input-username" id="input-user" name="input-username" required>
  <label for="review">Input Review:</label>
  <textarea class="input-form input-review" id="input-review" name="input-review" required></textarea>
  <button type="submit" class="button__add-review" id="submit-review">Submit</button>
  </form>
  `;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item" onclick="window.location.href='/#/detail/${restaurant.id}'">
    <img data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" class="lazyload post-item__thumbnail" tabindex="0" width="400" height="400">
      <div class="post-item__content">
        <h3 class="post-item__title" tabindex="0">
          <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
        </h3>
        <div class="post-item__category">
        <p class="post-item__location" tabindex="0">Location: ${restaurant.city}</p>
        <span class="post-item__rating" tabindex="0">Rating: ${restaurant.rating}⭐️</span>
        </div>
        <p class="post-item__description" tabindex="0">${restaurant.description.slice(0, 120)}...</p>
      </div>
  </article>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
  <img class="lazyload content-detail__image" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
  <div class="content-detail__info">
    <h2 class="content-detail__title">${restaurant.name}</h2>
    <div class="content-detail__category">
      <p>Tags: </p>
      <ul class="content-detail__cat">
        ${createCategorieTemplate(restaurant.categories)}
      </ul>
    </div>
    <p class="content-detail__location">Location: ${restaurant.address}, ${restaurant.city}</p>
    <p class="content-detail__rating">Rating: ${restaurant.rating}⭐️</p>
    <p class="content-detail__description">${restaurant.description}</p>
  </div>
  <div class="content-detail__menus">
    <div class="content-detail__foods">
      <h3 class="foods-header">Foods</h3>
      <ul>
        ${createMenuTemplate(restaurant.menus.foods)}
      </ul>
    </div>
    <div class="content-detail__drinks">
      <h3 class="foods-header">Drinks</h3>
      <ul>
        ${createMenuTemplate(restaurant.menus.drinks)}
      </ul>
    </div>
  </div
  <div class="content-detail__review-container">
  <h2 class="content-detail__review-title">Review:</h2>
  <div id="content-review">${createReviewTemplate(restaurant.customerReviews)}</div>
  </div>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="far fa-heart"></i>
</button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createAddReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createReviewTemplate,
};
