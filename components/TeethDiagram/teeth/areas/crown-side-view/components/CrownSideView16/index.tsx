import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView16({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='45.58%' aspectRatio={31 / 30} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 31 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[16]}
      >
        <path
          d='M30.5 26.1074L30.5 9.56207C30.5 7.88118 30.2448 6.21045 29.7434 4.60889C29.2387 2.99651 27.8743 1.82476 26.2363 1.58418L21.9489 0.95446C17.707 0.331426 13.3978 0.349088 9.16095 1.00688L4.80974 1.68242C3.39282 1.90241 2.1886 2.86242 1.64151 4.21798C0.887821 6.08547 0.5 8.08481 0.5 10.1037L0.5 26.3537C0.5 27.0955 0.757177 27.8125 1.22471 28.3789C1.81245 29.091 2.6779 29.5 3.58764 29.5H8.08145C9.66099 29.5 11.1879 28.9162 12.3772 27.8553C14.08 26.3365 16.6297 26.3365 18.3326 27.8553C19.5219 28.9162 21.0488 29.5 22.6283 29.5H27.1701C28.0704 29.5 28.934 29.1284 29.5621 28.4675C30.1629 27.8355 30.5 26.9894 30.5 26.1074Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView16);
