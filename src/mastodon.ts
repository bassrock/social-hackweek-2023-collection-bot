import { login } from 'masto';
import { Collection } from './pocket';
import config from './config';

export const postCollection = async (collection: Collection) => {
  const masto = await login({
    url: config.mastodon.url,
    accessToken: config.mastodon.accessToken,
  });

  await masto.v1.statuses.create({
    status: `${collection.title} 
    
${collection.shortUrl}`,
    visibility: 'public',
  });
};
