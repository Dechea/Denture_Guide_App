'use client';

import { View, Image, Avatar, Actionable, Divider } from 'reshaped';

const NAVBAR_WIDTH = 64;

export default function Navbar(): JSX.Element {
  return (
    <View
      direction='row'
      width={{ s: `${NAVBAR_WIDTH}px` }}
      height='100%'
      className='print:!hidden'
    >
      <View
        direction='column'
        height='100%'
        align='center'
        padding={4}
        position='fixed'
      >
        <View.Item grow>
          <View direction='column' justify='start' height='100%'>
            <Actionable href='/'>
              <Image src='/decheaLogo.svg' alt='Dechea' width='100%' />
            </Actionable>
          </View>
        </View.Item>

        <View.Item grow>
          <View direction='column' justify='end' height='100%'>
            <Actionable>
              <Avatar src='/defaultAvatar.svg' size={8} />
            </Actionable>
          </View>
        </View.Item>
      </View>

      <View
        position='fixed'
        height='100%'
        attributes={{ style: { left: `${NAVBAR_WIDTH - 1}px` } }}
      >
        <Divider vertical />
      </View>
    </View>
  );
}
