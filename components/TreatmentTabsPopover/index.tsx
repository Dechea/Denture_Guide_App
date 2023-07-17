import { Actionable, Image, Popover, Text, View } from 'reshaped';

interface TreatmentTabsPopoverProps {
  activeTab: boolean;
  title: string;
  description?: string;
  onClosePopover?: () => void;
  activePopup?: boolean;
  image?: string;
}

export default function TreatmentTabsPopover({
  activeTab,
  description,
  title,
  image,
  onClosePopover,
  activePopup = false,
}: TreatmentTabsPopoverProps) {
  if (activePopup) {
    setTimeout(() => {
      if (onClosePopover) {
        onClosePopover();
      }
    }, 5000);
  }

  return (
    <Popover active={activePopup} padding={0} width='auto'>
      <Popover.Trigger>
        {(attributes) => (
          <Actionable attributes={attributes}>
            <Text color={activeTab ? 'neutral' : 'disabled'}>{title}</Text>
          </Actionable>
        )}
      </Popover.Trigger>
      <Popover.Content className='mt-[10px]'>
        <View
          gap={4}
          padding={2}
          paddingEnd={4}
          direction='row'
          align='center'
          backgroundColor='black'
        >
          <Image
            src={image}
            alt={title}
            width='107px'
            height='80px'
            borderRadius='medium'
          />

          <View width='253px'>
            <Text
              variant='body-2'
              weight='regular'
              className='text-[--rs-color-white]'
            >
              {description}
            </Text>
          </View>
        </View>
      </Popover.Content>
    </Popover>
  );
}
