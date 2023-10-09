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
import SvgSelector from "@/components/SvgSelector";

const Article = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, loading, error} = useQuery(GET_ARTICLE, {
    variables: {slug: id}
  })
  console.log(data?.articleID.data[0])


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
              <div className={s.image}>
                <Image
                  src={apiUrl + data?.articleID.data[0].attributes.image.data.attributes.url}
                  alt={'image'}
                  width={517.5}
                  height={284.85}
                  priority={false}
                />
              </div>

              <div className={s.title}>
                <h1 className={'normal_h1'}><Markdown>{data?.articleID.data[0].attributes.title}</Markdown></h1>
                <div className={s.share}>
                  <div className={s.share_links}>
                    <a
                      target={'_blank'}
                      href={"https://telegram.me/share/url?url=https://www.youtube.com/live/nwibL__1Ux4?si=D8RN7Kk2S6a65Sb1&text=Какой-то крутой текст"}
                    >
                      <SvgSelector svg={'tg-desktop'}/>
                    </a>
                    <a
                      target={'_blank'}
                      href={'https://vk.com/share.php?url=https%3A//youtube.com/live/nwibL__1Ux4%3Fsi%3Dj3HTpRGqaiX_5Rq2'}
                    >
                      <SvgSelector svg={'vk-desktop'}/>
                    </a>
                    <a
                      target={'_blank'}
                      href={'https://connect.ok.ru/dk?st.cmd=OAuth2Login&st.layout=w&st.redirect=%252Fdk%253Fcmd%253DWidgetSharePreview%2526amp%253Bst.cmd%253DWidgetSharePreview%2526amp%253Bst.title%253D%2525D0%25259E%2525D1%252581%2525D0%2525B2%2525D0%2525BE%2525D0%2525B1%2525D0%2525BE%2525D0%2525B4%2525D0%2525B8%252B%2525D1%252581%2525D0%2525B2%2525D0%2525BE%2525D1%25258E%252B%2525D1%252582%2525D1%252580%2525D0%2525B5%2525D0%2525B2%2525D0%2525BE%2525D0%2525B3%2525D1%252583.%2526amp%253Bst.shareUrl%253Dhttps%25253A%25252F%25252Fyoutube.com%25252Flive%25252FnwibL__1Ux4%25253Fsi%25253Dj3HTpRGqaiX_5Rq2&st._wt=1&st.client_id=-1'}
                    >
                      <SvgSelector svg={'ok-desktop'}/>
                    </a>
                    <a
                      onClick={()=>(copy())}
                    >
                      <SvgSelector svg={'share-desktop'}/>
                    </a>
                  </div>
                  <p className={'normal_label'}>Поделитесь</p>
                </div>
              </div>

              <div className={s.text}>
                <div className={s.author}>
                  <Image
                    src={apiUrl + data?.articleID.data[0].attributes.author_photo.data.attributes.url}
                    alt={'author'}
                    width={52}
                    height={52}
                  />
                  <Markdown className={'normal_label'}>{data?.articleID.data[0].attributes.author_name}</Markdown>
                </div>

                <Markdown>{data?.articleID.data[0].attributes.content}</Markdown>
              </div>
            </div>
          )
        }
      </div>
    </>

  );
};

export default Article;