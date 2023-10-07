import React, {useEffect} from 'react';
import s from './categoryPage.module.scss'
import CardArticle from "@/components/cardArticle/CardArticle";
import CardVideo from "@/components/cardVideo/CardVideo";
import {useMediaQuery} from "@mui/material";
const CategoryPage = ({Category, VIDEO_DATA, ARTICLE_DATA, loaded}) => {
  const isMobile = useMediaQuery(`(max-width: 480px`);
  // useEffect(() => {
  //   let a = VIDEO_DATA
  //   let b = ARTICLE_DATA
  //   let s = Math.max(a.length, b.length)*2,
  //     d = [a,b],
  //     r = [],
  //     v, i=-1;
  //
  //
  //   while(s-i++){
  //     v =  d[i%2][(i-i%2)/2];        // или d[i%2][~~(i/2)]
  //     if(v !== undefined) r.push(v);
  //   }
  //   //console.log(r)
  // }, []);

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
        {VIDEO_DATA?.map((path, i) => (
          <CardVideo
            Category={Category}
            tags={path.attributes.tags}
            title={path.attributes.title}
            url={path.attributes.urlEmbed}
            loaded={loaded}
            loaded={loaded}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;