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

export const GET_FAQS = gql `
query {  
  faqCategories {
    data {
      attributes {
        title
        faqs {
          data {
            attributes {
              title              
            }
          }
        }
      }
    }
  }  
}
`;

export const GET_DATA_INDEX = gql`
  query {  
  advicesVideos: videos ( 
    pagination: {limit: 2}   
    filters: {category: {eq: "advices"}}
  ) { 
    data {
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
  advicesArticles: articles ( 
    pagination: {limit: 3}   
    filters: {category: {eq: "advices"}}
  ) { 
    data {
      id
      attributes {
        slug
        title        
        category
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
  opportunitiesVideos: videos ( 
    pagination: {limit: 2}   
    filters: {category: {eq: "opportunities"}}
  ) { 
    data {
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
  opportunitiesArticles: articles ( 
    pagination: {limit: 3}   
    filters: {category: {eq: "opportunities"}}
  ) { 
    data {
      id
      attributes {
        slug
        title        
        category
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
  successVideos: videos ( 
    pagination: {limit: 2}   
    filters: {category: {eq: "success"}}
  ) { 
    data {
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
  successArticles: articles ( 
    pagination: {limit: 3}   
    filters: {category: {eq: "success"}}
  ) { 
    data {
      id
      attributes {
        slug
        title        
        category
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
  
}

`;