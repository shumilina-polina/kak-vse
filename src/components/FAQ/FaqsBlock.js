import React, {useState} from 'react';
import {GET_FAQS} from "@/services/gqlService";
import {useQuery} from "@apollo/client";
import Markdown from "react-markdown";
import Link from "next/link";
import s from './faqs.module.scss'
import SvgSelector from "@/components/SvgSelector";
import cn from 'classnames'

const FaqsBlock = ({data}) => {
  const [close, setClose] = useState(true)
  console.log(data);
  return (
    <div
      className={cn(s.categoryBlock, close ? s.categoryBlock_close : s.categoryBlock_open)}
      onClick={() => setClose(!close)}
    >
      <h2 className={'normal_h2'}><Markdown>{data.title}</Markdown></h2>
      <button className={s.arrow} style={{transform: close ? 'rotate(180deg)' : 'rotate(0)'}}>
        <SvgSelector svg={'arrow'}/>
      </button>
      <div className={s.categoryBlock_questions}>
        {data.faqs.data.map((question, jndex) => (
          <button
            href={`/answer/${question.attributes.slug}`}
            className={'normal_t2'}
            key={jndex}
            style={{transitionDelay: `${jndex/10}s`}}
          >
            <p className={'normal_t2'}>{question.attributes.title}</p>
          </button>
        ))}
      </div>

    </div>

  );
};

export default FaqsBlock;