import * as dotenv from 'dotenv';
dotenv.config();
export default {
  mastodon: {
    instanceURL: process.env.MASTODON_INSTANCE_URL,
    clientKey: process.env.MASTODON_CLIENT_KEY,
    clientSecret: process.env.MASTODON_CLIENT_SECRET,
    accessToken: process.env.MASTODON_ACCESS_TOKEN,
  },
  pocket: {
    api: process.env.POCKET_GRAPHQL_API,
  },
};
