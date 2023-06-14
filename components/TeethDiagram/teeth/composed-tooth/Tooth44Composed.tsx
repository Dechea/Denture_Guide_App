import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth44Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['44' as keyof typeof treatments] || {};

  return (
    <ToothContainer customStyles={customStyles}>
      <ToothNumber tooth={44} jawType={JawType.LOWER} />
      <Tooth tooth={44} variant={toothData.toothVariant}>
        <Root tooth={44} variant={toothData.rootVariant} />
        <Crown
          tooth={44}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
    </ToothContainer>
  );
}

export default Tooth44Composed;
