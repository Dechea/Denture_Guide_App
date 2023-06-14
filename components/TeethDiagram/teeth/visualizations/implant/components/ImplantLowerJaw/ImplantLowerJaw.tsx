import { View } from 'reshaped';
import { Implant } from '../Implant';
import { ImplantProps } from '../../interfaces/props';

const ImplantLowerJaw = ({ tooth, customStyles }: ImplantProps) => {
  return (
    <View
      width='26.470588235%'
      height='60.975609756%'
      align='center'
      insetBottom={0}
      position='absolute'
      justify='start'
      className={customStyles}
    >
      <Implant tooth={tooth} customStyles='rotate-180 -top-[2.222222%]' />
    </View>
  );
};

export default ImplantLowerJaw;
