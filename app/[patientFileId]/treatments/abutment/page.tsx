'use client';
import { useEffect } from 'react';

import { Tabs, View, Text, Card, useToast, Button } from 'reshaped';
import AbutmentList from '../../../../components/AbutmentList';
import SelectTeeth from '../../../../components/SelectedTeeth';
import AbutmentForm from '../../../../components/AbutmentForm';
import ShareButton from '../../../../components/ShareButton';
import { abutmentProductList } from '../../../../__mocks__/abutment';
import InfoIcon from '../../../../components/Icons/Info';
import { useProductStore } from '../../../../zustand/product';

export default function Abutment({
  params,
}: {
  params: { patientFileId: string };
}) {
  const toast = useToast();

  const { setAbutment, product } = useProductStore((state) => state);

  useEffect(() => {
    setAbutment({
      implantLine: 'BioHorizons Tapered',
      abutmentLine: 'Simple Solutions',
      guided: true,
      platformSwitch: true,
      retention: '1266',
      material: 'TITANIUM',
      sterile: true,
      connectionType: 'INTERNAL',
      prostheticHeight: 1268,
      maxTorque: 1269,
      angle: 1270,
      diameterPlatform: 3.5,
      gingivaHeight: 0.8,
      indication: '1271',
      singleUse: true,
    });

    console.log('abutment updated');
  }, []);

  console.log('product from abutment tab', product);

  const onRenderToast = () => {
    const id = toast.show({
      color: 'primary',
      title: "You'll know the payment amounts for you and the patient.",
      icon: <InfoIcon />,
      position: 'top-end',
      size: 'small',
      timeout: 'long',
      actionsSlot: (
        <Button size='small' onClick={() => toast.hide(id)}>
          Got it
        </Button>
      ),
    });
  };

  useEffect(() => {
    onRenderToast();
  }, []);

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/abutment`}>
      <SelectTeeth />

      <View paddingBlock={0} paddingInline={8}>
        <View.Item>
          <View direction='row' align='center' paddingTop={6}>
            <View.Item grow>
              <Text variant='body-3' color='neutral-faded'>
                3 Results
              </Text>
            </View.Item>
            <ShareButton />
          </View>
        </View.Item>

        <View direction='row' paddingBlock={8} paddingInline={0} gap={23}>
          <View.Item columns={3}>
            <AbutmentForm />
          </View.Item>
          <View.Item columns={9}>
            <Card padding={0}>
              <View divided>
                {abutmentProductList.map((data) => (
                  <AbutmentList
                    key={data.id}
                    id={data.id}
                    heading={data.heading}
                    description={data.description}
                    price={data.price}
                    image={data.image}
                    options={data.options}
                    patientFileId={params.patientFileId}
                  />
                ))}
              </View>
            </Card>
          </View.Item>
        </View>
      </View>
    </Tabs.Panel>
  );
}
