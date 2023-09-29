import { PatientFile } from '../fqlx-generated/typedefs';

export const patientFileMockData: PatientFile = {
  id: '376911044430266576',
  ts: {
    isoString: '2023-09-26T06:20:51.230Z',
  },
  patient: {
    name: 'test 44',
    status: '',
    avatar: '',
  },
  teeth: [
    {
      name: '11',
      crown: {
        treatmentDoc: {
          treatment: {
            name: 'artificialCrown',
          },
          selectedProducts: [
            {
              selectedProduct: {
                id: '373297568174571725',
                manufacturer: {
                  name: 'CAMLOG',
                },
                manufacturerProductId: 'K2244.3348',
                image:
                  'https://bucket.dechea.com/product/images/K2244.3348.jpg',
                status: 'ACTIVE',
                localizations: [
                  {
                    name: '',
                    description: '',
                    price: {
                      amount: 71,
                      tax: 19,
                      currency: 'EURO',
                    },
                    locale: 'FR',
                  },
                  {
                    name: 'CAMLOG® Titanium base CAD/CAM, crown, Ø 3.3 ',
                    description:
                      'CAMLOG® Titanium base CAD/CAM, bonding base for CAD/CAM custom-made crowns, incl. CAMLOG® Abutment screw and CAMLOG® Bonding aid, material: POM.',
                    price: {
                      amount: 71,
                      tax: 19,
                      currency: 'EURO',
                    },
                    locale: 'EN',
                  },
                  {
                    name: 'CAMLOG® Titanbasis CAD/CAM, Krone, Ø 3.3',
                    description:
                      'CAMLOG® Titanbasis CAD/CAM, Klebebasis für individuelle CAD/CAM gefertigte Kronen inkl. CAMLOG® Abutmentschraube und CAMLOG® Klebehilfe, Material: POM.',
                    price: {
                      amount: 71,
                      tax: 19,
                      currency: 'EURO',
                    },
                    locale: 'DE',
                  },
                ],
                abutment: {
                  implantLine: 'CAMLOG',
                  abutmentLine: 'CAD_CAM',
                  platformSwitch: false,
                  workflows: ['DIGITAL'],
                  retention: 'SCREWED',
                  material: 'TITANIUM',
                  angle: 0,
                  diameterPlatform: 3.3,
                  heightGingiva: '',
                  indications: ['BRIDGE', 'CROWN'],
                  type: 'A',
                },
              },
              quantity: 1,
            },
          ],
        },
      },
      root: {
        treatmentDoc: {
          treatment: {
            name: 'implant',
          },
          selectedProducts: [
            {
              selectedProduct: {
                id: '373297564393406669',
                manufacturer: {
                  name: 'CAMLOG',
                },
                manufacturerProductId: 'K1045.3311',
                image:
                  'https://bucket.dechea.com/product/images/K1045.3311.jpg',
                status: 'ACTIVE',
                localizations: [
                  {
                    name: '',
                    description: '',
                    price: {
                      amount: 163,
                      tax: 7,
                      currency: 'EURO',
                    },
                    locale: 'FR',
                  },
                  {
                    name: 'CAMLOG® SCREW-LINE Implantat, Promote®, screw-mounted, Ø 3.3, L 11',
                    description:
                      'CAMLOG® SCREW-LINE Implant, Promote®, screw-mounted, incl. insertion post and cover screw, sterile, material: titanium Grade 4.',
                    price: {
                      amount: 163,
                      tax: 7,
                      currency: 'EURO',
                    },
                    locale: 'EN',
                  },
                  {
                    name: 'CAMLOG® SCREW-LINE Implantat, Promote®, screw-mounted (verschraubt), Ø 3.3, L 11',
                    description:
                      'CAMLOG® SCREW-LINE Implantat, Promote® inkl. Einbringpfosten und Verschlussschraube, steril, Material: Titan Grade 4.',
                    price: {
                      amount: 163,
                      tax: 7,
                      currency: 'EURO',
                    },
                    locale: 'DE',
                  },
                ],
                implant: {
                  implantLine: 'CAMLOG',
                  material: 'TITANIUM',
                  levels: ['TISSUE', 'BONE'],
                  platformSwitch: false,
                  insertionPost: 'SCREW_MOUNTED',
                  length: 11,
                  lengthNeck: 1.4,
                  diameterPlatform: 3.3,
                  useCase: 'ALLROUNDER',
                },
              },
              quantity: 1,
            },
          ],
        },
      },
    },
    {
      name: '25',
      crown: {
        treatmentDoc: {
          treatment: {
            name: 'artificialCrown',
          },
          selectedProducts: [
            {
              selectedProduct: {
                id: '373297568174571725',
                manufacturer: {
                  name: 'CAMLOG',
                },
                manufacturerProductId: 'K2244.3348',
                image:
                  'https://bucket.dechea.com/product/images/K2244.3348.jpg',
                status: 'ACTIVE',
                localizations: [
                  {
                    name: '',
                    description: '',
                    price: {
                      amount: 71,
                      tax: 19,
                      currency: 'EURO',
                    },
                    locale: 'FR',
                  },
                  {
                    name: 'CAMLOG® Titanium base CAD/CAM, crown, Ø 3.3 ',
                    description:
                      'CAMLOG® Titanium base CAD/CAM, bonding base for CAD/CAM custom-made crowns, incl. CAMLOG® Abutment screw and CAMLOG® Bonding aid, material: POM.',
                    price: {
                      amount: 71,
                      tax: 19,
                      currency: 'EURO',
                    },
                    locale: 'EN',
                  },
                  {
                    name: 'CAMLOG® Titanbasis CAD/CAM, Krone, Ø 3.3',
                    description:
                      'CAMLOG® Titanbasis CAD/CAM, Klebebasis für individuelle CAD/CAM gefertigte Kronen inkl. CAMLOG® Abutmentschraube und CAMLOG® Klebehilfe, Material: POM.',
                    price: {
                      amount: 71,
                      tax: 19,
                      currency: 'EURO',
                    },
                    locale: 'DE',
                  },
                ],
                abutment: {
                  implantLine: 'CAMLOG',
                  abutmentLine: 'CAD_CAM',
                  platformSwitch: false,
                  workflows: ['DIGITAL'],
                  retention: 'SCREWED',
                  material: 'TITANIUM',
                  angle: 0,
                  diameterPlatform: 3.3,
                  heightGingiva: '',
                  indications: ['BRIDGE', 'CROWN'],
                  type: 'A',
                },
              },
              quantity: 1,
            },
          ],
        },
      },
      root: {
        treatmentDoc: {
          treatment: {
            name: 'implant',
          },
          selectedProducts: [
            {
              selectedProduct: {
                id: '373297564393406669',
                manufacturer: {
                  name: 'CAMLOG',
                },
                manufacturerProductId: 'K1045.3311',
                image:
                  'https://bucket.dechea.com/product/images/K1045.3311.jpg',
                status: 'ACTIVE',
                localizations: [
                  {
                    name: '',
                    description: '',
                    price: {
                      amount: 163,
                      tax: 7,
                      currency: 'EURO',
                    },
                    locale: 'FR',
                  },
                  {
                    name: 'CAMLOG® SCREW-LINE Implantat, Promote®, screw-mounted, Ø 3.3, L 11',
                    description:
                      'CAMLOG® SCREW-LINE Implant, Promote®, screw-mounted, incl. insertion post and cover screw, sterile, material: titanium Grade 4.',
                    price: {
                      amount: 163,
                      tax: 7,
                      currency: 'EURO',
                    },
                    locale: 'EN',
                  },
                  {
                    name: 'CAMLOG® SCREW-LINE Implantat, Promote®, screw-mounted (verschraubt), Ø 3.3, L 11',
                    description:
                      'CAMLOG® SCREW-LINE Implantat, Promote® inkl. Einbringpfosten und Verschlussschraube, steril, Material: Titan Grade 4.',
                    price: {
                      amount: 163,
                      tax: 7,
                      currency: 'EURO',
                    },
                    locale: 'DE',
                  },
                ],
                implant: {
                  implantLine: 'CAMLOG',
                  material: 'TITANIUM',
                  levels: ['TISSUE', 'BONE'],
                  platformSwitch: false,
                  insertionPost: 'SCREW_MOUNTED',
                  length: 11,
                  lengthNeck: 1.4,
                  diameterPlatform: 3.3,
                  useCase: 'ALLROUNDER',
                },
              },
              quantity: 1,
            },
          ],
        },
      },
    },
    {
      name: '24',
      crown: {
        treatmentDoc: {
          treatment: {
            name: 'artificialCrown',
          },
          selectedProducts: [],
        },
      },
      root: {
        treatmentDoc: {
          treatment: {
            name: 'adult',
          },
          selectedProducts: [],
        },
      },
    },
    {
      name: '33',
      crown: {
        treatmentDoc: {
          treatment: {
            name: 'artificialCrown',
          },
          selectedProducts: [
            {
              selectedProduct: {
                id: '373297568174571725',
                manufacturer: {
                  name: 'CAMLOG',
                },
                manufacturerProductId: 'K2244.3348',
                image:
                  'https://bucket.dechea.com/product/images/K2244.3348.jpg',
                status: 'ACTIVE',
                localizations: [
                  {
                    name: '',
                    description: '',
                    price: {
                      amount: 71,
                      tax: 19,
                      currency: 'EURO',
                    },
                    locale: 'FR',
                  },
                  {
                    name: 'CAMLOG® Titanium base CAD/CAM, crown, Ø 3.3 ',
                    description:
                      'CAMLOG® Titanium base CAD/CAM, bonding base for CAD/CAM custom-made crowns, incl. CAMLOG® Abutment screw and CAMLOG® Bonding aid, material: POM.',
                    price: {
                      amount: 71,
                      tax: 19,
                      currency: 'EURO',
                    },
                    locale: 'EN',
                  },
                  {
                    name: 'CAMLOG® Titanbasis CAD/CAM, Krone, Ø 3.3',
                    description:
                      'CAMLOG® Titanbasis CAD/CAM, Klebebasis für individuelle CAD/CAM gefertigte Kronen inkl. CAMLOG® Abutmentschraube und CAMLOG® Klebehilfe, Material: POM.',
                    price: {
                      amount: 71,
                      tax: 19,
                      currency: 'EURO',
                    },
                    locale: 'DE',
                  },
                ],
                abutment: {
                  implantLine: 'CAMLOG',
                  abutmentLine: 'CAD_CAM',
                  platformSwitch: false,
                  workflows: ['DIGITAL'],
                  retention: 'SCREWED',
                  material: 'TITANIUM',
                  angle: 0,
                  diameterPlatform: 3.3,
                  heightGingiva: '',
                  indications: ['BRIDGE', 'CROWN'],
                  type: 'A',
                },
              },
              quantity: 1,
            },
          ],
        },
      },
      root: {
        treatmentDoc: {
          treatment: {
            name: 'implant',
          },
          selectedProducts: [
            {
              selectedProduct: {
                id: '373297564393406669',
                manufacturer: {
                  name: 'CAMLOG',
                },
                manufacturerProductId: 'K1045.3311',
                image:
                  'https://bucket.dechea.com/product/images/K1045.3311.jpg',
                status: 'ACTIVE',
                localizations: [
                  {
                    name: '',
                    description: '',
                    price: {
                      amount: 163,
                      tax: 7,
                      currency: 'EURO',
                    },
                    locale: 'FR',
                  },
                  {
                    name: 'CAMLOG® SCREW-LINE Implantat, Promote®, screw-mounted, Ø 3.3, L 11',
                    description:
                      'CAMLOG® SCREW-LINE Implant, Promote®, screw-mounted, incl. insertion post and cover screw, sterile, material: titanium Grade 4.',
                    price: {
                      amount: 163,
                      tax: 7,
                      currency: 'EURO',
                    },
                    locale: 'EN',
                  },
                  {
                    name: 'CAMLOG® SCREW-LINE Implantat, Promote®, screw-mounted (verschraubt), Ø 3.3, L 11',
                    description:
                      'CAMLOG® SCREW-LINE Implantat, Promote® inkl. Einbringpfosten und Verschlussschraube, steril, Material: Titan Grade 4.',
                    price: {
                      amount: 163,
                      tax: 7,
                      currency: 'EURO',
                    },
                    locale: 'DE',
                  },
                ],
                implant: {
                  implantLine: 'CAMLOG',
                  material: 'TITANIUM',
                  levels: ['TISSUE', 'BONE'],
                  platformSwitch: false,
                  insertionPost: 'SCREW_MOUNTED',
                  length: 11,
                  lengthNeck: 1.4,
                  diameterPlatform: 3.3,
                  useCase: 'ALLROUNDER',
                },
              },
              quantity: 1,
            },
          ],
        },
      },
    },
  ],
};
