import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root17Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='54.84%'
      aspectRatio={17 / 44}
      position='absolute'
      className={cx('right-[3.226%] -bottom-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['17']}
      >
        <path
          d='M0.518221 39.2157L2.06947 39.9606C6.56546 42.1198 11.4622 43.3217 16.4477 43.4911C16.303 42.7559 15.9953 41.5463 15.6293 40.1074C15.4242 39.3011 15.2007 38.4228 14.9774 37.5156C14.3049 34.7837 13.6365 31.7997 13.5596 29.9588C13.4102 26.3857 13.4313 22.4569 13.4783 18.7699C13.4886 17.9639 13.5001 17.1698 13.5114 16.3935C13.5516 13.6122 13.5886 11.0601 13.554 9.00726C13.5164 6.77517 13.149 4.88033 12.6159 3.45024C12.0748 1.99843 11.3921 1.10081 10.7816 0.751327C10.4695 0.572633 10.1586 0.487291 9.86222 0.501539C9.57165 0.515507 9.2571 0.626686 8.93045 0.905642C8.25528 1.48224 7.54011 2.76968 7.04219 5.25809C6.95572 5.69024 6.62805 7.81683 6.17051 10.7863C5.53512 14.91 4.64927 20.6592 3.81112 25.7532C3.27465 29.0137 2.52494 31.8459 1.86963 34.1509C1.72824 34.6483 1.5922 35.1182 1.46407 35.5607C1.01413 37.1149 0.661806 38.3319 0.518221 39.2157Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root17Right);
