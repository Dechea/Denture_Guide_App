export const cartItems = [
  {
    id: 0,
    count: '7',
    title: 'Abutment PS',
    description: 'Type A, Grade, GH 1.5 - 2.5',
    price: '55.00 €',
  },
  {
    id: 1,

    count: '7',
    title: 'Abutment PS',
    description: 'Type A, Grade, GH 1.5 - 2.5',
    price: '55.00 €',
  },
  {
    id: 2,

    count: '7',
    title: 'Provisorisches Abutment PS',
    description: '',
    price: '55.00 €',
  },
  {
    id: 3,

    count: '7',
    title: 'Abformpfosten PS',
    description: 'geschlossener Löffel',
    price: '55.00 €',
  },
  {
    id: 4,

    count: '7',
    title: 'Abutment PS',
    description: 'Type A, Grade, GH 1.5 - 2.5',
    price: '55.00 €',
  },
  {
    id: 5,

    count: '7',
    title: 'Provisorisches Abutment PS',
    description: '',
    price: '55.00 €',
  },
  {
    id: 6,

    count: '7',
    title: 'Abformpfosten PS',
    description: 'geschlossener Löffel',
    price: '55.00 €',
  },
];

export const cartListData = [
  {
    id: 0,
    title: 'Implant Crown',
    toothNumber: 24,

    options: [
      {
        id: 0,
        title: 'Abutment PS',
        description:
          'Titanium, Snap-in, 0.4mm, Ø 4.3mm, 13mm Length, Platform Switching',
        image: '/AbutmentImage.svg',
        isPrice: false,
        price: '55.00 €',
        localStorageCount: 1, //Show local storage ui when count > 0
        selected: true, // if false, show not selected ui
        cartCount: 2,
        shared: false,
        sharedId: '',
        showButton: true,
        showDelete: true,
      },
      {
        id: 1,
        title: 'Abutment PS',
        description: 'Type A, Grade, GH 1.5 - 2.5',
        image: '/AbutmentImage.svg',
        isPrice: true,
        price: '55.00 €',
        localStorageCount: 0, //Show local storage ui when count > 0
        selected: false, // if false, show not selected ui
        cartCount: 0,
        shared: false,
        sharedId: '',
        showButton: true,
        showDelete: true,
      },
      {
        id: 1,
        title: 'Abutment PS',
        description: 'Type A, Grade, GH 1.5 - 2.5',
        image: '/AbutmentImage.svg',
        isPrice: true,
        price: '55.00 €',
        localStorageCount: 3, //Show local storage ui when count > 0
        selected: false, // if false, show not selected ui
        cartCount: 0,
        shared: false,
        sharedId: '',
        showButton: true,
        showDelete: true,
      },
      {
        id: 3,
        title: 'Healing',
        description: 'Not Selected',
        image: '/NotSelectedAbutment.svg',
        isPrice: false,
        price: '55.00 €',
        localStorageCount: 0, //Show local storage ui when count > 0
        selected: false, // if false, show not selected ui
        cartCount: 0,
        shared: true,
        sharedId: 'bene@dentist.com',
        showButton: false,
        showDelete: true,
      },
    ],
  },
  {
    id: 1,
    title: 'Implant Crown',
    toothNumber: 18,

    options: [
      {
        id: 0,
        title: 'Abutment PS',
        description:
          'Titanium, Snap-in, 0.4mm, Ø 4.3mm, 13mm Length, Platform Switching',
        image: '/AbutmentImage.svg',
        isPrice: true,
        price: '55.00 €',
        localStorageCount: 1, //Show local storage ui when count > 0
        selected: true, // if false, show not selected ui
        shared: false,
        sharedId: '',
        cartCount: 2,
        showButton: true,
        showDelete: true,
      },
      {
        id: 1,
        title: 'Abutment PS',
        description: 'Type A, Grade, GH 1.5 - 2.5',
        image: '/AbutmentImage.svg',
        isPrice: true,
        price: '55.00 €',
        localStorageCount: 0, //Show local storage ui when count > 0
        selected: false, // if false, show not selected ui
        shared: false,
        sharedId: '',
        cartCount: 0,
        showButton: true,
        showDelete: true,
      },
    ],
  },
];
