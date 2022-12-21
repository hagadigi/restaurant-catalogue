/* eslint-disable no-alert */
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createRestaurantDetailTemplate,
  createAddReviewTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="content" id="content">
      <h1 class='content__title'>Detail Restaurant</h1>
      <div class='content-detail__container'></div>
      <div id='likeButtonContainer'></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.content-detail__container');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    restaurantContainer.innerHTML += createAddReviewTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });

    const inputUser = document.querySelector('#input-user');
    const inputReview = document.querySelector('#input-review');
    const submitReview = document.querySelector('#submit-review');

    submitReview.addEventListener('click', async (event) => {
      const newConsumerReview = {
        id: url.id,
        name: inputUser.value,
        review: inputReview.value,
      };
      if (inputUser.value === '' || inputReview.value === '') {
        alert('Please input your name and review');
      } else {
        event.preventDefault();
        await RestaurantSource.inputReview(newConsumerReview).then(() => {
          setTimeout(() => location.reload(), 2000);
        });
        alert('Thanks for the review!');
      }
    });
  },
};

export default Detail;
