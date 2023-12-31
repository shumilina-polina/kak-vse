import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8"/>

          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <meta
            name="description"
            content="Узнайте больше про обучение, трудоустройство и социализацию людей с инвалидностью в России"
          />
          <meta content="origin" id="mref" name="referrer"/>
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />

          <meta name="msapplication-TileColor" content="#2b5797"/>
          <meta name="theme-color" content="#000000"/>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest"/>
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(95261427, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
   `,
          }}
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZTXGLX9');
   `,
          }}
        ></script>

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/95261427"
              style={{position: "absolute", left: "-9999px"}}
              alt=""
            />
          </div>
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZTXGLX9"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}>
          </iframe>
        </noscript>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NYK7KN5C0S"></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NYK7KN5C0S');
          `,
          }}
        >

        </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
