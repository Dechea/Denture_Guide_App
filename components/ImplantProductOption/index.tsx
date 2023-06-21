import { useState } from 'react';
import { Icon, Text, View, MenuItem, Card } from 'reshaped';
import cx from 'classnames';
import { implantProductOptionsProps } from '../../interfaces/implant';
import TreatmentOptionIcon from '../Icons/TreatmentOption';

const ImplantProductOption = ({
  selectedTeeth,
}: implantProductOptionsProps) => {
  // const [check, setCheck] = useState<boolean>(false);
  // const [selectedItemId, setSelectedItemId] = useState<boolean>(false);

  // const checkToothButtonDisable = (tooth: number): boolean =>
  //   !selectedImplants.hasOwnProperty(`${productId}-${optionId}-${tooth}`) &&
  //   Object.keys(selectedImplants).some(
  //     (implant) => implant.endsWith(`-${tooth}`) && selectedImplants[implant]
  //   );

  // const getToothButtonColor = (tooth: number) =>
  //   selectedImplants?.[`${productId}-${optionId}-${tooth}`]
  //     ? 'primary'
  //     : 'white';

  // const handleCheckBox = () => {
  //   setCheck(!check);
  //   setSelectedItemId(!selectedItemId);
  // };

  // console.log({ selectedTeeth });

  const [activeOption, setActiveOption] = useState<number>(0);

  const setActiveTeeth = (selectedTeeth: number) => {
    selectedTeeth !== activeOption
      ? setActiveOption(selectedTeeth)
      : setActiveOption(0);
  };

  // --rs-color-foreground-primary
  // cx
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
          <Icon svg={TreatmentOptionIcon} size={5} />
          <Text variant='body-3' weight='medium'>
            {selectedTeeth}
          </Text>
        </View>
      </MenuItem>
    </Card>
  );
};

export default ImplantProductOption;
