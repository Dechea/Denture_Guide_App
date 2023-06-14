import { View } from 'reshaped';
import { CrownSideViewProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';

function CrownSideView0({ children, customStyles }: CrownSideViewProps) {
  return (
    <View width='36.76%' aspectRatio={25 / 32} className={customStyles}>
      <svg
        width='100%'
        viewBox='0 0 25 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M1 27.2545V11.9407C1 9.17349 1.38809 6.42033 2.15258 3.76396C2.58923 2.24672 3.87194 1.14331 5.41027 0.94963L5.87884 0.890635C10.234 0.342295 14.6411 0.371356 18.9889 0.977085L19.5614 1.05684C20.8199 1.23218 21.8869 2.09311 22.3368 3.30565C23.4365 6.26953 24 9.41038 24 12.5773V27.5357C24 28.4118 23.7143 29.2625 23.1884 29.9555C22.4483 30.9307 21.3054 31.5 20.0962 31.5H5.18121C3.98691 31.5 2.8481 30.9813 2.05373 30.0723C1.37541 29.2961 1 28.2938 1 27.2545Z' />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(CrownSideView0);
