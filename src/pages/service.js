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
      <dialog
        style={{
          border:0,
          backgroundColor: 'rgba(0,0,0,0)',
          position: "absolute",
          top: 0
        }}
        open={false}

      >
        <iframe
          src={'http://localhost:3001/answer/faq-1'}
          width={'870px'}
          height={'570px'}
          style=
            {{

              borderRadius: '40px',
              border: '1px solid #797979',
            }}
        />
      </dialog>
    </>

  );
};

export default Service;