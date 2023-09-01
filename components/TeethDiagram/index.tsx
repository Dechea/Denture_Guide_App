'use client';

import { useEffect } from 'react';
import { Button, Hidden, Modal, View, useToggle } from 'reshaped';
import Treatments from '../Treatments';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';
import { useQuery } from 'fqlx-client';
import {
  PatientFile,
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
import ComposedTeethDiagram from './composedTeethDiagram';
import BinIcon from '../Icons/Bin';

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

    mappedPatientFile.teeth.forEach((value) => {
      newTreatments[value.name] = getTreatmentsVariant({
        toothNumber: Number(value.name),
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
    return () => {
      setActiveTooth(0);
      setActiveToothParts([]);
    };
  }, []);

  useEffect(() => {
    !!activeToothParts.length ? activate() : deactivate();
  }, [activeToothParts]);

  return (
    <View
      width='100%'
      maxWidth={'1280px'}
      paddingInline={{ m: 0, xl: 20 }}
      align='center'
      className='!outline-none'
      attributes={{ tabIndex: 1 }}
    >
      <View width='100%' align='end' paddingBottom={6} paddingEnd={2}>
        <Toolbar onUndo={undoFunction} onRedo={redoFunction} />
      </View>

      <View width='100%' className='overflow-x-auto !scrollbar-thumb-[]'>
        <View width='1096px'>
          <ComposedTeethDiagram />
        </View>
      </View>

      <Modal
        active={active}
        position='bottom'
        transparentOverlay
        className='bg-transparent !w-100% md:!w-[calc(100%-64px)] md:!left-[64px] !shadow-[0px_-5px_20px_rgba(0,0,0,0.01),_0px_-22px_75px_rgba(0,0,0,0.07)] !p-0 !rounded-[0px] !outline-none !z-50'
        attributes={{ tabIndex: -1 }}
      >
        <View className='bg-[rgba(0,0,0,0.04)]' height={4.5}>
          <Hidden hide={{ s: false, m: true }}>
            <Button
              size={'medium'}
              icon={UnionIcon}
              rounded
              className='!absolute right-x6 !top-3'
              onClick={deactivate}
            />
          </Hidden>
        </View>
        <View
          gap={2}
          direction='row'
          justify='center'
          paddingTop={{ s: 9, m: 8 }}
          paddingInline={6}
          className={'min-h-[301px] sm:min-h-[249px]'}
        >
          <Treatments onSelectTreatment={handleTreatmentsClick} />

          <View>
            <TreatmentOptionCard
              Icon={
                <View
                  width={{ s: '24px', l: '28px', xl: '33px' }}
                  className='text-[--rs-color-foreground-neutral-faded]'
                >
                  <BinIcon />
                </View>
              }
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
