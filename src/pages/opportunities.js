import React, {useContext} from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import CategoryPage from "@/components/CategoryPage/CategoryPage";
import {ARTICLE, VIDEO} from "@/shared/data";
import {useQuery} from "@apollo/client";
import {GET_CATEGORY} from "@/services/gqlService";
import {colorContext, sizeContext} from "@/components/Context";
import s from "@/components/CategoryPage/categoryPage.module.scss";
import CardArticle from "@/components/cardArticle/CardArticle";
import {apiUrl} from "@/shared/constants/config";
import CardVideo from "@/components/cardVideo/CardVideo";


const Opportunities = () => {
  const {data, loading, error} = useQuery(GET_CATEGORY, {
    variables: {category: "opportunities"}
  })
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)

  return (
    <>
      <Head>
        <title>Как все - Ваши возможности</title>
      </Head>
      <Wrapper>
        <h1 className={`${sizeVersion}_title`}>
          Найди свой путь самореализации
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
            <>
              <h2 className={`${sizeVersion}_h2`}>Возникла ошибка.</h2>
              <h3 className={`${sizeVersion}_h3`}>перезагрузите страницу</h3>
            </>
          ) : (
            <CategoryPage
              Category={'opportunities'}
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

export default Opportunities;