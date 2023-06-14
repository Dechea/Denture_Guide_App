import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root24Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='78.26%'
      aspectRatio={18 / 54}
      position='absolute'
      className={cx('right-[0px] -bottom-[13.46%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 18 54'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['24']}
      >
        <path
          d='M7.29799 7.21822L7.29798 7.2183C6.83637 9.53569 6.31901 14.6579 5.76115 20.181L5.7478 20.3132C5.18726 25.8628 4.58769 31.7764 3.96667 35.5123C3.21932 40.0081 2.46527 42.6417 1.83668 44.5694C1.69937 44.9904 1.5697 45.3736 1.44847 45.7319C1.01059 47.0258 0.683004 47.9939 0.504265 49.2446C0.47426 49.4546 0.613695 49.6776 0.86417 49.7419L10.4296 52.1965L16.974 53.4897C17.3175 53.5575 17.5359 53.3016 17.494 53.0478C17.3375 52.1001 17.0765 50.8877 16.7746 49.485C16.5473 48.4287 16.2967 47.2644 16.05 46.0238C15.481 43.1631 14.9442 39.9464 14.8135 36.9046C14.7069 34.4213 14.6136 31.9062 14.5213 29.4184C14.3124 23.7888 14.1087 18.2988 13.7672 13.6321C13.521 10.2683 13.2045 7.35362 12.7673 5.13755C12.5486 4.02899 12.3026 3.11078 12.0268 2.40498C11.746 1.6863 11.4566 1.24711 11.1864 1.03009C10.6752 0.619398 10.3091 0.489646 10.0483 0.500649C9.81638 0.510434 9.54385 0.638983 9.2253 1.08241C8.90217 1.53222 8.5797 2.24421 8.25534 3.27523C7.93317 4.29927 7.61906 5.6049 7.29799 7.21822Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root24Right);
