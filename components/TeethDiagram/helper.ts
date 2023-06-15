import { PatientFile, Tooth, Treatment } from '../../fqlx-generated/typedefs';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';
import {
  TreatmentProps,
  TreatmentVisualization,
} from '../../zustand/teethDiagram/interface';
import {
  ANCHOR,
  LINK,
  ARTIFICIAL_CROWN,
  BRIDGE_ANCHOR,
  BRIDGE_LINK,
  IMPLANT,
  MISSING_CROWN,
  MISSING_ROOT,
  PROSTHESIS,
  PROSTHESIS_ANCHOR,
  PROSTHESIS_LINK,
  CROWN,
  ADULT,
  ROOT,
  EXTRACTION,
} from './teeth/constants/treatmentVariants';
import {
  orderedLowerJawTeeth,
  orderedUpperJawTeeth,
  singleRootsTeeth,
  threeRootsTeeth,
  twoRootsTeeth,
} from './teeth/constants/tooth';
import { rootId } from './teeth/constants/toothArea';

interface GetTreatmentsVariantArgs {
  treatments?: TreatmentVisualization;
  treatmentsData: Treatment[];
  forCard?: Boolean;
}

export const getTreatmentsVariant = ({
  treatments = {},
  treatmentsData,
  forCard = false,
}: GetTreatmentsVariantArgs) => {
  treatmentsData.forEach((treatment) => {
    if (treatment?.name === ARTIFICIAL_CROWN) {
      treatments.crownVariant = ARTIFICIAL_CROWN;
    } else if (treatment?.name === BRIDGE_LINK) {
      treatments.crownVariant = BRIDGE_LINK;
      treatments.rootVariant = MISSING_ROOT;
    } else if (treatment?.name === BRIDGE_ANCHOR) {
      treatments.crownVariant = BRIDGE_ANCHOR;
    } else if (treatment?.name === PROSTHESIS) {
      treatments.crownVariant = PROSTHESIS;
    } else if (treatment?.name === PROSTHESIS_LINK) {
      treatments.crownVariant = PROSTHESIS_LINK;
      treatments.rootVariant = MISSING_ROOT;
    } else if (treatment?.name === PROSTHESIS_ANCHOR) {
      treatments.crownVariant = PROSTHESIS_ANCHOR;
    } else if (treatment?.name === MISSING_CROWN) {
      treatments.crownVariant = MISSING_CROWN;
    } else if (treatment?.name === EXTRACTION) {
      treatments.crownVariant = EXTRACTION;
      treatments.rootVariant = EXTRACTION;
      treatments.toothVariant = EXTRACTION;
    }

    if (treatment?.name === IMPLANT) {
      treatments.rootVariant = IMPLANT;
    } else if (treatment?.name === MISSING_ROOT) {
      treatments.rootVariant = MISSING_ROOT;
    }

    if (forCard) {
      if (treatment?.name.includes(LINK) || treatment?.name.includes(ANCHOR)) {
        treatments.leftAnchor = true;
        treatments.rightAnchor = true;
      }
    }
  });
  return treatments;
};

function getAnchorVariants(treatments: TreatmentVisualization[]) {
  treatments.forEach((value, index) => {
    if (value?.crownVariant === BRIDGE_LINK) {
      if (
        treatments[index - 1]?.crownVariant === BRIDGE_ANCHOR ||
        treatments[index - 1]?.crownVariant === BRIDGE_LINK
      ) {
        value.leftAnchor = true;
        treatments[index - 1].rightAnchor = true;
      }
      if (
        treatments[index + 1]?.crownVariant === BRIDGE_ANCHOR ||
        treatments[index + 1]?.crownVariant === BRIDGE_LINK
      ) {
        value.rightAnchor = true;
        treatments[index + 1].leftAnchor = true;
      }
    }
    if (value?.crownVariant === PROSTHESIS_LINK) {
      if (
        treatments[index - 1]?.crownVariant === PROSTHESIS_ANCHOR ||
        treatments[index - 1]?.crownVariant === PROSTHESIS_LINK
      ) {
        value.leftAnchor = true;
        treatments[index - 1].rightAnchor = true;
      }
      if (
        treatments[index + 1]?.crownVariant === PROSTHESIS_ANCHOR ||
        treatments[index + 1]?.crownVariant === PROSTHESIS_LINK
      ) {
        value.rightAnchor = true;
        treatments[index + 1].leftAnchor = true;
      }
    }
    if (value?.crownVariant === BRIDGE_ANCHOR) {
      if (
        treatments[index - 1]?.crownVariant === BRIDGE_ANCHOR ||
        treatments[index - 1]?.crownVariant === BRIDGE_LINK
      ) {
        value.leftAnchor = true;
        treatments[index - 1].rightAnchor = true;
      }
      if (
        treatments[index + 1]?.crownVariant === BRIDGE_ANCHOR ||
        treatments[index + 1]?.crownVariant === BRIDGE_LINK
      ) {
        value.rightAnchor = true;
        treatments[index + 1].leftAnchor = true;
      }
    }
    if (value?.crownVariant === PROSTHESIS_ANCHOR) {
      if (
        treatments[index - 1]?.crownVariant === PROSTHESIS_ANCHOR ||
        treatments[index - 1]?.crownVariant === PROSTHESIS_LINK
      ) {
        value.leftAnchor = true;
        treatments[index - 1].rightAnchor = true;
      }
      if (
        treatments[index + 1]?.crownVariant === PROSTHESIS_ANCHOR ||
        treatments[index + 1]?.crownVariant === PROSTHESIS_LINK
      ) {
        value.rightAnchor = true;
        treatments[index + 1].leftAnchor = true;
      }
    }
  });
}

