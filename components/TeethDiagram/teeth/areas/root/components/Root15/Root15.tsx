import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root15({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View insetBottom={0} height='100%' className={customStyles} width='29.41%'>
      <View
        width='95%'
        position='absolute'
        aspectRatio={19 / 49}
        className={cx('-bottom-[11.11%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 19 49'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId[15]}
        >
          <path
            d='M1.33454 47.9225L1.05044 47.9683C1.18026 47.3614 1.42019 46.5491 1.69997 45.602C1.85012 45.0936 2.01175 44.5464 2.174 43.9713C2.67491 42.1955 3.16725 40.1944 3.24045 38.4712C3.31012 36.8313 3.37518 35.0696 3.44295 33.2347C3.67368 26.9871 3.93574 19.8914 4.51733 13.8677C4.89378 9.96879 5.40139 6.55245 6.11051 4.12086C6.46603 2.90177 6.86211 1.96674 7.29373 1.34665C7.7262 0.725339 8.13392 0.500021 8.51243 0.5C9.07735 0.499969 9.61053 0.763497 10.1299 1.34414C10.6567 1.93312 11.1413 2.82086 11.5802 3.98562C12.4571 6.31273 13.1011 9.60646 13.5967 13.4286C14.3259 19.0517 14.7243 25.7274 15.0979 31.9902C15.232 34.2372 15.3629 36.4311 15.5048 38.5041C15.621 40.2021 16.1574 42.2032 16.7004 44.0402C16.8262 44.466 16.952 44.8818 17.0735 45.2836C17.4416 46.5004 17.7708 47.5887 17.9462 48.4386C12.4943 47.2073 6.85465 47.0317 1.33454 47.9225ZM0.791876 48.01C0.792042 48.01 0.792203 48.01 0.792369 48.0099L0.791876 48.01Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root15);
