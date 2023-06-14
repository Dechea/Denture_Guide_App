import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root42({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='27.94%' insetTop={0} height='100%' className={customStyles}>
      <View
        width='89.474%'
        position='absolute'
        aspectRatio={17 / 38}
        className={cx('left-[5.26%] -top-[10.714%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 17 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId['42']}
        >
          <path
            d='M15.6565 1.07419L15.9671 1.03316C15.8702 1.55972 15.7055 2.22943 15.5132 3.01154C15.3943 3.49516 15.2649 4.02174 15.1343 4.58403C14.7718 6.14537 14.414 7.93441 14.3144 9.66082C14.2355 11.0296 14.1625 12.4739 14.0875 13.9564C13.8491 18.6732 13.5912 23.7763 13.0601 28.0601C12.7108 30.8775 12.2477 33.2992 11.6104 35.0053C11.2914 35.8595 10.9411 36.4993 10.5668 36.918C10.2001 37.328 9.83666 37.5 9.46127 37.5C8.40318 37.5 7.48289 36.7226 6.68162 35.0639C5.88897 33.423 5.29677 31.0781 4.83446 28.3086C4.14112 24.1551 3.75549 19.1566 3.38451 14.3479C3.26101 12.747 3.13913 11.1673 3.00806 9.64667C2.86331 7.96734 2.4529 6.16764 2.036 4.52926C1.91741 4.0632 1.79898 3.61248 1.68565 3.18119C1.42323 2.18252 1.18818 1.28799 1.04186 0.548233C5.85576 1.53942 10.7887 1.71715 15.6565 1.07419Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root42);
