import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root14Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='78.26%'
      aspectRatio={18 / 54}
      position='absolute'
      className={cx('-bottom-[13.46%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 18 54'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['14']}
      >
        <path
          d='M10.702 7.21822L10.702 7.2183C11.1636 9.53569 11.681 14.6579 12.2388 20.181L12.2522 20.3132C12.8127 25.8628 13.4123 31.7764 14.0333 35.5123C14.7807 40.0081 15.5347 42.6417 16.1633 44.5694C16.3006 44.9904 16.4303 45.3736 16.5515 45.7319C16.9894 47.0258 17.317 47.9939 17.4957 49.2446C17.5257 49.4546 17.3863 49.6776 17.1358 49.7419L7.57044 52.1965L1.02595 53.4897C0.682528 53.5575 0.464081 53.3016 0.505989 53.0478C0.662522 52.1001 0.92345 50.8877 1.22535 49.485C1.4527 48.4287 1.70329 47.2644 1.95003 46.0238C2.519 43.1631 3.05581 39.9464 3.18646 36.9046C3.29312 34.4213 3.38643 31.9062 3.47873 29.4184C3.68758 23.7888 3.89126 18.2988 4.23278 13.6321C4.47896 10.2683 4.79546 7.35362 5.2327 5.13755C5.45143 4.02899 5.69744 3.11078 5.9732 2.40498C6.254 1.6863 6.54339 1.24711 6.81356 1.03009C7.32482 0.619398 7.69089 0.489646 7.95169 0.500649C8.18362 0.510434 8.45615 0.638983 8.7747 1.08241C9.09783 1.53222 9.4203 2.24421 9.74466 3.27523C10.0668 4.29927 10.3809 5.6049 10.702 7.21822Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root14Left);
