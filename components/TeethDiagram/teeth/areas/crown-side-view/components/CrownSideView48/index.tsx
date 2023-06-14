import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView48({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='45.58%' aspectRatio={31 / 30} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 31 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[48]}
      >
        <path
          d='M0.5 3.89258V20.4379C0.5 22.1188 0.755213 23.7895 1.25656 25.3911C1.76129 27.0035 3.12573 28.1752 4.76367 28.4158L9.05113 29.0455C13.293 29.6686 17.6022 29.6509 21.8391 28.9931L26.1903 28.3176C27.6072 28.0976 28.8114 27.1376 29.3585 25.782C30.1122 23.9145 30.5 21.9152 30.5 19.8963V3.64635C30.5 2.90454 30.2428 2.18753 29.7753 1.62111C29.1876 0.909046 28.3221 0.5 27.4124 0.5H22.9185C21.339 0.5 19.8121 1.08385 18.6228 2.14466C16.92 3.66355 14.3703 3.66355 12.6674 2.14466C11.4781 1.08385 9.95121 0.5 8.37167 0.5H3.82991C2.92957 0.5 2.06604 0.871588 1.43785 1.53247C0.837095 2.16449 0.5 3.01055 0.5 3.89258Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView48);
