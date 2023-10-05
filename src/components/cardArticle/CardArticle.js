import React from 'react';
import s from './cardArticle.module.scss'
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
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
          <p className={'normal_label'}>{author}</p>
          <h2 className={'normal_h3'}>{title}</h2>
        </div>
      </div>
      <p className={classNames(s.text, 'normal_t3')}>{previewText}</p>
      <Link
        href={url}
        className={s.button}
        style={{
          backgroundColor: Category === 0 ? "#FFADDE" : Category === 1 ? '#A7EAFF' : '#FFECA7',
        }}
      >
        <p className={'normal_h3'}>Читать →</p>
      </Link>
    </div>
  );
};

export default CardArticle;