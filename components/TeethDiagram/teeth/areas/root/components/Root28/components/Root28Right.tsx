import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root28Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='58.065%'
      aspectRatio={18 / 34}
      position='absolute'
      className={cx('right-[3.226%] -bottom-[9.615%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 18 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['28']}
      >
        <path
          d='M1.46574 30.2092L2.74161 30.6813C7.43141 32.4168 12.3777 33.3672 17.3792 33.4942C17.2218 32.9214 16.9392 32.0652 16.6075 31.0608C16.3848 30.3863 16.14 29.6449 15.8962 28.8775C15.2434 26.8222 14.5974 24.577 14.5206 23.162C14.3703 20.3931 14.3917 17.3509 14.4388 14.5013C14.4492 13.8768 14.4607 13.2621 14.472 12.6616C14.5124 10.5132 14.5494 8.54673 14.5147 6.96489C14.4776 5.26623 14.1149 3.82942 13.5923 2.74899C13.0644 1.65759 12.3968 0.974705 11.7804 0.702742C11.1487 0.424089 10.4638 0.403875 9.82588 0.823702C9.16497 1.25863 8.46622 2.22256 7.97531 4.11311C7.89135 4.43645 7.56259 6.08008 7.0984 8.40082C7.01088 8.83838 6.91854 9.30001 6.82213 9.7814C6.21759 12.7997 5.45847 16.564 4.73702 19.9428C4.20931 22.4142 3.47732 24.5671 2.83066 26.3274C2.66894 26.7677 2.51433 27.1792 2.37024 27.5627C1.95252 28.6745 1.62325 29.5508 1.46574 30.2092Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root28Right);
