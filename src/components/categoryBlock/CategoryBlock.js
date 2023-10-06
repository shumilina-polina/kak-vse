import React from 'react';
import s from './categoryBlock.module.scss'
import CardVideo from "@/components/cardVideo/CardVideo";
import SvgSelector from "@/components/SvgSelector";
import Link from "next/link";
import Image from "next/image";
import {useMediaQuery} from "@mui/material";

const CategoryBlock = ({Category, VIDEO_DATA, ARTICLE_DATA, loaded}) => {

  const category = Category === 0
    ? {
      color: "#FFADDE",
      colorLight: "#FFD8EF",
      colorDark: "#E089BE",
      link: '/opportunities',
      text1: 'Ваши возможности →',
      textTitle: 'Найди свой путь самореализации',
      svgIcon: 'opportunities-color'
    }
    : Category === 1
      ? {
        color: "#A7EAFF",
        colorLight: "#C4F1FF",
        colorDark: "#7FCFE9",
        link: '/advices',
        text1: 'Полезные советы →',
        textTitle: `Познакомься с полезными советами от экспертов`,
        svgIcon: 'advices-color'
      }
      : {
        color: "#FFECA7",
        colorLight: "#FFF3C8",
        colorDark: "#F5DC85",
        link: '/success',
        text1: 'Истории успеха →',
        textTitle: 'Найди вдохновение в историях успеха',
        svgIcon: 'success-color'
      };

  const isMobile = useMediaQuery(`(max-width: 480px`);
  const cardVideo = VIDEO_DATA.filter((elem) => (elem.Category === Category)).slice(0, 2)


  return (
    <>
      {
        !isMobile
          ? //----------------------------------------------------------------------desktop
          <div className={s.block}>
            <div className={s.title}>
              <div className={s.title_text}>
                <Link
                  style={{
                    backgroundColor: category.colorLight
                  }}
                  className={s.link}
                  href={category.link}
                >
                  <p className={'normal_caption'}>{category.text1}</p>
                </Link>
                <h1 className={'normal_h1'}>{category.textTitle}</h1>
              </div>
              <SvgSelector svg={category.svgIcon}/>
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
                    borderColor: category.color,
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
                    href={category.link}
                    className={s.link}
                    style={{
                      backgroundColor: category.colorLight
                    }}

                  >
                    <h3 className={'normal_h3'}>Читать все →</h3>
                  </Link>
                </div>
              </div>
            </div>


            <Link
              style={{
                backgroundColor: category.color,
                borderColor: category.colorDark
              }}
              href={category.link}
              className={s.large_link}
            >
              <h2 className={'normal_h2'}>Больше видео и статей →</h2>
            </Link>
          </div>
          : //----------------------------------------------------------------------mobile
          <div className={s.block}>
            <div className={s.title}>
              <div className={s.title_text}>
                <Link
                  style={{
                    backgroundColor: category.colorLight
                  }}
                  className={s.link}
                  href={category.link}
                >
                  <p className={'normal_caption'}>{category.text1}</p>
                </Link>
                <SvgSelector svg={category.svgIcon}/>
              </div>
              <h1 className={'normal_h1'}>{category.textTitle}</h1>
            </div>

            <div className={s.content}>
              <CardVideo
                Category={Category}
                tags={cardVideo[0].tags}
                title={cardVideo[0].title}
                url={cardVideo[0].url}
                loaded={loaded}
                key={'video1'}
              />
              <div
                className={s.content_article_wrapper}
                style={{
                  borderColor: category.color,
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
                  href={category.link}
                  className={s.link}
                  style={{
                    backgroundColor: category.colorLight
                  }}
                >
                  <h3 className={'normal_h3'}>Читать все →</h3>
                </Link>
              </div>
              {cardVideo.length !== 1 &&
                <CardVideo
                  Category={Category}
                  tags={cardVideo[1].tags}
                  title={cardVideo[1].title}
                  url={cardVideo[1].url}
                  loaded={loaded}
                  key={'video2'}
                />
              }


            </div>


            <Link
              style={{
                backgroundColor: category.color,
                borderColor: category.colorDark
              }}
              href={category.link}
              className={s.large_link}
            >
              <h2 className={'normal_h2'}>Больше видео и статей →</h2>
            </Link>
          </div>
      }
    </>
  );


};

export default CategoryBlock;