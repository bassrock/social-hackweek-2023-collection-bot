import { Collection } from './pocket';
import { getRandomCollection } from './pocket';

getRandomCollection().then((collection: Collection) => {
  console.log(collection);
  //TODO: post to mastodon
});
