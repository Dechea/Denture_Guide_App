import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root44({ children, customStyles }: RootProps) {
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
          id={toothId[44]}
        >
          <path
            d='M17.7308 1.26691L17.9623 1.23001C17.8475 1.86932 17.629 2.73158 17.3744 3.73648C17.2411 4.26255 17.098 4.82772 16.9546 5.42044C16.5101 7.25755 16.075 9.32104 16.004 11.1098C15.7049 18.652 15.2847 28.6002 14.3434 36.6608C13.8723 40.695 13.2736 44.2287 12.5036 46.744C12.1176 48.0051 11.6986 48.9757 11.2529 49.621C10.8022 50.2735 10.3934 50.5 10.0378 50.5C9.50125 50.5 8.98721 50.2366 8.48055 49.6361C7.9674 49.0279 7.4963 48.1105 7.07111 46.9066C6.22197 44.5024 5.6042 41.0991 5.13168 37.1462C4.44862 31.432 4.07762 24.6553 3.72619 18.236C3.5916 15.7776 3.45988 13.3716 3.3146 11.0978C3.20202 9.33584 2.70978 7.22865 2.20859 5.28102C2.09023 4.82109 1.97173 4.37118 1.85716 3.9362C1.51432 2.63457 1.20671 1.46666 1.04363 0.564224C6.51168 1.91362 12.1757 2.15252 17.7308 1.26691Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root44);
