import { useState } from 'react';
import { Icon, Text, View, MenuItem, Card } from 'reshaped';
import cx from 'classnames';
import { implantProductOptionsProps } from '../../interfaces/implant';
import ToothIcon from '../Icons/Tooth';

const ImplantProductOption = ({
  selectedTeeth,
}: implantProductOptionsProps) => {
  const [activeOption, setActiveOption] = useState<number>(0);

  const setActiveTeeth = (selectedTeeth: number) => {
    selectedTeeth !== activeOption
      ? setActiveOption(selectedTeeth)
      : setActiveOption(0);
  };

  return (
    <Card
      padding={0}
      className={cx(
        '!shadow-[0px_2px_3px_rgba(0,0,0,0.1),_0px_1px_2px_-1px_rgba(0,0,0,0.1)]',

        { '!border-[--rs-color-foreground-primary]': Boolean(activeOption) }
      )}
    >
      <MenuItem
        selected={Boolean(activeOption)}
        size={'small'}
        roundedCorners={true}
        onClick={() => setActiveTeeth(selectedTeeth)}
      >
        <View
          direction='row'
          align='center'
          gap={3}
          width='100%'
          paddingStart={2}
          paddingBlock={2}
        >
          <Icon svg={ToothIcon} size={5} />
          <Text variant='body-3' weight='medium'>
            {selectedTeeth}
          </Text>
        </View>
      </MenuItem>
    </Card>
  );
};

export default ImplantProductOption;
