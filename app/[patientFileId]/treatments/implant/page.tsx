'use client';

import { useEffect, useState } from 'react';
import { Button, Card, Icon, Tabs, Text, TextField, View } from 'reshaped';
import { useRouter } from 'next/navigation';
import { ImplantList } from '../../../../components/ImplantList';
import { ImplantForm } from '../../../../components/ImplantForm';
import SelectTeeth from '../../../../components/SelectedTeeth';
import { implantProductList } from '../../../../__mocks__/implant';
import { useProductStore } from '../../../../zustand/product';
import FilterIcon from '../../../../components/Icons/Filter';
import UploadIcon from '../../../../components/Icons/Upload';
import NoImplantFound from './NoImplantFound';
import HelpFooter from './HelpFooter';
import BarCodeIcon from '../../../../components/Icons/Barcode';
import { useQuery } from 'fqlx-client';
import { Query } from '../../../../fqlx-generated/typedefs';

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

  const query = useQuery<Query>();
  const implantProductList = query.Product.all()
    .where((product) => product.implant != null)
    .exec().data;

  useEffect(() => {
    if (Object.keys(selectedImplants).length === selectedTeeth.length) {
      // Use Link here ?
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

      <View paddingInline={16} paddingTop={10}>
        <View direction='row' gap={11}>
          <View.Item columns={3}>
            <View gap={5.5}>
              <View direction='row' align='center' paddingBlock={2.5} gap={1}>
                <Icon svg={FilterIcon} size={4} color='neutral-faded' />
                <Text variant='body-3' color='neutral-faded'>
                  Filters
                </Text>
              </View>

              <TextField
                size='large'
                variant='faded'
                name='email'
                placeholder='Search by code e.g K1043.XXXX '
                startSlot={
                  <Icon svg={BarCodeIcon} color='neutral-faded' size={5} />
                }
              />

              <ImplantForm />
            </View>
          </View.Item>

          <View.Item columns={9}>
            <View direction='row' align='center' paddingBottom={6}>
              <View.Item grow>
                <View direction='row' gap={2} align='end'>
                  <Text variant='featured-3' weight='bold'>
                    Implants
                  </Text>

                  <View direction='row' align='center' paddingTop={1.2}>
                    <Text
                      variant='body-3'
                      weight='regular'
                      color='neutral-faded'
                      align='end'
                    >
                      25
                    </Text>
                  </View>
                </View>
              </View.Item>
              <ShareButton />
            </View>

            <Card padding={0}>
              <View divided>
                {implantProductList.map((implant) => (
                  <ImplantList
                    key={implant.id}
                    implant={implant}
                    options={[
                      {
                        id: 0,
                        selectedTeeth: 14,
                        localStorageCount: 0,
                      },
                      { id: 1, selectedTeeth: 43, localStorageCount: 2 },
                    ]}
                    // id={implantProductListData.id}
                    // options={implantProductListData.options}
                    // description={implantProductListData.description}
                    // heading={implantProductListData.heading}
                    // image={implantProductListData.image}
                    // price={implantProductListData.price}
                    // implantDetails={implantProductListData.implantDetails}
                    // barcode={implantProductListData.barcode}
                    // inStorage={implantProductListData.inStorage}
                    // storageNumber={implantProductListData.storageNumber}
                    // onSelectImplant={onSelectImplant}
                    // selectedTeeth={selectedTeeth}
                    // selectedImplants={selectedImplants}
                  />
                ))}
              </View>
            </Card>

            {/* Nothing was found */}
            <NoImplantFound barcode={'P2211.4012'} />

            {/* Need help */}
            <HelpFooter />
          </View.Item>
        </View>
      </View>
    </Tabs.Panel>
  );
}

const ShareButton = () => {
  return <Button icon={<Icon svg={UploadIcon} size={4} />}>Share</Button>;
};
