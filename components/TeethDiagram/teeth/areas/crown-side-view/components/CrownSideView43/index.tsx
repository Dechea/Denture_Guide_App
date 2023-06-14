import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView43({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='30.88%' aspectRatio={21 / 30} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 21 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[43]}
      >
        <path
          d='M9.9623 0.65333L9.74075 0.205093L9.96229 0.653332L3.54932 3.82302C2.93044 4.12891 2.38786 4.57404 1.96314 5.12509C1.33944 5.9343 1 6.93263 1 7.9613V22.2897C1 23.2443 1.11874 24.195 1.35338 25.1194C1.90727 27.3015 3.73055 28.9048 5.92997 29.157L7.52842 29.3403C9.4744 29.5635 11.4396 29.5527 13.3831 29.3083L15.0375 29.1002C17.0722 28.8443 18.7847 27.4236 19.4328 25.4432C19.8085 24.2952 20 23.0934 20 21.8837V7.7009C20 6.82427 19.7404 5.96839 19.2556 5.24403C18.8326 4.61207 18.2543 4.10423 17.5787 3.77032L11.2724 0.65333C10.8588 0.448889 10.3759 0.448889 9.9623 0.65333Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView43);
