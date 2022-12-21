const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');

  I.click('#likeButton');
  I.amOnPage('/#/favorite');

  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);
  I.seeElement('#likeButton');

  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.post-item');
});

Scenario('Consumer Review in detail page', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.post-item__title a');

  const firstRestaurant = await I.grabTextFrom(locate('.post-item__title a').first());
  I.click(firstRestaurant);

  I.scrollTo('.content-detail__container');
  I.seeElement('.content-detail__container');

  I.seeElement('#input-user');
  I.fillField('input-username', 'this is username test');
  I.seeElement('#input-review');
  I.fillField('input-review', 'this is review testing');
  I.click('#submit-review', '#form-review');

  I.waitForVisible('.review-item');
  I.seeElement('.review-item');
});
