'use client';

import { useEffect } from 'react';
import { Modal, View, useToggle } from 'reshaped';
import {
  Tooth11Composed,
  Tooth12Composed,
  Tooth13Composed,
  Tooth14Composed,
  Tooth15Composed,
  Tooth16Composed,
  Tooth17Composed,
  Tooth18Composed,
  Tooth21Composed,
  Tooth22Composed,
  Tooth23Composed,
  Tooth24Composed,
  Tooth25Composed,
  Tooth26Composed,
  Tooth27Composed,
  Tooth28Composed,
  Tooth31Composed,
  Tooth32Composed,
  Tooth33Composed,
  Tooth34Composed,
  Tooth35Composed,
  Tooth36Composed,
  Tooth37Composed,
  Tooth38Composed,
  Tooth41Composed,
  Tooth42Composed,
  Tooth43Composed,
  Tooth44Composed,
  Tooth45Composed,
  Tooth46Composed,
  Tooth47Composed,
  Tooth48Composed,
} from './teeth/composed-tooth';
import TeethDiagram from './container';
import Jaw from './container/Jaw';
import Treatments from '../Treatments';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';
import { useQuery } from 'fqlx-client';
import {
  PatientFile,
  PatientFileInput,
  Query,
  Tooth,
  Treatment,
} from '../../fqlx-generated/typedefs';
import {
  getAnchors,
  getMappedPatientFileData,
  getTreatmentsVariant,
  mapTreatmentVisualizationsFromTeeth,
  replaceSelectedProductWithRef,
} from './helper';
import { validTreatments } from './validTreatments';
import {
  TreatmentProps,
  TreatmentVisualization,
} from '../../zustand/teethDiagram/interface';

import { useKeyboardNavigation } from './useKeyboardNavigation';
import Toolbar from './Toolbar';
import TreatmentOptionCard from '../TreatmentOptionCard';
import UnionIcon from '../Icons/Union';

