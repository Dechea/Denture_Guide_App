'use client';

import { useHotkeys } from 'reshaped';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';
import { mapTreatmentVisualizationsFromTeeth } from './helper';
import { toothId } from './teeth/constants/toothArea';
import {
  orderedLowerJawTeeth,
  orderedUpperJawTeeth,
  teethNames,
} from './teeth/constants/tooth';
import { TreatmentProps } from '../../zustand/teethDiagram/interface';
import { Tooth } from '../../fqlx-generated/typedefs';

interface useKeyboardNavigationProps {
  onSelectTreatment(treatment: TreatmentProps): void;
  onRemoveTreatment(): void;
  updateTreatmentsInFqlx(teeth: Tooth[]): void;
}

export const useKeyboardNavigation = ({
  onSelectTreatment,
  onRemoveTreatment,
  updateTreatmentsInFqlx,
}: useKeyboardNavigationProps) => {
  const {
    activeTooth,
    activeToothParts,
    availableTreatments,
    history,
    historyIndex,
    setActiveToothParts,
    setActiveTooth,
    setHistory,
    setHistoryIndex,
    setTreatments,
  } = useTeethDiagramStore((state) => state);

  const handleCtrl_AKeyPress = (event: KeyboardEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if (event?.ctrlKey || event?.metaKey) {
      const TOTAL_TOOTH_PARTS = 32;

      if (TOTAL_TOOTH_PARTS !== activeToothParts.length) {
        const teeth: string[] = [];

        teethNames.forEach((tooth) =>
          teeth.push(toothId[tooth as keyof typeof toothId])
        );

        setHistory([
          ...history.slice(0, historyIndex),
          {
            type: 'activeToothParts',
            activeToothPartsBefore: activeToothParts,
            activeToothPartsAfter: teeth,
          },
        ]);
        setHistoryIndex(historyIndex + 1);
        setActiveToothParts(teeth);
      }
    }
  };

  const handleEscKeyPress = (
    event:
      | KeyboardEvent
      | React.KeyboardEvent<HTMLElement>
      | React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (activeToothParts.length !== 0) {
      setHistory([
        ...history.slice(0, historyIndex + 1),
        {
          type: 'activeToothParts',
          activeToothPartsBefore: activeToothParts,
          activeToothPartsAfter: [],
        },
      ]);
      setHistoryIndex(historyIndex + 1);
      setActiveToothParts([]);
    }
  };

  const handleArrowKeyPress = (event: KeyboardEvent, key: string) => {
    event.stopPropagation();
    event.preventDefault();

    const upperToothActiveIndex = orderedUpperJawTeeth.indexOf(activeTooth);
    const lowerToothActiveIndex = orderedLowerJawTeeth.indexOf(activeTooth);
    const upperTeethNamesLastIndex = orderedUpperJawTeeth.length - 1;
    const lowerTeethNamesLastIndex = orderedLowerJawTeeth.length - 1;

    let currentActiveTooth = activeTooth || 18;
    const isCtrlKey = event.ctrlKey || event.metaKey;

    if (key === 'ArrowUp' || key === 'ArrowDown') {
      if (upperToothActiveIndex !== -1) {
        currentActiveTooth = orderedLowerJawTeeth[upperToothActiveIndex];
      } else {
        currentActiveTooth = orderedUpperJawTeeth[lowerToothActiveIndex];
      }
    } else if (key === 'ArrowRight') {
      if (
        upperToothActiveIndex !== -1 &&
        upperToothActiveIndex !== upperTeethNamesLastIndex
      ) {
        currentActiveTooth = orderedUpperJawTeeth[upperToothActiveIndex + 1];
      } else if (upperToothActiveIndex === upperTeethNamesLastIndex) {
        currentActiveTooth =
          orderedLowerJawTeeth[lowerTeethNamesLastIndex as number];
      }

      if (
        lowerToothActiveIndex !== -1 &&
        lowerToothActiveIndex !== lowerTeethNamesLastIndex
      ) {
        currentActiveTooth = orderedLowerJawTeeth[lowerToothActiveIndex + 1];
      } else if (lowerToothActiveIndex === lowerTeethNamesLastIndex) {
        currentActiveTooth =
          orderedUpperJawTeeth[upperTeethNamesLastIndex as number];
      }
    } else if (key === 'ArrowLeft') {
      if (upperToothActiveIndex !== -1 && upperToothActiveIndex !== 0) {
        currentActiveTooth = orderedUpperJawTeeth[upperToothActiveIndex - 1];
      } else if (upperToothActiveIndex === 0) {
        currentActiveTooth = orderedLowerJawTeeth[0];
      }

      if (lowerToothActiveIndex !== -1 && lowerToothActiveIndex !== 0) {
        currentActiveTooth = orderedLowerJawTeeth[lowerToothActiveIndex - 1];
      } else if (lowerToothActiveIndex === 0) {
        currentActiveTooth = orderedUpperJawTeeth[0];
      }
    }

    let activeToothPartsClone: string[] = [];

    if (isCtrlKey) {
      activeToothPartsClone = [...activeToothParts];
    }

    const tooth = toothId[currentActiveTooth as keyof typeof toothId];
    const activeToothIndex = activeToothParts.indexOf(tooth);
    if (activeToothIndex !== -1) {
      activeToothPartsClone = activeToothPartsClone.filter(
        (activeToothPart) => Number(activeToothPart.slice(0, 2)) !== activeTooth
      );
    } else {
      activeToothPartsClone.push(tooth);
    }

    setHistory([
      ...history.slice(0, historyIndex),
      {
        type: 'activeToothParts',
        activeToothPartsBefore: activeToothParts,
        activeToothPartsAfter: activeToothPartsClone,
        activeToothBefore: activeTooth,
        activeToothAfter: currentActiveTooth,
      },
    ]);
    setHistoryIndex(historyIndex + 1);
    setActiveTooth(currentActiveTooth);
    setActiveToothParts(activeToothPartsClone);
  };

  const handleNumberKeyPress = (event: KeyboardEvent, key: number) => {
    event.stopPropagation();
    event.preventDefault();

    onSelectTreatment(availableTreatments[key]);
  };

  const handleBackspace_Or_DeleteKeyPress = (event: KeyboardEvent) => {
    event.stopPropagation();
    event.preventDefault();

    onRemoveTreatment();
  };

  const handleCtrl_ZKeyPress = (
    event:
      | KeyboardEvent
      | React.KeyboardEvent<HTMLElement>
      | React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();
    event.preventDefault();

    console.log('undo, ', event);

    if (event?.ctrlKey || event?.metaKey || event.type === 'click') {
      if (historyIndex < 1) {
        console.log('Nothing left to undo');
        return;
      }

      const lastAction = history.slice(historyIndex - 1)[0];
      console.log({ historyIndex, lastAction });

      if (lastAction.type === 'treatments') {
        setActiveToothParts(lastAction.activeToothPartsBefore as string[]);
        updateTreatmentsInFqlx(lastAction.patientFileTeethBefore as Tooth[]);
        const treatmentVisualizations = mapTreatmentVisualizationsFromTeeth(
          lastAction.patientFileTeethBefore as Tooth[]
        );
        setTreatments(treatmentVisualizations);
      } else if (lastAction.type === 'activeToothParts') {
        setActiveTooth(lastAction.activeToothBefore as number);
        setActiveToothParts(lastAction.activeToothPartsBefore as string[]);
      }
      setHistoryIndex(historyIndex - 1);
    }
  };

  const handleCtrl_YKeyPress = (
    event:
      | KeyboardEvent
      | React.KeyboardEvent<HTMLElement>
      | React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();
    event.preventDefault();

    console.log('redo');

    if (event?.ctrlKey || event?.metaKey || event.type === 'click') {
      if (historyIndex > -1 && historyIndex < history.length) {
        const lastAction = history.slice(historyIndex)[0];
        if (lastAction.type === 'treatments') {
          setActiveToothParts(lastAction.activeToothPartsAfter as string[]);
          updateTreatmentsInFqlx(lastAction.patientFileTeethAfter as Tooth[]);
          const treatmentVisualizations = mapTreatmentVisualizationsFromTeeth(
            lastAction.patientFileTeethAfter as Tooth[]
          );
          setTreatments(treatmentVisualizations);
        } else if (lastAction.type === 'activeToothParts') {
          setActiveTooth(lastAction.activeToothAfter as number);
          setActiveToothParts(lastAction.activeToothPartsAfter as string[]);
        }
        setHistoryIndex(historyIndex + 1);
      } else {
        console.log('Nothing to redo!');
      }
    }
  };

  const { ref } = useHotkeys<HTMLInputElement>(
    {
      Delete: handleBackspace_Or_DeleteKeyPress,
      Backspace: handleBackspace_Or_DeleteKeyPress,
      A: handleCtrl_AKeyPress,
      escape: handleEscKeyPress,
      Z: handleCtrl_ZKeyPress,
      Y: handleCtrl_YKeyPress,
      ArrowUp: (event) => handleArrowKeyPress(event, 'ArrowUp'),
      ArrowDown: (event) => handleArrowKeyPress(event, 'ArrowDown'),
      ArrowRight: (event) => handleArrowKeyPress(event, 'ArrowRight'),
      ArrowLeft: (event) => handleArrowKeyPress(event, 'ArrowLeft'),
      1: (event) => handleNumberKeyPress(event, 0),
      2: (event) => handleNumberKeyPress(event, 1),
      3: (event) => handleNumberKeyPress(event, 2),
      4: (event) => handleNumberKeyPress(event, 3),
      5: (event) => handleNumberKeyPress(event, 4),
      6: (event) => handleNumberKeyPress(event, 5),
      7: (event) => handleNumberKeyPress(event, 6),
      8: (event) => handleNumberKeyPress(event, 7),
      9: (event) => handleNumberKeyPress(event, 8),
    },
    [activeTooth, activeToothParts, history, historyIndex]
  );

  return {
    hotKeysref: ref,
    undoFunction: handleCtrl_ZKeyPress,
    redoFunction: handleCtrl_YKeyPress,
    escapeFunction: handleEscKeyPress,
  };
};
