import { View } from 'reshaped';
import cx from 'classnames';
import { ToothComponentProps } from '../../interfaces/props';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';
import { toothId } from '../../../../constants/toothArea';

export const toothStyles = {
  active:
    '[&_svg>*]:opacity-100 [&_svg>*]:!stroke-[--rs-color-tooth-border-active] [&_svg>*]:!fill-[--rs-color-tooth-background-active]',
  hover:
    '[&_svg>*]:hover:opacity-100 [&_svg>*]:hover:!fill-[--rs-color-tooth-background-hover]  [&_svg>*]:hover:!stroke-[--rs-color-tooth-border-hover]',
};

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
