import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth35Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['35' as keyof typeof treatments] || {};

  return (
    <ToothContainer tooth={35} customStyles={customStyles}>
      <ToothNumber tooth={35} jawType={JawType.LOWER} />
      <Tooth tooth={35} variant={toothData.toothVariant}>
        <Root tooth={35} variant={toothData.rootVariant} />
        <Crown
          tooth={35}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
    </ToothContainer>
  );
}

export default Tooth35Composed;
