'use client';

import { UserButton } from '@clerk/nextjs';
import { Actionable, Image, View } from 'reshaped';

export default function OrderDashboardHeader() {
  return (
    <View
      direction='row'
      align='center'
      padding={4}
      borderColor='neutral-faded'
      className='!justify-between border-t-0 border-l-0 border-r-0 items-center bg-[var(--rs-color-background-neutral-faded)]'
    >
      <Image src='/decheaLogo.svg' alt='Dechea' height={'24px'} />
      <View>
        <Actionable>
          <UserButton />
        </Actionable>
      </View>
    </View>
  );
}
