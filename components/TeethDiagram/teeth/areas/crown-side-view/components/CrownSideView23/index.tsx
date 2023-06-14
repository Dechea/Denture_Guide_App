import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView23({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='29.41%' aspectRatio={20 / 29} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 21 29'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[23]}
      >
        <path
          d='M20 20.8364V7.85029C20 6.80971 19.8594 5.7741 19.5821 4.77242C18.9927 2.64352 17.1952 1.09352 15.0396 0.842152L13.5129 0.664117C11.5423 0.434318 9.55154 0.445884 7.58362 0.698568L6.01362 0.900158C4.03113 1.15471 2.35123 2.51485 1.66801 4.42908C1.22608 5.66729 1 6.97429 1 8.29146V21.1272C1 22.1047 1.30955 23.0556 1.88194 23.8398C2.30413 24.4181 2.85496 24.8861 3.4888 25.2057L9.70675 28.3415C10.1259 28.5528 10.6178 28.5528 11.0369 28.3415L17.3686 25.1483C17.9406 24.8599 18.4496 24.4568 18.8648 23.9628C19.597 23.0918 20 21.9834 20 20.8364Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView23);
