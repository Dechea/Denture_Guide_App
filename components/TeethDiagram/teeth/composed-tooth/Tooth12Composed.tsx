import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth12Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['12' as keyof typeof treatments] || {};

  return (
    <ToothContainer tooth={12} customStyles={customStyles}>
      <Tooth tooth={12} variant={toothData.toothVariant}>
        <Root tooth={12} variant={toothData.rootVariant} />
        <Crown
          tooth={12}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
      <ToothNumber tooth={12} jawType={JawType.UPPER} />
    </ToothContainer>
  );
}

export default Tooth12Composed;
