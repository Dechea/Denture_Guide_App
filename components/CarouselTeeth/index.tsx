'use client';

import { Actionable, Carousel, Tabs, Tooltip, View } from 'reshaped';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import { CarouselGroupTabs } from '../CarouselGroupTabs';
import { useProductStore } from '../../zustand/product';
import { useEffect } from 'react';

export default function CarouselTeeth() {
  const {
    activeTreatmentGroup,
    setActiveTreatmentGroup,
    activeProductTab,
    availableTeethByProductType,
    selectedProducts,
  } = useProductStore();
  const { toothGroups, getToothGroups, patientFile } = useTreatmentsByGroup();

  useEffect(() => {
    getToothGroups();
  }, [patientFile, activeProductTab, availableTeethByProductType]);

  useEffect(() => {
    if (!activeTreatmentGroup) {
      for (const [index, group] of Object.entries(toothGroups)) {
        if (
          group.open &&
          !group.teeth.every((tooth) => selectedProducts[tooth.toothNumber])
        ) {
          setActiveTreatmentGroup(Number(index));
          break;
        }
      }
    }
  }, [toothGroups]);

  useEffect(() => {
    return () => {
      setActiveTreatmentGroup(null);
    };
  }, []);

  return (
    <View
      width='100%'
      position='sticky'
      insetTop={11}
      zIndex={50}
      backgroundColor='page-faded'
      direction='row'
      justify='center'
      align='end'
      borderColor='neutral-faded'
      wrap={false}
      paddingBlock={4}
      height='146px'
    >
      <Carousel
        gap={2}
        className='flex justify-center items-center w-[calc(100%-20px)] h-full'
      >
        <Tabs
          value={`${activeTreatmentGroup}`}
          onChange={({ value }) => {
            toothGroups[Number(value)].open &&
              setActiveTreatmentGroup(Number(value));
          }}
        >
          <Tabs.List className={`[&_[role=tablist]]:!gap-[8px]`}>
            {toothGroups?.map((tooth, index) => {
              const isEmptyFilterGroup = tooth.treatmentgroup === '{}';
              return (
                <Tabs.Item value={`${index}`} key={`${tooth.treatmentgroup}`}>
                  <Tooltip
                    position='top'
                    active={isEmptyFilterGroup ? false : undefined}
                    text={
                      toothGroups[index]?.open
                        ? tooth.treatmentgroup
                        : toothGroups[index]?.tooltipText
                    }
                  >
                    {(attributes) => (
                      <Actionable attributes={attributes}>
                        <CarouselGroupTabs
                          treatmentToothData={toothGroups[index]?.teeth}
                          active={toothGroups[index]?.open}
                        />
                      </Actionable>
                    )}
                  </Tooltip>
                </Tabs.Item>
              );
            })}
          </Tabs.List>
        </Tabs>
      </Carousel>
    </View>
  );
}
