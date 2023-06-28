import * as dotenv from 'dotenv';
dotenv.config();
export default {
  mastodon: {
    url: process.env.MASTODON_URL,
    accessToken: process.env.MASTODON_ACCESS_TOKEN,
  },
  pocket: {
    api: process.env.POCKET_API,
  },
};
