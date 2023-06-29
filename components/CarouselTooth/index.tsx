'use client';

import { View, Icon } from 'reshaped';
import {
  Tooth,
  ToothContainer,
  ToothNumber,
} from '../TeethDiagram/teeth/areas/tooth';
import Root from '../TeethDiagram/teeth/areas/root';
import Crown from '../TeethDiagram/teeth/areas/crown-side-view';
import { JawType } from '../TeethDiagram/teeth/areas/tooth/interfaces/props';
import TickIcon from '../Icons/Tick';
import { useTeethDiagramStore } from '../../zustand/teethDiagram';
import { useProductStore } from '../../zustand/product';

interface CarouselToothProps {
  toothNumber: number;
}

const styles = {
  activeTooth: '[&_svg>*]:!pointer-events-none [&_svg]:opacity-30 ',
  inactiveTooth: '[&_svg>*]:!pointer-events-none ',
};

export const CarouselTooth = ({ toothNumber }: CarouselToothProps) => {
  const { treatments } = useTeethDiagramStore((state) => state);
  const { selectedProducts } = useProductStore((state) => state);

  const toothData = treatments[toothNumber as keyof typeof treatments] || {};
  const selected = !!selectedProducts[toothNumber];

  return (
    <View height={30} width={15} aspectRatio={60 / 120}>
      <ToothContainer customStyles='!w-full pointer-events-none'>
        <Tooth
          variant={toothData?.toothVariant}
          tooth={toothNumber}
          className={selected ? styles.activeTooth : styles.inactiveTooth}
        >
          <Root tooth={toothNumber} variant={toothData.rootVariant} />
          <Crown
            tooth={toothNumber}
            variant={toothData.crownVariant}
            leftAnchor={toothData.leftAnchor}
            rightAnchor={toothData.rightAnchor}
          />
          {selected && (
            <View
              position='absolute'
              width='100%'
              height='100%'
              direction='row'
              insetTop={3}
              align='center'
              justify='center'
              className='[&_svg]:!opacity-100 [&_svg>*]:!stroke-[--rs-color-background-page] [&_svg>*]:!fill-[--rs-color-background-primary]'
            >
              <Icon svg={TickIcon} size={6} />
            </View>
          )}
        </Tooth>

        <ToothNumber tooth={toothNumber} jawType={JawType.UPPER} />
      </ToothContainer>
    </View>
  );
};
