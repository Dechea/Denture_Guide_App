import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root34({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);
  return (
    <View width='30.88%' insetTop={0} height='100%' className={customStyles}>
      <View
        width='90.476%'
        position='absolute'
        aspectRatio={19 / 51}
        className={cx('left-[4.76%] -top-[11.54%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 19 51'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId['34']}
        >
          <path
            d='M1.26918 1.2669L1.03771 1.23C1.15253 1.86932 1.37099 2.73158 1.62557 3.73648C1.75885 4.26255 1.90204 4.82772 2.04544 5.42044C2.4899 7.25755 2.92501 9.32104 2.99595 11.1098C3.29507 18.652 3.71533 28.6002 4.65661 36.6608C5.12771 40.695 5.72639 44.2287 6.49638 46.744C6.8824 48.0051 7.30144 48.9757 7.74713 49.621C8.19776 50.2735 8.60659 50.5 8.96221 50.5C9.49875 50.5 10.0128 50.2366 10.5195 49.6361C11.0326 49.0279 11.5037 48.1105 11.9289 46.9066C12.778 44.5024 13.3958 41.0991 13.8683 37.1462C14.5514 31.432 14.9224 24.6553 15.2738 18.236C15.4084 15.7776 15.5401 13.3716 15.6854 11.0978C15.798 9.33584 16.2902 7.22865 16.7914 5.28102C16.9098 4.82108 17.0283 4.37116 17.1428 3.93617C17.4857 2.63455 17.7933 1.46666 17.9564 0.564224C12.4883 1.91362 6.82434 2.15252 1.26918 1.2669ZM0.793594 1.19109C0.793787 1.19112 0.793973 1.19115 0.794167 1.19118L0.793594 1.19109Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root34);
