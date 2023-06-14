export const address = {
  street: '',
  streetNo: '',
  postalCode: 0,
  city: '',
  country: '',
};

export const manufacturer = {
  name: '',
  addresses: [address],
};

export const statistic = {
  searched: 0,
  searchedCurrentMonth: 0,
  bought: 0,
  boughtCurrentMonth: 0,
};

export const treatmentLocalization = {
  name: '',
  synonyms: [''],
  locale: '',
};

export var category = {
  products: [product],
  categories: [category],
  localizations: [treatmentLocalization],
};

export const area = {
  name: '',
};

export const treatment = {
  id: '',
  categories: [category],
  area: [area],
  localizations: [treatmentLocalization],
};

export const treatmentGroup = {
  name: '',
  treatments: [treatment],
  localizations: [treatmentLocalization],
};

export const finding = {
  id: '',
  area: [area],
  localizations: [treatmentLocalization],
};

export const price = {
  amount: 0,
  currency: '',
  validFrom: new Date(),
  validTo: new Date(),
};

export const productLocalization = {
  locale: '',
  name: '',
  description: '',
  price: price,
  customAttributes: [''],
};

export const implant = {
  implantLine: '',
  material: '',
  level: '',
  engaging: false,
  platformSwitch: false,
  guided: false,
  insertionPost: '',
  sterile: false,
  length: 0,
  lengthNeck: 0,
  diameterPlatform: 0,
  singleUse: false,
};

export const abutment = {
  id: '',
  implantLine: '',
  abutmentLine: '',
  guided: false,
  platformSwitch: false,
  retention: '',
  material: '',
  sterile: false,
  connectionType: '',
  prostheticHeight: 0,
  maxTorque: 0,
  angle: 0,
  diameterPlatform: 0,
  gingivaHeight: 0,
  indication: '',
  singleUse: false,
};

export const healingAbutment = {
  id: '',
  implantLine: '',
  abutmentLine: '',
  shape: '',
  material: '',
  sterile: false,
  maxTorque: 0,
  diameterPlatform: 0,
  gingivaHeight: 0,
  singleUse: false,
  platformSwitch: false,
};

export const impression = {
  id: '',
  type: '',
  implantLine: '',
  abutmentLine: '',
  diameterPlatform: 0,
};

export const membrane = {
  id: '',
  material: '',
  grainSizeMin: 0,
  grainSizeMax: 0,
  volume: 0,
};

export const coverCap = {
  id: '',
  material: '',
  sterile: false,
  singleUse: false,
  diameterPlatform: 0,
  height: 0,
};

export const screw = {
  id: '',
  implantLine: '',
  abutmentLine: '',
  material: '',
  sterile: false,
  singleUse: false,
  maxTorque: 0,
  length: 0,
  diameterPlatform: 0,
};

export var product = {
  manufacturerProductId: '',
  manufacturer: manufacturer,
  image: '',
  validFrom: new Date(),
  validTo: new Date(),
  categories: [category],
  compatibleWith: [product],
  status: '',
  statistics: statistic,
  localizations: [productLocalization],
  implant: implant,
  abutment: abutment,
  healingAbutment: healingAbutment,
  impression: impression,
  screw: screw,
  coverCap: coverCap,
  membrane: membrane,
};

export const selectedProduct = {
  quantity: 0,
};

export const treatmentDoc = {
  treatment: treatment,
  selectedProducts: [selectedProduct],
  selectedCategory: selectedCategory,
};

export const treatmentConfig = {
  selectedCategory: category,
  selectedProduct: product,
  quantity: 0,
};

export const findingDoc = {
  finding: finding,
  config: treatmentConfig,
  value: '',
};

export const leftRoot = {
  findings: [findingDoc],
  treatments: [treatmentDoc],
};

export const middleRoot = {
  findings: [findingDoc],
  treatments: [treatmentDoc],
};

export const rightRoot = {
  findings: [findingDoc],
  treatments: [treatmentDoc],
};

export const leftCrown = {
  findings: [findingDoc],
  treatments: [treatmentDoc],
};

export const centerCrown = {
  findings: [findingDoc],
  treatments: [treatmentDoc],
};

export const outsideCrown = {
  findings: [findingDoc],
  treatments: [treatmentDoc],
};

export const insideCrown = {
  findings: [findingDoc],
  treatments: [treatmentDoc],
};

export const rightCrown = {
  findings: [findingDoc],
  treatments: [treatmentDoc],
};

export const toothNeck = {
  findings: [findingDoc],
  treatments: [treatmentDoc],
};

export const rootAddOn = {
  findings: [findingDoc],
  treatments: [treatmentDoc],
};

export const root = {
  findingDoc: findingDoc,
  treatmentDoc: treatmentDoc,
  addon: rootAddOn,
  leftRoot: leftRoot,
  middleRoot: middleRoot,
  rightRoot: rightRoot,
};

export const crown = {
  findingDoc: findingDoc,
  treatmentDoc: treatmentDoc,
  addon: rootAddOn,
  toothNeck: toothNeck,
  left: leftCrown,
  center: centerCrown,
  outside: outsideCrown,
  inside: insideCrown,
  right: rightCrown,
};

export const tooth = {
  id: '',
  root: root,
  Crown: crown,
};

export const patient = {
  careLevel: 0,
  familyDoctor: '',
  isWard: false,
  nextAppointment: new Date(),
  createdAt: new Date(),
  lastAnamnesisAt: new Date(),
  deletedAt: new Date(),
};

export const patientFile = {
  patient: patient,
  teeth: [tooth],
};

export var selectedCategory = {
  category: category,
  selectedCategory: selectedCategory,
};
