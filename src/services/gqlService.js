import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { apiUrl } from "@/shared/constants/config";

export const client = new ApolloClient({
  uri: apiUrl + "/graphql",
  cache: new InMemoryCache(),
  ssrMode: false,
});

export const GET_ARTISTS = gql`
  query ($limit: Int, $start: Int) {
    artists(limit: $limit, start: $start, sort: "created_at:desc") {
      id
      name
      page
      arts(limit: 1) {
        photos {
          url
          formats
        }
      }
    }
  }
`;
// export const GET_ARTISTS_CIRCLES = gql`
//   query ($limit: Int) {
//     artists(limit: $limit, sort: "created_at:desc") {
//       id
//       name
//       page
//       photo {
//         url
//       }
//     }
//   }
// `;
export const GET_ARTIST = gql`
  query ($page: String) {
    artists(where: { page: $page }) {
      id
      name
      link
      photo {
        url
        formats
      }
      slider {
        id
        url
      }
      text
      arts {
        id
        name
        price
        photos {
          id
          url
          formats
        }
      }
    }
  }
`;
export const GET_ARTS = gql`
  query ($limit: Int, $start: Int, $tags: [String], $artists: [String]) {
    arts(
      sort: "id:desc"
      start: $start
      where: { tag_contains: $tags, artist: { name_contains: $artists } }
      limit: $limit
    ) {
      id
      name
      tag
      artist {
        name
      }
      price
      photos {
        url
        formats
      }
    }
  }
`;

export const GET_ART = gql`
  query ($id: ID!) {
    art(id: $id) {
      id
      name
      price
      photos {
        id
        url
      }
      description
      artist {
        name
        arts {
          id
          name
          price
          photos(limit: 1) {
            url
          }
        }
      }
    }
  }
`;
export const GET_EVENTS = gql`
  query {
    currentEvents(sort: "date") {
      id
      title
      date
      isavailable
      link
      additional_artists
      artists {
        id
        name
        page
      }
    }
    pastEvents(sort: "date") {
      id
      title
      date
      albumlink
      photos {
        id
        url
        formats
      }
      artists {
        id
        name
        page
      }
    }
  }
`;
