const SvgSelector = ({svg}) => {
  switch (svg) {

    //---HEADER---\\
    case "logo":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="83" height="82" viewBox="0 0 83 82" fill="none">
          <path
            d="M7.78398 48.4894C1.59257 20.9833 6.16093 13.7609 33.6671 7.56947C61.1733 1.37805 68.3956 5.94642
            74.587 33.4526C80.7785 60.9587 76.2101 68.1811 48.7039 74.3725C21.1978 80.564 13.9754 75.9956 7.78398
            48.4894Z"
            fill="#232323"
          />
          <mask id="mask0_7_2394" maskUnits="userSpaceOnUse" x="5" y="5" width="73" height="72">
            <path
              d="M7.78398 48.4894C1.59257 20.9832 6.16093 13.7609 33.6671 7.56944C61.1733 1.37802 68.3956 5.94639
              74.587 33.4526C80.7785 60.9587 76.2101 68.1811 48.7039 74.3725C21.1978 80.5639 13.9754 75.9956 7.78398
              48.4894Z"
              fill="#FFFFFF"
            />
          </mask>
          <g mask="url(#mask0_7_2394)">
            <path
              d="M4.47328 57.3762C5.97686 57.2177 19.9623 54.6677 21.0604 53.7738C23.3834 51.8828 25.5726 50.0851
              27.6859 48.0101C29.12 46.6022 30.955 45.0256 31.8273 43.3072C32.1739 42.6244 32.1098 41.2888 31.0907
              41.3962C27.2306 41.8033 23.1125 41.5943 20.1374 44.0809C16.4109 47.1956 14.605 52.221 13.9744
              56.5953C13.4557 60.1931 15.2387 63.9597 19.3402 65.2751C22.362 66.2443 27.109 66.1585 28.9248
              63.3296C30.0947 61.5071 33.1607 56.0973 29.4369 55.4061C27.8908 53.524 21.2238 52.4157 20.3683 54.3173"
              stroke="white" stroke-width="3" stroke-linecap="round"
            />
            <path
              d="M44.6403 48.5341C40.8084 48.9381 35.1273 49.2308 33.9317 53.3516C33.0969 56.2288 33.3679 60.6112
              36.7152 62.0834C37.9008 62.6048 40.1674 62.4673 41.4775 62.3291C44.7459 61.9845 47.8128 61.4689 50.7736
              60.0911C54.7133 58.2578 57.7117 56.8233 60.2378 53.6201C62.057 51.3133 64.4759 48.96 64.7958
              46.1028C65.0135 44.1585 64.2419 43.7305 61.9269 43.5158C59.5858 43.2988 57.7452 43.0311 56.3621
              44.8675C53.8538 48.1975 51.1178 53.4334 54.6916 56.6525C55.982 57.8148 57.9452 57.9981 59.7829
              57.9513C64.1609 57.8399 68.4066 57.5797 72.5513 56.129C76.1975 54.8528 78.928 52.425 82.2429
              50.6879C83.2524 50.1589 87.3772 48.7787 87.7426 47.9664"
              stroke="white" stroke-width="3" stroke-linecap="round"
            />
            <path
              d="M23.0694 35.4602C22.9226 35.446 22.7862 35.3783 22.6862 35.27L15.6184 27.6121C15.2668 27.2311
              14.6301 27.4453 14.5802 27.9612L13.998 33.9799C13.9661 34.3097 13.6729 34.5512 13.343 34.5193L9.26011
              34.1244C8.93028 34.0925 8.68876 33.7992 8.72067 33.4694L10.2353 17.8126C10.2672 17.4827 10.5604 17.2412
              10.8902 17.2731L14.9732 17.6681C15.303 17.7 15.5445 17.9933 15.5126 18.3231L15.0126 23.4914C14.964
              23.9944 15.521 24.3286 15.9419 24.0489L24.0222 18.6787C24.1371 18.6023 24.2748 18.5679 24.4121
              18.5812L29.1922 19.0436C29.7577 19.0983 29.9375 19.8354 29.4606 20.1444L21.0599 25.587C20.7486 25.7886
              20.693 26.2216 20.9433 26.4953L28.6735 34.9519C29.0444 35.3576 28.72 36.0068 28.1729 35.9539L23.0694
              35.4602Z"
              fill="white"
            />
            <path
              d="M44.0344 30.5384C44.4817 30.5817 44.8161 30.136 44.6493 29.7186L42.8049 25.1012C42.6224 24.6442
              41.9976 24.5892 41.738 25.0072L39.1373 29.1946C38.9025 29.5726 39.1464 30.0656 39.5892 30.1084L44.0344
              30.5384ZM48.2462 37.8958C48.0225 37.8741 47.8297 37.7293 47.7466 37.5205L46.7298 34.9668C46.6467 34.758
              46.4539 34.6132 46.2302 34.5916L36.7511 33.6746C36.5236 33.6526 36.3034 33.7617 36.1831 33.9561L34.7605
              36.2548C34.6402 36.4491 34.42 36.5582 34.1925 36.5362L30.1671 36.1468C29.722 36.1038 29.4787 35.6065
              29.7179 35.2287L39.145 20.3373C39.2661 20.1461 39.4845 20.0392 39.7098 20.061L45.8248 20.6526C46.0451
              20.6739 46.2357 20.8147 46.3208 21.019L53.1818 37.4861C53.3561 37.9045 53.0214 38.3577 52.5702
              38.314L48.2462 37.8958Z"
              fill="white"
            />
            <path
              d="M68.7002 39.8744C68.5534 39.8602 68.417 39.7925 68.317 39.6841L61.2491 32.0262C60.8976 31.6453 60.2609
               31.8594 60.211 32.3754L59.6288 38.3941C59.5969 38.7239 59.3036 38.9654 58.9738 38.9335L54.8909
               38.5385C54.5611 38.5066 54.3196 38.2134 54.3515 37.8836L55.8661 22.2267C55.898 21.8969 56.1912 21.6554
               56.521 21.6873L60.6039 22.0823C60.9338 22.1142 61.1753 22.4074 61.1434 22.7373L60.6434 27.9055C60.5948
               28.4086 61.1518 28.7428 61.5727 28.463L69.653 23.0929C69.7679 23.0165 69.9056 22.9821 70.0429
               22.9954L74.823 23.4578C75.3885 23.5125 75.5683 24.2496 75.0914 24.5585L66.6907 30.0011C66.3794 30.2028
               66.3238 30.6357 66.5741 30.9095L74.3043 39.3661C74.6752 39.7717 74.3508 40.421 73.8037 40.3681L68.7002 39.8744Z"
              fill="white"/>
          </g>
        </svg>
      );

    case "link-opportunities":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="33" viewBox="0 0 44 33" fill="none">
          <path d="M42.7874 17.5684C42.5443 18.6123 42.1398 19.612 41.5886 20.5313C40.9851 21.3888 40.3019 22.1875 39.5481 22.9165C37.5418 25.1682 35.5107 27.4291 33.0882 29.2336C32.29 29.8547 31.3707 30.3361 30.5788 30.9417C29.2162 31.984 27.5832 32.6135 25.8736 32.7555C24.1809 32.74 22.6001 31.8238 21.277 30.8641C17.3523 27.6625 14.1352 23.6807 11.8294 19.171C10.9225 17.3075 9.98768 15.4441 9.54666 13.3632C9.41733 12.8253 9.39308 12.2674 9.47522 11.7203C9.75474 7.26045 13.1493 4.23546 17.6154 5.01811C19.6776 5.34421 21.4758 6.28214 23.3796 7.05236C24.3014 7.4938 25.1872 8.00678 26.0288 8.5866C27.2739 7.65828 28.6002 6.84438 29.9918 6.15481C30.6878 5.76468 31.4053 5.4142 32.1409 5.10507C33.1856 4.72092 34.3154 4.62963 35.4082 4.84108C37.6039 5.20755 39.5047 6.60824 40.8588 8.31329C41.8627 9.60782 42.5583 11.1143 42.8925 12.718C43.2267 14.3218 43.1908 15.9806 42.7874 17.5684Z" fill="#FFADDE"/>
          <path d="M35.2039 4.63613C33.6906 2.80353 31.5664 1.29806 29.1125 0.904172C27.8913 0.676911 26.6286 0.775028 25.4611 1.18791C24.6391 1.52017 23.8372 1.89686 23.0593 2.31618C21.5042 3.05733 20.0219 3.93212 18.6305 4.92988C17.6899 4.30669 16.7 3.75533 15.6698 3.28087C13.5422 2.45303 11.5326 1.44494 9.2279 1.09444C4.2368 0.253252 0.44314 3.50452 0.130762 8.29799C0.0389558 8.88605 0.0660551 9.48564 0.210585 10.0638C0.703449 12.297 1.74818 14.3032 2.76168 16.306C5.34361 21.1546 8.94498 25.4344 13.3374 28.8738C14.816 29.912 16.5827 30.8767 18.4743 30.9067C20.3849 30.7541 22.2099 30.0775 23.7327 28.9573C24.6177 28.2897 25.6451 27.7789 26.5371 27.1213C29.2513 25.1819 31.5143 22.7518 33.7565 20.3317C34.5989 19.5482 35.3624 18.6898 36.0369 17.7681C36.6529 16.78 37.1049 15.7056 37.3766 14.5836C37.825 12.8758 37.8623 11.0921 37.4858 9.36831C37.1093 7.64453 36.3288 6.02608 35.2039 4.63613ZM33.1665 13.9193C32.9131 14.7271 32.4341 18.8329 31.9656 19.6507C30.9764 21.263 25.5202 25.212 22.1604 26.9244C20.4492 27.7956 16.4161 26.9244 15.3054 26.5906C11.5812 25.4556 8.21788 21.9473 6.56228 18.6927C5.226 16.1091 4.78519 12.7243 4.98303 9.87355C4.98303 9.15921 5.21905 6.22505 5.63555 5.57746C7.11067 3.31426 10.3976 3.20076 12.855 3.94849C13.7831 4.22289 14.639 4.68625 15.3644 5.30708C16.0531 5.82774 16.667 6.43387 17.1901 7.10963C17.0721 7.22981 16.9506 7.35332 16.843 7.48017C16.7028 7.61576 16.5963 7.78008 16.5315 7.96085C16.4666 8.14161 16.4451 8.33414 16.4685 8.52402C16.492 8.71391 16.5597 8.89624 16.6668 9.05738C16.7738 9.21853 16.9173 9.35432 17.0866 9.45459C17.2559 9.55487 17.4466 9.61704 17.6444 9.63645C17.8422 9.65586 18.042 9.63201 18.2289 9.56668C18.4157 9.50135 18.5848 9.39624 18.7235 9.25921C18.8622 9.12217 18.9668 8.95675 19.0296 8.77533C19.7442 7.11333 20.9871 5.71126 22.5803 4.76965C24.1735 3.93847 26.197 4.23222 27.9081 4.29898C33.2255 4.82639 34.7006 9.52305 33.17 13.9193H33.1665Z" fill="#232323"/>
        </svg>
      );

    case "link-advices":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="36" viewBox="0 0 44 36" fill="none">
          <path d="M9.88352 7.60319C16.5341 4.20909 24.2876 4.43596 31.5372 5.01209C37.3983 5.60912 43.7971 7.20617 43.5175 14.1974C43.4949 15.1051 43.4211 16.011 43.2963 16.9109C43.0629 18.7706 42.7803 20.6901 41.8925 22.4095C37.684 29.7768 27.8755 29.7291 20.1067 28.9201C19.5323 28.8604 16.7277 28.6872 16.0427 29.0664C15.719 29.2698 15.3801 29.4494 15.0289 29.6037C13.9607 30.2544 13.0701 31.1464 12.4332 32.2037C11.9524 32.956 11.5303 33.7423 11.1706 34.556C11.0776 34.7946 10.8961 34.9907 10.6617 35.1057C10.4274 35.2207 10.1572 35.2463 9.90445 35.1774C9.65166 35.1085 9.4346 34.9501 9.29598 34.7335C9.15736 34.5168 9.10723 34.2576 9.15549 34.0068C9.40431 32.8127 9.64701 31.6396 9.86204 30.4694C10.0372 29.639 10.1318 28.7945 10.1446 27.9469C10.153 27.5193 10.0074 27.1023 9.73301 26.7678C9.17392 26.135 8.42746 25.6185 7.76086 25.0334C6.79937 24.2185 5.88395 23.3498 4.99617 22.4543C4.91576 22.3686 4.85595 22.2666 4.82108 22.1558C4.15796 20.4153 3.81281 18.5757 3.80121 16.7198C3.80428 12.7317 6.3693 9.41517 9.88352 7.60319ZM6.40002 21.6334C6.3816 21.5826 6.36624 21.5289 6.34781 21.4781L6.22185 21.3438L6.40002 21.6334Z" fill="#A7EAFF"/>
          <path d="M6.23244 3.81506C12.917 0.304483 20.7101 0.539142 27.9968 1.13504C33.8879 1.75256 40.3193 3.40442 40.0384 10.6355C40.0157 11.5744 39.9415 12.5114 39.8161 13.4421C39.5814 15.3657 39.2973 17.351 38.405 19.1295C34.175 26.7496 24.3164 26.7002 16.5079 25.8604C15.9305 25.7986 13.1116 25.6227 12.423 26.0148C12.0975 26.222 11.7569 26.4047 11.4041 26.5613C10.3304 27.2343 9.43532 28.1569 8.79513 29.2506C8.31183 30.0287 7.88765 30.8419 7.52613 31.6836C7.43267 31.9303 7.25019 32.1332 7.01464 32.2521C6.77909 32.3711 6.50754 32.3975 6.25347 32.3263C5.99939 32.255 5.78122 32.0912 5.64189 31.8671C5.50256 31.643 5.45218 31.3748 5.50068 31.1155C5.75078 29.8804 5.99469 28.667 6.21082 27.4567C6.38687 26.5978 6.48197 25.7243 6.49487 24.8477C6.50688 24.4001 6.36036 23.9627 6.08115 23.6126C5.51921 22.9581 4.76893 22.4239 4.09893 21.8188C3.13251 20.9758 2.21242 20.0774 1.32011 19.1511C1.23928 19.0625 1.17916 18.957 1.14411 18.8423C0.477604 17.0422 0.130692 15.1394 0.11903 13.2198C0.122116 9.11953 2.70024 5.68922 6.23244 3.81506ZM4.09275 17.8543C4.11127 17.9037 4.05261 17.8111 4.09275 17.8543C4.8056 18.6429 5.56879 19.3844 6.37754 20.0743C7.61258 21.121 9.19342 22.0688 9.22121 23.9029C9.22121 24.2826 9.22121 24.6624 9.22121 25.0453C10.3235 23.7639 11.6913 22.884 13.3586 22.884C14.0131 22.884 16.2053 22.9982 16.5604 23.0383C22.3681 23.6806 29.4387 24.1344 33.644 20.0218C35.4687 18.1137 37.9666 14.8686 38.2229 12.1454C38.5007 10.2712 37.2688 8.02344 36.0307 6.58771C33.3537 3.41368 26.3048 3.31796 22.3342 3.26547C17.4836 3.3334 12.1637 2.95672 7.88428 5.28784C3.24057 7.80731 2.54278 13.0655 4.09275 17.8543Z" fill="#232323"/>
        </svg>
      );

    case "link-success":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="35" viewBox="0 0 37 35" fill="none">
          <path d="M29.44 19.1104C29.6461 19.3212 29.8473 19.5369 30.039 19.7477C31.614 21.5438 33.0267 23.476 34.2604 25.5217C34.5695 26.025 34.8203 26.562 35.008 27.1221C35.1036 27.4328 35.1143 27.7634 35.039 28.0797C34.9637 28.3959 34.8051 28.6862 34.5797 28.9205C34.3542 29.1547 34.0702 29.3243 33.757 29.4117C33.4439 29.499 33.1131 29.501 32.799 29.4173C29.8186 29.0819 26.2536 28.7225 23.4552 27.0694C23.2061 27.3329 22.9425 27.5917 22.6646 27.836C20.9157 29.3981 18.7115 30.4331 16.8475 31.7939C15.9275 32.4552 15.0506 33.1644 14.1498 33.8352C13.9764 33.9699 13.769 34.0538 13.5508 34.0778C13.3325 34.1018 13.1119 34.0648 12.9133 33.971C12.7148 33.8772 12.5462 33.7303 12.4261 33.5464C12.306 33.3626 12.2392 33.1491 12.2331 32.9296C12.1847 31.883 12.2088 30.8343 12.305 29.791C12.4919 27.4383 12.9663 24.8556 13.2634 22.4406C11.9055 21.99 10.597 21.4024 9.35814 20.6869C7.54688 19.4458 5.95126 18.1233 4.80605 16.3264C4.61408 16.03 4.50291 15.6886 4.48352 15.3359C4.46414 14.9833 4.53723 14.6317 4.69556 14.316C4.85389 14.0003 5.09196 13.7315 5.38617 13.5361C5.68039 13.3408 6.02054 13.2257 6.37293 13.2023C7.95419 13.1208 9.3246 13.7198 10.8004 13.9354C12.0271 14.0744 13.4646 14.3475 14.6003 14.3619C14.793 14.3637 14.9855 14.3477 15.1752 14.3139V14.5008L15.2423 14.381C15.2714 14.3374 15.3034 14.2958 15.3381 14.2564C15.2936 14.2866 15.2429 14.3063 15.1896 14.3139C15.3334 12.0523 15.1896 8.75082 15.525 6.16811C15.6831 5.26248 15.8173 4.17477 16.6606 3.45602C17.0038 3.1879 17.4281 3.04466 17.8636 3.04988C18.2991 3.05511 18.7198 3.20849 19.0565 3.48477C19.1581 3.55764 19.2472 3.64666 19.32 3.74831C20.3496 5.04685 21.486 6.25698 22.7173 7.36603C23.7606 8.47734 24.6531 9.72106 25.3719 11.0652C27.6 10.3896 29.9623 9.53664 32.133 8.80831C33.0146 8.52081 33.9154 8.25248 34.8546 8.03206C35.0695 7.98084 35.2925 7.97259 35.5106 8.00779C35.7287 8.04298 35.9377 8.12092 36.1256 8.23713C36.3135 8.35335 36.4765 8.50553 36.6054 8.68496C36.7343 8.86439 36.8266 9.06753 36.8767 9.28269C36.9346 9.5298 36.9376 9.7866 36.8854 10.035C36.8333 10.2834 36.7273 10.5173 36.5748 10.7202C35.4466 12.5811 34.1643 14.3443 32.7415 15.991C31.7353 17.0739 30.7482 18.3581 29.44 19.1104Z" fill="#FFECA7"/>
          <path d="M28.2361 13.1141C29.6902 11.4352 31.0168 9.64994 32.2047 7.77316C32.2957 7.64735 32.3595 7.50395 32.392 7.3521C32.4245 7.20025 32.4249 7.0433 32.3934 6.89125C32.3332 6.60665 32.1626 6.35755 31.9191 6.1986C31.6755 6.03965 31.3789 5.98383 31.0942 6.0434C30.1446 6.24453 29.2383 6.49517 28.3103 6.76748C26.7637 7.23164 24.5366 7.98358 22.9714 8.48178C22.294 8.69529 21.6197 8.9088 20.9423 9.10065C20.5958 8.50034 20.2494 7.89693 19.8504 7.3059C18.9224 5.75871 17.3758 4.45907 16.1385 3.24916C15.557 2.63028 15.0126 1.97117 14.4744 1.29041C14.2399 1.01197 13.9079 0.83374 13.5464 0.792213C11.2976 0.581794 11.4399 4.83039 11.2945 6.31261C11.2048 8.12592 11.2265 9.9547 11.1213 11.6876C11.1213 11.8516 11.0811 12.0867 11.0625 12.2136C10.7485 12.3555 10.4041 12.4172 10.0603 12.3931C8.87254 12.3931 7.35066 12.1115 6.0979 11.9908C4.64409 11.8206 3.24597 11.4338 1.7272 11.5885C1.4898 11.6162 1.26391 11.7061 1.07234 11.849C0.880775 11.992 0.730316 12.183 0.63617 12.4027C0.542023 12.6225 0.507514 12.8632 0.536146 13.1006C0.564777 13.338 0.655534 13.5636 0.799232 13.7546C1.732 14.9028 2.78217 15.9502 3.93265 16.8799C5.5535 18.2415 7.50224 19.0027 9.40148 19.7887C9.30868 20.4694 9.20042 21.1533 9.09216 21.8403L8.58796 24.8511C8.27864 26.8779 7.96932 28.945 8.08376 31.0894C8.0888 31.2306 8.13257 31.3678 8.2103 31.4858C8.28802 31.6039 8.39669 31.6982 8.52443 31.7586C8.65218 31.819 8.79407 31.8431 8.93457 31.8282C9.07507 31.8133 9.20878 31.76 9.32105 31.6742C10.9697 30.3932 13.2494 28.7067 14.9538 27.5185C16.4755 26.4763 17.8616 25.2487 19.0802 23.864C20.3708 24.7526 21.8103 25.4024 23.3302 25.7825C25.2852 26.3086 27.2215 26.4911 29.0156 26.7944C29.2179 26.8426 29.4294 26.8371 29.6289 26.7784C29.8285 26.7197 30.0092 26.6099 30.1533 26.4598C30.2974 26.3097 30.3998 26.1246 30.4503 25.9228C30.5009 25.7209 30.4979 25.5094 30.4416 25.3091C29.7518 23.3906 28.5083 21.8124 27.3483 20.1724C26.4204 18.9841 25.5141 17.6969 24.3417 16.7129C25.91 15.8557 27.0483 14.4044 28.2361 13.1141ZM22.4456 17.8268C23.0333 18.2274 23.5551 18.717 23.9922 19.2781C25.1593 20.652 26.1949 22.1325 27.0854 23.7C27.1133 23.7526 27.1442 23.8052 27.172 23.8609C25.3161 23.4029 23.5437 22.9078 21.8703 21.9795C21.1241 21.5568 20.4375 21.0365 19.8287 20.4323C19.5063 20.1811 19.0976 20.0677 18.6918 20.117C18.2861 20.1663 17.9164 20.3742 17.6635 20.6953C15.4982 23.2761 13.7289 26.1724 11.143 28.3756C10.6728 28.7748 10.1872 29.1554 9.69224 29.5267C9.86237 27.076 10.5305 24.6623 11.1213 22.2766C11.3719 21.2895 11.6193 20.2931 11.8266 19.2626C11.8711 19.0398 11.8443 18.8086 11.7499 18.6019C11.6555 18.3953 11.4983 18.2237 11.3007 18.1115L11.2017 18.0527L8.8818 16.7407C7.7995 16.1785 6.79246 15.4819 5.88449 14.6675C5.54114 14.358 5.21635 14.0486 4.89156 13.7206C5.70394 13.6185 6.5259 13.6185 7.33829 13.7206C8.81994 13.7763 11.3595 14.4323 12.4266 13.0151C12.5968 12.6371 12.6894 12.2288 12.6988 11.8144C12.8535 9.98565 12.8999 8.22184 13.0577 6.41781C13.1814 5.3224 13.2278 4.14654 13.5371 3.10682C14.5348 4.29187 15.6362 5.38544 16.8283 6.3745C18.0656 7.51942 18.9936 9.00164 19.8535 10.4746C19.944 10.6361 20.0864 10.7623 20.2578 10.8326C20.4291 10.9028 20.6191 10.9129 20.7969 10.8614L23.4787 10.0723C25.1614 9.58337 26.8813 9.10374 28.6166 8.73551C27.2122 10.4653 25.7182 12.1393 24.1871 13.7453C23.6166 14.3509 23.1127 15.0159 22.6838 15.7288C22.5432 15.8905 22.4237 16.0693 22.328 16.2611C22.1642 16.6938 22.0833 17.1537 22.0899 17.6164C22.1949 17.7073 22.3154 17.7786 22.4456 17.8268Z" fill="#1D1D1B"/>
        </svg>
      );

    case 'unvisually':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
          <circle cx="32.6193" cy="33" r="32.6193" fill="#232323"/>
          <path d="M56.4275 32.7872C55.0075 32.9372 53.5775 33.0272 52.1475 33.0972C51.2375 28.0472 49.0075 22.6471 46.5675 19.9371C46.4674 19.7666 46.3103 19.6369 46.124 19.5708C45.9376 19.5047 45.7339 19.5064 45.5488 19.5757C45.3636 19.645 45.2088 19.7774 45.1116 19.9496C45.0144 20.1218 44.9811 20.3228 45.0175 20.5171C45.0383 20.7686 44.9633 21.0187 44.8075 21.2172C44.3288 21.8764 43.8006 22.4981 43.2275 23.0771C43.0175 23.3671 42.1575 24.1972 42.5375 24.6572C42.5742 24.6861 42.6168 24.7066 42.6623 24.7173C42.7078 24.728 42.7551 24.7286 42.8008 24.7191C42.8466 24.7095 42.8897 24.6901 42.9271 24.6621C42.9646 24.6341 42.9954 24.5983 43.0175 24.5571C43.8975 23.7271 45.2175 23.1571 46.0175 22.2071C48.3693 25.4616 49.9025 29.2347 50.4875 33.2071C48.4875 33.2771 46.4875 33.2872 44.4275 33.2772C42.0075 33.2772 39.5975 33.0171 37.1775 32.8171C37.1271 32.4148 37.0332 32.0192 36.8975 31.6371C36.0075 28.7971 31.6775 27.8071 29.8375 30.5171C29.3859 31.1499 29.088 31.8792 28.9675 32.6472C26.1375 32.7672 23.3075 33.0271 20.4675 33.0571C18.9175 32.8871 17.3175 32.8172 15.7175 32.7772C15.7875 32.3872 15.8775 32.0071 15.9675 31.6371C16.7305 28.9911 17.8011 26.4438 19.1575 24.0472C19.4475 23.4872 19.7175 22.9171 20.0175 22.3871C20.8657 23.6442 22.0091 24.6742 23.3475 25.3871C23.4122 25.4205 23.4864 25.4309 23.5578 25.4164C23.6292 25.402 23.6935 25.3636 23.7401 25.3077C23.7867 25.2517 23.8129 25.1815 23.8142 25.1087C23.8156 25.0359 23.792 24.9648 23.7475 24.9072C22.8132 23.657 21.9454 22.3585 21.1475 21.0171C21.0618 20.8114 20.9242 20.6313 20.7482 20.4945C20.5722 20.3577 20.3637 20.2689 20.1432 20.2367C19.9226 20.2045 19.6974 20.2299 19.4896 20.3106C19.2818 20.3913 19.0985 20.5245 18.9575 20.6971C16.6838 23.8364 14.8564 27.2759 13.5275 30.9172C13.3075 31.5372 13.1375 32.1471 12.9875 32.7471C11.4875 32.7471 9.98752 32.7471 8.51752 32.7471C8.17008 32.7471 7.83687 32.8852 7.5912 33.1309C7.34553 33.3765 7.20752 33.7097 7.20752 34.0571C7.20752 34.4046 7.34553 34.7378 7.5912 34.9835C7.83687 35.2291 8.17008 35.3671 8.51752 35.3671C9.83752 35.3671 11.1975 35.3671 12.5175 35.3671C12.0575 41.8671 16.1575 46.3671 23.6875 45.4571C28.3975 44.2271 29.2775 39.2171 31.4775 35.4571H32.4775C33.0275 35.4571 33.5775 35.4571 34.1275 35.4571C33.8794 37.4099 34.2364 39.3917 35.1501 41.1353C36.0639 42.8788 37.4905 44.3 39.2375 45.2071C43.7575 47.8571 50.6075 46.3271 52.2375 40.9371C52.7019 38.9713 52.7868 36.9348 52.4875 34.9371C53.8175 35.0071 55.1575 35.0972 56.4875 35.2272C56.6748 35.2704 56.8694 35.2702 57.0566 35.2266C57.2437 35.1831 57.4185 35.0973 57.5674 34.9758C57.7163 34.8544 57.8354 34.7004 57.9157 34.5258C57.996 34.3512 58.0353 34.1606 58.0306 33.9684C58.0258 33.7763 57.9772 33.5879 57.8885 33.4174C57.7997 33.247 57.6731 33.0991 57.5184 32.9851C57.3637 32.8711 57.185 32.794 56.9959 32.7597C56.8068 32.7254 56.6124 32.7348 56.4275 32.7872ZM27.0975 39.2371C25.8975 41.4171 24.0275 42.6372 21.6275 42.0372C20.4057 41.9701 19.2031 41.7032 18.0675 41.2471C15.7875 40.1071 15.2475 37.8071 15.3775 35.3671C17.1075 35.3671 18.8275 35.2471 20.4875 35.0771C23.1575 35.0771 25.8275 35.3271 28.4875 35.4571C28.2266 36.7826 27.7574 38.0584 27.0975 39.2371ZM50.5575 36.3171C50.4675 38.6171 49.7875 41.4171 47.4375 42.3171C43.6475 43.8171 36.9475 41.8471 36.9375 36.9471C36.9375 36.4071 37.0575 35.8772 37.1275 35.3372C39.5675 35.1472 42.0075 34.8871 44.4475 34.8871C46.5075 34.8871 48.5608 34.9105 50.6075 34.9571C50.6075 35.3871 50.5975 35.8471 50.5575 36.3171Z" fill="white"/>
        </svg>
      );

    //---INDEX---\\
    case 'first-left-icon':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="64" viewBox="0 0 68 64" fill="none">
          <path d="M67.5068 50.5605C67.4531 51.8214 67.2123 53.0674 66.7924 54.2576C66.316 55.4752 65.5838 56.5763 64.6452 57.4865C63.3378 58.7453 61.8822 59.8404 60.3103 60.7477L59.4708 61.1513C56.9805 62.2895 54.2238 62.6366 51.4833 62.5922H51.4429L35.8028 63.2743L33.256 63.3833C29.0584 62.9272 24.8609 62.7375 20.6754 62.5357C18.3546 62.4267 16.0419 62.3702 13.7251 62.3097C10.9846 62.3379 8.80102 61.8092 8.88174 58.4834C8.53463 53.5391 7.69108 48.6554 7.69915 43.6627C7.70733 43.2126 7.76416 42.7646 7.86867 42.3267C8.47005 40.3087 9.80199 38.5933 10.9604 36.9183C13.7009 33.1284 16.6352 29.5443 19.5897 25.94C20.4251 24.7291 21.7328 24.0026 22.6531 22.8846C24.6146 20.4629 25.9708 17.6174 27.4238 14.8648C28.4645 12.7382 29.6456 10.6833 30.9594 8.7137C31.5931 7.75714 32.3721 6.60279 33.5588 6.19918C33.9775 6.05492 34.4226 6.00367 34.8631 6.04898C35.3036 6.09429 35.729 6.23507 36.1096 6.46153C36.8632 6.82198 37.5606 7.28964 38.1801 7.84997C42.1638 11.4825 41.8651 17.6215 40.3597 22.3034C40.0872 23.1419 39.7665 23.964 39.399 24.7655C40.0933 24.5233 40.7875 24.2852 41.4898 24.0632C49.1181 21.589 56.5769 21.2944 62.7643 27.2073C64.298 28.8985 64.9479 31.1587 65.5896 33.2333C67.2243 38.855 67.8729 44.7174 67.5068 50.5605Z" fill="#FFD8EF"/>
          <path d="M60.5721 45.2847C60.4215 47.7508 59.3257 50.0639 57.5127 51.7425C55.8439 53.325 53.9181 54.612 51.8177 55.5486C47.5475 57.3447 42.8171 56.8482 38.4581 56.0128C37.3885 55.8069 36.3149 55.5809 35.2695 55.3549C33.4008 54.9755 30.7854 54.7615 29.5341 52.9049C28.1013 50.6971 29.8369 47.5005 32.3595 47.2018C32.5532 47.1615 32.763 47.1252 32.9447 47.0929C31.9433 46.8797 30.9667 46.5632 30.0306 46.1484C28.513 45.4138 28.6785 43.6621 29.0095 42.306C29.2516 41.4705 30.0669 40.8772 31.084 40.4373C30.7571 40.3525 30.4504 40.2597 30.1759 40.1588C29.8088 40.0459 29.4723 39.8505 29.1925 39.5874C28.9126 39.3243 28.6968 39.0006 28.5614 38.6412C28.3907 38.0986 28.3288 37.5276 28.3794 36.961C28.43 36.3944 28.592 35.8434 28.8561 35.3396C29.4187 34.5044 30.1434 33.7906 30.9872 33.2408L31.0558 33.1924C30.0044 33.0478 29.0034 32.6519 28.1376 32.038C26.725 31.0532 27.4676 27.1947 28.5049 26.1816C32.8559 21.2333 38.672 22.2302 44.2903 20.3534C44.5325 20.2691 44.791 20.2424 45.0454 20.2755C45.2997 20.3085 45.5428 20.4003 45.7555 20.5437C45.9682 20.687 46.1445 20.8779 46.2705 21.1013C46.3965 21.3247 46.4688 21.5743 46.4815 21.8305C46.4943 22.0866 46.4472 22.3422 46.3439 22.577C46.2407 22.8118 46.0842 23.0192 45.8868 23.183C45.6894 23.3467 45.4566 23.4622 45.2068 23.5204C44.957 23.5785 44.6971 23.5776 44.4477 23.5177C41.5796 22.8843 38.5975 22.9913 35.7821 23.8285C33.4718 24.4024 31.4158 25.7234 29.9337 27.5862C29.5301 28.2118 29.4494 29.8343 29.5301 30.2985C30.3524 30.6711 31.252 30.8414 32.1536 30.7949C33.6836 30.7499 35.2062 30.5648 36.7024 30.2419C37.3428 29.9917 37.9966 29.7563 38.6639 29.5356C40.1014 29.0529 41.5923 28.7466 43.1037 28.6235C43.5829 28.6255 44.0457 28.798 44.4094 29.11C44.773 29.4221 45.0138 29.8533 45.0885 30.3267C45.1633 30.8 45.0672 31.2845 44.8174 31.6934C44.5676 32.1024 44.1805 32.4091 43.7253 32.5587L43.0674 32.6435H42.9543C41.1623 32.8776 39.3501 33.0834 37.5055 33.2206C35.6721 33.6938 33.8942 34.3608 32.202 35.2104C31.5552 35.5142 30.9696 35.9342 30.4746 36.4495C30.2768 36.9823 30.0427 37.8945 30.523 38.29C31.0476 38.5432 31.5966 38.742 32.1617 38.8833C33.0375 39.107 33.9256 39.2795 34.8215 39.4L35.7861 39.2103C38.1536 38.7959 40.551 38.5758 42.9543 38.5524C43.4023 38.5887 43.8261 38.5322 44.2459 38.8349C44.8634 39.3798 44.2459 40.1588 43.7696 40.3807C41.469 41.3898 36.9082 41.4261 33.3766 40.9055C31.7621 41.3091 30.5149 41.862 30.1154 42.5522C29.9418 43.4805 29.6673 44.8407 30.7611 45.1152C32.3824 45.654 34.0743 45.9505 35.7821 45.995C38.3355 46.1502 40.8981 45.9547 43.3983 45.4138L43.5073 45.3815L43.6001 45.3614H43.9755C44.3459 45.3507 44.7053 45.4875 44.9748 45.7418C45.2442 45.9962 45.4016 46.3471 45.4123 46.7175C45.423 47.0879 45.2862 47.4473 45.0319 47.7168C44.7776 47.9863 44.4266 48.1437 44.0562 48.1544H43.9593H43.8262C41.6507 48.3279 39.56 48.0979 37.4248 48.2997C35.9274 48.4975 34.1959 48.667 32.7187 48.9576C32.4625 49.0065 32.2123 49.0822 31.972 49.1836C31.2334 49.6437 30.7369 50.685 30.9307 51.4196C31.4715 53.0341 34.0869 53.0341 35.657 53.4175C36.7266 53.6355 37.7679 53.8413 38.8213 54.031C42.8575 54.7494 47.1721 55.1854 50.9701 53.5346C51.8843 53.1301 52.7485 52.6208 53.5452 52.017C55.1152 50.8505 56.7741 49.5751 57.5248 47.8073C57.8823 46.9303 58.0818 45.997 58.1141 45.0506C58.1603 41.9158 57.8639 38.7854 57.2302 35.715C56.6248 32.6475 56.0194 29.471 55.1314 26.5085C54.8459 25.4751 54.4508 24.4752 53.9528 23.5258C48.9561 17.4958 41.8726 17.7783 35.1161 20.4947C33.1437 21.2849 31.2368 22.2296 29.4131 23.32C29.0805 23.462 28.7099 23.4883 28.3606 23.3946C28.0114 23.3009 27.7037 23.0927 27.4869 22.8033C27.27 22.5139 27.1567 22.1601 27.1649 21.7985C27.1731 21.437 27.3024 21.0887 27.5322 20.8095C31.3423 16.4504 34.3937 6.03314 28.178 2.52573L28.0125 2.44097C27.969 2.4139 27.9231 2.39093 27.8753 2.37236C27.4394 2.17055 27.1851 2.40465 26.6241 2.71139C25.754 3.34025 25.0367 4.1569 24.5253 5.10079C23.6333 6.56188 22.8624 8.0835 22.1036 9.63338C20.6667 12.4869 19.4195 15.5907 17.5145 18.2425C16.5741 19.3726 16.0292 20.7853 14.9919 21.8387C12.4007 24.9506 8.53408 29.2854 6.07606 32.4134C4.96612 33.8382 3.81582 35.1983 3.1216 36.833C3.08527 36.9137 3.10141 36.9056 3.08526 36.9379C3.06981 36.9769 3.05899 37.0175 3.05299 37.059C2.88428 38.4136 2.83566 39.7804 2.9077 41.1436C2.99245 44.6106 3.26288 48.0454 3.51312 51.5205C3.56559 51.9483 3.55749 52.8525 3.58978 53.248C3.58978 54.2167 4.25171 54.6203 5.20424 54.7293C12.6913 55.1087 20.2026 55.0441 27.6573 53.922C27.9154 53.882 28.1791 53.8978 28.4305 53.9684C28.682 54.0391 28.9153 54.1628 29.1148 54.3314C29.3143 54.5 29.4752 54.7095 29.5868 54.9457C29.6983 55.1818 29.7579 55.4392 29.7614 55.7003C29.7649 55.9615 29.7122 56.2203 29.6071 56.4594C29.5019 56.6985 29.3466 56.9122 29.1517 57.086C28.9569 57.2599 28.7269 57.3899 28.4775 57.4673C28.228 57.5446 27.9648 57.5675 27.7058 57.5344C23.0602 56.9653 18.4226 56.7554 13.769 56.5334C11.4482 56.4244 9.13141 56.3679 6.8187 56.3074C5.2446 56.3074 3.04492 56.2347 2.29823 54.4467C1.89462 53.5346 2.06009 52.5578 1.93497 51.6416C1.7372 49.3491 1.4587 47.0404 1.24478 44.7236C0.972788 42.3775 0.82864 40.0182 0.812934 37.6563C0.810122 37.1083 0.894592 36.5634 1.06317 36.0419C1.73721 34.157 2.96015 32.5103 4.07816 30.92C6.81467 27.1301 9.75299 23.5419 12.7074 19.9377C13.5429 18.7268 14.8466 17.9963 15.7709 16.8863C17.7284 14.4647 19.0846 11.6151 20.5376 8.86248C21.5813 6.73752 22.7623 4.6828 24.0732 2.71139C24.828 1.55706 25.7846 0.204949 27.3385 0.0394666C27.9943 -0.0180525 28.6523 0.122549 29.2274 0.443081C29.9771 0.811943 30.6736 1.28033 31.2979 1.83555C35.2816 5.46808 34.9829 11.6111 33.4734 16.2971C33.1984 17.1328 32.8791 17.9533 32.5169 18.7551C37.3602 17.0397 42.5104 15.7078 47.6443 16.737C51.0449 17.4468 54.1246 19.2379 56.423 21.8427C57.8598 23.994 58.4854 26.335 59.1312 28.7324C60.5198 34.1328 61.0067 39.7256 60.5721 45.2847Z" fill="#232323"/>
        </svg>
      );

    case 'first-right-icon':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="80" viewBox="0 0 74 80" fill="none">
          <g clip-path="url(#clip0_97_904)">
            <path d="M61.1982 71.6352C59.1021 70.6807 57.6532 68.6526 56.6073 66.7352C54.1811 62.0484 51.8493 57.4084 49.8346 52.5212C49.6632 52.0696 49.4531 51.5413 49.2259 50.9533C41.9389 54.0253 33.6402 52.0994 27.6005 47.2208C25.1096 45.0705 22.921 42.597 21.0936 39.8667C19.7713 37.9967 18.773 35.92 18.1401 33.7226C17.8879 32.601 17.726 31.4612 17.6558 30.314C17.3857 26.5773 17.8058 22.6446 19.799 19.3467C25.6373 10.267 34.1417 7.34832 44.6179 8.05561C46.8041 8.11526 49.1359 8.38369 51.172 9.33385C52.1841 9.80139 53.1524 10.3575 54.0654 10.9956C55.8601 12.1525 57.5704 13.4339 59.1835 14.8303C62.9942 18.192 63.2643 22.2952 63.1442 27.0374C63.1742 30.3012 63.2643 33.6672 62.1669 36.8373C61.7922 37.9417 61.3484 39.0218 60.8381 40.0712C60.6215 40.5355 60.2343 40.8997 59.756 41.089C59.2777 41.2784 58.7446 41.2786 58.2662 41.0895C57.1032 43.2637 56.6309 45.7373 56.9117 48.1838C57.2812 48.0929 57.6689 48.1066 58.031 48.2233C58.393 48.34 58.7151 48.5551 58.9606 48.8442C59.2083 49.1279 59.3751 49.4723 59.4436 49.8416C59.5122 50.211 59.4801 50.5919 59.3507 50.9447C59.3027 51.1602 59.3004 51.3833 59.344 51.5997C59.3875 51.8161 59.476 52.0211 59.6036 52.2017C61.6268 55.2098 64.1987 57.6853 66.5434 60.5187C67.2968 61.3837 67.9179 62.3542 68.3867 63.399C70.86 68.8273 67.2765 74.1788 61.1982 71.6352Z" fill="#A7FFCA"/>
            <path d="M40.9015 37.8385C43.8635 34.9582 44.4636 30.9488 44.648 26.9948C44.7808 25.0433 44.9094 22.8916 44.3779 21.0297C43.2977 16.9904 39.2855 15.2648 36.0535 13.0151C34.4868 11.872 32.7035 11.056 30.8111 10.6163C28.925 10.1902 26.7946 10.1263 24.72 9.95161C22.6453 9.77692 20.6306 9.72578 18.6502 10.1093C14.5823 10.8208 11.6247 13.765 9.47711 17.097C8.54265 18.486 7.5439 20.0284 6.63945 21.4515C4.92484 24.4681 4.73623 28.1878 4.92484 31.6092C4.98861 32.9842 5.30532 34.3359 5.8593 35.5973C7.5739 39.6195 10.2872 43.4542 13.7979 46.147C18.8174 49.7858 25.4272 50.753 31.1369 48.2178C32.9286 47.4125 35.0247 46.8629 35.7706 45.0094C36.231 43.8553 36.2447 42.5726 35.8092 41.409C35.2648 40.3566 34.3003 38.9293 33.1001 38.7333C32.6714 38.648 32.0628 39.4959 31.8956 40.3438C31.7192 41.2877 31.7061 42.2546 31.857 43.2028C33.0744 50.3354 36.7565 56.7649 39.9671 63.1987C40.9401 65.0522 41.836 66.9227 43.122 68.3458C45.3552 71.1451 50.6362 71.4689 50.4776 66.8886C50.3166 65.0282 49.5105 63.2811 48.1972 61.9461C46.8598 60.4207 45.381 58.9209 43.9578 57.3614C42.3247 55.6784 41.1887 53.9315 39.607 52.1164L39.1784 51.6094C37.408 49.479 40.4643 46.8288 42.3504 48.8526C42.5988 49.1359 42.7663 49.4801 42.8357 49.8495C42.905 50.2189 42.8736 50.6 42.7447 50.9532C42.6939 51.1717 42.6897 51.3984 42.7325 51.6186C42.7754 51.8388 42.8642 52.0476 42.9934 52.2315C45.0037 55.2396 47.5928 57.7108 49.9204 60.5485C50.6723 61.4145 51.2932 62.3848 51.7636 63.4288C54.2326 68.8571 50.6534 74.2086 44.5751 71.6649C42.479 70.7105 41.0344 68.6824 39.9885 66.765C37.5624 62.0781 35.2305 57.4381 33.2158 52.551C31.8441 48.972 28.1706 40.5185 31.9942 37.6382C32.9243 36.9863 34.3174 37.4763 34.9947 38.0856C36.3493 39.138 37.138 40.821 38.0853 42.1973C38.7111 43.1432 39.1826 44.4598 38.7797 45.6485L38.6254 46.1172C37.8067 48.5842 35.2391 49.986 33.0529 50.8041C25.633 54.1488 17.1414 52.2485 10.9774 47.2676C8.48631 45.1163 6.29643 42.6429 4.46618 39.9135C3.21023 38.0004 2.1086 36.0788 1.51706 33.7694C1.26344 32.6479 1.10003 31.5081 1.02839 30.3608C0.762624 26.6241 1.1827 22.6914 3.17164 19.3935C9.00988 10.3138 17.5186 7.39513 27.9949 8.10243C30.1767 8.16208 32.5128 8.43051 34.5446 9.38066C35.5573 9.84725 36.5256 10.4034 37.438 11.0424C39.2342 12.1972 40.9446 13.4787 42.5561 14.8771C46.3711 18.2388 46.6369 22.342 46.5169 27.0843C46.5512 30.348 46.6369 33.714 45.5438 36.8841C45.1654 37.9871 44.7217 39.067 44.215 40.118C44.0905 40.3823 43.9097 40.6164 43.685 40.8042C43.4604 40.992 43.1973 41.129 42.914 41.2056C42.6308 41.2822 42.3342 41.2966 42.0448 41.2479C41.7553 41.1991 41.4801 41.0884 41.238 40.9233C40.996 40.7582 40.793 40.5427 40.6431 40.2919C40.4932 40.041 40.4001 39.7607 40.3701 39.4704C40.3401 39.1802 40.3741 38.8869 40.4695 38.611C40.565 38.3351 40.7197 38.0831 40.923 37.8726L40.9015 37.8385Z" fill="#232323"/>
          </g>
          <defs>
            <clipPath id="clip0_97_904">
              <rect width="72.4807" height="79.7287" fill="white" transform="translate(0.939331 0.271271)"/>
            </clipPath>
          </defs>
        </svg>
      );

    default:
      return <></>;
  }
};

export default SvgSelector;