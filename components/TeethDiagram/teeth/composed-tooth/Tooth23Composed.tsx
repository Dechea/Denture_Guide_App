import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth23Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['23' as keyof typeof treatments] || {};

  return (
    <ToothContainer tooth={23} customStyles={customStyles}>
      <Tooth tooth={23} variant={toothData.toothVariant}>
        <Root tooth={23} variant={toothData.rootVariant} />
        <Crown
          tooth={23}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
      <ToothNumber tooth={23} jawType={JawType.UPPER} />
    </ToothContainer>
  );
}

export default Tooth23Composed;