export default function TeethDiagramWithTreatments({
  patientFileId,
}: {
  patientFileId: string;
}) {
  const query = useQuery<Query>();
  const { activate, deactivate, active } = useToggle(false);

  const {
    treatments,
    activeToothParts,
    history,
    historyIndex,
    setTreatments,
    setAvailableTreatments,
    setActiveToothParts,
    setActiveTooth,
    setHistory,
    setHistoryIndex,
    resetTeethDiagramStore,
    resetHistory,
    setRecentAddedTreatment,
  } = useTeethDiagramStore((state) => state);

  const fqlxTreatmentGroups = query.TreatmentGroup.all()
    .project({
      name: true,
      treatments: true,
      localizations: true,
    })
    .exec();

  const fqlxTreatments = query.Treatment.all().exec();

  const callPatientFileAPI = async (teeth: Tooth[]) => {
    const stringifyTeeth = JSON.stringify(teeth).replaceAll(
      /"Product.byId\(\\"(\d*)\\"\)"/g,
      'Product.byId("$1")'
    );

    const updateRes = await query.PatientFile.byId(patientFileId)
      .update(`{ teeth: ${stringifyTeeth} }`)
      .exec();

    console.log({ updateRes });
  };

  const handleTreatmentsClick = async (treatment: TreatmentProps) => {
    setRecentAddedTreatment(treatment.visualization);
    const patientFileData = await query.PatientFile.byId(patientFileId).exec();

    // @ts-expect-error
    if (!patientFileData?.exists === false) {
      console.log('Invalid Patient File Id');
      return;
    }

    const treatmentsToApply =
      'treatments' in treatment ? treatment.treatments : [treatment];
    const mappedPatientFile = getMappedPatientFileData(
      patientFileData,
      treatmentsToApply as TreatmentProps[]
    );
    const newTreatments: { [key: string]: TreatmentVisualization } = {
      ...treatments,
    };

    mappedPatientFile.teeth.map((value) => {
      newTreatments[value.name] = getTreatmentsVariant({
        treatmentsData: [
          value.root.treatmentDoc?.treatment,
          value.crown.treatmentDoc?.treatment,
        ] as Treatment[],
      });
    });

    getAnchors(newTreatments);

    setHistory([
      ...history.slice(0, historyIndex),
      {
        type: 'treatments',
        activeToothPartsBefore: activeToothParts,
        activeToothPartsAfter: [],
        patientFileTeethBefore: patientFileData.teeth,
        patientFileTeethAfter: mappedPatientFile.teeth,
      },
    ]);
    setHistoryIndex(historyIndex + 1);

    setTreatments(newTreatments);
    setActiveToothParts([]);

    callPatientFileAPI(mappedPatientFile.teeth);
  };

  const handleDeleteTreatment = async () => {
    if (!activeToothParts.length) {
      return;
    }

    const patientFile: PatientFile = await query.PatientFile.byId(
      patientFileId
    ).exec();

    const activeToothNames = activeToothParts.map(
      (active) => active.split('-')[0]
    );

    //@ts-expect-error
    const uniqueArrayOfActiveTeeth = [...new Set(activeToothNames)];

    const treatmentsClone = { ...treatments };
    uniqueArrayOfActiveTeeth.forEach((teethNumber) => {
      delete treatmentsClone[teethNumber];
    });

    const filteredTeeth = patientFile.teeth.filter(
      (tooth) => !uniqueArrayOfActiveTeeth.includes(tooth.name)
    );

    const teethWithSelectedProductRef =
      replaceSelectedProductWithRef(filteredTeeth);

    setHistory([
      ...history.slice(0, historyIndex),
      {
        type: 'treatments',
        activeToothPartsBefore: activeToothParts,
        activeToothPartsAfter: [],
        patientFileTeethBefore: patientFile.teeth,
        patientFileTeethAfter: teethWithSelectedProductRef,
      },
    ]);
    setHistoryIndex(historyIndex + 1);

    setTreatments(treatmentsClone);
    setActiveToothParts([]);

    callPatientFileAPI(teethWithSelectedProductRef);
  };

  const fetchPatientFile = async () => {
    const patientFile: PatientFile = await query.PatientFile.byId(
      patientFileId
    ).exec();

    // @ts-expect-error
    if (patientFile?.exists === false) {
      resetTeethDiagramStore();
      console.log('Invalid Patient File Id');

      return;
    }

    const treatmentVisualizations = mapTreatmentVisualizationsFromTeeth(
      patientFile.teeth
    );
    setTreatments(treatmentVisualizations);
  };

  const { undoFunction, redoFunction } = useKeyboardNavigation({
    onRemoveTreatment: handleDeleteTreatment,
    onSelectTreatment: handleTreatmentsClick,
    updateTreatmentsInFqlx: callPatientFileAPI,
  });

  // Filter valid treatments and treatment groups
  useEffect(() => {
    const treatmentAndTreatmentGroups = [
      ...fqlxTreatmentGroups?.data,
      ...fqlxTreatments?.data,
    ];

    const availableTreatments = validTreatments.map((treatment) => {
      const validTreatment = treatmentAndTreatmentGroups.find(
        (treatmentAndTreatmentGroup) =>
          treatment === treatmentAndTreatmentGroup.name
      );
      if (validTreatment) {
        return {
          ...validTreatment,
          type: 'treatments' in validTreatment ? 'treatmentGroup' : 'treatment',
          visualization: getTreatmentsVariant({
            treatmentsData: ('treatments' in validTreatment
              ? validTreatment.treatments
              : [validTreatment]) as Treatment[],
            forCard: true,
          }),
        };
      }
    });

    setAvailableTreatments(availableTreatments as TreatmentProps[]);
  }, []);

  useEffect(() => {
    fetchPatientFile();
    resetHistory();
    setActiveTooth(0);
    setActiveToothParts([]);
  }, []);

  useEffect(() => {
    !!activeToothParts.length ? activate() : deactivate();
  }, [activeToothParts]);

  return (
    <View
      width='100%'
      align='center'
      className='!outline-none'
      attributes={{ tabIndex: 1 }}
    >
      <View width='100%' align='end' paddingBottom={12}>
        <Toolbar onUndo={undoFunction} onRedo={redoFunction} />
      </View>

      <View width='75.55%' maxWidth='1632px'>
        <TeethDiagram>
          <Jaw customStyles='pb-[2.205882352%]'>
            <Tooth18Composed />
            <Tooth17Composed />
            <Tooth16Composed />
            <Tooth15Composed />
            <Tooth14Composed />
            <Tooth13Composed />
            <Tooth12Composed />
            <Tooth11Composed />
            <Tooth21Composed />
            <Tooth22Composed />
            <Tooth23Composed />
            <Tooth24Composed />
            <Tooth25Composed />
            <Tooth26Composed />
            <Tooth27Composed />
            <Tooth28Composed />
          </Jaw>
          <Jaw customStyles='pt-[2.205882352%]'>
            <Tooth48Composed />
            <Tooth47Composed />
            <Tooth46Composed />
            <Tooth45Composed />
            <Tooth44Composed />
            <Tooth43Composed />
            <Tooth42Composed />
            <Tooth41Composed />
            <Tooth31Composed />
            <Tooth32Composed />
            <Tooth33Composed />
            <Tooth34Composed />
            <Tooth35Composed />
            <Tooth36Composed />
            <Tooth37Composed />
            <Tooth38Composed />
          </Jaw>
        </TeethDiagram>
      </View>

      <Modal
        active={active}
        position='bottom'
        transparentOverlay
        className='!w-[calc(100%-64px)] !left-[64px] !shadow-[0px_-5px_20px_rgba(0,0,0,0.01),_0px_-22px_75px_rgba(0,0,0,0.07)] !rounded-[0px] !pt-[32px] !pb-[74px] !outline-none'
        attributes={{ tabIndex: -1 }}
      >
        <View gap={2} direction='row' justify='center'>
          <Treatments onSelectTreatment={handleTreatmentsClick} />

          <View paddingStart={8}>
            <TreatmentOptionCard
              Icon={<UnionIcon />}
              label='Delete'
              onClick={handleDeleteTreatment}
              shortcutButtonText='Del'
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
