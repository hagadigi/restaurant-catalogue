import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="hero">
      <div class="hero__container">
        <h1 class="hero__title" tabindex="0">Restofav</h1>
        <p class="hero__tagline" tabindex="0">find your favorite restaurant with the best services</p>
      </div>
    </section>
    
    <div class="content" id="content">
      <h2 class="content__title" tabindex="0">Restaurant Catalogue</h2>
      <div class="content__posts">

      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('.content__posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
