import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth21Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['21' as keyof typeof treatments] || {};

  return (
    <ToothContainer customStyles={customStyles}>
      <Tooth tooth={21} variant={toothData.toothVariant}>
        <Root tooth={21} variant={toothData.rootVariant} />
        <Crown
          tooth={21}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
      <ToothNumber tooth={21} jawType={JawType.UPPER} />
    </ToothContainer>
  );
}

export default Tooth21Composed;