export function getAnchors(treatments: any) {
  const upper = new Array(16).fill(undefined);
  const lower = new Array(16).fill(undefined);

  for (const tooth in treatments) {
    if (Number(tooth) < 30) {
      upper[orderedUpperJawTeeth.indexOf(Number(tooth))] = treatments[
        tooth
      ] as TreatmentVisualization;
    } else {
      lower[orderedLowerJawTeeth.indexOf(Number(tooth))] = treatments[
        tooth
      ] as TreatmentVisualization;
    }
  }
  getAnchorVariants(upper);
  getAnchorVariants(lower);
}

export const getMappedPatientFileData = (
  patientFile: PatientFile,
  selectedTreatments: TreatmentProps[]
) => {
  const store = useTeethDiagramStore.getState();
  const patientFileData = { ...patientFile };
  const patientFileTeeth = [...patientFileData.teeth];

  store.activeToothParts.forEach((toothPart) => {
    const toothName = toothPart.split('-')[0];

    const treatment: { [key: string]: string } = {};

    selectedTreatments.forEach((selectedTreatment) => {
      const splitedArea = selectedTreatment.areas[0].name.split('.');
      const area = splitedArea[splitedArea.length - 1];
      if ([CROWN, ROOT].includes(area)) {
        treatment[area] = selectedTreatment.name;
      } else {
        treatment[CROWN] = selectedTreatment.name;
        treatment[ROOT] = selectedTreatment.name;
      }
    });

    const patientFileToothIndex = patientFileTeeth.findIndex(
      (tooth) => tooth.name == toothName
    );

    if (patientFileToothIndex !== -1) {
      patientFileTeeth[patientFileToothIndex] = {
        ...patientFileTeeth[patientFileToothIndex],
        crown: {
          treatmentDoc: {
            treatment: {
              name: treatment[CROWN] || ADULT,
            },
          },
        },
        root: {
          treatmentDoc: {
            treatment: {
              name: treatment[ROOT] || ADULT,
            },
          },
        },
      } as Tooth;
    } else {
      patientFileTeeth.push({
        name: toothName,
        crown: {
          treatmentDoc: {
            treatment: {
              name: treatment[CROWN] || ADULT,
            },
          },
        },
        root: {
          treatmentDoc: {
            treatment: {
              name: treatment[ROOT] || ADULT,
            },
          },
        },
      } as Tooth);
    }
  });

  return {
    teeth: [...patientFileTeeth],
  };
};

export const getReadableRoots = (tooth: number) => {
  const isThreeRoot = threeRootsTeeth.includes(tooth);
  const isTwoRoot = twoRootsTeeth.includes(tooth);
  const isSingleRoot = singleRootsTeeth.includes(tooth);

  switch (true) {
    case isThreeRoot:
      return [
        rootId[`${tooth}-left` as keyof typeof rootId],
        rootId[`${tooth}-middle` as keyof typeof rootId],
        rootId[`${tooth}-right` as keyof typeof rootId],
      ];

    case isTwoRoot:
      return [
        rootId[`${tooth}-left` as keyof typeof rootId],
        rootId[`${tooth}-right` as keyof typeof rootId],
      ];

    case isSingleRoot:
      return [rootId[`${tooth}` as keyof typeof rootId]];

    default:
      return [];
  }
};

export const mapTreatmentVisualizationsFromTeeth = (teeth: Tooth[]) => {
  const treatmentVisualization: { [key: string]: TreatmentVisualization } = {};

  // Mapping treatment visualization from PatientFile data
  teeth.forEach((value) => {
    treatmentVisualization[value.name] = getTreatmentsVariant({
      treatmentsData: [
        value.root.treatmentDoc?.treatment,
        value.crown.treatmentDoc?.treatment,
      ],
    });
  });

  getAnchors(treatmentVisualization);
  return treatmentVisualization;
};