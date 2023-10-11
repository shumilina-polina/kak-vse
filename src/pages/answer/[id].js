import React, {useContext} from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import AnswerComponent from "@/components/answerComponent/Answer";
const Answer = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <>
      <Head>
        <title>Как все - Ответ</title>
      </Head>
      <AnswerComponent id={id}/>
    </>
  );
};

export default Answer;