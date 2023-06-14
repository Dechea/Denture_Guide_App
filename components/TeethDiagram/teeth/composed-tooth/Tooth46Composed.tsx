import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth46Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['46' as keyof typeof treatments] || {};

  return (
    <ToothContainer customStyles={customStyles}>
      <ToothNumber tooth={46} jawType={JawType.LOWER} />
      <Tooth tooth={46} variant={toothData.toothVariant}>
        <Root tooth={46} variant={toothData.rootVariant} />
        <Crown
          tooth={46}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
    </ToothContainer>
  );
}

export default Tooth46Composed;
