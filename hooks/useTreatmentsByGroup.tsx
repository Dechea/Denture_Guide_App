import { useProductStore } from '../zustand/product';
import { useTeethDiagramStore } from '../zustand/teethDiagram';
import { TreatmentVisualization } from '../zustand/teethDiagram/interface';

export function useTreatmentsByGroup() {
  const { availableTeethByProductType } = useProductStore();
  const { treatments } = useTeethDiagramStore((state) => state);

  const teethWithTreatments = availableTeethByProductType.map((toothNumber) => {
    return {
      toothNumber: toothNumber,
      ...treatments[toothNumber as keyof typeof treatments],
    };
  });

  const groupwiseTeethWithTreatments = teethWithTreatments.reduce(
    (acc, treatment) => {
      acc[treatment.group] = acc[treatment.group] || [];
      acc[treatment.group].push(treatment);
      return acc;
    },
    {} as { [key: string]: TreatmentVisualization[] }
  );

  return { groupwiseTeethWithTreatments };
}
