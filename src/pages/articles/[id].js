import React, {useContext, useEffect, useState} from 'react';
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
import {colorContext, sizeContext} from "@/components/Context";
import {Skeleton} from "@mui/material";

const Article = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, loading, error} = useQuery(GET_ARTICLE, {
    variables: {slug: id}
  })
  const Category = data?.articleID.data[0].attributes.category
  const [titleShare, setTitleShare] = useState('Поделится')
  let linkTitle = data?.articleID.data[0].attributes.label_content.link_multicentr;
  if (!loading) {
    linkTitle = linkTitle?.replace(/https:/g, '');
    linkTitle = linkTitle?.replace(/[^a-zа-яё0-9\s]/gi, ' ');
  }

  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setTitleShare('Ссылка \n\n скопирована')
    setTimeout(() => {
      setTitleShare('Поделится')
    }, 1000);
  }

  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)

  return (
    <>
      <Head>
        <title>Как все - Статья</title>
      </Head>
      <div className={s.articlesWrapper}>
        {
          loading ? (
            <>
              {[3,8,9,7,8,6,7,8,9,4].map((elem, i) => (
                <Skeleton
                  variant="rounded"
                  sx={{borderRadius: '20px', height: '12px', width: `${elem}0%`, marginTop: '20px'}}
                  animation="wave"
                  key={i}
                />
              ))}
            </>
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
                <div className={s.share}>
                  <div className={s.share_links}>
                    <a
                      target={'_blank'}
                      href={`https://telegram.me/share/url?url=${window.location.href}`}
                    >
                      <SvgSelector svg={'tg-desktop'}/>
                    </a>
                    <a
                      target={'_blank'}
                      href={`https://vk.com/share.php?url=${window.location.href}`}
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
                      onClick={() => (copy())}
                    >
                      <SvgSelector svg={'share-desktop'}/>
                    </a>
                  </div>
                  <p className={`${sizeVersion}_label`}><Markdown>{titleShare}</Markdown></p>
                </div>
              </div>

              <div className={sizeVersion === 'normal' ? s.text_normal : s.text_large}>
                <div className={s.author}>
                  <Image
                    src={apiUrl + data?.articleID.data[0].attributes.author_photo.data.attributes.url}
                    alt={'author'}
                    width={52}
                    height={52}
                  />
                  <Markdown
                    className={`${sizeVersion}_label`}>{data?.articleID.data[0].attributes.author_name}</Markdown>
                </div>

                <Markdown>{data?.articleID.data[0].attributes.content}</Markdown>
              </div>
              <div
                className={s.label}
                style={{
                  backgroundColor: colorVersion === 'grey' ? '#DEDEDE' : Category === 'opportunities' ? '#FFD8EF' : Category === 'advices' ? '#C4F1FF' : '#FFF3C8'
                }}
              >
                <p className={`${sizeVersion}_t3`}>
                  <Markdown>
                    {data?.articleID.data[0].attributes.label_content.content}
                  </Markdown>
                </p>
                <div className={s.links}>
                  <a href={data?.articleID.data[0].attributes.label_content.link_vk} target={'_blank'}>
                    <SvgSelector svg={'label-vk'}/>
                    <p className={`${sizeVersion}_caption`}>Сообщество ВК</p>
                  </a>
                  <a href={`tel:${data?.articleID.data[0].attributes.label_content.phone}`} target={'_blank'}>
                    <SvgSelector svg={'label-phone'}/>
                    <p className={`${sizeVersion}_caption`}>
                      <Markdown>
                        {data?.articleID.data[0].attributes.label_content.phone}
                      </Markdown>
                    </p>
                  </a>
                  <a href={data?.articleID.data[0].attributes.label_content.link_multicentr} target={'_blank'}>
                    <SvgSelector svg={'label-brower'}/>
                    <p className={`${sizeVersion}_caption`}><Markdown>
                      {linkTitle}
                    </Markdown></p>
                  </a>
                </div>

              </div>
              <div className={s.title}>
                <div className={s.share}>
                  <div className={s.share_links}>
                    <a
                      target={'_blank'}
                      href={`https://telegram.me/share/url?url=${window.location.href}`}
                    >
                      <SvgSelector svg={'tg-desktop'}/>
                    </a>
                    <a
                      target={'_blank'}
                      href={`https://vk.com/share.php?url=${window.location.href}`}
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
                      onClick={() => (copy())}
                    >
                      <SvgSelector svg={'share-desktop'}/>
                    </a>
                  </div>
                  <p className={`${sizeVersion}_label`}><Markdown>{titleShare}</Markdown></p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>

  );
};

export default Article;