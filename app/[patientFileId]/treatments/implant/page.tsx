'use client';

import { useEffect, useState } from 'react';
import { Card, Tabs, Text, View } from 'reshaped';
import { useRouter } from 'next/navigation';
import { ImplantList } from '../../../../components/ImplantList';
import { ImplantForm } from '../../../../components/ImplantForm';
import SelectTeeth from '../../../../components/SelectedTeeth';
import { implantProductList } from '../../../../__mocks__/implant';
import AlertCard from '../../../../components/Alert';
import { useProductStore } from '../../../../store/productStore';

export default function Implant({
  params,
}: {
  params: { patientFileId: string };
}) {
  const [selectedImplants, setImplants] = useState<{
    [key: string]: boolean;
  }>({});
  const router = useRouter();
  const selectedTeeth = [14, 22];

  const { setImplant, product } = useProductStore((state) => state);

  useEffect(() => {
    setImplant({
      implantLine: 'BioHorizons Tapered',
      material: 'TITANIUM',
      level: '',
      engaging: false,
      platformSwitch: true,
      guided: true,
      insertionPost: '',
      sterile: true,
      length: 9,
      lengthNeck: 4,
      diameterPlatform: 3,
      singleUse: true,
    });

    console.log('implant updated');
  }, []);

  console.log('product from implant tab', product);

  useEffect(() => {
    if (Object.keys(selectedImplants).length === selectedTeeth.length) {
      router.push(`/${params.patientFileId}/treatments/abutment`);
    }
  }, [selectedImplants, selectedTeeth.length]);

  const onSelectImplant = (
    productId: number,
    optionId: number,
    teethNumber: number
  ) => {
    if (selectedImplants[`${productId}-${optionId}-${teethNumber}`]) {
      const selectedImplantsClone = { ...selectedImplants };
      delete selectedImplantsClone[`${productId}-${optionId}-${teethNumber}`];
      setImplants(selectedImplantsClone);
      return;
    }

    setImplants({
      ...selectedImplants,
      [`${productId}-${optionId}-${teethNumber}`]: true,
    });
  };

  return (
    <Tabs.Panel value={`/${params.patientFileId}/treatments/implant`}>
      <SelectTeeth />

      <View paddingBlock={0} paddingInline={8}>
        {/* <View.Item>
          <View paddingTop={6} justify='center'>
            <Text variant='body-2'>25 Results</Text>
          </View>
        </View.Item> */}

        <View direction='row' gap={23} paddingTop={6}>
          <View.Item columns={3}>
            <View justify='center'>
              <Text variant='body-3' color='neutral-faded'>
                25 Results
              </Text>
            </View>
            <ImplantForm />
          </View.Item>

          <View.Item columns={9}>
            <View paddingBottom={6}>
              <AlertCard />
            </View>
            <Card padding={0}>
              <View divided>
                {implantProductList.map((implantProductListData) => (
                  <ImplantList
                    key={implantProductListData.id}
                    id={implantProductListData.id}
                    options={implantProductListData.options}
                    description={implantProductListData.description}
                    heading={implantProductListData.heading}
                    image={implantProductListData.image}
                    price={implantProductListData.price}
                    onSelectImplant={onSelectImplant}
                    selectedTeeth={selectedTeeth}
                    selectedImplants={selectedImplants}
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
