import Root from '../TeethDiagram/teeth/areas/root';
import Crown from '../TeethDiagram/teeth/areas/crown-side-view';
import { Tooth } from '../TeethDiagram/teeth/areas/tooth';
import { TreatmentProps } from '../../zustand/teethDiagram/interface';
import { ToothContainer } from '../TeethDiagram/teeth/areas/tooth';

interface ComposedToothProps {
  treatment: TreatmentProps['visualization'];
  fullWidth?: boolean;
}

export const ComposedTooth = ({
  treatment,
  fullWidth = false,
}: ComposedToothProps) => {
  return (
    <ToothContainer
      customStyles={`${
        fullWidth ? '!w-full' : '!w-[64px]'
      } !aspect-[64/64] pointer-events-none [&_svg>*]:!pointer-events-none`}
    >
      <Tooth tooth={0} className="!h-[90%]" variant={treatment.toothVariant}>
        <Root variant={treatment.rootVariant} tooth={0} />
        <Crown
          variant={treatment.crownVariant}
          tooth={0}
          leftAnchor={treatment.leftAnchor}
          rightAnchor={treatment.rightAnchor}
        />
      </Tooth>
    </ToothContainer>
  );
};
