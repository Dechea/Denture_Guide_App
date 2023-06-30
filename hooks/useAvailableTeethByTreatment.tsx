import { useEffect } from 'react';
import { useProductStore } from '../zustand/product';
import { useTeethDiagramStore } from '../zustand/teethDiagram';

interface useAvailableTeethByTreatmentProps {
  acceptableTreatment: { [key: string]: string[] };
}

export function useAvailableTeethByTreatment({
  acceptableTreatment,
}: useAvailableTeethByTreatmentProps) {
  const { treatments } = useTeethDiagramStore();
  const { setAvailableTeethByProductType, setSelectedProducts } =
    useProductStore();

  useEffect(() => {
    const availableTeeth: number[] = [];

    Object.entries(treatments).forEach(([toothNumber, visualisation]) => {
      for (const [area, values] of Object.entries(acceptableTreatment)) {
        if (
          values.includes(
            visualisation[area as keyof typeof visualisation] as string
          )
        ) {
          availableTeeth.push(Number(toothNumber));
          break;
        }
      }
    });

    setAvailableTeethByProductType(availableTeeth);

    return () => {
      setAvailableTeethByProductType([]);
      setSelectedProducts({});
    };
  }, []);
}
