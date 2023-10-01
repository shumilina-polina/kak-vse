import React from 'react';
import s from './cardVideo.module.scss'
const CardVideo = ({Category, tags, title, url, loaded}) => {
  return (
    <div
      style={{
        borderColor: Category = 0 ? "#FFADDE" : Category = 1 ? '#A7EAFF' : '#FFECA7',
      }}
      className={s.card}
    >
      <iframe
        width={"340"}
        height={"192"}
        src={url}
        title={"YouTube video player"}
        frameborder={"0"}
        allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
        allowfullscreen
      />
      <p className={'label'}>{tags}</p>
      <h2 >{title}</h2>
      <div className={s.share}>

      </div>
    </div>
  );
};

export default CardVideo;