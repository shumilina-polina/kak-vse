import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";

const Success = () => {
  return (
    <>
      <Head>
        <title>Как все - Истории успеха</title>
      </Head>
      <Wrapper>
        <h1 className={'title'}>
          Найди вдохновение в историях успеха
        </h1>
      </Wrapper>
    </>

  );
};

export default Success;