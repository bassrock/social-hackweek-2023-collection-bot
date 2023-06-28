import { postCollection } from './mastodon';
import { getRandomCollection } from './pocket';

(async () => {
  const collection = await getRandomCollection();
  postCollection(collection);
})();
