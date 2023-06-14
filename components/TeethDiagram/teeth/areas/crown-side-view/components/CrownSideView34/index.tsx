import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView34({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='30.88%' aspectRatio={21 / 31} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 21 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[34]}
      >
        <path
          d='M1 8.3386L1 22.3397C1 23.3796 1.14069 24.4146 1.41809 25.4156C2.00725 27.5416 3.80351 29.0895 5.95763 29.3405L7.48794 29.5187C9.45803 29.7482 11.4482 29.7367 13.4155 29.4843L14.989 29.2825C16.9701 29.0284 18.6488 27.6701 19.3318 25.7586C19.7738 24.5213 20 23.2151 20 21.8988L20 8.04793C20 7.07126 19.6904 6.12116 19.118 5.33776C18.696 4.76023 18.1454 4.29302 17.512 3.9739L11.293 0.840942C10.874 0.629841 10.3823 0.629841 9.9633 0.840942L3.63066 4.03118C3.05904 4.31914 2.55029 4.72165 2.13527 5.21485C1.40306 6.08499 1 7.19252 1 8.3386Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView34);
