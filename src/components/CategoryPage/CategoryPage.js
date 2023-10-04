import React from 'react';
import s from './categoryPage.module.scss'
import CardArticle from "@/components/cardArticle/CardArticle";
import CardVideo from "@/components/cardVideo/CardVideo";
const CategoryPage = ({Category, VIDEO_DATA, ARTICLE_DATA, loaded}) => {


  return (
    <div className={s.category}>
      <div className={s.category_articles}>
        {ARTICLE_DATA.filter(
          (elem)=>(elem.Category === Category)).map(
            (article, index)=>(
              <CardArticle
                Category={Category}
                author={article.author}
                image={article.image}
                title={article.title}
                previewText={article.previewText}
                url={article.url}
                loaded={loaded}
                key={`article${index}`}
              />
        ))}
      </div>

      <div className={s.category_videos}>
        {VIDEO_DATA.filter((elem) => (elem.Category === Category)).map((path, i) => (
          <CardVideo
            Category={Category}
            tags={path.tags}
            title={path.title}
            url={path.url}
            loaded={loaded}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;