import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';
import config from './config';

const GET_COLLECTIONS = gql(/* GraphQL */ `
  query GetCollections($perPage: Int) {
    getCollections(perPage: $perPage) {
      collections {
        slug
      }
    }
  }
`);

const GET_COLLECTION_BY_SLUG = gql(/* GraphQL */ `
  query CollectionBySlug($slug: String!) {
    collectionBySlug(slug: $slug) {
      excerpt
      title
      shortUrl
    }
  }
`);

export interface Collection {
  excerpt: string; //markdown
  title: string;
  shortUrl: string;
}

const client = new ApolloClient({
  uri: config.pocket.api,
  cache: new InMemoryCache(),
});

export const getRandomCollection = async (): Promise<Collection> => {
  const slugs = await getCollectionSlugs();
  const slug = getRandomElement(slugs);
  return await getCollectionBySlug(slug);
};

const getCollectionSlugs = async (): Promise<string[]> => {
  const {
    data: {
      getCollections: { collections },
    },
  } = await client.query({
    query: GET_COLLECTIONS,
    variables: { perPage: 100000 },
  });

  return collections.map((collection): string => {
    return collection.slug;
  });
};

const getCollectionBySlug = async (slug: string): Promise<Collection> => {
  const {
    data: { collectionBySlug },
  } = await client.query({
    query: GET_COLLECTION_BY_SLUG,
    variables: { slug },
  });

  return collectionBySlug as Collection;
};

const getRandomElement = <T>(array: T[]): T => {
  if (array.length === 0) {
    throw new Error('Empty array');
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
