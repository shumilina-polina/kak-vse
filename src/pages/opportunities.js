import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";

const Opportunities = () => {
  return (
    <>
      <Head>
        <title>Как все - Ваши возможности</title>
      </Head>
      <Wrapper>
        <h1 className={'desktop_normal_title'}>
          Найди свой путь самореализации!
        </h1>
      </Wrapper>
    </>

  );
};

export default Opportunities;