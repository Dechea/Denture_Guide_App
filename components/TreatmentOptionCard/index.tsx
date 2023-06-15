'use client';

import { useEffect, useRef } from 'react';
import { Badge, Card, Text, View } from 'reshaped';

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
      <View height='111px' width='111px'>
        <Card ref={cardRef} onClick={onClick} padding={0} className='!h-[100%]'>
          <View width={'100%'} height='100%'>
            <View position='absolute' insetEnd={2} insetTop={2}>
              {/* @ts-expect-error */}
              <Badge size='medium' variant='outline'>
                {shortcutButtonText}
              </Badge>
            </View>

            <View width='100%' height='100%' justify='center' align='center'>
              {Icon}
            </View>
          </View>
        </Card>
      </View>

      <View padding={2} maxWidth='111px' textAlign='center'>
        <Text>{label}</Text>
      </View>
    </View>
  );
}
