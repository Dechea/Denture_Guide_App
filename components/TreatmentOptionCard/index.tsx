'use client';

import { useEffect, useRef } from 'react';
import { Badge, Card, Hidden, Text, View } from 'reshaped';

interface TreatmentOptionCardProps {
  Icon: JSX.Element;
  shortcutButtonText: string;
  onClick: () => void;
  label: string;
}

export default function TreatmentOptionCard({
  Icon,
  shortcutButtonText,
  onClick,
  label,
}: TreatmentOptionCardProps) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef) {
      // @ts-expect-error
      cardRef.current.tabIndex = -1;
    }
  }, [cardRef]);

  return (
    <View justify='center' align='center'>
      <View
        height={{ s: '59px', m: '85px', l: '111px' }}
        width={{ s: '59px', m: '85px', l: '111px' }}
      >
        <Card ref={cardRef} onClick={onClick} padding={0} className='!h-[100%]'>
          <View width={'100%'} height='100%'>
            <View position='absolute' insetEnd={2} insetTop={2}>
              <Hidden hide={{ s: true, m: false }}>
                {/*@ts-expect-error*/}
                <Badge size='medium' variant='outline'>
                  {shortcutButtonText}
                </Badge>
              </Hidden>
            </View>

            <View width='100%' height='100%' justify='center' align='center'>
              {Icon}
            </View>
          </View>
        </Card>
      </View>

      <View width={{ s: '59px', m: '85px', l: '111px' }} textAlign='center'>
        <Text>{label}</Text>
      </View>
    </View>
  );
}
