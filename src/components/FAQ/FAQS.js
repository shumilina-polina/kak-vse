import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_FAQS} from "@/services/gqlService";
import s from "@/components/FAQ/faqs.module.scss";
import FaqsBlock from "@/components/FAQ/FaqsBlock";

const Faqs = () => {
  const { data, loading, error} = useQuery(GET_FAQS)

  return (
    <div className={s.faqs}>
      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        <h1>error...</h1>
      ) : (
        <>
          {data?.faqCategories.data.map((elem, index) => (
            <FaqsBlock
              data={elem.attributes}
              key={index}
            />
          ))}
        </>
      )
      }
    </div>
  );
};

export default Faqs;