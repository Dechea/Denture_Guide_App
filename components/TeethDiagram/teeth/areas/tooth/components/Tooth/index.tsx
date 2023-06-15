import { View } from 'reshaped';
import cx from 'classnames';
import { ToothComponentProps } from '../../interfaces/props';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';
import { toothId } from '../../../../constants/toothArea';
import { toothStyles } from '../../styles';

export default function Tooth({
  children,
  customStyles,
  tooth,
}: ToothComponentProps) {
  const { activeToothParts } = useTeethDiagramStore((state) => state);
  const active = activeToothParts.includes(
    toothId[tooth as keyof typeof toothId]
  );

  return (
    <View
      width='100%'
      height='76.635514018%'
      align='center'
      className={cx(
        `tooth pointer-events-none [&>*]:pointer-events-none [&_svg>*]:cursor-pointer [&_svg>*]:pointer-events-auto`,
        {
          [toothStyles.hover]: !active,
          [toothStyles.active]: active,
        },
        customStyles
      )}
    >
      {children}
    </View>
  );
}
