'use client';

import { Accordion, Badge, Button, Image, Text, View, Icon } from 'reshaped';
import AddIcon from '../Icons/Add';
import IndeterminateIcon from '../Icons/Indeterminate';
import { cartListData } from '../../__mocks__/cart';
import FlaskIcon from '../Icons/Flask';
import { Tooth11Composed } from '../TeethDiagram/teeth/composed-tooth';

const CartItemsList = () => {
  return (
    <View gap={12}>
      {cartListData.map((data) => (
        <View key={data.id}>
          <Accordion defaultActive={true}>
            <View gap={12}>
              <Accordion.Trigger>
                <View direction='row' gap={10} align='center' height='102px'>
                  <Tooth11Composed customStyles='!w-[4.19%] !aspect-[53/102]' />
                  <View>
                    <Text variant='body-3' weight='bold'>
                      {data.title}
                    </Text>

                    <Text color='neutral-faded' variant='body-1'>
                      {data.description}
                    </Text>
                  </View>
                </View>
              </Accordion.Trigger>

              <Accordion.Content>
                <View
                  align='center'
                  paddingStart={32}
                  width='100%'
                  divided
                  gap={6}
                >
                  {data.options.map((option) => (
                    <View
                      width={'100%'}
                      direction='row'
                      key={option.id}
                      gap={6}
                    >
                      <Image
                        src={option.image}
                        width='88px'
                        height='88px'
                        alt={option.title}
                      />

                      <View.Item grow>
                        <View gap={4}>
                          <View.Item>
                            <Text variant='body-3' weight='bold'>
                              {option.title}
                            </Text>
                            <Text>{option.description}</Text>
                          </View.Item>

                          <View width='100%' direction='row' align='center'>
                            {!!option.cartCount && (
                              <View direction='row' gap={2}>
                                <Button
                                  size='small'
                                  color='white'
                                  variant='outline'
                                  icon={<IndeterminateIcon />}
                                  rounded
                                />

                                <Text variant={'body-1'}>
                                  {option.cartCount}
                                </Text>

                                <Button
                                  size='small'
                                  color='white'
                                  variant='outline'
                                  icon={<AddIcon />}
                                  rounded
                                />
                              </View>
                            )}

                            {!option.selected && (
                              <View direction='row' gap={2} align='center'>
                                <Icon svg={<FlaskIcon />} />
                                <Text
                                  color='neutral-faded'
                                  variant='body-3'
                                  weight='medium'
                                >
                                  Shared with Kempten Laboratory
                                </Text>
                              </View>
                            )}

                            <View.Item grow>
                              {!!option.localStorageCount && (
                                <View
                                  direction='row'
                                  align='center'
                                  justify='end'
                                  gap={2}
                                >
                                  <Badge>{`${option.localStorageCount} Item in Local Storage`}</Badge>
                                  <Text
                                    variant='body-2'
                                    weight='medium'
                                    color='primary'
                                  >
                                    {option.price}
                                  </Text>
                                </View>
                              )}

                              {!option.selected && (
                                <View
                                  direction='row'
                                  align='center'
                                  justify='end'
                                  gap={2}
                                >
                                  <Text
                                    color='disabled'
                                    variant='body-2'
                                    weight='medium'
                                  >
                                    Not Selected
                                  </Text>
                                </View>
                              )}
                            </View.Item>
                          </View>
                        </View>
                      </View.Item>
                    </View>
                  ))}
                </View>
              </Accordion.Content>
            </View>
          </Accordion>
        </View>
      ))}
    </View>
  );
};

export default CartItemsList;
