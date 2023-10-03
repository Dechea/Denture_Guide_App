'use client';

import { useQuery } from 'fauna-typed';
import { PatientFile, Query, Tooth } from '../fqlx-generated/typedefs';

interface UseProductCrudOpsProps {
  patientFileId: string;
}

export const useProductCrudOps = ({
  patientFileId,
}: UseProductCrudOpsProps) => {
  const query = useQuery<Query>();

  const addOrUpdateProductInFqlx = async (
    manipulateTeeth: (teeth: Tooth[]) => Promise<Tooth[]>
  ) => {
    let patientFile: PatientFile;

    if (patientFileId === 'discovery-mode') {
      const patientFileString = localStorage.getItem('discovery-mode');

      if (patientFileString) {
        patientFile = JSON.parse(patientFileString) as PatientFile;
      } else {
        patientFile = { teeth: [] } as unknown as PatientFile;
      }
    } else {
      patientFile = query.PatientFile.byId(patientFileId)
        .project({ teeth: true })
        .exec();
    }

    const teeth = await manipulateTeeth([...patientFile.teeth]);

    if (patientFileId === 'discovery-mode') {
      localStorage.setItem(
        'discovery-mode',
        JSON.stringify({ ...patientFile, teeth: teeth })
      );
    } else {
      const stringifyTeeth = JSON.stringify(teeth).replaceAll(
        /"Product.byId\(\\"(\d*)\\"\)"/g,
        'Product.byId("$1")'
      );

      await query.PatientFile.byId(patientFileId)
        .update(`{ teeth: ${stringifyTeeth} }`)
        .exec();
    }
  };

  return { addOrUpdateProductInFqlx };
};
