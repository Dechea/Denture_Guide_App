'use client';

import cx from 'classnames';
import { CarouselTooth } from '../CarouselTooth';
import { Actionable, Tabs, Tooltip, View } from 'reshaped';
import { useTreatmentsByGroup } from '../../hooks/useTreatmentsByGroup';
import { useProductStore } from '../../zustand/product';
import { useEffect } from 'react';

export const CarouselGroupTabs = () => {
  const {
    activeTreatmentGroup,
    setActiveTreatmentGroup,
    activeProductTab,
    availableTeethByProductType,
    selectedProducts,
    setImplicitFilters,
  } = useProductStore();
  const { toothGroups, getToothGroups, patientFile } = useTreatmentsByGroup();

  useEffect(() => {
    getToothGroups();
  }, [patientFile, activeProductTab, availableTeethByProductType]);

  useEffect(() => {
    if (activeTreatmentGroup === null) {
      let indexToActivate = -1;
      for (const [index, group] of Object.entries(toothGroups)) {
        if (group.open && indexToActivate < 0) {
          indexToActivate = Number(index);
        }
        if (
          group.open &&
          !group.teeth.every((tooth) => selectedProducts[tooth.toothNumber])
        ) {
          indexToActivate = Number(index);
          break;
        }
      }
      if (indexToActivate >= 0) {
        setActiveTreatmentGroup(indexToActivate);
      }
    } else if (toothGroups.length) {
      setImplicitFilters(
        JSON.parse(toothGroups[activeTreatmentGroup].treatmentgroup)
      );
    }
  }, [toothGroups, activeTreatmentGroup]);

  useEffect(() => {
    return () => {
      setActiveTreatmentGroup(null);
    };
  }, []);

  return (
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
          const treatmentToothData = toothGroups[index]?.teeth;
          const active = toothGroups[index]?.open;

          return (
            <Tabs.Item value={`${index}`} key={`${tooth.treatmentgroup}`}>
              <Tooltip
                position='top'
                active={isEmptyFilterGroup ? false : undefined}
                text={toothGroups[index].tooltipText}
              >
                {(attributes) => (
                  <Actionable attributes={attributes}>
                    <View
                      direction='row'
                      borderRadius='small'
                      paddingInline={2}
                      gap={1}
                      className={cx(
                        {
                          'opacity-50': !active,
                          'bg-[--rs-color-background-neutral-faded] !border-[--rs-color-border-neutral-faded]':
                            active,
                        },
                        'hover:border-[--rs-color-border-neutral-faded] border-[1px] border-[rgba(0.0,0.0,0.0,0.0)]'
                      )}
                    >
                      {treatmentToothData?.map((tooth) => {
                        return (
                          <CarouselTooth
                            key={tooth.toothNumber}
                            tooth={tooth}
                          />
                        );
                      })}
                    </View>
                  </Actionable>
                )}
              </Tooltip>
            </Tabs.Item>
          );
        })}
      </Tabs.List>
    </Tabs>
  );
};
