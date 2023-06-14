import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView42({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='27.94%' aspectRatio={19 / 26} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 19 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[42]}
      >
        <path
          d='M1 3.63409V18.2022C1 19.2397 1.13975 20.2723 1.4154 21.2718C2.00047 23.3933 3.78677 24.9532 5.94816 25.2372L6.59938 25.3227C8.49332 25.5716 10.4121 25.5584 12.3025 25.2835L13.0079 25.181C14.9917 24.8926 16.6575 23.5227 17.3351 21.617C17.775 20.3797 18 19.0751 18 17.7606V3.42678C18 2.80364 17.8029 2.19711 17.438 1.69522C16.891 0.943071 16.0223 0.5 15.0997 0.5H4.10601C3.19244 0.5 2.32425 0.905931 1.73359 1.61125C1.26016 2.17659 1 2.89312 1 3.63409Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView42);
