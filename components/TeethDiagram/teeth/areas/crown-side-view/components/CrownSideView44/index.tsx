import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView44({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='30.88%' aspectRatio={21 / 31} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 21 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[44]}
      >
        <path
          d='M1 8.15598V22.1571C1 23.197 1.14069 24.232 1.41809 25.233C2.00725 27.359 3.80351 28.9069 5.95763 29.1578L7.48794 29.3361C9.45803 29.5656 11.4482 29.554 13.4155 29.3017L14.989 29.0999C16.9701 28.8458 18.6488 27.4875 19.3318 25.576C19.7738 24.3387 20 23.0325 20 21.7162V7.86532C20 6.88864 19.6904 5.93854 19.118 5.15514C18.696 4.57761 18.1454 4.1104 17.512 3.79129L11.293 0.658325C10.874 0.447224 10.3823 0.447224 9.9633 0.658325L3.63066 3.84856C3.05904 4.13653 2.55029 4.53904 2.13527 5.03224C1.40306 5.90237 1 7.0099 1 8.15598Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView44);
