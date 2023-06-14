import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root25({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='29.41%' insetBottom={0} height='100%' className={customStyles}>
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
          id={toothId[25]}
        >
          <path
            d='M17.6655 47.9225L17.9496 47.9683C17.8197 47.3614 17.5798 46.5491 17.3 45.602C17.1499 45.0936 16.9883 44.5464 16.826 43.9713C16.3251 42.1955 15.8328 40.1944 15.7595 38.4712C15.6899 36.8313 15.6248 35.0696 15.5571 33.2347C15.3263 26.9871 15.0643 19.8914 14.4827 13.8677C14.1062 9.96879 13.5986 6.55245 12.8895 4.12086C12.534 2.90177 12.1379 1.96674 11.7063 1.34665C11.2738 0.725339 10.8661 0.500021 10.4876 0.5C9.92265 0.499969 9.38947 0.763497 8.87013 1.34414C8.34334 1.93312 7.85865 2.82086 7.41975 3.98562C6.54286 6.31273 5.89891 9.60646 5.40326 13.4286C4.67405 19.0517 4.27574 25.7274 3.90206 31.9902C3.76799 34.2372 3.63709 36.4311 3.49521 38.5041C3.37901 40.2021 2.84259 42.2032 2.29963 44.0402C2.17377 44.466 2.048 44.8818 1.92647 45.2836C1.55842 46.5004 1.22924 47.5887 1.05381 48.4386C6.50572 47.2073 12.1454 47.0317 17.6655 47.9225ZM18.2081 48.01C18.2079 48.01 18.2076 48.0099 18.2074 48.0099L18.2081 48.01Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root25);
