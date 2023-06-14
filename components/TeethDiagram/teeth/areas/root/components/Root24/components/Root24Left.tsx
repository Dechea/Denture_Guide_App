import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root24Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='56.52%'
      aspectRatio={13 / 55}
      position='absolute'
      className={cx('left-[4.35%] -bottom-[9.615%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 13 55'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['24']}
      >
        <path
          d='M12.2979 54.2553C11.9698 52.9127 11.5609 51.0987 11.2087 49.2399C10.775 46.9504 10.42 44.5555 10.42 42.8899C10.42 40.8755 10.3566 30.1743 9.74077 19.9759C9.43268 14.8739 8.98728 9.91502 8.34602 6.23618C8.02464 4.39245 7.65868 2.89845 7.24789 1.87476C7.04171 1.36096 6.83618 0.996539 6.64148 0.768144C6.44706 0.540068 6.31168 0.500699 6.23561 0.500031C5.90637 0.497143 5.53287 0.707797 5.13406 1.3729C4.73954 2.03085 4.39172 3.02485 4.09446 4.31822C3.50191 6.89646 3.14304 10.5117 2.92767 14.6102C2.60869 20.6807 2.60718 27.7398 2.60586 33.9356C2.60539 36.1017 2.60495 38.1624 2.59098 40.0383C2.5766 41.9685 2.39246 43.8939 2.01959 45.7935L0.64682 52.7868C1.46097 52.6281 2.64247 52.548 4.17903 52.6467C6.21891 52.7776 8.92215 53.2257 12.2979 54.2553Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root24Left);
