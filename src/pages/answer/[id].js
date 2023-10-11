import React, {useContext} from 'react';
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {GET_ANSWER} from "@/services/gqlService";
import Head from "next/head";
import s from './answerID.module.scss'
import Markdown from "react-markdown";
import {colorContext, sizeContext} from "@/components/Context";
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