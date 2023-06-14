import { View } from 'reshaped';
import { Implant } from '../Implant';
import { ImplantProps } from '../../interfaces/props';

const ImplantUpperJaw = ({ tooth, customStyles }: ImplantProps) => {
  return (
    <View
      width='26.470588235%'
      height='60.975609756%'
      align='center'
      insetTop={0}
      position='absolute'
      justify='end'
      className={customStyles}
    >
      <Implant
        tooth={tooth}
        customStyles='-bottom-[2.222222%]'
      />
    </View>
  );
};

export default ImplantUpperJaw;
