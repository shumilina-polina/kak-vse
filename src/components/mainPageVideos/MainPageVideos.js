import React from 'react';
import CardVideo from "@/components/cardVideo/CardVideo";
import s from './mainPageVideos.module.scss'

const MainPageVideos = ({videos, loaded}) => {
  console.log(!loaded && videos[0]?.attributes);
  return (
    <div className={s.videos_main_wrapper}>

      <div className={s.video_0}>
        <CardVideo
          Category={0}
          tags={!loaded && videos[0].attributes.tags}
          title={!loaded && videos[0].attributes.title}
          url={!loaded && videos[0].attributes.urlEmbed}
          loaded={loaded}
        />
      </div>
      <div className={s.video_1}>
        <CardVideo
          Category={1}
          tags={!loaded && videos[1]?.attributes.tags}
          title={!loaded && videos[1]?.attributes.title}
          url={!loaded && videos[1]?.attributes.urlEmbed}
          loaded={loaded}
        />
      </div>
      <div className={s.video_2}>
        <CardVideo
          Category={2}
          tags={!loaded && videos[2]?.attributes.tags}
          title={!loaded && videos[2]?.attributes.title}
          url={!loaded && videos[2]?.attributes.urlEmbed}
          loaded={loaded}
        />
      </div>
      <svg className={s.svg} xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
        <path d="M34.8611 43.6259C36.7283 41.8543 38.807 40.4017 41.0334 39.3128C43.5504 37.9755 45.7676 36.971 47.767 34.8679C50.7197 31.8041 54.5986 29.2175 57.8291 26.2919C59.1027 25.2346 60.1838 23.8992 61.0107 22.3618C61.2662 21.8188 61.6438 21.3652 62.1038 21.0484C62.5639 20.7316 63.0895 20.5634 63.6254 20.5614C64.1613 20.5594 64.6878 20.7237 65.1496 21.037C65.6115 21.3503 65.9916 21.8011 66.2502 22.3421C66.5087 22.8831 66.6361 23.4943 66.619 24.1116C66.6019 24.7289 66.441 25.3295 66.153 25.8503C65.8651 26.3712 65.4607 26.7932 64.9825 27.0719C64.5043 27.3507 63.9697 27.4759 63.435 27.4345C60.5531 27.3403 58.6082 30.0965 56.8159 32.344C55.029 34.7548 53.3347 37.4042 50.9703 39.432C49.8807 40.3487 48.4262 41.6985 47.2821 42.4895C44.9886 44.2097 42.4172 45.3147 40.5868 47.3927C39.6279 48.3972 39.0395 49.6655 38.2278 50.8395C37.0511 52.1579 35.1225 52.0009 33.766 51.505C32.6537 51.1203 31.6743 50.3429 30.9658 49.2825C28.6341 47.1793 25.311 44.5801 23.0828 42.4142C21.0943 40.6437 19.3292 38.4966 17.0902 37.0652C14.6277 35.5208 11.7022 35.0625 9.00551 33.8696C8.28605 33.5451 7.58706 33.1633 6.91355 32.727C6.51743 32.5445 6.17075 32.2434 5.9093 31.855C5.64786 31.4665 5.48113 31.0046 5.4263 30.5171C5.24932 29.0414 5.57725 27.5443 6.34077 26.3422C7.10429 25.1401 8.24354 24.3274 9.51764 24.0757C9.85097 23.9368 10.2116 23.9096 10.5578 23.9974C10.904 24.0852 11.2215 24.2843 11.4734 24.5717C11.9528 25.0111 12.454 25.4506 12.9335 25.9277C14.98 28.0789 17.2467 29.9343 19.6833 31.4525C21.9823 32.8275 24.5864 34.0893 26.4768 36.2616C28.7104 38.6285 30.4592 41.5855 33.0578 43.3685C33.45 43.6908 33.9009 43.9056 34.3762 43.9963C34.3762 43.9963 34.7466 43.7389 34.8611 43.6259Z" fill="#1D1D1B"/>
      </svg>


    </div>
  );
};

export default MainPageVideos;