'use client';

import dynamic from 'next/dynamic';
import { View } from '../../Reshaped/Reshaped';

const Tooth11 = dynamic(() => import('../../teeth-diagram/components/Tooth11').then((comp) => comp.Tooth11), {ssr: false});

export const ImplantIcon = () => (
  <View height="32px" width="32px" justify="center" align="center">
    <Tooth11 implant artificial root={false} />
  </View>
);

export const selectedToothData = [
	{ name: 'Implant Properties', attr: ['Implant Line', 'PF diagmeter', 'Retension type'] },
	{ name: 'Prosthesis', attr: ['Abutentis', 'Healing Abutentis'] },
];

export const data = [
  { text: 'Implant Crown', number: 1, icon: ImplantIcon },
  { text: 'Implant Bridge Anchor', number: 2, icon: ImplantIcon },
  { text: 'Bridge-Link', number: 3, icon: ImplantIcon },
  { text: 'Implant Prosthesis Anchor', number: 4, icon: ImplantIcon },
  { text: 'Prosthesis Link', number: 5, icon: ImplantIcon },
];

export const popupData = {'options': [{ 'name': 'Select for all teeth', 'description': '' }, { 'name': '14', 'description': '4.3 mm' }, { 'name': '43', 'description': '3.8 mm' }]}

export let drData = [
  {
    name: 'Dr. Endo',
  },
  {
    name: 'Exspensive',
  },
];