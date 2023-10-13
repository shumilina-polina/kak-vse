import React, {useContext} from 'react';
import s from './cardVideo.module.scss'
import SvgSelector from "@/components/SvgSelector";
import Markdown from "react-markdown";
import {colorContext, sizeContext} from "@/components/Context";
import cn from "classnames";
import {Skeleton} from "@mui/material";
const CardVideo = ({Category, tags, title, url,  loaded}) => {
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)

  let tag = [];

  if (tags) {
    tag = tags?.split(', ');
  }
  const copy = () => {
    navigator.clipboard.writeText(url);
    alert("ссылка скопирована");
  };
  return (
    <div
      className={cn(s.card, `${colorVersion}_${Category}_border`)}
    >
      {loaded ? (
        <>
          <Skeleton variant="rounded" sx={{borderRadius: '40px', height: '200px', width: '100%' }} animation="wave"/>
          <div className={s.card_bottom}>
              <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '12px', width: '30%', margin: 0}} animation="wave"/>
              <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '20px', width: '100%', margin: 0}} animation="wave"/>
              <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '20px', width: '80%', margin: 0}} animation="wave"/>
            <div className={s.share}>
              <div className={s.share_links}>
                <Skeleton variant="circular" width={48} height={48}/>
                <Skeleton variant="circular" width={48} height={48}/>
                <Skeleton variant="circular" width={48} height={48}/>
                <Skeleton variant="circular" width={48} height={48}/>
              </div>
              <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '12px', width: '70px' }} animation="wave"/>
            </div>
          </div>
        </>
      ) : (
        <>
          <iframe
            src={url}
            allow="encrypted-media; fullscreen; picture-in-picture;"
            frameBorder="0"
            allowFullScreen
          />
          <div className={s.card_bottom}>
            <div className={s.card_bottom_text}>
              <div className={s.tags}>{
                tag.slice(0,3).map((el, i)=>(<p className={`${sizeVersion}_label`} key={i}>{el}</p>))
              }</div>

              <h2 className={`${sizeVersion}_h2`}><Markdown>{title}</Markdown></h2>
            </div>
            <div className={s.share}>
              <div className={s.share_links}>
                <a
                  target={"_blank"}
                  href={
                    "https://telegram.me/share/url?url=https://www.youtube.com/live/nwibL__1Ux4?si=D8RN7Kk2S6a65Sb1&text=Какой-то крутой текст"
                  }
                >
                  <SvgSelector svg={"tg-desktop"} />
                </a>
                <a
                  target={"_blank"}
                  href={
                    "https://vk.com/share.php?url=https%3A//youtube.com/live/nwibL__1Ux4%3Fsi%3Dj3HTpRGqaiX_5Rq2"
                  }
                >
                  <SvgSelector svg={"vk-desktop"} />
                </a>
                <a
                  target={"_blank"}
                  href={
                    "https://connect.ok.ru/dk?st.cmd=OAuth2Login&st.layout=w&st.redirect=%252Fdk%253Fcmd%253DWidgetSharePreview%2526amp%253Bst.cmd%253DWidgetSharePreview%2526amp%253Bst.title%253D%2525D0%25259E%2525D1%252581%2525D0%2525B2%2525D0%2525BE%2525D0%2525B1%2525D0%2525BE%2525D0%2525B4%2525D0%2525B8%252B%2525D1%252581%2525D0%2525B2%2525D0%2525BE%2525D1%25258E%252B%2525D1%252582%2525D1%252580%2525D0%2525B5%2525D0%2525B2%2525D0%2525BE%2525D0%2525B3%2525D1%252583.%2526amp%253Bst.shareUrl%253Dhttps%25253A%25252F%25252Fyoutube.com%25252Flive%25252FnwibL__1Ux4%25253Fsi%25253Dj3HTpRGqaiX_5Rq2&st._wt=1&st.client_id=-1"
                  }
                >
                  <SvgSelector svg={"ok-desktop"} />
                </a>
                <a onClick={() => copy()}>
                  <SvgSelector svg={"share-desktop"} />
                </a>
              </div>
              <p className={`${sizeVersion}_label`}>Поделитесь</p>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default CardVideo;