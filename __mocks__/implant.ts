export const implantProductList = [
  {
    id: 0,
    heading: 'Tissue Level Camlog',
    description: '0.4 mm Neck height',
    image: '/ImplantCamlog.svg',
    barcode: 'K1043.3011',
    price: '55.00 €',
    implantDetails: {
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
        size: 3.3,
        selectedTeeth: 14,
        localStorageCount: 0,
      },
      {
        id: 1,
        size: 3.4,
        selectedTeeth: 25,
        localStorageCount: 2,
      },
    ],
  },
  {
    id: 1,
    heading: 'Camlog / Tissue Level',
    description: '1.4 mm Neck height',
    barcode: 'K1043.3011',
    price: '55.00 €',
    implantDetails: [
      {
        Material: 'Ceramic',
      },
      { 'Insertion Post': 'Snap-in' },
      { 'Neck Height': '0.4mm' },
      { Diameter: 'Ø 4.3mm' },
      { Length: '13mm' },
      { 'Platform Switching': 'Yes' },
    ],
    image: '/ImplantCamlog.svg',
    options: [
      {
        id: 0,
        size: 3.3,
        selectedTeeth: 14,
        localStorageCount: 0,
      },
      {
        id: 1,
        size: 3.4,
        selectedTeeth: 42,
        localStorageCount: 2,
      },
    ],
  },
  {
    id: 2,
    heading: 'Camlog / Tissue Level',
    description: '0.4 mm Neck height',
    barcode: 'K1043.3011',
    price: '55.00 €',
    implantDetails: [
      {
        Material: 'Ceramic',
      },
      { 'Insertion Post': 'Snap-in' },
      { 'Neck Height': '0.4mm' },
      { Diameter: 'Ø 4.3mm' },
      { Length: '13mm' },
      { 'Platform Switching': 'Yes' },
    ],
    image: '/ImplantCamlog.svg',
    options: [
      {
        id: 0,
        size: 3.3,
        selectedTeeth: 14,
        localStorageCount: 0,
      },
      {
        id: 1,
        size: 3.4,
        selectedTeeth: 42,
        localStorageCount: 2,
      },
    ],
  },
  {
    id: 3,
    heading: 'Camlog / Tissue Level',
    description: '1.4 mm Neck height',
    barcode: 'K1043.3011',
    price: '55.00 €',
    implantDetails: [
      {
        Material: 'Ceramic',
      },
      { 'Insertion Post': 'Snap-in' },
      { 'Neck Height': '0.4mm' },
      { Diameter: 'Ø 4.3mm' },
      { Length: '13mm' },
      { 'Platform Switching': 'Yes' },
    ],
    image: '/ImplantCamlog.svg',
    options: [
      {
        id: 0,
        size: 3.3,
        selectedTeeth: 14,
        localStorageCount: 0,
      },
      {
        id: 1,
        size: 3.4,
        selectedTeeth: 42,
        localStorageCount: 2,
      },
    ],
  },
];

export const implantForm = [
  {
    id: 0,
    filterName: 'Diameter',
    option: ['Ø 3.3 mm', 'Ø 3.7 mm', 'Ø 4.3 mm', 'Ø 4.8 mm', 'Ø 5.0 mm'],
  },
  {
    id: 1,
    filterName: 'Length',
    option: ['13 mm', '14 mm', '15 mm', '16 mm', 'Ø 5.0 mm'],
  },
  {
    id: 2,
    filterName: 'Neck Height',
    option: ['0.4 mm', '1.4 mm'],
  },
  {
    id: 3,
    filterName: 'Implant Line',
    option: ['Camlog', 'Conelog', 'Carelog', 'iSy', 'lodi'],
  },
  {
    id: 4,
    filterName: 'Type',
    option: ['Tissue Level', 'Bone Level', 'Mini Implant'],
  },
  {
    id: 5,
    filterName: 'Material',
    option: ['Titanium', 'Ceramic'],
  },
  {
    id: 6,
    filterName: 'Retention Type',
    option: ['Screw-retained', 'Cemented'],
  },
  {
    id: 7,
    filterName: 'Other',
    option: ['Platform Switching', 'Guided', 'Engaging', 'Sterile'],
  },
];
