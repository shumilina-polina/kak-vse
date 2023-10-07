import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import CategoryPage from "@/components/CategoryPage/CategoryPage";
import {ARTICLE, VIDEO} from "@/shared/data";
import {useQuery} from "@apollo/client";
import {GET_DATA_INDEX} from "@/services/gqlService";


const Opportunities = () => {
  const { data, loading, error} = useQuery(GET_DATA_INDEX)
  {
    loading && console.log(data)
  }
  return (
    <>
      <Head>
        <title>Как все - Ваши возможности</title>
      </Head>
      <Wrapper>
        <h1 className={'normal_title'}>
          Найди свой путь самореализации
        </h1>

        <CategoryPage
          Category={0}
          VIDEO_DATA={data?.opportunitiesVideos.data}
          ARTICLE_DATA={ARTICLE}
          loaded={loading}
        />
      </Wrapper>
    </>

  );
};

export default Opportunities;