import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root18Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='54.84%'
      aspectRatio={17 / 34}
      position='absolute'
      className={cx('left-[3.226%] -bottom-[12%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['18']}
      >
        <path
          d='M15.5731 27.5627C15.9908 28.6745 16.3201 29.5508 16.4776 30.2092L15.2017 30.6813C10.5119 32.4168 5.56564 33.3672 0.564143 33.4942C0.721526 32.9214 1.00421 32.0652 1.33586 31.0608C1.55857 30.3863 1.80336 29.6449 2.04712 28.8775C2.69998 26.8222 3.346 24.577 3.42278 23.162C3.57302 20.3931 3.55168 17.3509 3.50452 14.5013C3.49419 13.8768 3.48263 13.2621 3.47134 12.6616C3.43096 10.5132 3.39399 8.54673 3.42861 6.96489C3.46579 5.26623 3.82844 3.82942 4.35106 2.74899C4.87898 1.65759 5.54654 0.974705 6.16301 0.702742C6.79465 0.424089 7.47952 0.403875 8.11748 0.823702C8.77839 1.25863 9.47714 2.22256 9.96805 4.11311C10.052 4.43645 10.3808 6.08008 10.845 8.40082C10.9325 8.83838 11.0248 9.30001 11.1212 9.7814C11.7258 12.7997 12.4849 16.564 13.2063 19.9428C13.7341 22.4142 14.466 24.5671 15.1127 26.3274C15.2744 26.7677 15.429 27.1792 15.5731 27.5627Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root18Left);
