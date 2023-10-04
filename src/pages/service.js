import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import {ARTICLE, VIDEO} from "@/shared/data";
import CategoryPage from "@/components/CategoryPage/CategoryPage";

const Service = () => {
  return (
    <>
      <Head>
        <title>Как все - Ответы на вопросы</title>
      </Head>
      <Wrapper>
        <h1 className={'normal_title'}>
          Полезная информация для достижения цели
        </h1>

      </Wrapper>
    </>

  );
};

export default Service;