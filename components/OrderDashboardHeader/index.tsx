'use client';

import { UserButton } from '@clerk/nextjs';
import { Actionable, Image, View } from 'reshaped';

export default function OrderDashboardHeader() {
  return (
    <View>
      <View
        direction='row'
        align='center'
        padding={4}
        borderColor='neutral-faded'
        className='!justify-between items-center border-b-0 bg-[var(--rs-color-background-neutral-faded)]'
      >
        <Image src='/decheaLogo.svg' alt='Dechea' height={'24px'} />
        <View>
          <Actionable>
            <UserButton />
          </Actionable>
        </View>
      </View>
    </View>
  );
}
