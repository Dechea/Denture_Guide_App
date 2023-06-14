import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView22({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='30.88%' aspectRatio={21 / 26} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 21 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[22]}
      >
        <path
          d='M20 22.1875L20 7.95987C20 6.82631 19.8312 5.69921 19.4992 4.61622C18.8709 2.567 17.103 1.08681 14.9931 0.837435L13.5637 0.668478C11.5627 0.431971 9.54045 0.444512 7.54252 0.70582L6.08686 0.896204C4.15959 1.14827 2.51683 2.43256 1.79646 4.25515C1.27031 5.58636 1 7.00628 1 8.43932L1 22.4234C1 23.1322 1.24259 23.8187 1.68616 24.3675C2.26595 25.0847 3.13441 25.5 4.05042 25.5L16.7154 25.5C17.6219 25.5 18.4888 25.1221 19.1101 24.4547C19.6815 23.8409 20 23.0304 20 22.1875Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView22);
