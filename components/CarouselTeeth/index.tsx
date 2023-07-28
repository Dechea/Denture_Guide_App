'use client';

import { Carousel, View } from 'reshaped';
import { CarouselGroupTabs } from '../CarouselGroupTabs';

export default function CarouselTeeth() {
  return (
    <View
      width='100%'
      position='sticky'
      insetTop={11}
      zIndex={50}
      backgroundColor='page-faded'
      direction='row'
      justify='center'
      align='end'
      borderColor='neutral-faded'
      wrap={false}
      paddingBlock={4}
      height='146px'
    >
      <Carousel
        gap={2}
        className='flex justify-center items-center w-[calc(100%-20px)] h-full'
      >
        <CarouselGroupTabs />
      </Carousel>
    </View>
  );
}
