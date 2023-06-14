import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root23({ children, customStyles }: RootProps) {
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
          id={toothId[23]}
        >
          <path
            d='M17.812 53.6817L17.948 53.705C17.856 53.2452 17.699 52.6629 17.5005 51.9782C17.4011 51.6353 17.2903 51.2635 17.1739 50.8729C17.0097 50.3218 16.8344 49.7332 16.6639 49.1351C16.0773 47.0765 15.4968 44.7321 15.4185 42.648C15.339 40.5326 15.268 38.2493 15.1941 35.8772C14.9836 29.116 14.7507 21.6331 14.2372 15.2586C13.8901 10.9512 13.417 7.18079 12.7445 4.49635C12.4072 3.15011 12.0283 2.11314 11.6115 1.42373C11.1868 0.721332 10.8011 0.500021 10.4784 0.5C9.96884 0.499967 9.46516 0.770931 8.95827 1.42012C8.44736 2.07445 7.97839 3.06049 7.55516 4.35085C6.71032 6.92667 6.09311 10.5698 5.6191 14.7974C4.92638 20.9755 4.54709 28.3202 4.18855 35.2629C4.05663 37.8176 3.92752 40.3178 3.78663 42.6854C3.66551 44.721 3.05517 47.0907 2.43962 49.2593C2.3085 49.7213 2.1776 50.1728 2.05078 50.6103C1.62245 52.0877 1.2407 53.4046 1.05458 54.4189C6.5219 52.9807 12.2363 52.7287 17.812 53.6817Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root23);
