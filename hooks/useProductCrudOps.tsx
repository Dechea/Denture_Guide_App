'use client';

import { useQuery } from 'fqlx-client';
import { Query, Tooth } from '../fqlx-generated/typedefs';

interface UseProductCrudOpsProps {
  patientFileId: string;
}

export const useProductCrudOps = ({
  patientFileId,
}: UseProductCrudOpsProps) => {
  const query = useQuery<Query>();

  const addOrUpdateProductInFqlx = async (
    manipulateTeeth: (teeth: Tooth[]) => void
  ) => {
    const fqlxTeeth =
      (await query.PatientFile.byId(patientFileId).exec()).teeth || [];
    const teeth = [...fqlxTeeth];

    manipulateTeeth(teeth);

    const stringifyTeeth = JSON.stringify(teeth).replaceAll(
      /"Product.byId\(\\"(\d*)\\"\)"/g,
      'Product.byId("$1")'
    );

    await query.PatientFile.byId(patientFileId)
      .update(`{ teeth: ${stringifyTeeth} }`)
      .exec();
  };

  return { addOrUpdateProductInFqlx };
};
