import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root28Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='58.065%'
      aspectRatio={18 / 34}
      position='absolute'
      className={cx('left-[3.226%] -bottom-[9.615%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 18 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['28']}
      >
        <path
          d='M16.5343 30.2092L15.2584 30.6813C10.5686 32.4168 5.62228 33.3672 0.620784 33.4942C0.778166 32.9214 1.06085 32.0652 1.3925 31.0608C1.61521 30.3863 1.86 29.6449 2.10376 28.8775C2.75662 26.8222 3.40264 24.577 3.47942 23.162C3.62966 20.3931 3.60832 17.3509 3.56116 14.5013C3.55083 13.8768 3.53927 13.2621 3.52799 12.6616C3.4876 10.5132 3.45063 8.54673 3.48525 6.96489C3.52243 5.26623 3.88508 3.82942 4.4077 2.74899C4.93562 1.65759 5.60318 0.974705 6.21965 0.702742C6.85129 0.424089 7.53616 0.403875 8.17412 0.823702C8.83503 1.25863 9.53378 2.22256 10.0247 4.11311C10.1086 4.43645 10.4374 6.08008 10.9016 8.40082C10.9891 8.83838 11.0815 9.30001 11.1779 9.7814C11.7824 12.7997 12.5415 16.564 13.263 19.9428C13.7907 22.4142 14.5227 24.5671 15.1693 26.3274C15.3311 26.7677 15.4857 27.1792 15.6298 27.5627C16.0475 28.6745 16.3768 29.5508 16.5343 30.2092Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root28Left);
