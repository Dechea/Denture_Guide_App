import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView35({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='30.88%' aspectRatio={21 / 28} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 21 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[35]}
      >
        <path
          d='M1 5.91382L1 20.1907C1 21.2249 1.1405 22.2543 1.41755 23.2499C2.00641 25.3662 3.80417 26.9095 5.96295 27.16L7.48584 27.3367C9.45731 27.5654 11.4489 27.5539 13.4177 27.3024L14.984 27.1023C16.9694 26.8486 18.6498 25.4943 19.3326 23.5911C19.7741 22.3602 20 21.0611 20 19.752L20 5.66794C20 4.8827 19.75 4.11867 19.2876 3.48834C18.7861 2.80491 18.0652 2.31975 17.2491 2.11502L10.9892 0.544607C10.7521 0.485132 10.5042 0.485132 10.2672 0.544607L3.92556 2.13551C3.14546 2.33121 2.4449 2.76845 1.92248 3.38677C1.32739 4.09109 1 4.98699 1 5.91382Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView35);
