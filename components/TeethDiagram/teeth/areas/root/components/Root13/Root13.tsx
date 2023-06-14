import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root13({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='29.41%' insetBottom={0} height='100%' className={customStyles}>
      <View
        width='95%'
        position='absolute'
        aspectRatio={19 / 55}
        className={cx('left-[2.5%] -bottom-[11.54%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 19 55'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId[13]}
        >
          <path
            d='M1.18803 53.6817L1.05196 53.705C1.14401 53.2452 1.30102 52.6629 1.4995 51.9782C1.5989 51.6353 1.70966 51.2636 1.82604 50.8729C1.99023 50.3219 2.16561 49.7332 2.33605 49.1351C2.92272 47.0765 3.50321 44.7321 3.5815 42.648C3.66096 40.5326 3.73204 38.2493 3.80588 35.8772C4.01636 29.116 4.24931 21.6331 4.76285 15.2586C5.10986 10.9512 5.58296 7.18079 6.25548 4.49635C6.59275 3.15011 6.97166 2.11314 7.38849 1.42373C7.81316 0.721332 8.19895 0.500021 8.52162 0.5C9.03116 0.499967 9.53484 0.770931 10.0417 1.42012C10.5526 2.07445 11.0216 3.06049 11.4448 4.35085C12.2897 6.92667 12.9069 10.5698 13.3809 14.7974C14.0736 20.9755 14.4529 28.3202 14.8114 35.2629C14.9434 37.8176 15.0725 40.3178 15.2134 42.6854C15.3345 44.721 15.9448 47.0907 16.5604 49.2593C16.6915 49.7213 16.8224 50.1728 16.9492 50.6103C17.3776 52.0877 17.7593 53.4046 17.9454 54.4189C12.4781 52.9807 6.76366 52.7287 1.18803 53.6817Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root13);
