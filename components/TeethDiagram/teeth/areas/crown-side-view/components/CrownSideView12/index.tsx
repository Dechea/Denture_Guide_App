import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView12({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='30.88%' aspectRatio={21 / 26} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 21 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[12]}
      >
        <path
          d='M1 22.1875V7.95987C1 6.82631 1.16884 5.69921 1.50084 4.61622C2.12906 2.567 3.89703 1.08681 6.00687 0.837435L7.43632 0.668478C9.43729 0.431971 11.4595 0.444512 13.4575 0.70582L14.9131 0.896204C16.8404 1.14827 18.4832 2.43256 19.2035 4.25515C19.7297 5.58636 20 7.00628 20 8.43932V22.4234C20 23.1322 19.7574 23.8187 19.3138 24.3675C18.734 25.0847 17.8656 25.5 16.9496 25.5H4.2846C3.37811 25.5 2.51118 25.1221 1.88989 24.4547C1.31854 23.8409 1 23.0304 1 22.1875Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView12);
