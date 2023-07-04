import { useState } from 'react';
import { Icon, Text, View, MenuItem, Card } from 'reshaped';
import cx from 'classnames';
import ToothIcon from '../Icons/Tooth';

const selectedTeeth = [
  {
    id: 0,
    tooth: 14,
  },
  { id: 1, tooth: 43 },
];

const ProductToothList = () => {
  const [activeOption, setActiveOption] = useState<number>(0);

  const setActiveTeeth = (selectedTooth: number) => {
    setActiveOption(selectedTooth);
  };

  return selectedTeeth.map((tooth) => (
    <Card
      key={tooth.id}
      padding={0}
      className={cx(
        '!shadow-[0px_2px_3px_rgba(0,0,0,0.1),_0px_1px_2px_-1px_rgba(0,0,0,0.1)]',
        {
          '!border-[--rs-color-foreground-primary]':
            activeOption === tooth.tooth,
        }
      )}
    >
      <MenuItem
        selected={activeOption === tooth.tooth}
        size={'small'}
        roundedCorners={true}
        onClick={() => setActiveTeeth(tooth.tooth)}
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
            {tooth.tooth}
          </Text>
        </View>
      </MenuItem>
    </Card>
  ));
};

export default ProductToothList;
