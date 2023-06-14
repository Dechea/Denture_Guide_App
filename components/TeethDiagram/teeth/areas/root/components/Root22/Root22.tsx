import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../interfaces/props';
import { withEnable } from '../../../../hoc/withEnable';
import { toothId } from '../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

function Root22({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View width='27.94%' insetBottom={0} height='100%' className={customStyles}>
      <View
        width='100%'
        position='absolute'
        aspectRatio={19 / 38}
        className={cx('-bottom-[10.71%]', customStyles)}
      >
        <svg
          width='100%'
          viewBox='0 0 19 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id={toothId[22]}
        >
          <path
            d='M17.5 36.9255L17.9772 36.9815C17.8817 36.4514 17.7216 35.7781 17.535 34.9931C17.4172 34.4973 17.2888 33.957 17.1594 33.3802C16.8124 31.8341 16.4699 30.0694 16.3592 28.3635C16.2928 27.3416 16.2282 26.2773 16.1619 25.1863C15.8571 20.1691 15.5181 14.5867 14.8215 9.96264C14.3971 7.14487 13.8454 4.72521 13.1068 3.02165C12.3505 1.2769 11.4988 0.500037 10.5794 0.5C9.31892 0.49995 8.26575 1.32137 7.36447 2.96186C6.46422 4.60048 5.78509 6.9427 5.25131 9.71173C4.42879 13.9786 3.97139 19.1385 3.53437 24.0684C3.40442 25.5344 3.27627 26.9801 3.14085 28.3759C2.97911 30.0431 2.54711 31.8253 2.10724 33.4501C1.97473 33.9395 1.84233 34.4121 1.71594 34.8632C1.43907 35.8515 1.19102 36.7369 1.03378 37.4715C6.46324 36.466 12.0146 36.2818 17.5 36.9255Z'
            onClick={onClick}
          />
        </svg>
      </View>

      {children}
    </View>
  );
}

export default withEnable(Root22);
