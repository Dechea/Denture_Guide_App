import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root27Left({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='54.84%'
      aspectRatio={17 / 44}
      position='absolute'
      className={cx('left-[3.226%] -bottom-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['27']}
      >
        <path
          d='M16.4818 39.2157L14.9305 39.9606C10.4345 42.1198 5.53781 43.3217 0.552293 43.4911C0.696988 42.7559 1.00469 41.5463 1.37073 40.1074C1.57584 39.3011 1.79926 38.4228 2.02258 37.5156C2.6951 34.7837 3.36346 31.7997 3.44043 29.9588C3.58983 26.3857 3.56869 22.4569 3.52168 18.7699C3.5114 17.9639 3.49989 17.1698 3.48865 16.3935C3.44835 13.6122 3.41138 11.0601 3.446 9.00726C3.48364 6.77517 3.851 4.88033 4.38405 3.45024C4.9252 1.99843 5.60795 1.10081 6.21839 0.751327C6.53052 0.572633 6.84139 0.487291 7.13778 0.501539C7.42835 0.515507 7.7429 0.626686 8.06955 0.905642C8.74472 1.48224 9.45989 2.76968 9.95781 5.25809C10.0443 5.69024 10.3719 7.81683 10.8295 10.7863C11.4649 14.91 12.3507 20.6592 13.1889 25.7532C13.7254 29.0137 14.4751 31.8459 15.1304 34.1509C15.2718 34.6483 15.4078 35.1182 15.5359 35.5607C15.9859 37.1149 16.3382 38.3319 16.4818 39.2157Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root27Left);
