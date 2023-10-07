import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import {ARTICLE, VIDEO} from "@/shared/data";
import CategoryPage from "@/components/CategoryPage/CategoryPage";
import {useQuery} from "@apollo/client";
import {GET_CATEGORY} from "@/services/gqlService";

const Advices = () => {
  const { data, loading, error} = useQuery(GET_CATEGORY, {
    variables: {category: "advices"}
  })
  return (
    <>
      <Head>
        <title>Как все - Полезные советы</title>
      </Head>
      <Wrapper>
        <h1 className={'normal_title'}>
          Познакомься с полезными<br/>советами от экспертов
        </h1>
        <CategoryPage
          Category={1}
          VIDEO_DATA={data?.categoryVideos.data}
          ARTICLE_DATA={ARTICLE}
        />
      </Wrapper>
    </>

  );
};

export default Advices;