import { Actionable, Image, Popover, Text, View } from 'reshaped';

export default function TreatmentTabsPopover({
  activeTab,
  activePopup,
  description,
  tabText,
  resetPopup,
}: {
  activeTab: boolean;
  activePopup: boolean;
  description: string;
  tabText: string;
  resetPopup: () => void;
}) {
  if (activePopup) {
    setTimeout(() => {
      resetPopup();
    }, 3000);
  }

  return (
    <Popover active={activePopup} padding={0} width='auto'>
      <Popover.Trigger>
        {(attributes) => (
          <Actionable attributes={attributes}>
            <Text color={activeTab ? 'neutral' : 'disabled'}>{tabText}</Text>
          </Actionable>
        )}
      </Popover.Trigger>
      <Popover.Content className='mt-[10px]'>
        <View
          gap={4}
          padding={2}
          paddingEnd={4}
          className='bg-[--rs-color-on-background-neutral] '
          direction='row'
          align='center'
        >
          <Image
            src={'/TreatmentTabsPopover.svg'}
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
