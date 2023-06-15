import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth43Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['43' as keyof typeof treatments] || {};

  return (
    <ToothContainer tooth={43} customStyles={customStyles}>
      <ToothNumber tooth={43} jawType={JawType.LOWER} />
      <Tooth tooth={43} variant={toothData.toothVariant}>
        <Root tooth={43} variant={toothData.rootVariant} />
        <Crown
          tooth={43}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
    </ToothContainer>
  );
}

export default Tooth43Composed;
