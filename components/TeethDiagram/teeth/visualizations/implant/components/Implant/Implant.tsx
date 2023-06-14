import React from 'react';
import { View } from 'reshaped';
import cx from 'classnames';
import { ImplantProps } from '../../interfaces/props';
import { toothId } from '../../../../constants/toothArea';
import { useTeethDiagramStore } from '../../../../../../../zustand/teethDiagram';

const Implant = ({ customStyles, tooth }: ImplantProps) => {
  const { onClick } = useTeethDiagramStore((state) => state);

  const id = toothId[tooth as keyof typeof toothId];

  return (
    <View width='100%' className={cx('-bottom-[10.71%]', customStyles)}>
      <svg
        width='100%'
        viewBox='0 0 18 45'
        xmlns='http://www.w3.org/2000/svg'
        id={id}
        data-styleid='implant-visualization'
      >
        <path
          d='M0 43C0 43.5523 0.447715 44 1 44H17C17.5523 44 18 43.5523 18 43V42C18 41.4477 17.5523 41 17 41H1C0.447716 41 0 41.4477 0 42V43Z'
          style={{ stroke: 'initial' }}
          onClick={onClick}
        />
        <path
          d='M2 36.9995H16V40.9995H2V36.9995Z'
          onClick={onClick}
          style={{ stroke: 'initial' }}
        />
        <path
          d='M3 8.4797C3 7.52485 3.34157 6.6015 3.96297 5.87653L7.48149 1.7716C8.27968 0.840375 9.72032 0.840376 10.5185 1.7716L14.037 5.87653C14.6584 6.6015 15 7.52485 15 8.4797V37H3V8.4797Z'
          onClick={onClick}
          style={{ stroke: 'initial' }}
        />
        <g id={id}>
          <path
            d='M15 9.5V8.5L3 10.5V11.5L15 9.5Z'
            onClick={onClick}
            style={{ fill: 'white', stroke: 'initial' }}
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15 8.5V9.5L3 11.5V10.5L15 8.5ZM15 11.5V12.5L3 14.5V13.5L15 11.5ZM15 15.5V14.5L3 16.5V17.5L15 15.5ZM15 17.5V18.5L3 20.5V19.5L15 17.5ZM15 21.5V20.5L3 22.5V23.5L15 21.5ZM15 23.5V24.5L3 26.5V25.5L15 23.5Z'
            onClick={onClick}
            style={{ fill: 'white', stroke: 'initial' }}
          />
        </g>
      </svg>
    </View>
  );
};

export default Implant;
