import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import CategoryPage from "@/components/CategoryPage/CategoryPage";
import {ARTICLE, VIDEO} from "@/shared/data";


const Opportunities = () => {
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
          VIDEO_DATA={VIDEO}
          ARTICLE_DATA={ARTICLE}
        />
      </Wrapper>
    </>

  );
};

export default Opportunities;