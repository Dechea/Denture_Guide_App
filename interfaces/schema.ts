export interface Address {
  street: string;
  streetNo: string;
  postalCode: number | string;
  city: string;
  country: string;
}

export interface AddressInput {
  street: string;
  streetNo: string;
  postalCode: number | string;
  city: string;
  country: string;
}

export interface AddressMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Address[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Manufacturer {
  name: string;
  addresses: Address[];
}

export interface ManufacturerInput {
  name: string;
  addresses: Address[];
}

export interface ManufacturerMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Manufacturer[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Statistic {
  searched: number | undefined;
  searchedCurrentMonth: number | undefined;
  bought: number | undefined;
  boughtCurrentMonth: number | undefined;
}

export interface StatisticInput {
  searched: number | undefined;
  searchedCurrentMonth: number | undefined;
  bought: number | undefined;
  boughtCurrentMonth: number | undefined;
}

export interface StatisticMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Statistic[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface TreatmentLocalization {
  name: string;
  synonyms: string[];
  locale: string;
}

export interface TreatmentLocalizationInput {
  name: string;
  synonyms: string[];
  locale: string;
}

export interface TreatmentLocalizationMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: TreatmentLocalization[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Category {
  products: Product[];
  categories: Category[] | undefined;
  localizations: TreatmentLocalization[];
}

export interface CategoryInput {
  products: Product[];
  categories: Category[] | undefined;
  localizations: TreatmentLocalization[];
}

export interface CategoryMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Category[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Area {
  name: string;
}

export interface AreaInput {
  name: string;
}

export interface AreaMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Area[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Treatment {
  id: string;
  categories: Category[] | undefined;
  area: Area[];
  localizations: TreatmentLocalization[];
}

export interface TreatmentInput {
  categories: Category[] | undefined;
  area: Area[];
  localizations: TreatmentLocalization[];
}

export interface TreatmentMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Treatment[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface TreatmentGroup {
  name: string;
  treatments: Treatment[];
  localizations: TreatmentLocalization[];
}

export interface TreatmentGroupInput {
  name: string;
  treatments: Treatment[];
  localizations: TreatmentLocalization[];
}

export interface TreatmentGroupMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: TreatmentGroup[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Finding {
  id: string;
  area: Area[];
  localizations: TreatmentLocalization[];
}

export interface FindingInput {
  area: Area[];
  localizations: TreatmentLocalization[];
}

export interface FindingMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Finding[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Price {
  amount: number;
  currency: string;
  validFrom: Date;
  validTo: Date | undefined;
}

export interface PriceInput {
  amount: number;
  currency: string;
  validFrom: Date;
  validTo: Date | undefined;
}

export interface PriceMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Price[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface ProductLocalization {
  locale: string;
  name: string;
  description: string | undefined;
  price: Price;
  customAttributes: string[] | undefined;
}

export interface ProductLocalizationInput {
  locale: string;
  name: string;
  description: string | undefined;
  price: Price;
  customAttributes: string[] | undefined;
}

export interface ProductLocalizationMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: ProductLocalization[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Implant {
  implantLine: string;
  material: string;
  level: string;
  engaging: boolean;
  platformSwitch: boolean;
  guided: boolean;
  insertionPost: string;
  sterile: boolean;
  length: number;
  lengthNeck: number;
  diameterPlatform: number;
  singleUse: boolean;
}

export interface ImplantInput {
  implantLine: string;
  material: string;
  level: string;
  engaging: boolean;
  platformSwitch: boolean;
  guided: boolean;
  insertionPost: string;
  sterile: boolean;
  length: number;
  lengthNeck: number;
  diameterPlatform: number;
  singleUse: boolean;
}

export interface ImplantMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Implant[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Abutment {
  id: string;
  implantLine: string;
  abutmentLine: string;
  guided: boolean;
  platformSwitch: boolean;
  retention: string;
  material: string;
  sterile: boolean;
  connectionType: string;
  prostheticHeight: number;
  maxTorque: number;
  angle: number;
  diameterPlatform: number;
  gingivaHeight: number;
  indication: string;
  singleUse: boolean;
}

export interface AbutmentInput {
  implantLine: string;
  abutmentLine: string;
  guided: boolean;
  platformSwitch: boolean;
  retention: string;
  material: string;
  sterile: boolean;
  connectionType: string;
  prostheticHeight: number;
  maxTorque: number;
  angle: number;
  diameterPlatform: number;
  gingivaHeight: number;
  indication: string;
  singleUse: boolean;
}

export interface AbutmentMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Abutment[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface HealingAbutment {
  id: string;
  implantLine: string;
  abutmentLine: string;
  shape: string;
  material: string;
  sterile: boolean;
  maxTorque: number;
  diameterPlatform: number;
  gingivaHeight: number;
  singleUse: boolean;
  platformSwitch: boolean;
}

export interface HealingAbutmentInput {
  implantLine: string;
  abutmentLine: string;
  shape: string;
  material: string;
  sterile: boolean;
  maxTorque: number;
  diameterPlatform: number;
  gingivaHeight: number;
  singleUse: boolean;
  platformSwitch: boolean;
}

export interface HealingAbutmentMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: HealingAbutment[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Impression {
  id: string;
  type: string;
  implantLine: string;
  abutmentLine: string;
  diameterPlatform: number;
}

export interface ImpressionInput {
  type: string;
  implantLine: string;
  abutmentLine: string;
  diameterPlatform: number;
}

export interface ImpressionMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Impression[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Membrane {
  id: string;
  material: string;
  grainSizeMin: number;
  grainSizeMax: number;
  volume: number;
}

export interface MembraneInput {
  material: string;
  grainSizeMin: number;
  grainSizeMax: number;
  volume: number;
}

export interface MembraneMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Membrane[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface CoverCap {
  id: string;
  material: string;
  sterile: boolean;
  singleUse: boolean;
  diameterPlatform: number;
  height: number;
}

export interface CoverCapInput {
  material: string;
  sterile: boolean;
  singleUse: boolean;
  diameterPlatform: number;
  height: number;
}

export interface CoverCapMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: CoverCap[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Screw {
  id: string;
  implantLine: string;
  abutmentLine: string;
  material: string;
  sterile: boolean;
  singleUse: boolean;
  maxTorque: number;
  length: number;
  diameterPlatform: number[];
}

export interface ScrewInput {
  implantLine: string;
  abutmentLine: string;
  material: string;
  sterile: boolean;
  singleUse: boolean;
  maxTorque: number;
  length: number;
  diameterPlatform: number[];
}

export interface ScrewMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Screw[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Product {
  manufacturerProductId: string;
  manufacturer: Manufacturer;
  image: string;
  validFrom: Date;
  validTo: Date | undefined;
  categories: Category[];
  compatibleWith: Product[];
  status: string;
  statistics: Statistic;
  localizations: ProductLocalization[];
  implant: Implant | undefined;
  abutment: Abutment | undefined;
  healingAbutment: HealingAbutment | undefined;
  impression: Impression | undefined;
  screw: Screw | undefined;
  coverCap: CoverCap | undefined;
  membrane: Membrane | undefined;
}

export interface ProductInput {
  manufacturerProductId: string;
  manufacturer: Manufacturer;
  image: string;
  validFrom: Date;
  validTo: Date | undefined;
  categories: Category[];
  compatibleWith: Product[];
  status: string;
  statistics: Statistic;
  localizations: ProductLocalization[];
  implant: Implant | undefined;
  abutment: Abutment | undefined;
  healingAbutment: HealingAbutment | undefined;
  impression: Impression | undefined;
  screw: Screw | undefined;
  coverCap: CoverCap | undefined;
  membrane: Membrane | undefined;
}

export interface ProductMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Product[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface SelectedProduct {
  quantity: number;
}

export interface SelectedProductInput {
  quantity: number;
}

export interface SelectedProductMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: SelectedProduct[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface TreatmentDoc {
  treatment: Treatment | undefined;
  selectedProducts: SelectedProduct[] | undefined;
  selectedCategory: SelectedCategory | undefined;
}

export interface TreatmentDocInput {
  treatment: Treatment | undefined;
  selectedProducts: SelectedProduct[] | undefined;
  selectedCategory: SelectedCategory | undefined;
}

export interface TreatmentDocMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: TreatmentDoc[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface TreatmentConfig {
  selectedCategory: Category | undefined;
  selectedProduct: Product | undefined;
  quantity: number | undefined;
}

export interface TreatmentConfigInput {
  selectedCategory: Category | undefined;
  selectedProduct: Product | undefined;
  quantity: number | undefined;
}

export interface TreatmentConfigMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: TreatmentConfig[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface FindingDoc {
  finding: Finding | undefined;
  config: TreatmentConfig | undefined;
  value: string | undefined;
}

export interface FindingDocInput {
  finding: Finding | undefined;
  config: TreatmentConfig | undefined;
  value: string | undefined;
}

export interface FindingDocMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: FindingDoc[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface LeftRoot {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface LeftRootInput {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface LeftRootMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: LeftRoot[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface MiddleRoot {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface MiddleRootInput {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface MiddleRootMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: MiddleRoot[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface RightRoot {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface RightRootInput {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface RightRootMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: RightRoot[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface LeftCrown {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface LeftCrownInput {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface LeftCrownMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: LeftCrown[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface CenterCrown {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface CenterCrownInput {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface CenterCrownMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: CenterCrown[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface OutsideCrown {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface OutsideCrownInput {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface OutsideCrownMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: OutsideCrown[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface InsideCrown {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface InsideCrownInput {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface InsideCrownMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: InsideCrown[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface RightCrown {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface RightCrownInput {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface RightCrownMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: RightCrown[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface ToothNeck {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface ToothNeckInput {
  findings: FindingDoc[] | undefined;
  treatments: TreatmentDoc[] | undefined;
}

export interface ToothNeckMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: ToothNeck[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface RootAddOn {
  findings: FindingDoc[];
  treatments: TreatmentDoc[];
}

export interface RootAddOnInput {
  findings: FindingDoc[];
  treatments: TreatmentDoc[];
}

export interface RootAddOnMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: RootAddOn[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Root {
  findingDoc: FindingDoc | undefined;
  treatmentDoc: TreatmentDoc | undefined;
  addon: RootAddOn | undefined;
  leftRoot: LeftRoot | undefined;
  middleRoot: MiddleRoot | undefined;
  rightRoot: RightRoot | undefined;
}

export interface RootInput {
  findingDoc: FindingDoc | undefined;
  treatmentDoc: TreatmentDoc | undefined;
  addon: RootAddOn | undefined;
  leftRoot: LeftRoot | undefined;
  middleRoot: MiddleRoot | undefined;
  rightRoot: RightRoot | undefined;
}

export interface RootMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Root[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Crown {
  findingDoc: FindingDoc | undefined;
  treatmentDoc: TreatmentDoc | undefined;
  addon: RootAddOn | undefined;
  toothNeck: ToothNeck | undefined;
  left: LeftCrown | undefined;
  center: CenterCrown | undefined;
  outside: OutsideCrown | undefined;
  inside: InsideCrown | undefined;
  right: RightCrown | undefined;
}

export interface CrownInput {
  findingDoc: FindingDoc | undefined;
  treatmentDoc: TreatmentDoc | undefined;
  addon: RootAddOn | undefined;
  toothNeck: ToothNeck | undefined;
  left: LeftCrown | undefined;
  center: CenterCrown | undefined;
  outside: OutsideCrown | undefined;
  inside: InsideCrown | undefined;
  right: RightCrown | undefined;
}

export interface CrownMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Crown[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Tooth {
  id: string;
  root: Root | undefined;
  Crown: Crown | undefined;
}

export interface ToothInput {
  root: Root | undefined;
  Crown: Crown | undefined;
}

export interface ToothMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Tooth[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Patient {
  careLevel: number;
  familyDoctor: string;
  isWard: boolean;
  nextAppointment: Date;
  createdAt: Date;
  lastAnamnesisAt: Date;
  deletedAt: Date;
}

export interface PatientInput {
  careLevel: number;
  familyDoctor: string;
  isWard: boolean;
  nextAppointment: Date;
  createdAt: Date;
  lastAnamnesisAt: Date;
  deletedAt: Date;
}

export interface PatientMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: Patient[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface PatientFile {
  patient: Patient;
  teeth: Tooth[] | undefined;
}

export interface PatientFileInput {
  patient: Patient;
  teeth: Tooth[] | undefined;
}

export interface PatientFileMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: PatientFile[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface SelectedCategory {
  category: Category;
  selectedCategory: SelectedCategory | undefined;
}

export interface SelectedCategoryInput {
  category: Category;
  selectedCategory: SelectedCategory | undefined;
}

export interface SelectedCategoryMethods {
  all: ({ before, after }: { before?: string; after?: string }) => Promise<{
    data: SelectedCategory[];
    after?: string | null | undefined;
    before?: string | null | undefined;
  }>;
}

export interface Query {
  Address: AddressMethods;
  Manufacturer: ManufacturerMethods;
  Statistic: StatisticMethods;
  TreatmentLocalization: TreatmentLocalizationMethods;
  Category: CategoryMethods;
  Area: AreaMethods;
  Treatment: TreatmentMethods;
  TreatmentGroup: TreatmentGroupMethods;
  Finding: FindingMethods;
  Price: PriceMethods;
  ProductLocalization: ProductLocalizationMethods;
  Implant: ImplantMethods;
  Abutment: AbutmentMethods;
  HealingAbutment: HealingAbutmentMethods;
  Impression: ImpressionMethods;
  Membrane: MembraneMethods;
  CoverCap: CoverCapMethods;
  Screw: ScrewMethods;
  Product: ProductMethods;
  SelectedProduct: SelectedProductMethods;
  TreatmentDoc: TreatmentDocMethods;
  TreatmentConfig: TreatmentConfigMethods;
  FindingDoc: FindingDocMethods;
  LeftRoot: LeftRootMethods;
  MiddleRoot: MiddleRootMethods;
  RightRoot: RightRootMethods;
  LeftCrown: LeftCrownMethods;
  CenterCrown: CenterCrownMethods;
  OutsideCrown: OutsideCrownMethods;
  InsideCrown: InsideCrownMethods;
  RightCrown: RightCrownMethods;
  ToothNeck: ToothNeckMethods;
  RootAddOn: RootAddOnMethods;
  Root: RootMethods;
  Crown: CrownMethods;
  Tooth: ToothMethods;
  Patient: PatientMethods;
  PatientFile: PatientFileMethods;
  SelectedCategory: SelectedCategoryMethods;
}
