import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_ARTICLE} from "@/services/gqlService";
import {useRouter} from "next/router";
import {Wrapper} from "@/components/Wrapper/Wrapper";
import s from './articlesID.module.scss'
import Image from "next/image";
import {apiUrl} from "@/shared/constants/config";
import Markdown from "react-markdown";
import Head from "next/head";

const Article = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, loading, error} = useQuery(GET_ARTICLE, {
    variables: {slug: id}
  })
  //console.log(data?.articleID.data[0].attributes.content)


  return (
    <>
      <Head>
        <title>Как все - Статья</title>
      </Head>
      <div className={s.articlesWrapper}>
        {
          loading ? (
            <><h1>loading</h1></>
          ) : error ? (
            <><h1>error</h1></>
          ) : (
            <div className={s.content}>
              <div style={{width: '300px', height: 'auto'}}>
                <Image
                  src={apiUrl + data?.articleID.data[0].attributes.image.data.attributes.url}
                  alt={'image'}
                  width={100}
                  height={100}
                  priority={false}
                />
              </div>

              <h1 className={'normal_h1'}><Markdown>{data?.articleID.data[0].attributes.title}</Markdown></h1>
              <div className={s.text}><Markdown>{data?.articleID.data[0].attributes.content}</Markdown></div>
            </div>
          )
        }
      </div>
    </>

  );
};

export default Article;