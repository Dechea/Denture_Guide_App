import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth27Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['27' as keyof typeof treatments] || {};

  return (
    <ToothContainer customStyles={customStyles}>
      <Tooth tooth={27} variant={toothData.toothVariant}>
        <Root tooth={27} variant={toothData.rootVariant} />
        <Crown
          tooth={27}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
      <ToothNumber tooth={27} jawType={JawType.UPPER} />
    </ToothContainer>
  );
}

export default Tooth27Composed;
