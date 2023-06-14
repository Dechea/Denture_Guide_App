import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth34Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['34' as keyof typeof treatments] || {};

  return (
    <ToothContainer customStyles={customStyles}>
      <ToothNumber tooth={34} jawType={JawType.LOWER} />
      <Tooth tooth={34} variant={toothData.toothVariant}>
        <Root tooth={34} variant={toothData.rootVariant} />
        <Crown
          tooth={34}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
    </ToothContainer>
  );
}

export default Tooth34Composed;
