import { useTeethDiagramStore } from '.';

export const handleClickOnToothArea = (
  event: React.MouseEvent<SVGPathElement, MouseEvent>
) => {
  const store = useTeethDiagramStore.getState();
  const {
    history,
    historyIndex,
    activeTooth,
    activeToothParts,
    setHistoryIndex,
    setHistory,
    setActiveTooth,
    setActiveToothParts,
  } = store;

  const target = event.target as HTMLBodyElement;
  const id: string = target?.parentElement?.id as string;

  let selectedTeethData: string[] = [];

  if (event.ctrlKey || event.metaKey) {
    selectedTeethData = [...activeToothParts];
  }

  if (selectedTeethData.includes(id)) {
    selectedTeethData = selectedTeethData.filter((toothId) => toothId !== id);
    setActiveToothParts(selectedTeethData);
    return;
  }

  selectedTeethData.push(id);
  const currentActiveTooth = Number(id.slice(0, 2));

  setHistory([
    ...history.slice(0, historyIndex),
    {
      type: 'activeToothParts',
      activeToothPartsBefore: activeToothParts,
      activeToothPartsAfter: selectedTeethData,
      activeToothBefore: activeTooth,
      activeToothAfter: currentActiveTooth,
    },
  ]);
  setHistoryIndex(historyIndex + 1);

  setActiveTooth(currentActiveTooth);
  setActiveToothParts(selectedTeethData);
};
