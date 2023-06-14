import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView41({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='27.94%' aspectRatio={19 / 24} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 19 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[41]}
      >
        <path
          d='M1 3.72512V16.1092C1 17.1942 1.1533 18.2736 1.45524 19.3148C2.06199 21.4073 3.84309 22.9326 5.98352 23.2L7.17458 23.3489C9.00146 23.5772 10.851 23.5467 12.6695 23.2583L12.9859 23.2082C14.9322 22.8996 16.5665 21.56 17.2629 19.6971C17.7503 18.3935 18 17.0118 18 15.6185V3.50401C18 2.83936 17.7817 2.19389 17.3799 1.66834C16.8159 0.930759 15.9457 0.5 15.0247 0.5H4.19465C3.28292 0.5 2.41372 0.893356 1.80697 1.58244C1.28746 2.17244 1 2.93474 1 3.72512Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView41);
