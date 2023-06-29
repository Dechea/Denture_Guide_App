'use client';

import { View, Carousel } from 'reshaped';
import { useProductStore } from '../../zustand/product';
import { CarouselTooth } from '../CarouselTooth';

export default function CarouselTeeth() {
  const { availableTeethByProductType } = useProductStore();

  return (
    <View
      width='100%'
      position='sticky'
      insetTop={11}
      zIndex={50}
      backgroundColor='neutral-faded'
      direction='row'
      justify='center'
      align='end'
      borderColor='neutral-faded'
      wrap={false}
      padding={3}
      height='136px'
    >
      <Carousel
        gap={2}
        className='flex justify-center items-center w-[calc(100%-20px)] h-full'
      >
        {availableTeethByProductType.map((tooth) => (
          <CarouselTooth toothNumber={tooth} key={tooth} />
        ))}
      </Carousel>
    </View>
  );
}
