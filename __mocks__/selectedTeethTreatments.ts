export const selectedTeethTreatments = [
  {
    group: 'abutment',
    treatments: [
      {
        key: '41',
        crownVariant: 'prosthesisAnchor',
        leftAnchor: true,
      },
    ],
  },
  {
    group: 'implant',
    treatments: [
      {
        key: '42',
        rootVariant: 'implant',
        crownVariant: 'prosthesisAnchor',
        group: 'implant',
        rightAnchor: true,
      },
      {
        key: '46',
        rootVariant: 'implant',
        crownVariant: 'prosthesisAnchor',
        group: 'implant',
      },
      {
        key: '48',
        rootVariant: 'implant',
        crownVariant: 'artificialCrown',
        group: 'implant',
      },
    ],
  },
  {
    group: 'crown',
    treatments: [
      {
        key: '43',
        crownVariant: 'bridgeLink',
        rootVariant: 'missingRoot',
        group: 'crown',
        leftAnchor: true,
      },
      {
        key: '44',
        crownVariant: 'bridgeAnchor',
        group: 'crown',
        rightAnchor: true,
      },
      {
        key: '45',
        crownVariant: 'extraction',
        rootVariant: 'extraction',
        toothVariant: 'extraction',
        group: 'crown',
      },
      {
        key: '47',
        rootVariant: 'implant',
        crownVariant: 'bridgeAnchor',
        group: 'crown',
      },
    ],
  },
];
