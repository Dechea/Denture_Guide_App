'use client';

import { Button, Hotkey, Tooltip, View } from 'reshaped';
import UndoIcon from '../Icons/Undo';
import RedoIcon from '../Icons/Redo';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';

interface ToolbarProps {
  onUndo: (
    event:
      | React.KeyboardEvent<HTMLElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
  onRedo: (
    event:
      | React.KeyboardEvent<HTMLElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
}

export default function Toolbar({ onUndo, onRedo }: ToolbarProps) {
  const { historyIndex, history } = useTeethDiagramStore((state) => state);

  const isUndoActive = historyIndex > 0;
  const isRedoActive = historyIndex < history.length;

  return (
    <View direction='row' gap={2} paddingTop={4} paddingEnd={6}>
      <Tooltip
        text={
          <View direction='row' align='center'>
            Undo <Hotkey>mod + Z</Hotkey>
          </View>
        }
      >
        {(attributes) => (
          <Button
            attributes={attributes}
            size='small'
            variant='ghost'
            onClick={onUndo}
            disabled={!isUndoActive}
            endIcon={<UndoIcon />}
          />
        )}
      </Tooltip>
      <Tooltip
        text={
          <View direction='row' align='center'>
            Redo <Hotkey>mod + Y</Hotkey>
          </View>
        }
      >
        {(attributes) => (
          <Button
            attributes={attributes}
            size='small'
            variant='ghost'
            onClick={onRedo}
            disabled={!isRedoActive}
            endIcon={<RedoIcon />}
          />
        )}
      </Tooltip>
    </View>
  );
}
