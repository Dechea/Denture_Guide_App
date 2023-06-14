import { ComposedTooth } from './ComposedTooth';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';
import { TreatmentProps } from '../../zustand/teethDiagram/interface';
import TreatmentOptionCard from '../TreatmentOptionCard';

interface TreatmentsProps {
  onSelectTreatment: (treatment: TreatmentProps) => void;
}
export default function Treatments({ onSelectTreatment }: TreatmentsProps) {
  const { availableTreatments } = useTeethDiagramStore((state) => state);

  return (
    <>
      {availableTreatments.map((treatment, index) => (
        <TreatmentOptionCard
          key={treatment?.id}
          Icon={<ComposedTooth treatment={treatment.visualization} />}
          label={treatment.localizations[0].name}
          onClick={() => onSelectTreatment(treatment)}
          shortcutButtonText={`${index + 1}`}
        />
      ))}
    </>
  );
}
