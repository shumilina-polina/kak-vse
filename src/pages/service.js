import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import FAQS from "@/components/FAQ/FaqsBlock";
import Faqs from "@/components/FAQ/FAQS";

const Service = () => {
  return (
    <>
      <Head>
        <title>Как все - Ответы на вопросы</title>
      </Head>
      <Wrapper>
        <h1 className={'normal_title'}>
          Полезная информация<br/>для достижения цели
        </h1>

        <Faqs/>

      </Wrapper>
    </>

  );
};

export default Service;