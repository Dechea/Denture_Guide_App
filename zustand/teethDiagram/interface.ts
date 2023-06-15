import { Tooth } from '../../fqlx-generated/typedefs';

export interface TreatmentProps {
  name: string;
  type: string;
  id?: string;
  visualization: {
    toothVariant?: string;
    crownVariant?: string;
    rootVariant?: string;
    anchorLeft?: boolean;
    anchorRight?: boolean;
  };
  localizations: {
    name: string;
    locale: string;
  }[];
  areas: { name: string }[];
}

export interface TreatmentVisualization {
  toothVariant?: string;
  rootVariant?: string;
  crownVariant?: string;
  leftAnchor?: boolean;
  rightAnchor?: boolean;
}

export interface History {
  type: string;
  activeToothBefore?: number;
  activeToothAfter?: number;
  activeToothPartsBefore?: string[];
  activeToothPartsAfter?: string[];
  patientFileTeethBefore?: Tooth[];
  patientFileTeethAfter?: Tooth[];
}

export interface TeethDiagramState {
  activeTooth: number;
  activeToothParts: string[];
  treatments: { [key: string]: TreatmentVisualization };
  availableTreatments: TreatmentProps[];
  history: History[];
  historyIndex: number;
  setActiveToothParts: (toothParts: string[]) => void;
  onClick: (
    event:
      | React.MouseEvent<SVGPathElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
    toothId?: string
  ) => void;
  setTreatments: (treatments: {
    [key: string]: TreatmentVisualization;
  }) => void;
  setAvailableTreatments: (availableTreatments: TreatmentProps[]) => void;
  resetTeethDiagramStore: () => void;
  setActiveTooth: (currentActiveTooth: number) => void;
  setHistory: (updatedHistory: History[]) => void;
  setHistoryIndex: (updatedHistoryIndex: number) => void;
  resetHistory: () => void;
}
