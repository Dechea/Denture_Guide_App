export const abutmentProductList = [
  {
    id: 0,
    image: '/AbutmentImage.svg',
    heading: 'Abutment PS',
    description: ['Type A', 'Gerade', 'GH 1.5 - 2.5'],
    barcode: 'K1043.3011',
    price: '55.00 €',
    abutmentDetails: {
      Material: 'Ceramic',
      'Insertion Post': 'Snap-in',
      'Neck Height': '0.4mm',
      Diameter: 'Ø 4.3mm',
      Length: '13mm',
      'Platform Switching': 'Yes',
    },
    inStorage: true,
    storageNumber: 2,
    options: [
      {
        id: 0,
        selectedTeeth: 14,
        localStorageCount: 0,
      },
      { id: 1, selectedTeeth: 43, localStorageCount: 2 },
    ],
  },
  {
    id: 1,
    image: '/AbutmentImage2.svg',
    heading: 'Abutment PS',
    description: ['gewinkelt 15°', 'Typ B ', 'GH 1.5 - 2.5'],
    barcode: 'K1043.3011',
    price: '55.00 €',
    abutmentDetails: {
      Material: 'Ceramic',
      'Insertion Post': 'Snap-in',
      'Neck Height': '0.4mm',
      Diameter: 'Ø 4.3mm',
      Length: '13mm',
      'Platform Switching': 'Yes',
    },
    inStorage: false,
    storageNumber: 0,
    options: [
      {
        id: 0,
        selectedTeeth: 14,
        localStorageCount: 0,
      },
      { id: 1, selectedTeeth: 43, localStorageCount: 2 },
    ],
  },
  {
    id: 2,
    image: '/AbutmentImage3.svg',
    heading: 'Abutment PS',
    description: ['Type B', 'Gerade', 'GH 1.5 - 2.5'],
    barcode: 'K1043.3011',
    price: '55.00 €',
    abutmentDetails: {
      Material: 'Ceramic',
      'Insertion Post': 'Snap-in',
      'Neck Height': '0.4mm',
      Diameter: 'Ø 4.3mm',
      Length: '13mm',
      'Platform Switching': 'Yes',
    },
    inStorage: false,
    storageNumber: 0,
    options: [
      {
        id: 0,
        selectedTeeth: 14,
        localStorageCount: 0,
      },
      { id: 1, selectedTeeth: 43, localStorageCount: 2 },
    ],
  },
  {
    id: 3,
    image: '/AbutmentImage.svg',
    heading: 'Abutment PS',
    description: ['Type A', 'Gerade', 'GH 1.5 - 2.5'],
    barcode: 'K1043.3011',
    price: '55.00 €',
    abutmentDetails: {
      Material: 'Ceramic',
      'Insertion Post': 'Snap-in',
      'Neck Height': '0.4mm',
      Diameter: 'Ø 4.3mm',
      Length: '13mm',
      'Platform Switching': 'Yes',
    },
    inStorage: false,
    storageNumber: 0,
    options: [
      {
        id: 0,
        selectedTeeth: 14,
        localStorageCount: 0,
      },
      { id: 1, selectedTeeth: 43, localStorageCount: 2 },
    ],
  },
];

export const abutmentFormAnalog = [
  { id: 0, name: 'Esometric', count: 3 },
  { id: 1, name: 'Universal', count: 1 },
  { id: 2, name: 'Gold-Composite', count: 1 },
  { id: 3, name: 'Titanbasic CAD/CAM', count: 1 },
];

export const abutmentFormDigital = [
  { id: 0, name: 'Titanbasic CAD/CAM', count: 1 },
  { id: 1, name: 'CAM-Rohling', count: 3 },
];

export const abutmentProductOptions: {
  id: string;
  name: string;
  type: string;
  options: any;
}[] = [
  {
    id: '5901f64f-35b9-4161-bada-b73b617da1f4',
    name: 'retention',
    type: 'tabs',
    options: [
      { name: 'Screwed', value: '"SCREWED"' },
      { name: 'Cemented', value: '"CEMENTED"' },
      { name: 'Attachment', value: '"ATTACHMENT"' },
      { name: 'Bar', value: '"BAR"' },
    ],
  },
  {
    id: 'cf3ddee0-06a4-4e26-b4ee-fb3858070c23',
    name: 'workflows',
    type: 'tabs',
    options: [
      { name: 'Digital', value: '"DIGITAL"' },
      { name: 'Analog', value: '"ANALOG"' },
    ],
  },
  {
    id: '8f8cda28-dc23-4200-a18e-4c88672d14f6',
    name: 'material',
    type: 'dropdown',
    options: [{ name: 'Titanium', value: '"TITANIUM"' }],
  },
  {
    id: 'c3b1c3da-3808-47bd-8fbf-d6c7e873d6c1',
    name: 'heightGingiva',
    type: 'dropdown',
    options: [{ name: '0.4mm', value: '"0.4mm"' }],
  },
  {
    id: 'e00deddd-87ff-4ef6-9675-e3f99791f1d5',
    name: 'angle',
    type: 'dropdown',
    options: [{ name: '0°', value: '0' }],
  },
];
