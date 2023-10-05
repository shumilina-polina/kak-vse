import React from 'react';
import s from './categoryPage.module.scss'
import CardArticle from "@/components/cardArticle/CardArticle";
import CardVideo from "@/components/cardVideo/CardVideo";
import {useMediaQuery} from "@mui/material";
const CategoryPage = ({Category, VIDEO_DATA, ARTICLE_DATA, loaded}) => {

  const isMobile = useMediaQuery(`(max-width: 480px`);

  // let s = Math.max(VIDEO_DATA.length, ARTICLE_DATA.length)*2,
  //   d = [VIDEO_DATA,ARTICLE_DATA],
  //   r = [],
  //   v, i=-1;
  //
  //
  // while(s-i++){
  //   v =  d[i%2][(i-i%2)/2];        // или d[i%2][~~(i/2)]
  //   if(v !== undefined) r.push(v);
  // }
  // console.log(r)

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