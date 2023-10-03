import React from 'react';
import s from './categoryBlock.module.scss'
const CategoryBlock = ({Category,VIDEO_DATA, ARTICLE_DATA, loaded}) => {

  const Color = Category = 0 ? "#FFADDE" : Category = 1 ? '#A7EAFF' : '#FFECA7';

  return (
    <>
      <div className={s.title}>
        <div className={s.title_text}>
          <button style={{backgroundColor: `${Color}`}}>
            <p>возможности →</p>
          </button>
          <h1>Найди свой путь самореализации!</h1>
        </div>
      </div>

      <div>

      </div>

      <button style={{backgroundColor: `${Color}`}}>
        <h2>Больше видео и статей →</h2>
      </button>
    </>
  );
};

export default CategoryBlock;