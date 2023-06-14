import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root14Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='56.52%'
      aspectRatio={13 / 55}
      position='absolute'
      className={cx('right-[4.35%] -bottom-[9.615%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 13 55'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['14']}
      >
        <path
          d='M0.702074 54.2553C1.03022 52.9127 1.43913 51.0987 1.79126 49.2399C2.22498 46.9504 2.58 44.5555 2.58 42.8899C2.58 40.8755 2.6434 30.1743 3.25923 19.9759C3.56732 14.8739 4.01272 9.91502 4.65398 6.23618C4.97536 4.39245 5.34132 2.89845 5.75211 1.87476C5.95829 1.36096 6.16382 0.996539 6.35852 0.768144C6.55294 0.540068 6.68832 0.500699 6.76439 0.500031C7.09363 0.497143 7.46713 0.707797 7.86594 1.3729C8.26046 2.03085 8.60828 3.02485 8.90554 4.31822C9.49809 6.89646 9.85696 10.5117 10.0723 14.6102C10.3913 20.6807 10.3928 27.7398 10.3941 33.9356C10.3946 36.1017 10.395 38.1624 10.409 40.0383C10.4234 41.9685 10.6075 43.8939 10.9804 45.7935L12.3532 52.7868C11.539 52.6281 10.3575 52.548 8.82097 52.6467C6.78109 52.7776 4.07785 53.2257 0.702074 54.2553Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root14Right);
