import { ApolloClient, gql } from '@apollo/client';
import { MyQuery } from './generated/graphql';

const GET_COLLECTIONS = gql(/* GraphQL */ `
query GetCollections {
    getCollections {
      collections {
        slug
      }
    }
  }
`);

export const getRandomCollection = (): void => {

   const slugs =  getCollectionSlugs();
}


const getCollectionSlugs = (): string[] => {


    return [""];
}