import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";

const Advices = () => {
  return (
    <>
      <Head>
        <title>Как все - Полезные советы</title>
      </Head>
      <Wrapper>
        <h1 className={'desktop_normal_title'}>
          Познакомься с полезными советами от экспертов
        </h1>
      </Wrapper>
    </>

  );
};

export default Advices;