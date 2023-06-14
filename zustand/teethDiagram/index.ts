import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { handleClickOnToothArea } from './helper';
import { TeethDiagramState } from './interface';

const initialState = {
  activeTooth: 0,
  activeToothParts: [],
  treatments: {},
  availableTreatments: [],
  history: [],
  historyIndex: 0,
};

export const useTeethDiagramStore = create<TeethDiagramState>()(
  persist(
    (set) => ({
      ...initialState,
      setActiveToothParts: (toothParts) =>
        set(() => ({ activeToothParts: toothParts })),
      onClick: (event) => {
        handleClickOnToothArea(event);
      },
      setTreatments: (treatments) => set(() => ({ treatments })),
      setAvailableTreatments: (availableTreatments) =>
        set(() => ({ availableTreatments })),
      resetTeethDiagramStore: () => set(initialState),
      setActiveTooth: (currentActiveTooth) =>
        set(() => ({ activeTooth: currentActiveTooth })),
      setHistory: (updatedHistory) => set(() => ({ history: updatedHistory })),
      setHistoryIndex: (updatedHistoryIndex) =>
        set(() => ({ historyIndex: updatedHistoryIndex })),
      resetHistory: () => set(() => ({ historyIndex: 0, history: [] })),
    }),
    { name: 'teeth-diagram-store' }
  )
);
