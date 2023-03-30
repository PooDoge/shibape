import React from 'react'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <rect width="128" height="128" rx="64" fill="#0E7696" />
      <path
        d="M100.701 60.3101C102.279 59.4998 103.858 58.7106 105.426 57.8687C106.383 57.3531 106.478 57.774 106.478 58.6474C106.478 64.13 106.552 69.6231 106.478 75.1057C106.528 77.1473 106.021 79.1639 105.013 80.9397C104.004 82.7155 102.532 84.1837 100.753 85.187C92.64 90.1013 84.3582 94.6579 76.0764 99.3196C75.8238 99.4212 75.5634 99.5021 75.2977 99.5617C75.2977 97.7306 75.2977 96.0259 75.2977 94.3001C75.2977 93.2477 75.0031 93.2477 74.1717 93.6687C71.9418 95.016 69.6048 96.1775 67.1843 97.1413C65.8519 97.6534 64.4186 97.8486 62.9978 97.7117C61.5769 97.5747 60.2074 97.1092 58.9973 96.3521C57.1557 95.2472 55.272 94.2475 53.1674 93.0373V99.246C52.3571 99.467 51.9678 98.9724 51.5153 98.7198C43.9912 94.4474 36.4881 90.1434 28.964 85.892C24.418 83.3138 21.9976 79.5781 22.0608 74.3165C22.0608 68.7287 22.0608 63.1408 22.0608 57.2373L27.8591 60.2575C27.9834 60.4131 28.0828 60.587 28.1537 60.7731C28.2375 61.0603 28.28 61.3579 28.28 61.6571C28.28 66.1084 28.28 70.5492 28.28 74.99C28.2426 76.0735 28.5097 77.1458 29.0509 78.0851C29.5922 79.0245 30.386 79.7933 31.3423 80.3042C34.6255 82.2615 37.9403 84.1346 41.2867 85.9867C42.7178 86.9128 44.2542 87.6915 45.6959 88.6175C46.5378 89.1542 47.0113 88.9753 47.0218 87.8914C47.0324 86.8075 46.9692 85.7868 47.0218 84.7345C47.1376 83.3244 47.5585 83.0823 48.8213 83.7348C51.3153 85.0291 53.7041 86.5339 56.1876 87.944C57.8923 89.049 59.6707 90.0487 61.4492 90.9853C63.4907 92.0376 65.4796 91.5851 67.4053 90.5643C71.3515 88.7859 74.9084 86.355 78.7178 84.2504C79.4228 83.8716 80.1279 83.0192 80.9592 83.4717C81.7905 83.9242 81.4538 84.9555 81.4959 85.7657C81.538 86.576 81.4959 87.1969 81.4959 87.8704C81.4959 88.9227 81.98 88.9227 82.7271 88.4386C87.6204 85.7447 92.3664 82.7877 97.1965 79.9674C98.1916 79.4 99.0072 78.5645 99.5505 77.5561C100.094 76.5477 100.343 75.4069 100.269 74.2639C100.269 70.3387 100.269 66.403 100.269 62.4673C100.185 61.7209 100.336 60.9668 100.701 60.3101Z"
        fill="#ADCBDE"
      />
      <path
        d="M27.3123 51.9547L24.4605 50.5867C21.8086 49.2818 21.8086 49.2818 22.1664 46.3143C22.5068 43.6282 23.736 41.1331 25.6581 39.2262C27.5803 37.3193 30.0851 36.1101 32.7738 35.7911C34.1473 35.6341 35.4436 35.0739 36.499 34.181C40.8451 30.54 45.6332 29.9717 50.558 32.7499C56.6615 36.1489 62.6282 39.7899 68.658 43.2731C69.4683 43.7466 69.784 44.136 68.7527 44.7253C68.0371 45.1462 67.3741 45.6408 66.648 46.0828C65.9615 46.5597 65.1485 46.8214 64.3126 46.8345C63.4767 46.8477 62.6559 46.6116 61.9547 46.1564C57.3034 43.4414 52.6311 40.7896 47.9693 38.1062C47.31 37.6518 46.565 37.3363 45.7799 37.1789C44.9948 37.0216 44.1858 37.0255 43.4023 37.1907C42.8866 37.3275 42.1395 37.3485 42.0448 37.9273C41.9501 38.5061 42.6656 38.6323 43.0971 38.8849C43.981 39.4532 44.9071 39.9372 45.8226 40.4844C50.758 43.3362 55.7355 46.1564 60.6393 49.0714C61.7484 49.8169 63.0544 50.2151 64.3908 50.2151C65.7272 50.2151 67.0333 49.8169 68.1423 49.0714C74.572 45.2199 81.1175 41.4736 87.5998 37.6642C92.3036 34.9071 96.9339 34.8229 101.48 38.0325C105.131 40.5791 106.542 44.2307 106.542 48.5242C106.563 48.8268 106.483 49.1281 106.316 49.3811C106.149 49.6342 105.902 49.8249 105.616 49.9238C104.163 50.5972 102.722 51.3128 101.269 52.0284C100.322 52.1126 100.385 51.3654 100.333 50.7972C100.249 49.808 100.333 48.8188 100.333 47.8191C100.345 46.7956 100.088 45.7869 99.5878 44.8937C99.0878 44.0005 98.3623 43.2541 97.4836 42.729C96.605 42.2039 95.6039 41.9186 94.5805 41.9014C93.557 41.8842 92.547 42.1359 91.6512 42.6312C87.947 44.7358 84.285 46.7668 80.5597 48.9451C76.9818 50.9024 73.5092 53.0491 69.8787 54.9118C68.3021 55.7847 66.5421 56.2739 64.7413 56.3397C62.9404 56.4055 61.1493 56.0461 59.5133 55.2906C51.884 51.1024 44.4546 46.7878 36.9305 42.5259C33.2474 40.5897 28.2383 42.9784 28.2699 48.4715C28.3209 49.2959 28.3033 50.1231 28.2173 50.9445C28.1541 51.4391 28.2067 52.1547 27.3123 51.9547Z"
        fill="#ADCBDE"
      />
      <path
        d="M66.7741 90.838C65.8013 91.2265 64.7519 91.3849 63.7077 91.301C62.6636 91.217 61.653 90.8929 60.7548 90.3539C59.492 89.5331 58.124 88.9017 56.7981 88.1861C53.9778 85.8289 50.3999 84.7766 47.5271 82.5246C47.0009 82.1142 46.6642 82.7035 46.7063 83.2823C46.78 84.5661 46.359 85.85 46.7694 87.1443C46.8852 87.5231 46.9799 88.0809 46.5274 88.365C46.0749 88.6491 45.7382 88.1756 45.3698 87.9756C44.0729 87.0793 42.6558 86.3707 41.1606 85.871C38.2351 84.1347 35.3412 82.3352 32.3737 80.6725C29.7429 79.1888 28.2801 77.242 28.459 74.0219C28.6695 70.2651 28.459 66.4872 28.5222 62.7199C28.5222 62.1622 28.238 61.4256 29.1641 61.2572L41.792 67.5711C46.9694 70.3493 52.2415 72.959 57.5768 75.453C58.3877 75.8085 59.1782 76.209 59.9445 76.6527C61.1731 77.4555 62.5973 77.9082 64.064 77.962C65.5307 78.0157 66.9843 77.6686 68.2684 76.9578C75.4101 73.387 82.5554 69.8196 89.7042 66.2557C92.798 64.7088 95.9549 63.2671 99.0277 61.6887C99.9327 61.2256 100.08 61.4256 100.08 62.278C100.08 66.7082 100.217 71.149 100.017 75.5793C99.9011 78.2943 97.7544 79.6097 95.5551 80.8409C91.1248 83.3139 86.7997 85.9447 82.4326 88.5228C81.6539 88.5965 81.8644 87.902 81.6539 87.5337C81.6093 87.4199 81.5965 87.2961 81.6169 87.1756C81.6373 87.0551 81.6901 86.9424 81.7696 86.8497V83.8611C81.5276 83.2297 81.3382 82.5036 80.4332 83.1876C78.1391 84.0189 76.2239 85.5448 74.1193 86.6813C71.6253 88.0072 69.2154 89.4489 66.7741 90.838Z"
        fill="#261A41"
        fillOpacity="0.53"
      />
      <path
        d="M37.141 42.6101C40.4032 44.5569 43.6233 46.5458 46.9171 48.4399C50.737 50.6393 54.6095 52.7544 58.4926 54.9117C59.7135 55.7698 61.1161 56.334 62.5911 56.5604C64.0661 56.7867 65.5734 56.6691 66.9954 56.2166C71.0152 55.0906 74.3616 52.6387 77.9395 50.5656C78.9918 49.9342 80.3599 49.7027 81.0965 48.5873C84.727 46.6089 88.2312 44.378 92.0091 42.7153C96.292 40.8737 100.038 43.5993 100.049 47.9769C100.049 52.786 100.828 51.6285 96.4183 53.891C95.8816 54.1646 95.3028 54.3435 94.7451 54.575C91.2724 56.3429 87.8103 58.1213 84.3271 59.8366C79.1777 62.4323 74.0214 65.021 68.858 67.6027C68.4265 67.8237 67.8057 67.8026 67.49 68.1078C65.2801 70.1072 63.2807 69.3601 60.9129 68.1604C54.136 64.6562 47.2328 61.3414 40.4453 57.9319C36.8043 56.1219 33.2053 54.2593 29.5643 52.4703C29.2051 52.3326 28.9044 52.0753 28.7127 51.7418C28.5211 51.4083 28.4502 51.0189 28.512 50.6393C28.6382 49.1029 28.3331 47.556 28.8487 46.0301C29.2455 44.691 30.1496 43.5598 31.3684 42.8777C32.5872 42.1955 34.0242 42.0164 35.3731 42.3786C35.9414 42.4943 36.5412 42.5364 37.141 42.6101Z"
        fill="#261A41"
        fillOpacity="0.53"
      />
    </svg>
  )
}

export default Icon
