import { useState } from 'react';
import { Icon, Text, View, MenuItem } from 'reshaped';
import { implantProductOptionProps } from '../../interfaces/implant';
import TreatmentOptionIcon from '../Icons/TreatmentOption';

const ImplantProductOption = ({ selectedTeeth }: implantProductOptionProps) => {
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

  const [activeOption, setActiveOption] = useState<number>();

  const setActiveTeeth = (selectedTeeth: number) => {
    selectedTeeth !== activeOption
      ? setActiveOption(selectedTeeth)
      : setActiveOption(-1);
  };

  return (
    <View backgroundColor={selectedTeeth === activeOption ? 'primary' : 'page'}>
      <MenuItem size={'small'} onClick={() => setActiveTeeth(selectedTeeth)}>
        <View
          direction='row'
          align='center'
          gap={1}
          width='100%'
          paddingStart={2}
          paddingBlock={2}
        >
          <Icon svg={TreatmentOptionIcon} size={4} />
          <Text variant='body-3' weight='medium'>
            {' '}
            {selectedTeeth}
          </Text>
        </View>
      </MenuItem>
    </View>
  );
};

export default ImplantProductOption;
