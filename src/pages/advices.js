import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import {ARTICLE, VIDEO} from "@/shared/data";
import CategoryPage from "@/components/CategoryPage/CategoryPage";

const Advices = () => {
  return (
    <>
      <Head>
        <title>Как все - Полезные советы</title>
      </Head>
      <Wrapper>
        <h1 className={'normal_title'}>
          Познакомься с полезными советами от экспертов
        </h1>
        <CategoryPage
          Category={1}
          VIDEO_DATA={VIDEO}
          ARTICLE_DATA={ARTICLE}
        />
      </Wrapper>
    </>

  );
};

export default Advices;