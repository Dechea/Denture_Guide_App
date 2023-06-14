import Root from '../TeethDiagram/teeth/areas/root';
import Crown from '../TeethDiagram/teeth/areas/crown-side-view';
import { Tooth } from '../TeethDiagram/teeth/areas/tooth';
import { TreatmentVisualization } from '../../zustand/teethDiagram/interface';
import { ToothContainer } from '../TeethDiagram/teeth/areas/tooth';

interface ComposedToothProps {
  treatment: TreatmentVisualization;
}

export const ComposedTooth = ({ treatment }: ComposedToothProps) => {
  const customStyles = '[&_svg>*]:!pointer-events-none';

  return (
    <ToothContainer customStyles='!w-[64px] !aspect-[64/64]'>
      <Tooth tooth={0} className='!h-[90%]' variant={treatment.toothVariant}>
        <Root
          customStyles={customStyles}
          variant={treatment.rootVariant}
          tooth={0}
        />
        <Crown
          customStyles={customStyles}
          variant={treatment.crownVariant}
          tooth={0}
          leftAnchor={treatment.leftAnchor}
          rightAnchor={treatment.rightAnchor}
        />
      </Tooth>
    </ToothContainer>
  );
};
