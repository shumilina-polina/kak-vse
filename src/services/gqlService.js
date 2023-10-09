import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { apiUrl } from "@/shared/constants/config";

export const client = new ApolloClient({
  uri: apiUrl + "/graphql",
  cache: new InMemoryCache(),
  ssrMode: false,
});

export const GET_CATEGORY = gql`
query ($category: String) {  
  categoryVideos: videos (     
    filters: {category: {eq: $category}}
   ) { 
    data {
      attributes {
        title
        category 
        urlEmbed
        tags
        urlShare        
      }
    }
  }
  categoryArticles: articles (     
    filters: {category: {eq: $category}}
   ) { 
    data {      
      attributes {
        slug
        title        
        category
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
              hash
            }
          }
        }
      }
    }
  }
}
`;

export const GET_ARTICLE = gql `
query ($slug: String) {  
  articleID: articles (
    filters: {slug: {eq: $slug}}
  ) {
    data {
      id
      attributes {
        image {
          data {
            attributes {
              url
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
        title
        content 
        slug
        label_content {
          content
          link_vk
          phone
          link_multicentr
        }
      }
    }
  }
}
`;

export const GET_ANSWER = gql `
query ($slug: String) {  
  answerID: faqs (
    filters: {slug: {eq: $slug}}
  ) {
    data {
      attributes {
        slug
        title
        content
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
              slug             
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
              blurhash
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
              blurhash
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
              blurhash
            }
          }
        }
      }
    }
  }
  onMainPageVideos: videos (     
    filters: {onMainPage : {eq: true}}
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
}

`;