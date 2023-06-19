import { Icon, Text, View } from 'reshaped';
import EmailIcon from '../../../../components/Icons/Email';
import PhoneIcon from '../../../../components/Icons/Phone';

export default function HelpFooter() {
  return (
    <View paddingTop={24} paddingBottom={78} gap={12}>
      <View align='center' gap={1}>
        <Text variant='body-1' weight='regular' color='neutral'>
          Need Help? Contact with us!
        </Text>
        <Text variant='body-3' weight='regular' color='neutral-faded'>
          We are online everyday 09:00 — 18:00
        </Text>
      </View>

      <View direction='row' justify='center' height='48px' gap={16}>
        <View
          direction='row'
          align='center'
          justify='center'
          height='100%'
          gap={2}
        >
          <View
            direction='column'
            justify='center'
            height='100%'
            backgroundColor='neutral-faded'
            width='48px'
            borderRadius='medium'
          >
            <Icon svg={EmailIcon} size={5} />
          </View>

          <View direction='column'>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              Email
            </Text>
            <Text variant='body-3' weight='regular' color='neutral'>
              support@camlog.de
            </Text>
          </View>
        </View>

        <View
          direction='row'
          align='center'
          justify='center'
          height='100%'
          gap={2}
        >
          <View
            direction='column'
            justify='center'
            height='100%'
            backgroundColor='neutral-faded'
            width='48px'
            borderRadius='medium'
          >
            <Icon svg={PhoneIcon} size={5} />
          </View>

          <View direction='column'>
            <Text variant='body-3' weight='regular' color='neutral-faded'>
              Phone number
            </Text>
            <Text variant='body-3' weight='regular' color='neutral'>
              +4 495 443 1
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
