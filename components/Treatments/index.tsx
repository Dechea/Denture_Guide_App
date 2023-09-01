'use client';

import { ComposedTooth } from './ComposedTooth';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';
import { TreatmentProps } from '../../zustand/teethDiagram/interface';
import TreatmentOptionCard from '../TreatmentOptionCard';
import { View } from 'reshaped';

interface TreatmentsProps {
  onSelectTreatment: (treatment: TreatmentProps) => void;
}
export default function Treatments({ onSelectTreatment }: TreatmentsProps) {
  const { availableTreatments } = useTeethDiagramStore((state) => state);

  return (
    <>
      {availableTreatments.map((treatment, index) => (
        <TreatmentOptionCard
          key={treatment?.id ?? index}
          Icon={
            <View width={{ s: '32px', m: '48px', l: '64px' }}>
              <ComposedTooth treatment={treatment.visualization} fullWidth />
            </View>
          }
          label={treatment.localizations[0].name}
          onClick={() => onSelectTreatment(treatment)}
          shortcutButtonText={`${index + 1}`}
        />
      ))}
    </>
  );
}
