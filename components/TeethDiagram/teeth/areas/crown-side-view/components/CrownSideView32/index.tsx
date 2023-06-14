import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView32({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='27.94%' aspectRatio={19 / 26} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 19 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[32]}
      >
        <path
          d='M18 3.63409V18.2022C18 19.2397 17.8602 20.2723 17.5846 21.2718C16.9995 23.3933 15.2132 24.9532 13.0518 25.2372L12.4006 25.3227C10.5067 25.5716 8.58789 25.5584 6.69748 25.2835L5.99209 25.181C4.00832 24.8926 2.34251 23.5227 1.66491 21.617C1.22495 20.3797 1 19.0751 1 17.7606V3.42678C1 2.80364 1.19708 2.19711 1.56205 1.69522C2.10901 0.943071 2.97773 0.5 3.9003 0.5H14.894C15.8076 0.5 16.6757 0.90593 17.2664 1.61125C17.7398 2.17659 18 2.89312 18 3.63409Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView32);
