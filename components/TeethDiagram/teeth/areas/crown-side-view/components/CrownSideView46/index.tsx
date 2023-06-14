import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView46({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='45.58%' aspectRatio={31 / 30} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 31 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[46]}
      >
        <path
          d='M30.5 3.89258L30.5 20.4379C30.5 22.1188 30.2448 23.7895 29.7434 25.3911C29.2387 27.0035 27.8743 28.1752 26.2363 28.4158L21.9489 29.0455C17.707 29.6686 13.3978 29.6509 9.16095 28.9931L4.80974 28.3176C3.39282 28.0976 2.1886 27.1376 1.64151 25.782C0.887821 23.9145 0.5 21.9152 0.5 19.8963L0.5 3.64635C0.5 2.90454 0.757177 2.18753 1.22471 1.62111C1.81245 0.909046 2.6779 0.5 3.58764 0.5H8.08145C9.66099 0.5 11.1879 1.08385 12.3772 2.14466C14.08 3.66355 16.6297 3.66355 18.3326 2.14466C19.5219 1.08385 21.0488 0.5 22.6283 0.5H27.1701C28.0704 0.5 28.934 0.871588 29.5621 1.53247C30.1629 2.16449 30.5 3.01055 30.5 3.89258Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView46);
