import { Card, Icon, MenuItem, Text, View } from 'reshaped';
import ArrowDownIcon from '../Icons/ArrowDown';
import ToothIcon from '../Icons/Tooth';
import { useProductStore } from '../../zustand/product';
import { convertCamelCaseToTitleCase } from '../../utils/helper';

export default function SelectedToothList() {
  const { activeProductTab } = useProductStore();
  return (
    <View
      gap={3}
      height="100%"
      padding={6}
      paddingBottom={10}
      className="max-[640px]:!border-none border-l border-[--rs-color-border-neutral-faded]"
    >
      <View direction="row" align="center" width="100%" gap={1}>
        <Icon svg={ArrowDownIcon} />
        <Text variant="body-3" weight="medium">
          {convertCamelCaseToTitleCase(activeProductTab)} for:
        </Text>
      </View>

      <View direction="column" gap={2} width="100%">
        <Card key={11} padding={0}>
          <MenuItem
            size={'small'}
            roundedCorners={true}
            className="hover:!cursor-pointer"
          >
            <View
              direction="row"
              align="center"
              gap={3}
              width="100%"
              paddingStart={2}
              paddingBlock={2}
            >
              <Icon svg={ToothIcon} size={5} />
              <Text variant="body-3" weight="medium">
                {11}
              </Text>
            </View>
          </MenuItem>
        </Card>
      </View>
    </View>
  );
}
