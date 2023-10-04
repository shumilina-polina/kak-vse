import React from 'react';
import s from './cardArticle.module.scss'
import Image from "next/image";
const CardArticle = ({Category, author, image, title, previewText, url, loaded}) => {
  return (
    <div
      style={{
        borderColor: Category === 0 ? "#FFADDE" : Category === 1 ? '#A7EAFF' : '#FFECA7',
      }}
      className={s.card}
    >
      <div className={s.title}>
        <Image
          src={image}
          alt={'author'}
        />
        <div className={s.title_text}>
          <p className={'label'}>{author}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <p className={s.text}>{previewText}</p>
    </div>
  );
};

export default CardArticle;