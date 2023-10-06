'use client';

import { useLocalStorage, useQuery } from 'fauna-typed';
import { PatientFile, Query, Tooth } from '../fqlx-generated/typedefs';
import { DISCOVERYMODE } from '../__mocks__/flow';

interface UseProductCrudOpsProps {
  patientFileId: string;
}

export const useProductCrudOps = ({
  patientFileId,
}: UseProductCrudOpsProps) => {
  const isDiscoveryModeEnabled = patientFileId === `${DISCOVERYMODE}`;
  const query = useQuery<Query>();
  const {
    value: discoveryModePatientFile,
    setValue: setDiscoveryModePatientFile,
  } = useLocalStorage(`${DISCOVERYMODE}`, 'PatientFile');

  const addOrUpdateProductInFqlx = async (
    manipulateTeeth: (teeth: Tooth[]) => Promise<Tooth[]>
  ) => {
    let patientFile: PatientFile;

    if (isDiscoveryModeEnabled) {
      patientFile = discoveryModePatientFile as PatientFile;
    } else {
      patientFile = query.PatientFile.byId(patientFileId)
        .project({ teeth: true })
        .exec();
    }

    const teeth = await manipulateTeeth([...patientFile.teeth]);

    if (isDiscoveryModeEnabled) {
      setDiscoveryModePatientFile({ ...patientFile, teeth: teeth });
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
