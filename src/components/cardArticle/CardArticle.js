import React, {useContext} from 'react';
import s from './cardArticle.module.scss'
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Markdown from "react-markdown";
import {colorContext, sizeContext} from "@/components/Context";
const CardArticle = ({Category, author, image, title, previewText, url, loaded}) => {
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)
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
          <Markdown className={`${sizeVersion}_label`}>{author}</Markdown>
          <h3><Markdown className={`${sizeVersion}_h3`}>{title}</Markdown></h3>
        </div>
      </div>
      <Markdown className={classNames(s.text, `${sizeVersion}_t3`)}>{previewText}</Markdown>
      <Link
        href={`/articles/${url}`}
        className={s.button}
        style={{
          backgroundColor: Category === 0 ? "#FFADDE" : Category === 1 ? '#A7EAFF' : '#FFECA7',
        }}
      >
        <p className={`${sizeVersion}_h3`}>Читать →</p>
      </Link>
    </div>
  );
};

export default CardArticle;