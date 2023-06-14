import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView25({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='30.88%' aspectRatio={21 / 28} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 21 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[25]}
      >
        <path
          d='M20 22.0862L20 7.80933C20 6.77508 19.8595 5.74574 19.5825 4.75006C18.9936 2.63377 17.1958 1.09048 15.0371 0.84003L13.5142 0.663349C11.5427 0.434625 9.55109 0.446138 7.58234 0.697638L6.01601 0.89773C4.03057 1.15136 2.35019 2.5057 1.66744 4.40889C1.22587 5.63976 1 6.93888 1 8.24805L1 22.3321C1 23.1173 1.24997 23.8813 1.71243 24.5117C2.21386 25.1951 2.9348 25.6803 3.75089 25.885L10.0108 27.4554C10.2479 27.5149 10.4958 27.5149 10.7328 27.4554L17.0744 25.8645C17.8545 25.6688 18.5551 25.2315 19.0775 24.6132C19.6726 23.9089 20 23.013 20 22.0862Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView25);
