import cx from 'classnames';
import { View } from 'reshaped';
import { RootProps } from '../../../interfaces/props';
import { withEnable } from '../../../../../hoc/withEnable';
import { toothId } from '../../../../../constants/toothArea';

import { useTeethDiagramStore } from '../../../../../../../../zustand/teethDiagram';

function Root38Right({ children, customStyles }: RootProps) {
  const { onClick } = useTeethDiagramStore((state) => state);

  return (
    <View
      width='54.84%'
      aspectRatio={17 / 39}
      position='absolute'
      className={cx('right-[3.225%] -top-[11.54%]', customStyles)}
    >
      <svg
        width='100%'
        viewBox='0 0 17 39'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        id={toothId['38']}
      >
        <path
          d='M0.512444 4.301L3.69721 3.0817C7.77878 1.51904 12.0941 0.649105 16.4635 0.507484C16.3626 1.1619 16.167 2.20158 15.9362 3.42791C15.795 4.17876 15.6405 4.99959 15.4866 5.8448C15.0493 8.24588 14.6173 10.8389 14.5418 12.4394C14.3921 15.6102 14.4134 19.0956 14.4604 22.3639C14.4707 23.0791 14.4822 23.7835 14.4935 24.4719C14.5338 26.9368 14.5707 29.1964 14.5361 31.0139C14.4987 32.9805 14.1334 34.6471 13.6052 35.9026C13.0701 37.1746 12.3953 37.9629 11.7846 38.2727C11.1695 38.5847 10.5125 38.6087 9.88714 38.1355C9.22088 37.6314 8.51327 36.5072 8.01842 34.316C7.97676 34.1316 7.84945 33.6381 7.66071 32.9064C6.86008 29.8028 4.95404 22.4142 3.79131 16.153C3.26456 13.3165 2.53293 10.8458 1.88672 8.82449C1.72946 8.33261 1.57862 7.87101 1.43755 7.43931C1.00505 6.11582 0.664402 5.07339 0.512444 4.301Z'
          onClick={onClick}
        />
      </svg>

      {children}
    </View>
  );
}

export default withEnable(Root38Right);
