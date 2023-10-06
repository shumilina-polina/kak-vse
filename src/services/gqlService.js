import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { apiUrl } from "@/shared/constants/config";

export const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
  ssrMode: false,
});

export const GET_DATA = gql`
  query {
  articles {
    data {
      id
      attributes {
        slug
        title
        content
        image {
          data {
            attributes {
              url
              blurhash
            }
          }
        }
        author_name
        author_photo {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
  videos {
    data {
      id
      attributes {
        title
        category
        urlEmbed
        tags
        urlShare
        onMainPage
      }
    }
  }
  faqs {
    data {
      attributes {
        title
        content
        slug
      }
    }
  }
}
`;

export const GET_DATA_INDEX = gql`
  query {  
  videos (limit: 3) {
    data{
      id
      attributes {
        title
        category
        urlEmbed
        tags
        urlShare
        onMainPage
      }
    }
  }  
}
`;