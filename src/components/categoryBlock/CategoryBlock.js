import React from 'react';
import s from './categoryBlock.module.scss'
import CardVideo from "@/components/cardVideo/CardVideo";
import SvgSelector from "@/components/SvgSelector";
import Link from "next/link";
import Image from "next/image";

const CategoryBlock = ({Category, VIDEO_DATA, ARTICLE_DATA, loaded}) => {


  const Color = Category === 0
    ? "#FFADDE"
    : Category === 1
      ? '#A7EAFF'
      : '#FFECA7';
  const Color_light = Category === 0
    ? "#FFD8EF"
    : Category === 1
      ? '#C4F1FF'
      : '#FFF3C8';
  const Color_dark = Category === 0
    ? "#E089BE"
    : Category === 1
      ? '#7FCFE9'
      : '#F5DC85';
  const link = Category === 0
    ? "/opportunities"
    : Category === 1
      ? '/advices'
      : '/success';
  const text1 = Category === 0
    ? "Ваши возможности →"
    : Category === 1
      ? 'Полезные советы →'
      : 'Истории успеха →';
  const text_title = Category === 0
    ? "Найди свой путь самореализации"
    : Category === 1
      ? 'Познакомься с полезными советами от экспертов'
      : 'Найди вдохновение в историях успеха';
  const svgIcon = Category === 0
    ? "opportunities-color"
    : Category === 1
      ? 'advices-color'
      : 'success-color';

  return (
    <div className={s.block}>
      <div className={s.title}>
        <div className={s.title_text}>
          <Link
            style={{
              backgroundColor: Color_light
            }}
            className={s.link}
            href={link}
          >
            <p className={'normal_caption'}>{text1}</p>
          </Link>
          <h1 className={'normal_h1'}>{text_title}</h1>
        </div>
        <SvgSelector svg={svgIcon}/>
      </div>

      <div className={s.content}>
        <div className={s.content_video}>
          <label><p className={'normal_label'}>Видео</p></label>
          <div className={s.content_video_wrapper}>
            {VIDEO_DATA.filter((elem) => (elem.Category === Category)).slice(0, 2).map((path, i) => (
              <CardVideo
                Category={Category}
                tags={path.tags}
                title={path.title}
                url={path.url}
                loaded={loaded}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className={s.content_article}>
          <label><p className={'normal_label'}>Статьи</p></label>
          <div
            className={s.content_article_wrapper}
            style={{
              borderColor: Color,
            }}
          >
            <div className={s.articles}>
              {ARTICLE_DATA.filter((elem) => (elem.Category === Category)).slice(0, 3).map((path, i) => (
                <div className={s.article_row} key={`row${i}`}>
                  <Image
                    src={path.image}
                    alt={'author'}
                    className={s.image}
                    key={`image${i}`}
                  />
                  <div className={s.text}>
                    <p className={'normal_label'} key={`author${i}`}>{path.author}</p>
                    <h3 className={'normal_h3'} key={`title${i}`}>{path.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={link}
              className={s.link}
              style={{
                backgroundColor: Color_light
              }}

            >
              <h3 className={'normal_h3'}>Читать все →</h3>
            </Link>
          </div>
        </div>
      </div>


      <Link
        style={{
          backgroundColor: Color,
          borderColor: Color_dark
        }}
        href={link}
        className={s.large_link}
      >
        <h2 className={'normal_h2'}>Больше видео и статей →</h2>
      </Link>
    </div>
  );
};

export default CategoryBlock;