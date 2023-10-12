import React, {useEffect} from 'react';
import s from './categoryPage.module.scss'
import CardArticle from "@/components/cardArticle/CardArticle";
import CardVideo from "@/components/cardVideo/CardVideo";
import {useMediaQuery} from "@mui/material";
import {apiUrl} from "@/shared/constants/config";

const CategoryPage = ({Category, VIDEO_DATA, ARTICLE_DATA, loaded}) => {
  const isMobile = useMediaQuery(`(max-width: 480px)`);

  function arrayConcat(a, b) {
    let result = [];
    let len = a?.length >= b?.length ? a?.length : b?.length;
    for (let i = 0; i < len; i++) {
      if (a[i])
        result.push(a[i]);
      if (b[i])
        result.push(b[i]);
    }
    return result;
  }

  if (!isMobile) {
    return ( //-------------------------------------------------desktop
      <div className={s.category}>
        <div className={s.category_articles}>
          {ARTICLE_DATA?.map(
            (article, index) => (
              <CardArticle
                Category={Category}
                author={article?.attributes.author_name}
                image={apiUrl + article?.attributes.author_photo.data.attributes.url}
                title={article?.attributes.title}
                previewText={article?.attributes.content}
                url={article?.attributes.slug}
                loaded={loaded}
                key={`article${index}`}
              />
            ))}
        </div>

        <div className={s.category_videos}>
          {VIDEO_DATA?.map((path, i) => (
            <CardVideo
              Category={Category}
              tags={path.attributes.tags}
              title={path.attributes.title}
              url={path.attributes.urlEmbed}
              loaded={loaded}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return ( //-------------------------------------------------mobile
      <div className={s.category}>
        {arrayConcat(VIDEO_DATA, ARTICLE_DATA).map((elem, index) => {
          if (elem.__typename === 'VideoEntity') {
            return (
              <CardVideo
                Category={Category}
                tags={elem.attributes.tags}
                title={elem.attributes.title}
                url={elem.attributes.urlEmbed}
                loaded={loaded}
                key={index}
              />
            );
          } else {
            return (
              <CardArticle
                Category={Category}
                author={elem.attributes.author_name}
                image={apiUrl + elem.attributes.author_photo.data.attributes.url}
                title={elem.attributes.title}
                previewText={elem.attributes.content}
                url={elem.attributes.slug}
                loaded={loaded}
                key={index}
              />
            );
          }

        })}
      </div>
    );
  }

};

export default CategoryPage;