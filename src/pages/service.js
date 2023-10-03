import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";

const Service = () => {
  return (
    <>
      <Head>
        <title>Как все - Ответы на вопросы</title>
      </Head>
      <Wrapper>
        <h1 className={'title'}>
          Полезная информация для достижения цели
        </h1>
      </Wrapper>
    </>

  );
};

export default Service;