import React from 'react';
import { intrinsicComponent } from './utils/functions';
import type { IconProps } from './icon.props';

export const Enhance = intrinsicComponent<IconProps, SVGSVGElement>(
  ({ color = 'currentColor', size = 14, ...rest }, ref): JSX.Element => (
    <svg
      width={size}
      ref={ref}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M25.3172 5.62087C25.225 5.65945 25.1259 5.67932 25.0259 5.67933C24.8272 5.67937 24.6364 5.60109 24.495 5.46146C24.3536 5.32183 24.2729 5.13209 24.2703 4.93337L24.2298 1.61824C24.2272 1.41785 24.3044 1.22466 24.4443 1.08117C24.5135 1.01012 24.5961 0.953408 24.6873 0.914274C24.7785 0.875139 24.8765 0.854348 24.9757 0.853088C25.0749 0.851828 25.1734 0.870123 25.2656 0.906929C25.3577 0.943735 25.4417 0.998331 25.5128 1.0676C25.5838 1.13687 25.6406 1.21945 25.6797 1.31064C25.7188 1.40182 25.7396 1.49983 25.7409 1.59905L25.7815 4.91419C25.7827 5.0142 25.7641 5.11348 25.7267 5.20624C25.6893 5.29901 25.6338 5.38343 25.5635 5.45461C25.4932 5.52578 25.4095 5.5823 25.3172 5.62087Z"
        fill={color}
      />
      <path
        d="M34.9977 9.49018C34.9048 9.52934 34.805 9.54946 34.7042 9.54932C34.5566 9.54705 34.4128 9.50186 34.2905 9.41928C34.1681 9.3367 34.0724 9.22029 34.0151 9.08425C33.9577 8.94822 33.9412 8.79844 33.9675 8.65318C33.9939 8.50792 34.0619 8.37346 34.1634 8.26621L36.4787 5.8933C36.619 5.75171 36.8096 5.6713 37.009 5.66961C37.2083 5.66792 37.4002 5.74508 37.543 5.88428C37.6857 6.02348 37.7676 6.21344 37.7708 6.41276C37.7741 6.61208 37.6985 6.80462 37.5604 6.94842L35.245 9.32133C35.1747 9.3936 35.0906 9.45102 34.9977 9.49018Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0449 17.7078L34.6283 21.1599C34.8833 21.413 35.0518 21.7386 35.1101 22.0909C35.1684 22.4432 35.1136 22.8048 34.9535 23.1248C34.7934 23.4449 34.5359 23.7076 34.217 23.8759C33.8982 24.0443 33.534 24.11 33.1755 24.0639L28.2199 23.3507C28.1817 23.3463 28.143 23.3534 28.1089 23.3711C28.0749 23.3887 28.047 23.416 28.0288 23.4495L25.8102 27.8829C25.6455 28.201 25.3841 28.4601 25.0627 28.6241C24.7413 28.788 24.3759 28.8484 24.018 28.7969C23.66 28.7454 23.3273 28.5844 23.0667 28.3367C22.806 28.089 22.6304 27.767 22.5646 27.4157L22.256 25.6337L5.4564 42.6343C5.13674 42.957 4.70055 43.1413 4.24347 43.1468C3.78639 43.1524 3.34573 42.9788 3.0181 42.664L1.65181 41.3484C1.32514 41.0325 1.13854 40.6017 1.1329 40.1503C1.12726 39.6989 1.30303 39.2637 1.62172 38.94L18.4213 21.9394L16.6098 21.6784C16.2495 21.6267 15.915 21.4636 15.6543 21.2125C15.3935 20.9615 15.22 20.6354 15.1585 20.281C15.0971 19.9266 15.1508 19.5621 15.312 19.2397C15.4733 18.9173 15.7337 18.6535 16.0561 18.4863L20.4904 16.1871C20.5248 16.1695 20.5527 16.1415 20.5701 16.1072C20.5874 16.0728 20.5932 16.034 20.5867 15.9962L19.7426 11.1222C19.6868 10.7694 19.7442 10.4082 19.9067 10.0892C20.0692 9.77023 20.3287 9.50942 20.6489 9.34334C20.969 9.17726 21.3337 9.11422 21.692 9.16306C22.0502 9.21189 22.384 9.37016 22.6466 9.61569L26.2307 13.0693C26.2585 13.0962 26.2943 13.1138 26.3328 13.1194C26.3713 13.125 26.4107 13.1184 26.4451 13.1005L30.8786 10.8006C31.2013 10.6395 31.5669 10.582 31.9244 10.6362C32.2818 10.6905 32.613 10.8537 32.8718 11.1031C33.1306 11.3525 33.304 11.6755 33.3676 12.027C33.4312 12.3785 33.382 12.7408 33.2267 13.0633L31.0081 17.4968C30.9907 17.5313 30.985 17.5703 30.9916 17.6082C30.9982 17.6462 31.0169 17.681 31.0449 17.7078ZM4.29451 41.6124C4.31668 41.6029 4.33672 41.5892 4.35346 41.572L17.8572 27.9066L16.2282 26.3371L2.72467 40.0023C2.69118 40.0373 2.67283 40.0838 2.67353 40.1319C2.67423 40.1801 2.69393 40.2261 2.72843 40.2601L4.0939 41.575C4.11105 41.5918 4.13141 41.6051 4.1538 41.614C4.17618 41.623 4.20016 41.6275 4.22432 41.6272C4.24848 41.6269 4.27234 41.6219 4.29451 41.6124ZM17.3043 25.2482L18.9333 26.8177L21.935 23.7801L21.7205 22.5417C21.7139 22.5039 21.6955 22.4692 21.6678 22.4424C21.6401 22.4156 21.6046 22.3981 21.5663 22.3924L20.3058 22.2108L17.3043 25.2482ZM33.5119 22.5428C33.5467 22.5246 33.5741 22.4951 33.5893 22.4592C33.6093 22.4255 33.6166 22.3859 33.6098 22.3475C33.6031 22.309 33.5828 22.2741 33.5525 22.249L29.9684 18.7961C29.7069 18.5452 29.5329 18.2186 29.4717 17.8637C29.4104 17.5088 29.465 17.1438 29.6275 16.8215L31.8454 12.3888C31.8625 12.3544 31.8682 12.3156 31.8616 12.2778C31.855 12.2401 31.8365 12.2053 31.8087 12.1786C31.7808 12.1519 31.7452 12.1346 31.7068 12.1291C31.6684 12.1236 31.6292 12.1302 31.5949 12.1481L27.1613 14.4472C26.8388 14.615 26.4706 14.6773 26.1099 14.6252C25.7492 14.5732 25.4145 14.4094 25.1541 14.1575L21.5707 10.7047C21.5439 10.6764 21.5081 10.658 21.4693 10.6525C21.4305 10.647 21.3909 10.6546 21.357 10.6742C21.3207 10.6896 21.2911 10.7173 21.2734 10.7522C21.2558 10.7872 21.2513 10.8272 21.2607 10.8651L22.1049 15.7392C22.1672 16.0937 22.1138 16.4587 21.9523 16.7813C21.7908 17.1039 21.5297 17.3675 21.2066 17.5339L16.7731 19.8332C16.7387 19.851 16.711 19.8792 16.6938 19.9136C16.6767 19.948 16.671 19.9868 16.6776 20.0246C16.6842 20.0624 16.7027 20.0971 16.7306 20.1238C16.7584 20.1506 16.7941 20.1679 16.8325 20.1734L21.7881 20.8873C22.1487 20.9384 22.4834 21.1013 22.7441 21.3525C23.0048 21.6036 23.178 21.93 23.2387 22.2847L24.0829 27.1587C24.0866 27.1976 24.1043 27.234 24.1326 27.2614C24.161 27.2887 24.1983 27.3052 24.2378 27.308C24.2764 27.3159 24.3164 27.3103 24.3512 27.2923C24.3861 27.2743 24.4135 27.2449 24.4289 27.2092L26.6476 22.7757C26.8077 22.4521 27.0682 22.1875 27.3912 22.0202C27.7142 21.8529 28.0828 21.7918 28.4434 21.8456L33.3983 22.5588C33.4369 22.5666 33.477 22.5609 33.5119 22.5428Z"
        fill={color}
      />
      <path
        d="M40.2419 17.6005L40.2409 17.6005C39.4918 17.6106 38.8042 17.6199 38.8015 17.6184C38.6045 17.6248 38.4179 17.7078 38.2812 17.8498C38.1446 17.9918 38.0689 18.1816 38.0702 18.3786C38.0714 18.5757 38.1496 18.7644 38.288 18.9047C38.4264 19.0449 38.6141 19.1256 38.8111 19.1295C38.8132 19.1321 39.7922 19.1189 40.6872 19.1069L40.6949 19.1068C41.4442 19.0967 42.133 19.0874 42.1358 19.0889C42.3327 19.0826 42.5194 18.9995 42.6561 18.8575C42.7927 18.7155 42.8685 18.5257 42.8672 18.3287C42.866 18.1316 42.7878 17.9428 42.6494 17.8026C42.511 17.6623 42.3232 17.5816 42.1262 17.5778C42.1241 17.5752 41.1391 17.5884 40.2419 17.6005Z"
        fill={color}
      />
      <path
        d="M34.9349 27.3073C35.1326 27.3028 35.3243 27.3761 35.4686 27.5114L37.8407 29.826C37.9796 29.9669 38.0578 30.1567 38.0583 30.3545C38.0588 30.5524 37.9817 30.7425 37.8436 30.8842C37.7054 31.0258 37.5172 31.1076 37.3194 31.112C37.1216 31.1164 36.93 31.0431 36.7856 30.9077L34.4135 28.5931C34.2747 28.4522 34.1966 28.2625 34.1961 28.0647C34.1956 27.8668 34.2727 27.6767 34.4108 27.5351C34.549 27.3935 34.7371 27.3117 34.9349 27.3073Z"
        fill={color}
      />
      <path
        d="M25.3609 31.4035C25.2609 31.4035 25.1618 31.4234 25.0695 31.462C24.9772 31.5006 24.8935 31.5571 24.8232 31.6283C24.753 31.6994 24.6975 31.7839 24.6601 31.8766C24.6227 31.9694 24.6041 32.0687 24.6053 32.1687L24.6459 35.4831C24.6485 35.6835 24.7305 35.8746 24.874 36.0145C25.0175 36.1544 25.2107 36.2316 25.4111 36.229C25.6114 36.2265 25.8026 36.1445 25.9425 36.001C26.0824 35.8575 26.1596 35.6643 26.157 35.4639L26.1164 32.1495C26.1139 31.9508 26.0332 31.761 25.8918 31.6214C25.7504 31.4818 25.5596 31.4035 25.3609 31.4035Z"
        fill={color}
      />
      <path
        d="M10.1456 19.4819L10.1393 19.482C9.24359 19.4943 8.26269 19.5077 8.26058 19.505C8.06358 19.5012 7.87588 19.4205 7.73748 19.2802C7.59908 19.14 7.52093 18.9512 7.51968 18.7542C7.51843 18.5571 7.59418 18.3674 7.73079 18.2254C7.8674 18.0834 8.05406 18.0003 8.251 17.9939C8.25373 17.9955 8.94135 17.986 9.69047 17.9758L9.69319 17.9757L9.69422 17.9757C10.5906 17.9635 11.5736 17.95 11.5757 17.9526C11.7727 17.9565 11.9604 18.0372 12.0988 18.1774C12.2372 18.3177 12.3153 18.5065 12.3166 18.7035C12.3179 18.9005 12.2421 19.0903 12.1055 19.2323C11.9689 19.3743 11.7822 19.4574 11.5853 19.4637C11.5826 19.4622 10.8947 19.4716 10.1456 19.4819Z"
        fill={color}
      />
      <path
        d="M14.9181 9.57146C15.0625 9.70674 15.2541 9.78003 15.4519 9.77559C15.6496 9.77116 15.8378 9.68936 15.9759 9.54775C16.114 9.40614 16.1911 9.21602 16.1906 9.0182C16.1901 8.82039 16.112 8.63066 15.9732 8.48975L13.6004 6.17445C13.456 6.03921 13.2644 5.96596 13.0667 5.97041C12.8689 5.97485 12.6808 6.05665 12.5427 6.19824C12.4046 6.33983 12.3275 6.52992 12.328 6.72771C12.3285 6.9255 12.4065 7.11522 12.5453 7.25614L14.9181 9.57146Z"
        fill={color}
      />
    </svg>
  )
);

export default Enhance;