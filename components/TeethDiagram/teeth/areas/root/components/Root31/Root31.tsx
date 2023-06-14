import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root31({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);
  return (
    <View width='26.47%' insetTop={0} height='100%' className={customStyles}>
      <View
        width='88.89%'
        position='absolute'
        aspectRatio={17 / 40}
        className={cx('left-[5.263%] -top-[10.345%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 17 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId[31]}
        >
          <path
            d='M2.25456 1.18036L1.02549 1.02696C1.10224 1.48957 1.22382 2.03705 1.36552 2.67516C1.45761 3.08982 1.55819 3.54275 1.66049 4.03553C1.93488 5.35723 2.20795 6.91037 2.31176 8.611C2.36822 9.53584 2.42493 10.5158 2.48396 11.536C2.78943 16.8151 3.15716 23.1701 3.87476 28.527C4.30333 31.7263 4.85259 34.5347 5.5746 36.5325C5.93634 37.5334 6.32954 38.2964 6.74763 38.8007C7.16189 39.3004 7.55878 39.5 7.94599 39.5C9.03456 39.5 9.94105 38.5994 10.6719 36.6295C11.388 34.6994 11.8431 31.9689 12.157 28.813C12.4702 25.6656 12.6395 22.1375 12.7998 18.6278C12.8082 18.4424 12.8167 18.2571 12.8251 18.0719C12.9761 14.7568 13.1255 11.4767 13.3882 8.59605C13.5444 6.8842 14.0985 5.28506 14.6569 3.87817C14.8024 3.51172 14.9463 3.16216 15.0838 2.82823C15.4329 1.97997 15.7405 1.23264 15.9269 0.565903C11.4307 1.54176 6.81458 1.74948 2.25456 1.18036ZM0.843945 1.0043C0.844055 1.00432 0.844161 1.00433 0.844271 1.00434L0.843945 1.0043Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root31);
