import React from 'react';
import s from './cardVideo.module.scss'
import SvgSelector from "@/components/SvgSelector";
const CardVideo = ({Category, tags, title, url, loaded}) => {
  const copy = () => {

    navigator.clipboard.writeText(url)
    alert('ссылка скопирована')
  }
  return (
    <div
      style={{
        borderColor: Category === 0 ? "#FFADDE" : Category === 1 ? '#A7EAFF' : '#FFECA7',
      }}
      className={s.card}
    >
      <iframe
        width={"340"}
        id={"ytplayer"}
        type={"text/html"}
        height={"192"}
        src={url}
        title={"YouTube video player"}
        frameBorder={"0"}
        allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
        allowFullScreen
      />
      <p className={'normal_label'}>{tags}</p>
      <h2 className={'normal_h2'}>{title}</h2>
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
  );
};

export default CardVideo;