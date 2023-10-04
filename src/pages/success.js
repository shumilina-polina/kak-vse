import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import {ARTICLE, VIDEO} from "@/shared/data";
import CategoryPage from "@/components/CategoryPage/CategoryPage";

const Success = () => {
  return (
    <>
      <Head>
        <title>Как все - Истории успеха</title>
      </Head>
      <Wrapper>
        <h1 className={'normal_title'}>
          Найди вдохновение<br/> в историях успеха
        </h1>
        <CategoryPage
          Category={2}
          VIDEO_DATA={VIDEO}
          ARTICLE_DATA={ARTICLE}
        />
      </Wrapper>
    </>

  );
};

export default Success;