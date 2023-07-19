'use client';

import { useQuery } from 'fqlx-client';
import { View, Carousel } from 'reshaped';
import { useProductStore } from '../../zustand/product';
import { CarouselTooth } from '../CarouselTooth';
import { Query } from '../../fqlx-generated/typedefs';

interface CarouselTeethProps {
  patientFileId: string;
}

export default function CarouselTeeth({ patientFileId }: CarouselTeethProps) {
  const query = useQuery<Query>();
  const { availableTeethByProductType } = useProductStore();

  const patientFile = query.PatientFile.byId(patientFileId)
    .project({ teeth: true })
    .exec();

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
        {availableTeethByProductType.map((toothNumber) => {
          const tooth = patientFile.teeth.find(
            ({ name }) => Number(name) === toothNumber
          );
          return (
            <CarouselTooth
              toothNumber={toothNumber}
              key={toothNumber}
              tooth={tooth}
            />
          );
        })}
      </Carousel>
    </View>
  );
}
