import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function CrownSideView14({ children, customStyles }: CrownSideViewProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='33.82%' aspectRatio={23 / 30} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 23 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId[14]}
      >
        <path
          d='M22.5 21.5736V8.05033C22.5 6.8805 22.3189 5.71795 21.9634 4.60497C21.3166 2.58014 19.5481 1.13941 17.4628 0.928659L14.7299 0.652465C12.6173 0.438962 10.4885 0.44972 8.3781 0.684562L5.63989 0.989272C3.7344 1.20132 2.08994 2.44511 1.35024 4.24126C0.789021 5.60403 0.5 7.06596 0.5 8.54264V21.9011C0.5 22.9837 0.881235 24.0301 1.57408 24.8527C2.02023 25.3825 2.58023 25.801 3.21064 26.0765L10.7597 29.3759C11.1382 29.5414 11.567 29.5414 11.9455 29.3759L19.609 26.0265C20.1775 25.778 20.6932 25.4202 21.1275 24.9724C22.0065 24.0661 22.5 22.8458 22.5 21.5736Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}
export default withEnable(CrownSideView14);
