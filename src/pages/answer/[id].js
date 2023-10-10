import React, {useContext} from 'react';
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {GET_ANSWER} from "@/services/gqlService";
import Head from "next/head";
import s from './answerID.module.scss'
import Markdown from "react-markdown";
import {colorContext, sizeContext} from "@/components/Context";
const Answer = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, loading, error} = useQuery(GET_ANSWER, {
    variables: {slug: id}
  })
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)
  // console.log(data?.answerID.data[0].attributes.title)
  return (
    <>
      <Head>
        <title>Как все - Ответ</title>
      </Head>
      <div className={s.answerWrapper}>
        {loading ? (
          <>
            <h1>loading</h1>
          </>
          ) : error ? (
          <>
            <h1>error</h1>
          </>
        ) : (
          <div className={s.content}>
            <h1 className={`${sizeVersion}_h1`}>{data?.answerID.data[0].attributes.title}</h1>
            <div className={s.text}><Markdown>{data?.answerID.data[0].attributes.content}</Markdown></div>
          </div>
        )
        }
      </div>
    </>
  );
};

export default Answer;