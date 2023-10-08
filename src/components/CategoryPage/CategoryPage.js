import React, {useEffect} from 'react';
import s from './categoryPage.module.scss'
import CardArticle from "@/components/cardArticle/CardArticle";
import CardVideo from "@/components/cardVideo/CardVideo";
import {useMediaQuery} from "@mui/material";
import {apiUrl} from "@/shared/constants/config";
const CategoryPage = ({Category, VIDEO_DATA, ARTICLE_DATA, loaded}) => {
  const isMobile = useMediaQuery(`(max-width: 480px)`);
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
        {ARTICLE_DATA?.map(
            (article, index)=>(
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
};

export default CategoryPage;