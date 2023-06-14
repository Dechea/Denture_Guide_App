import { useState } from 'react';
import { Accordion, Button, Checkbox, Text, View } from 'reshaped';
import ToothIcon from '../../components/Icons/Tooth';
import { implantProductOptionProps } from '../../interfaces/implant';

const ImplantProductOption = ({
  selectedTeeth,
  size,
  productId,
  optionId,
  onSelectImplant,
  selectedImplants,
}: implantProductOptionProps) => {
  const [check, setCheck] = useState<boolean>(false);
  const [selectedItemId, setSelectedItemId] = useState<boolean>(false);

  const checkToothButtonDisable = (tooth: number): boolean =>
    !selectedImplants.hasOwnProperty(`${productId}-${optionId}-${tooth}`) &&
    Object.keys(selectedImplants).some(
      (implant) => implant.endsWith(`-${tooth}`) && selectedImplants[implant]
    );

  const getToothButtonColor = (tooth: number) =>
    selectedImplants?.[`${productId}-${optionId}-${tooth}`]
      ? 'primary'
      : 'white';

  const handleCheckBox = () => {
    setCheck(!check);
    setSelectedItemId(!selectedItemId);
  };

  return (
    <View
      backgroundColor={check ? 'neutral-faded' : 'white'}
      paddingBlock={2} paddingInline={3}
      direction='row'
    >
      <Accordion onToggle={handleCheckBox}>
        <Accordion.Trigger>
          <View gap={3} direction='row' align='center'>
            <Checkbox value='3' checked={check} />
            <View.Item grow>
              <View width={'220px'}>
                <Text color='neutral-faded' variant='body-3' weight='medium'>
                  {`${size} mm`}
                </Text>
              </View>
            </View.Item>
          </View>
        </Accordion.Trigger>
        <Accordion.Content>
          <View
            direction='row'
            align='center'
            paddingTop={2}
            paddingEnd={3}
            paddingStart={3}
            gap={2}
            width='100%'
            justify='center'
          >
            {selectedTeeth.map((tooth: number) => (
              <View.Item grow key={tooth}>
                <Button
                  fullWidth
                  disabled={checkToothButtonDisable(tooth)}
                  onClick={() => onSelectImplant(productId, optionId, tooth)}
                  color={getToothButtonColor(tooth)}
                  size='small'
                  icon={<ToothIcon />}
                >
                  {tooth}
                </Button>
              </View.Item>
            ))}
          </View>
        </Accordion.Content>
      </Accordion>
    </View>
  );
};

export default ImplantProductOption;
