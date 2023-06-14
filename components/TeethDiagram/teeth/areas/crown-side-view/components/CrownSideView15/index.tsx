import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView15({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='30.88%' aspectRatio={21 / 28} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 21 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[15]}
      >
        <path
          d='M1 22.0862V7.80933C1 6.77508 1.1405 5.74574 1.41755 4.75006C2.00641 2.63377 3.80417 1.09048 5.96295 0.84003L7.48584 0.663349C9.45731 0.434625 11.4489 0.446138 13.4177 0.697638L14.984 0.89773C16.9694 1.15136 18.6498 2.5057 19.3326 4.40889C19.7741 5.63976 20 6.93888 20 8.24805V22.3321C20 23.1173 19.75 23.8813 19.2876 24.5117C18.7861 25.1951 18.0652 25.6803 17.2491 25.885L10.9892 27.4554C10.7521 27.5149 10.5042 27.5149 10.2672 27.4554L3.92556 25.8645C3.14546 25.6688 2.4449 25.2315 1.92248 24.6132C1.32739 23.9089 1 23.013 1 22.0862Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView15);
