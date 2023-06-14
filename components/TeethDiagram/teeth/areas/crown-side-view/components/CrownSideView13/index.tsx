import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView13({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='29.41%' aspectRatio={20 / 29} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 20 29'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[13]}
      >
        <path
          d='M0.5 20.8364V7.85029C0.5 6.80971 0.640634 5.7741 0.917931 4.77242C1.50728 2.64352 3.30481 1.09352 5.46037 0.842152L6.9871 0.664117C8.95774 0.434318 10.9485 0.445884 12.9164 0.698568L14.4864 0.900158C16.4689 1.15471 18.1488 2.51485 18.832 4.42908C19.2739 5.66729 19.5 6.97429 19.5 8.29146V21.1272C19.5 22.1047 19.1905 23.0556 18.6181 23.8398C18.1959 24.4181 17.645 24.8861 17.0112 25.2057L10.7932 28.3415C10.3741 28.5528 9.88224 28.5528 9.46309 28.3415L3.13139 25.1483C2.55943 24.8599 2.0504 24.4568 1.63519 23.9628C0.903035 23.0918 0.5 21.9834 0.5 20.8364Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView13);
