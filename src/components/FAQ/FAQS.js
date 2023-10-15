import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_FAQS} from "@/services/gqlService";
import s from "@/components/FAQ/faqs.module.scss";
import FaqsBlock from "@/components/FAQ/FaqsBlock";
import {Skeleton} from "@mui/material";

const Faqs = () => {
  const { data, loading, error} = useQuery(GET_FAQS)


  return (
    <div className={s.faqs}>
      {loading ? (
        <>
          {[1,2,3].map((elem, i) => (
            <Skeleton
              variant="rounded"
              sx={{borderRadius: '40px', height: '150px', width: `100%`, marginTop: '20px'}}
              animation="wave"
              key={i}
            />
          ))}
        </>
      ) : error ? (
        <h1>error...</h1>
      ) : (
        <>
          {data?.faqCategories.data.map((elem, index) => (
            <FaqsBlock
              data={elem.attributes}
              key={index}
              id={index}
            />
          ))}
        </>
      )
      }
    </div>
  );
};

export default Faqs;