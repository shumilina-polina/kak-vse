import React from 'react';
import s from './cardArticle.module.scss'
import Image from "next/image";
const CardArticle = ({Category, author, image, title, previewText, url, loaded}) => {
  return (
    <div
      style={{
        borderColor: Category = 0 ? "#FFADDE" : Category = 1 ? '#A7EAFF' : '#FFECA7',
      }}
    >
      <div>
        <Image src={image} alt={'author'}/>
        <div>
          <p>{author}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <p>{previewText}</p>
      <button ref={url}/>
    </div>
  );
};

export default CardArticle;