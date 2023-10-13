import React, {useContext, useState} from 'react';
import Markdown from "react-markdown";
import {colorContext, sizeContext} from "@/components/Context";
import {useQuery} from "@apollo/client";
import {GET_ANSWER} from "@/services/gqlService";
import s from './answerID.module.scss'
import SvgSelector from "@/components/SvgSelector";

const AnswerComponent = ({id}) => {
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)
  const [titleShare, setTitleShare] = useState('Поделится')
  const {data, loading, error} = useQuery(GET_ANSWER, {
    variables: {slug: id}
  })
  const copy = () => {
    navigator.clipboard.writeText(`https://kak-vse.info/answer/${data?.answerID.data[0].attributes.slug}`);
    setTitleShare('Ссылка \n\n скопирована')
    setTimeout(() => {
      setTitleShare('Поделится')
    }, 1000);
  }
  return (
    <div className={s.answerWrapper}>
      {loading ? (
        <>
          <h1>loading</h1>
        </>
      ) : error ? (
        <>
          <h1 className={`${sizeVersion}_h1`}>Произошла ошибка</h1>
          <h2 className={`${sizeVersion}_h2`}>Обновите страницу</h2>
        </>
      ) : (
        <div className={s.content}>
          <h1 className={`${sizeVersion}_h1`}>{data?.answerID.data[0].attributes.title}</h1>
          <div className={s.title}>
            <div className={s.share}>
              <div className={s.share_links}>
                <a
                  target={'_blank'}
                  href={`https://telegram.me/share/url?url=https://kak-vse.info/answer/${data?.answerID.data[0].attributes.slug}`}
                >
                  <SvgSelector svg={'tg-desktop'}/>
                </a>
                <a
                  target={'_blank'}
                  href={`https://vk.com/share.php?url=https://kak-vse.info/answer/${data?.answerID.data[0].attributes.slug}`}
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
            <Markdown>{data?.answerID.data[0].attributes.content}</Markdown>
          </div>
          <div className={s.title}>
            <div className={s.share}>
              <div className={s.share_links}>
                <a
                  target={'_blank'}
                  href={`https://telegram.me/share/url?url=https://kak-vse.info/answer/${data?.answerID.data[0].attributes.slug}`}
                >
                  <SvgSelector svg={'tg-desktop'}/>
                </a>
                <a
                  target={'_blank'}
                  href={`https://vk.com/share.php?url=https://kak-vse.info/answer/${data?.answerID.data[0].attributes.slug}`}
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
  );
};

export default AnswerComponent;