import React, {useContext} from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import CategoryPage from "@/components/CategoryPage/CategoryPage";
import {ARTICLE, VIDEO} from "@/shared/data";
import {useQuery} from "@apollo/client";
import {GET_CATEGORY} from "@/services/gqlService";
import {colorContext, sizeContext} from "@/components/Context";


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
          error ? (
            <h1 className={`${sizeVersion}_h2`}>Возникла ошибка.<br/>перезагрузите страницу</h1>
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