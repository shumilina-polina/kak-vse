import React, {useContext} from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import {ARTICLE, VIDEO} from "@/shared/data";
import CategoryPage from "@/components/CategoryPage/CategoryPage";
import {useQuery} from "@apollo/client";
import {GET_CATEGORY} from "@/services/gqlService";
import {colorContext, sizeContext} from "@/components/Context";
import s from "@/components/CategoryPage/categoryPage.module.scss";
import CardArticle from "@/components/cardArticle/CardArticle";
import CardVideo from "@/components/cardVideo/CardVideo";

const Advices = () => {
  const { data, loading, error} = useQuery(GET_CATEGORY, {
    variables: {category: "advices"}
  })
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)
  return (
    <>
      <Head>
        <title>Как все - Полезные советы</title>
      </Head>
      <Wrapper>
        <h1 className={`${sizeVersion}_title`}>
          Познакомься с полезными<br/>советами от экспертов
        </h1>
        {
          loading ? (
            <div className={s.category}>
              <div className={s.category_articles}>
                {[1, 2, 3, 4, 5].map(
                  (article, index) => (
                    <CardArticle
                      Category={'opportunities'}
                      loaded={loading}
                      key={`article${index}`}
                    />
                  ))}
              </div>

              <div className={s.category_videos}>
                {[1, 2, 3, 4, 5].map((path, i) => (
                  <CardVideo
                    Category={'opportunities'}
                    loaded={loading}
                    key={i}
                  />
                ))}
              </div>
            </div>
          ) : error ? (
            <h1 className={`${sizeVersion}_h2`}>Возникла ошибка.<br/>перезагрузите страницу</h1>
          ) : (
            <CategoryPage
              Category={'advices'}
              VIDEO_DATA={data?.categoryVideos.data}
              ARTICLE_DATA={data?.categoryArticles.data}
              loaded={loading}
            />
          )
        }

      </Wrapper>
    </>

  );
};

export default Advices;