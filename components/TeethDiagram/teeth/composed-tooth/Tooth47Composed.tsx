import Root from '../areas/root';
import Crown from '../areas/crown-side-view';
import { JawType } from '../areas/tooth/interfaces/props';
import { ToothContainer, ToothNumber, Tooth } from '../areas/tooth';
import { useTeethDiagramStore } from '../../../../zustand/teethDiagram';
import { ComposesToothProps } from './interfaces/props';

function Tooth47Composed({ customStyles }: ComposesToothProps) {
  const { treatments } = useTeethDiagramStore((state) => state);
  const toothData = treatments['47' as keyof typeof treatments] || {};

  return (
    <ToothContainer tooth={47} customStyles={customStyles}>
      <ToothNumber tooth={47} jawType={JawType.LOWER} />
      <Tooth tooth={47} variant={toothData.toothVariant}>
        <Root tooth={47} variant={toothData.rootVariant} />
        <Crown
          tooth={47}
          variant={toothData.crownVariant}
          leftAnchor={toothData.leftAnchor}
          rightAnchor={toothData.rightAnchor}
        />
      </Tooth>
    </ToothContainer>
  );
}

export default Tooth47Composed;
