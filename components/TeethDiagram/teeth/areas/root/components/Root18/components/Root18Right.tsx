import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root18Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='54.84%'
      aspectRatio={17 / 34}
      position='absolute'
      className={cx('right-[3.226%] -bottom-[12%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['18']}
      >
        <path
          d='M1.42688 27.5627C1.00916 28.6745 0.67989 29.5508 0.522377 30.2092L1.79825 30.6813C6.48805 32.4168 11.4344 33.3672 16.4359 33.4942C16.2785 32.9214 15.9958 32.0652 15.6641 31.0608C15.4414 30.3863 15.1966 29.6449 14.9529 28.8775C14.3 26.8222 13.654 24.577 13.5772 23.162C13.427 20.3931 13.4483 17.3509 13.4955 14.5013C13.5058 13.8768 13.5174 13.2621 13.5287 12.6616C13.569 10.5132 13.606 8.54673 13.5714 6.96489C13.5342 5.26623 13.1716 3.82942 12.6489 2.74899C12.121 1.65759 11.4535 0.974705 10.837 0.702742C10.2054 0.424089 9.52048 0.403875 8.88252 0.823702C8.22161 1.25863 7.52286 2.22256 7.03195 4.11311C6.94799 4.43645 6.61924 6.08008 6.15504 8.40082C6.06752 8.83838 5.97518 9.30001 5.87877 9.7814C5.27423 12.7997 4.51511 16.564 3.79366 19.9428C3.26595 22.4142 2.53396 24.5671 1.8873 26.3274C1.72558 26.7677 1.57097 27.1792 1.42688 27.5627Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root18Right);
