import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth11Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['11' as keyof typeof treatments] || {};

  return (
    <ToothContainer customStyles={customStyles}>
      <Tooth tooth={11} variant={toothData.toothVariant}>
        <Root tooth={11} variant={toothData.rootVariant} />
        <Crown
          tooth={11}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
      <ToothNumber tooth={11} jawType={JawType.UPPER} />
    </ToothContainer>
  );
}

export default Tooth11Composed;
