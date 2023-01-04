'use client';

import React from 'react';
import {
  upperJawRightTeeth,
  upperJawLeftTeeth,
  lowerJawLeftTeeth,
  lowerJawRightTeeth,
} from '@dechea/hes.constants.tooth-position';
import { View } from 'reshaped';
import { Teeth } from './components/Teeth';

export const TeethDiagram = () => {
  return (
      <View direction="column" gap={5} align="center">
        {/* upper jaw */}
        <View.Item columns={12}>
          <View direction="row" gap={5}>
            {/* Upper left */}
            <View.Item columns={6}>
              <View direction="row" gap={2} align="end" justify="end">
                <Teeth jawType="upper" teeth={upperJawLeftTeeth} />
              </View>
            </View.Item>

            {/* Upper right */}
            <View.Item columns={6}>
              <View direction="row" gap={2} align="end" justify="start">
                <Teeth jawType="upper" teeth={upperJawRightTeeth} />
              </View>
            </View.Item>
          </View>
        </View.Item>

        {/* lower jaw */}
        <View.Item columns={12}>
          <View direction="row" gap={5}>
            {/* Lower left */}
            <View.Item columns={6}>
              <View direction="row" gap={2} align="start" justify="end">
                <Teeth jawType="lower" teeth={lowerJawLeftTeeth} />
              </View>
            </View.Item>

            {/* Lower right */}
            <View.Item columns={6}>
              <View direction="row" gap={2} align="start" justify="start">
                <Teeth jawType="lower" teeth={lowerJawRightTeeth} />
              </View>
            </View.Item>
          </View>
        </View.Item>
      </View>
  );
};
