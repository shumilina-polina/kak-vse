import React from 'react';
import s from './cardArticle.module.scss'
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Markdown from "react-markdown";
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
          width={52}
          height={52}
        />
        <div className={s.title_text}>
          <Markdown className={'normal_label'}>{author}</Markdown>
          <Markdown className={'normal_h3'}>{title}</Markdown>
        </div>
      </div>
      <Markdown className={classNames(s.text, 'normal_t3')}>{previewText}</Markdown>
      <Link
        href={`/articles/${url}`}
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