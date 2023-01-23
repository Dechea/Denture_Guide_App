/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: string;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Fauna_Long: any;
  Fauna_Time: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
}

export interface AssetConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
}

export interface AssetCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: InputMaybe<Scalars["Float"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
}

export interface AssetCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
}

export interface AssetCreateLocalizationInput {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
}

export interface AssetCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
}

export interface AssetCreateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
}

export interface AssetCreateOneInlineInput {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
}

/** Identifies documents */
export interface AssetManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum AssetOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  fileName_ASC = "fileName_ASC",
  fileName_DESC = "fileName_DESC",
  handle_ASC = "handle_ASC",
  handle_DESC = "handle_DESC",
  height_ASC = "height_ASC",
  height_DESC = "height_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  mimeType_ASC = "mimeType_ASC",
  mimeType_DESC = "mimeType_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  size_ASC = "size_ASC",
  size_DESC = "size_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  width_ASC = "width_ASC",
  width_DESC = "width_DESC",
}

/** Transformations for Assets */
export interface AssetTransformationInput {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars["Boolean"]>;
}

export interface AssetUpdateInput {
  fileName?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
}

export interface AssetUpdateLocalizationDataInput {
  fileName?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
}

export interface AssetUpdateLocalizationInput {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
}

export interface AssetUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
}

export interface AssetUpdateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
}

export interface AssetUpdateManyInput {
  fileName?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
}

export interface AssetUpdateManyLocalizationDataInput {
  fileName?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
}

export interface AssetUpdateManyLocalizationInput {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
}

export interface AssetUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
}

export interface AssetUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
}

export interface AssetUpdateOneInlineInput {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
}

export interface AssetUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
}

export interface AssetUpsertInput {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
}

export interface AssetUpsertLocalizationInput {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
}

export interface AssetUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface AssetWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
}

/** Identifies documents */
export interface AssetWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface AssetWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
}

/** References Asset record uniquely */
export interface AssetWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>;
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export interface ColorInput {
  hex?: InputMaybe<Scalars["Hex"]>;
  rgba?: InputMaybe<RGBAInput>;
}

export interface ConnectPositionInput {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars["ID"]>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars["ID"]>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars["Boolean"]>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars["Boolean"]>;
}

export enum DocumentFileTypes {
  doc = "doc",
  docx = "docx",
  html = "html",
  jpg = "jpg",
  odp = "odp",
  ods = "ods",
  odt = "odt",
  pdf = "pdf",
  png = "png",
  ppt = "ppt",
  pptx = "pptx",
  svg = "svg",
  txt = "txt",
  webp = "webp",
  xls = "xls",
  xlsx = "xlsx",
}

export interface DocumentOutputInput {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
}

/** Transformations for Documents */
export interface DocumentTransformationInput {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
}

export interface FaunaConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FaunaWhereUniqueInput;
}

export interface FaunaCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
}

export interface FaunaCreateManyInlineInput {
  /** Connect multiple existing Fauna documents */
  connect?: InputMaybe<Array<FaunaWhereUniqueInput>>;
  /** Create and connect multiple existing Fauna documents */
  create?: InputMaybe<Array<FaunaCreateInput>>;
}

export interface FaunaCreateOneInlineInput {
  /** Connect one existing Fauna document */
  connect?: InputMaybe<FaunaWhereUniqueInput>;
  /** Create and connect one Fauna document */
  create?: InputMaybe<FaunaCreateInput>;
}

/** Identifies documents */
export interface FaunaManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaunaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaunaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaunaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FaunaWhereStageInput>;
  documentInStages_none?: InputMaybe<FaunaWhereStageInput>;
  documentInStages_some?: InputMaybe<FaunaWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum FaunaOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface FaunaUpdateInput {
  /** No fields in update input */
  _?: InputMaybe<Scalars["String"]>;
}

export interface FaunaUpdateManyInlineInput {
  /** Connect multiple existing Fauna documents */
  connect?: InputMaybe<Array<FaunaConnectInput>>;
  /** Create and connect multiple Fauna documents */
  create?: InputMaybe<Array<FaunaCreateInput>>;
  /** Delete multiple Fauna documents */
  delete?: InputMaybe<Array<FaunaWhereUniqueInput>>;
  /** Disconnect multiple Fauna documents */
  disconnect?: InputMaybe<Array<FaunaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Fauna documents */
  set?: InputMaybe<Array<FaunaWhereUniqueInput>>;
  /** Update multiple Fauna documents */
  update?: InputMaybe<Array<FaunaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Fauna documents */
  upsert?: InputMaybe<Array<FaunaUpsertWithNestedWhereUniqueInput>>;
}

export interface FaunaUpdateManyInput {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars["String"]>;
}

export interface FaunaUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: FaunaUpdateManyInput;
  /** Document search */
  where: FaunaWhereInput;
}

export interface FaunaUpdateOneInlineInput {
  /** Connect existing Fauna document */
  connect?: InputMaybe<FaunaWhereUniqueInput>;
  /** Create and connect one Fauna document */
  create?: InputMaybe<FaunaCreateInput>;
  /** Delete currently connected Fauna document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Fauna document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Fauna document */
  update?: InputMaybe<FaunaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Fauna document */
  upsert?: InputMaybe<FaunaUpsertWithNestedWhereUniqueInput>;
}

export interface FaunaUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: FaunaUpdateInput;
  /** Unique document search */
  where: FaunaWhereUniqueInput;
}

export interface FaunaUpsertInput {
  /** Create document if it didn't exist */
  create: FaunaCreateInput;
  /** Update document if it exists */
  update: FaunaUpdateInput;
}

export interface FaunaUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: FaunaUpsertInput;
  /** Unique document search */
  where: FaunaWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface FaunaWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
}

/** Identifies documents */
export interface FaunaWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaunaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaunaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaunaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FaunaWhereStageInput>;
  documentInStages_none?: InputMaybe<FaunaWhereStageInput>;
  documentInStages_some?: InputMaybe<FaunaWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface FaunaWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaunaWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaunaWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaunaWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FaunaWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
}

/** References Fauna record uniquely */
export interface FaunaWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>;
}

export enum Fauna_CLS_PatientServing {
  LEGAL_AND_PRIVATE = "LEGAL_AND_PRIVATE",
  NONE = "NONE",
  PRIVATE = "PRIVATE",
}

export enum Fauna_CLS_RoleType {
  ADMINISTRATOR = "ADMINISTRATOR",
  ANALYST = "ANALYST",
  ASSISTANT = "ASSISTANT",
  DOCTOR = "DOCTOR",
  OWNER = "OWNER",
  RECEPTIONIST = "RECEPTIONIST",
  TRAINEE = "TRAINEE",
}

export enum Fauna_CLS_Type {
  LOCATION = "LOCATION",
  ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT",
  PRACTICE = "PRACTICE",
}

export enum Fauna_USR_DormantType {
  /** Code: 1 */
  COMPLETE = "COMPLETE",
  /** Code: 2 */
  PARTIAL = "PARTIAL",
}

export enum Fauna_USR_EmployeeStatus {
  APPROVED = "APPROVED",
  DEACTIVATED = "DEACTIVATED",
  PENDING = "PENDING",
}

export enum Fauna_USR_ExaminationCertificationResult {
  /** Code: 4 */
  AUTHENTICATION_CERTIFICATE_NOT_VALID = "AUTHENTICATION_CERTIFICATE_NOT_VALID",
  /**
   * Code: 3
   *
   * Update orders for the eGK could not be successfully determined or executed, because e.g. the specialist service of the is not available
   */
  NO_ONLINE_CONNECTION = "NO_ONLINE_CONNECTION",
  /**
   * Code: 6
   *
   * maximum offline period of the connector exceeded
   */
  REQUEST_TIMEOUT = "REQUEST_TIMEOUT",
  /**
   * Code: 5
   *
   * Online verification of the certificate is not technically possible
   */
  UNSUPPORTED_CERTIFICATE = "UNSUPPORTED_CERTIFICATE",
  /**
   * Code: 2
   *
   * Data on your insurance card is already up to date with insurance company server
   */
  UPDATE_NOT_REQUIRED = "UPDATE_NOT_REQUIRED",
  /**
   * Code: 1
   *
   * Update successful with latest data from insurance company's server
   */
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

export enum Fauna_USR_InsuranceType {
  LEGAL = "LEGAL",
  PRIVATE = "PRIVATE",
}

export enum Fauna_USR_LegalInsuredType {
  /** Insurance contract code: 3 */
  FAMILY_INSURED = "FAMILY_INSURED",
  /** Insurance contract code: 1 */
  MEMBER = "MEMBER",
  /** Insurance contract code: 5 */
  PENSIONERS_AND_FAMILY = "PENSIONERS_AND_FAMILY",
}

export enum Fauna_USR_PatientStatus {
  NOTIFIED_DELAY = "NOTIFIED_DELAY",
  NOT_ARRIVED = "NOT_ARRIVED",
  NOT_PRESENT = "NOT_PRESENT",
  TREATMENT = "TREATMENT",
  WAITROOM = "WAITROOM",
}

/** Residence registration number */
export enum Fauna_USR_WOP {
  /** Code: 52 */
  BADEN_WUERTTEMBERG = "BADEN_WUERTTEMBERG",
  /** Code: 71 */
  BAYERNS = "BAYERNS",
  /** Code: 72 */
  BERLIN = "BERLIN",
  /** Code: 02 */
  HAMBURG = "HAMBURG",
  /** Code: 46 */
  HESSEN = "HESSEN",
  /** Code: 83 */
  LAND_BRANDENBURG = "LAND_BRANDENBURG",
  /** Code: 03 */
  LAND_BREMEN = "LAND_BREMEN",
  /** Code: 78 */
  MECKLENBURG_VORPOMMERN = "MECKLENBURG_VORPOMMERN",
  /** Code: 17 */
  NIEDERSACHSEN = "NIEDERSACHSEN",
  /** Code: 38 */
  NORDRHEIN = "NORDRHEIN",
  /** Code: 51 */
  RHEINLAND_PFALZ = "RHEINLAND_PFALZ",
  /** Code: 73 */
  SAARLAND = "SAARLAND",
  /** Code: 98 */
  SACHSEN = "SACHSEN",
  /** Code: 88 */
  SACHSEN_ANHALT = "SACHSEN_ANHALT",
  /** Code: 01 */
  SCHLESWIG_HOLSTEIN = "SCHLESWIG_HOLSTEIN",
  /** Code: 93 */
  THUERINGEN = "THUERINGEN",
  /** Code: 20 */
  WESTFALEN_LIPPE = "WESTFALEN_LIPPE",
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  scale = "scale",
}

export interface ImageResizeInput {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars["Int"]>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars["Int"]>;
}

/** Transformations for Images */
export interface ImageTransformationInput {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
}

/** Locale system enumeration */
export enum Locale {
  de = "de",
  /** System locale */
  en = "en",
}

/** Input for a geolocation point with latitude and longitude */
export interface LocationInput {
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
}

export interface NoteConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NoteWhereUniqueInput;
}

export interface NoteCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  text: Scalars["RichTextAST"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
}

export interface NoteCreateManyInlineInput {
  /** Connect multiple existing Note documents */
  connect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  /** Create and connect multiple existing Note documents */
  create?: InputMaybe<Array<NoteCreateInput>>;
}

export interface NoteCreateOneInlineInput {
  /** Connect one existing Note document */
  connect?: InputMaybe<NoteWhereUniqueInput>;
  /** Create and connect one Note document */
  create?: InputMaybe<NoteCreateInput>;
}

/** Identifies documents */
export interface NoteManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NoteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NoteWhereStageInput>;
  documentInStages_none?: InputMaybe<NoteWhereStageInput>;
  documentInStages_some?: InputMaybe<NoteWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum NoteOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface NoteUpdateInput {
  text?: InputMaybe<Scalars["RichTextAST"]>;
}

export interface NoteUpdateManyInlineInput {
  /** Connect multiple existing Note documents */
  connect?: InputMaybe<Array<NoteConnectInput>>;
  /** Create and connect multiple Note documents */
  create?: InputMaybe<Array<NoteCreateInput>>;
  /** Delete multiple Note documents */
  delete?: InputMaybe<Array<NoteWhereUniqueInput>>;
  /** Disconnect multiple Note documents */
  disconnect?: InputMaybe<Array<NoteWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Note documents */
  set?: InputMaybe<Array<NoteWhereUniqueInput>>;
  /** Update multiple Note documents */
  update?: InputMaybe<Array<NoteUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Note documents */
  upsert?: InputMaybe<Array<NoteUpsertWithNestedWhereUniqueInput>>;
}

export interface NoteUpdateManyInput {
  text?: InputMaybe<Scalars["RichTextAST"]>;
}

export interface NoteUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: NoteUpdateManyInput;
  /** Document search */
  where: NoteWhereInput;
}

export interface NoteUpdateOneInlineInput {
  /** Connect existing Note document */
  connect?: InputMaybe<NoteWhereUniqueInput>;
  /** Create and connect one Note document */
  create?: InputMaybe<NoteCreateInput>;
  /** Delete currently connected Note document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Note document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Note document */
  update?: InputMaybe<NoteUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Note document */
  upsert?: InputMaybe<NoteUpsertWithNestedWhereUniqueInput>;
}

export interface NoteUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: NoteUpdateInput;
  /** Unique document search */
  where: NoteWhereUniqueInput;
}

export interface NoteUpsertInput {
  /** Create document if it didn't exist */
  create: NoteCreateInput;
  /** Update document if it exists */
  update: NoteUpdateInput;
}

export interface NoteUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: NoteUpsertInput;
  /** Unique document search */
  where: NoteWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface NoteWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
}

/** Identifies documents */
export interface NoteWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NoteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NoteWhereStageInput>;
  documentInStages_none?: InputMaybe<NoteWhereStageInput>;
  documentInStages_some?: InputMaybe<NoteWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface NoteWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NoteWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NoteWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NoteWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NoteWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
}

/** References Note record uniquely */
export interface NoteWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface PublishLocaleInput {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface RGBAInput {
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
}

export interface ScheduledOperationConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
}

export interface ScheduledOperationCreateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
}

export interface ScheduledOperationCreateOneInlineInput {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
}

/** Identifies documents */
export interface ScheduledOperationManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum ScheduledOperationOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  errorMessage_ASC = "errorMessage_ASC",
  errorMessage_DESC = "errorMessage_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  status_ASC = "status_ASC",
  status_DESC = "status_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
}

export interface ScheduledOperationUpdateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
}

export interface ScheduledOperationUpdateOneInlineInput {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

/** Identifies documents */
export interface ScheduledOperationWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References ScheduledOperation record uniquely */
export interface ScheduledOperationWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface ScheduledReleaseConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
}

export interface ScheduledReleaseCreateInput {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
}

export interface ScheduledReleaseCreateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
}

export interface ScheduledReleaseCreateOneInlineInput {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
}

/** Identifies documents */
export interface ScheduledReleaseManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum ScheduledReleaseOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  errorMessage_ASC = "errorMessage_ASC",
  errorMessage_DESC = "errorMessage_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  isActive_ASC = "isActive_ASC",
  isActive_DESC = "isActive_DESC",
  isImplicit_ASC = "isImplicit_ASC",
  isImplicit_DESC = "isImplicit_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  releaseAt_ASC = "releaseAt_ASC",
  releaseAt_DESC = "releaseAt_DESC",
  status_ASC = "status_ASC",
  status_DESC = "status_DESC",
  title_ASC = "title_ASC",
  title_DESC = "title_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
}

export interface ScheduledReleaseUpdateInput {
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface ScheduledReleaseUpdateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
}

export interface ScheduledReleaseUpdateManyInput {
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface ScheduledReleaseUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
}

export interface ScheduledReleaseUpdateOneInlineInput {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
}

export interface ScheduledReleaseUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
}

export interface ScheduledReleaseUpsertInput {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
}

export interface ScheduledReleaseUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
}

/** Identifies documents */
export interface ScheduledReleaseWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References ScheduledRelease record uniquely */
export interface ScheduledReleaseWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>;
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  DRAFT = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  PUBLISHED = "PUBLISHED",
}

export enum SystemDateTimeFieldVariation {
  BASE = "BASE",
  COMBINED = "COMBINED",
  LOCALIZATION = "LOCALIZATION",
}

export interface UnpublishLocaleInput {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
}

export interface UserConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
}

export interface UserCreateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
}

export interface UserCreateOneInlineInput {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
}

/** System User Kind */
export enum UserKind {
  MEMBER = "MEMBER",
  PAT = "PAT",
  PUBLIC = "PUBLIC",
  WEBHOOK = "WEBHOOK",
}

/** Identifies documents */
export interface UserManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
}

export enum UserOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  isActive_ASC = "isActive_ASC",
  isActive_DESC = "isActive_DESC",
  kind_ASC = "kind_ASC",
  kind_DESC = "kind_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  picture_ASC = "picture_ASC",
  picture_DESC = "picture_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface UserUpdateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
}

export interface UserUpdateOneInlineInput {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
}

/** This contains a set of filters that can be used to compare values internally */
export interface UserWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]>;
}

/** Identifies documents */
export interface UserWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface UserWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
}

/** References User record uniquely */
export interface UserWhereUniqueInput {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface VersionWhereInput {
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
}

export enum _FilterKind {
  AND = "AND",
  NOT = "NOT",
  OR = "OR",
  contains = "contains",
  contains_all = "contains_all",
  contains_none = "contains_none",
  contains_some = "contains_some",
  ends_with = "ends_with",
  eq = "eq",
  eq_not = "eq_not",
  gt = "gt",
  gte = "gte",
  in = "in",
  lt = "lt",
  lte = "lte",
  not_contains = "not_contains",
  not_ends_with = "not_ends_with",
  not_in = "not_in",
  not_starts_with = "not_starts_with",
  relational_every = "relational_every",
  relational_none = "relational_none",
  relational_single = "relational_single",
  relational_some = "relational_some",
  search = "search",
  starts_with = "starts_with",
}

export enum _MutationInputFieldKind {
  enum = "enum",
  relation = "relation",
  richText = "richText",
  richTextWithEmbeds = "richTextWithEmbeds",
  scalar = "scalar",
  union = "union",
  virtual = "virtual",
}

export enum _MutationKind {
  create = "create",
  delete = "delete",
  deleteMany = "deleteMany",
  publish = "publish",
  publishMany = "publishMany",
  schedulePublish = "schedulePublish",
  scheduleUnpublish = "scheduleUnpublish",
  unpublish = "unpublish",
  unpublishMany = "unpublishMany",
  update = "update",
  updateMany = "updateMany",
  upsert = "upsert",
}

export enum _OrderDirection {
  asc = "asc",
  desc = "desc",
}

export enum _RelationInputCardinality {
  many = "many",
  one = "one",
}

export enum _RelationInputKind {
  create = "create",
  update = "update",
}

export enum _RelationKind {
  regular = "regular",
  union = "union",
}

export enum _SystemDateTimeFieldVariation {
  base = "base",
  combined = "combined",
  localization = "localization",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  AssetOrderByInput: true,
  Boolean: true,
  Date: true,
  DateTime: true,
  DocumentFileTypes: true,
  FaunaOrderByInput: true,
  Fauna_CLS_PatientServing: true,
  Fauna_CLS_RoleType: true,
  Fauna_CLS_Type: true,
  Fauna_Long: true,
  Fauna_Time: true,
  Fauna_USR_DormantType: true,
  Fauna_USR_EmployeeStatus: true,
  Fauna_USR_ExaminationCertificationResult: true,
  Fauna_USR_InsuranceType: true,
  Fauna_USR_LegalInsuredType: true,
  Fauna_USR_PatientStatus: true,
  Fauna_USR_WOP: true,
  Float: true,
  Hex: true,
  ID: true,
  ImageFit: true,
  Int: true,
  Json: true,
  Locale: true,
  Long: true,
  NoteOrderByInput: true,
  RGBAHue: true,
  RGBATransparency: true,
  RichTextAST: true,
  ScheduledOperationOrderByInput: true,
  ScheduledOperationStatus: true,
  ScheduledReleaseOrderByInput: true,
  ScheduledReleaseStatus: true,
  Stage: true,
  String: true,
  SystemDateTimeFieldVariation: true,
  UserKind: true,
  UserOrderByInput: true,
  _FilterKind: true,
  _MutationInputFieldKind: true,
  _MutationKind: true,
  _OrderDirection: true,
  _RelationInputCardinality: true,
  _RelationInputKind: true,
  _RelationKind: true,
  _SystemDateTimeFieldVariation: true,
};
export const generatedSchema = {
  Aggregate: { __typename: { __type: "String!" }, count: { __type: "Int!" } },
  Asset: {
    __typename: { __type: "String!" },
    createdAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    createdBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    documentInStages: {
      __type: "[Asset!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    fileName: { __type: "String!" },
    handle: { __type: "String!" },
    height: { __type: "Float" },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    locale: { __type: "Locale!" },
    localizations: {
      __type: "[Asset!]!",
      __args: { includeCurrent: "Boolean!", locales: "[Locale!]!" },
    },
    mimeType: { __type: "String" },
    publishedAt: {
      __type: "DateTime",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    publishedBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        forceParentLocale: "Boolean",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    size: { __type: "Float" },
    stage: { __type: "Stage!" },
    updatedAt: {
      __type: "DateTime!",
      __args: { variation: "SystemDateTimeFieldVariation!" },
    },
    updatedBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    url: {
      __type: "String!",
      __args: { transformation: "AssetTransformationInput" },
    },
    width: { __type: "Float" },
  },
  AssetConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "AssetWhereUniqueInput!" },
  },
  AssetConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[AssetEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  AssetCreateInput: {
    createdAt: { __type: "DateTime" },
    fileName: { __type: "String!" },
    handle: { __type: "String!" },
    height: { __type: "Float" },
    localizations: { __type: "AssetCreateLocalizationsInput" },
    mimeType: { __type: "String" },
    size: { __type: "Float" },
    updatedAt: { __type: "DateTime" },
    width: { __type: "Float" },
  },
  AssetCreateLocalizationDataInput: {
    createdAt: { __type: "DateTime" },
    fileName: { __type: "String!" },
    handle: { __type: "String!" },
    height: { __type: "Float" },
    mimeType: { __type: "String" },
    size: { __type: "Float" },
    updatedAt: { __type: "DateTime" },
    width: { __type: "Float" },
  },
  AssetCreateLocalizationInput: {
    data: { __type: "AssetCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  AssetCreateLocalizationsInput: {
    create: { __type: "[AssetCreateLocalizationInput!]" },
  },
  AssetCreateManyInlineInput: {
    connect: { __type: "[AssetWhereUniqueInput!]" },
    create: { __type: "[AssetCreateInput!]" },
  },
  AssetCreateOneInlineInput: {
    connect: { __type: "AssetWhereUniqueInput" },
    create: { __type: "AssetCreateInput" },
  },
  AssetEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Asset!" },
  },
  AssetManyWhereInput: {
    AND: { __type: "[AssetWhereInput!]" },
    NOT: { __type: "[AssetWhereInput!]" },
    OR: { __type: "[AssetWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "AssetWhereStageInput" },
    documentInStages_none: { __type: "AssetWhereStageInput" },
    documentInStages_some: { __type: "AssetWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  AssetTransformationInput: {
    document: { __type: "DocumentTransformationInput" },
    image: { __type: "ImageTransformationInput" },
    validateOptions: { __type: "Boolean" },
  },
  AssetUpdateInput: {
    fileName: { __type: "String" },
    handle: { __type: "String" },
    height: { __type: "Float" },
    localizations: { __type: "AssetUpdateLocalizationsInput" },
    mimeType: { __type: "String" },
    size: { __type: "Float" },
    width: { __type: "Float" },
  },
  AssetUpdateLocalizationDataInput: {
    fileName: { __type: "String" },
    handle: { __type: "String" },
    height: { __type: "Float" },
    mimeType: { __type: "String" },
    size: { __type: "Float" },
    width: { __type: "Float" },
  },
  AssetUpdateLocalizationInput: {
    data: { __type: "AssetUpdateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  AssetUpdateLocalizationsInput: {
    create: { __type: "[AssetCreateLocalizationInput!]" },
    delete: { __type: "[Locale!]" },
    update: { __type: "[AssetUpdateLocalizationInput!]" },
    upsert: { __type: "[AssetUpsertLocalizationInput!]" },
  },
  AssetUpdateManyInlineInput: {
    connect: { __type: "[AssetConnectInput!]" },
    create: { __type: "[AssetCreateInput!]" },
    delete: { __type: "[AssetWhereUniqueInput!]" },
    disconnect: { __type: "[AssetWhereUniqueInput!]" },
    set: { __type: "[AssetWhereUniqueInput!]" },
    update: { __type: "[AssetUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[AssetUpsertWithNestedWhereUniqueInput!]" },
  },
  AssetUpdateManyInput: {
    fileName: { __type: "String" },
    height: { __type: "Float" },
    localizations: { __type: "AssetUpdateManyLocalizationsInput" },
    mimeType: { __type: "String" },
    size: { __type: "Float" },
    width: { __type: "Float" },
  },
  AssetUpdateManyLocalizationDataInput: {
    fileName: { __type: "String" },
    height: { __type: "Float" },
    mimeType: { __type: "String" },
    size: { __type: "Float" },
    width: { __type: "Float" },
  },
  AssetUpdateManyLocalizationInput: {
    data: { __type: "AssetUpdateManyLocalizationDataInput!" },
    locale: { __type: "Locale!" },
  },
  AssetUpdateManyLocalizationsInput: {
    update: { __type: "[AssetUpdateManyLocalizationInput!]" },
  },
  AssetUpdateManyWithNestedWhereInput: {
    data: { __type: "AssetUpdateManyInput!" },
    where: { __type: "AssetWhereInput!" },
  },
  AssetUpdateOneInlineInput: {
    connect: { __type: "AssetWhereUniqueInput" },
    create: { __type: "AssetCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "AssetUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "AssetUpsertWithNestedWhereUniqueInput" },
  },
  AssetUpdateWithNestedWhereUniqueInput: {
    data: { __type: "AssetUpdateInput!" },
    where: { __type: "AssetWhereUniqueInput!" },
  },
  AssetUpsertInput: {
    create: { __type: "AssetCreateInput!" },
    update: { __type: "AssetUpdateInput!" },
  },
  AssetUpsertLocalizationInput: {
    create: { __type: "AssetCreateLocalizationDataInput!" },
    locale: { __type: "Locale!" },
    update: { __type: "AssetUpdateLocalizationDataInput!" },
  },
  AssetUpsertWithNestedWhereUniqueInput: {
    data: { __type: "AssetUpsertInput!" },
    where: { __type: "AssetWhereUniqueInput!" },
  },
  AssetWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  AssetWhereInput: {
    AND: { __type: "[AssetWhereInput!]" },
    NOT: { __type: "[AssetWhereInput!]" },
    OR: { __type: "[AssetWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "AssetWhereStageInput" },
    documentInStages_none: { __type: "AssetWhereStageInput" },
    documentInStages_some: { __type: "AssetWhereStageInput" },
    fileName: { __type: "String" },
    fileName_contains: { __type: "String" },
    fileName_ends_with: { __type: "String" },
    fileName_in: { __type: "[String]" },
    fileName_not: { __type: "String" },
    fileName_not_contains: { __type: "String" },
    fileName_not_ends_with: { __type: "String" },
    fileName_not_in: { __type: "[String]" },
    fileName_not_starts_with: { __type: "String" },
    fileName_starts_with: { __type: "String" },
    handle: { __type: "String" },
    handle_contains: { __type: "String" },
    handle_ends_with: { __type: "String" },
    handle_in: { __type: "[String]" },
    handle_not: { __type: "String" },
    handle_not_contains: { __type: "String" },
    handle_not_ends_with: { __type: "String" },
    handle_not_in: { __type: "[String]" },
    handle_not_starts_with: { __type: "String" },
    handle_starts_with: { __type: "String" },
    height: { __type: "Float" },
    height_gt: { __type: "Float" },
    height_gte: { __type: "Float" },
    height_in: { __type: "[Float]" },
    height_lt: { __type: "Float" },
    height_lte: { __type: "Float" },
    height_not: { __type: "Float" },
    height_not_in: { __type: "[Float]" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    mimeType: { __type: "String" },
    mimeType_contains: { __type: "String" },
    mimeType_ends_with: { __type: "String" },
    mimeType_in: { __type: "[String]" },
    mimeType_not: { __type: "String" },
    mimeType_not_contains: { __type: "String" },
    mimeType_not_ends_with: { __type: "String" },
    mimeType_not_in: { __type: "[String]" },
    mimeType_not_starts_with: { __type: "String" },
    mimeType_starts_with: { __type: "String" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    size: { __type: "Float" },
    size_gt: { __type: "Float" },
    size_gte: { __type: "Float" },
    size_in: { __type: "[Float]" },
    size_lt: { __type: "Float" },
    size_lte: { __type: "Float" },
    size_not: { __type: "Float" },
    size_not_in: { __type: "[Float]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
    width: { __type: "Float" },
    width_gt: { __type: "Float" },
    width_gte: { __type: "Float" },
    width_in: { __type: "[Float]" },
    width_lt: { __type: "Float" },
    width_lte: { __type: "Float" },
    width_not: { __type: "Float" },
    width_not_in: { __type: "[Float]" },
  },
  AssetWhereStageInput: {
    AND: { __type: "[AssetWhereStageInput!]" },
    NOT: { __type: "[AssetWhereStageInput!]" },
    OR: { __type: "[AssetWhereStageInput!]" },
    compareWithParent: { __type: "AssetWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  AssetWhereUniqueInput: { id: { __type: "ID" } },
  BatchPayload: {
    __typename: { __type: "String!" },
    count: { __type: "Long!" },
  },
  Color: {
    __typename: { __type: "String!" },
    css: { __type: "String!" },
    hex: { __type: "Hex!" },
    rgba: { __type: "RGBA!" },
  },
  ColorInput: { hex: { __type: "Hex" }, rgba: { __type: "RGBAInput" } },
  ConnectPositionInput: {
    after: { __type: "ID" },
    before: { __type: "ID" },
    end: { __type: "Boolean" },
    start: { __type: "Boolean" },
  },
  DocumentOutputInput: { format: { __type: "DocumentFileTypes" } },
  DocumentTransformationInput: { output: { __type: "DocumentOutputInput" } },
  DocumentVersion: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    data: { __type: "Json" },
    id: { __type: "ID!" },
    revision: { __type: "Int!" },
    stage: { __type: "Stage!" },
  },
  Fauna: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    createdBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    documentInStages: {
      __type: "[Fauna!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    publishedAt: { __type: "DateTime" },
    publishedBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    role: { __type: "[Fauna_CLS_Role!]" },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        forceParentLocale: "Boolean",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    stage: { __type: "Stage!" },
    updatedAt: { __type: "DateTime!" },
    updatedBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    user: { __type: "[Fauna_USR_User!]" },
  },
  FaunaConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "FaunaWhereUniqueInput!" },
  },
  FaunaConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[FaunaEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  FaunaCreateInput: {
    createdAt: { __type: "DateTime" },
    updatedAt: { __type: "DateTime" },
  },
  FaunaCreateManyInlineInput: {
    connect: { __type: "[FaunaWhereUniqueInput!]" },
    create: { __type: "[FaunaCreateInput!]" },
  },
  FaunaCreateOneInlineInput: {
    connect: { __type: "FaunaWhereUniqueInput" },
    create: { __type: "FaunaCreateInput" },
  },
  FaunaEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Fauna!" },
  },
  FaunaManyWhereInput: {
    AND: { __type: "[FaunaWhereInput!]" },
    NOT: { __type: "[FaunaWhereInput!]" },
    OR: { __type: "[FaunaWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "FaunaWhereStageInput" },
    documentInStages_none: { __type: "FaunaWhereStageInput" },
    documentInStages_some: { __type: "FaunaWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  FaunaUpdateInput: { _: { __type: "String" } },
  FaunaUpdateManyInlineInput: {
    connect: { __type: "[FaunaConnectInput!]" },
    create: { __type: "[FaunaCreateInput!]" },
    delete: { __type: "[FaunaWhereUniqueInput!]" },
    disconnect: { __type: "[FaunaWhereUniqueInput!]" },
    set: { __type: "[FaunaWhereUniqueInput!]" },
    update: { __type: "[FaunaUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[FaunaUpsertWithNestedWhereUniqueInput!]" },
  },
  FaunaUpdateManyInput: { _: { __type: "String" } },
  FaunaUpdateManyWithNestedWhereInput: {
    data: { __type: "FaunaUpdateManyInput!" },
    where: { __type: "FaunaWhereInput!" },
  },
  FaunaUpdateOneInlineInput: {
    connect: { __type: "FaunaWhereUniqueInput" },
    create: { __type: "FaunaCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "FaunaUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "FaunaUpsertWithNestedWhereUniqueInput" },
  },
  FaunaUpdateWithNestedWhereUniqueInput: {
    data: { __type: "FaunaUpdateInput!" },
    where: { __type: "FaunaWhereUniqueInput!" },
  },
  FaunaUpsertInput: {
    create: { __type: "FaunaCreateInput!" },
    update: { __type: "FaunaUpdateInput!" },
  },
  FaunaUpsertWithNestedWhereUniqueInput: {
    data: { __type: "FaunaUpsertInput!" },
    where: { __type: "FaunaWhereUniqueInput!" },
  },
  FaunaWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  FaunaWhereInput: {
    AND: { __type: "[FaunaWhereInput!]" },
    NOT: { __type: "[FaunaWhereInput!]" },
    OR: { __type: "[FaunaWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "FaunaWhereStageInput" },
    documentInStages_none: { __type: "FaunaWhereStageInput" },
    documentInStages_some: { __type: "FaunaWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  FaunaWhereStageInput: {
    AND: { __type: "[FaunaWhereStageInput!]" },
    NOT: { __type: "[FaunaWhereStageInput!]" },
    OR: { __type: "[FaunaWhereStageInput!]" },
    compareWithParent: { __type: "FaunaWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  FaunaWhereUniqueInput: { id: { __type: "ID" } },
  Fauna_CLS_Address_E: {
    __typename: { __type: "String!" },
    city: { __type: "String!" },
    country: { __type: "String!" },
    postalCode: { __type: "String!" },
    street: { __type: "String!" },
    streetNo: { __type: "String!" },
  },
  Fauna_CLS_InsuranceAlliance: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Fauna_Long!" },
    address: { __type: "Fauna_CLS_Address_E" },
    email: { __type: "String" },
    id: { __type: "String!" },
    name: { __type: "String!" },
    phone: { __type: "String" },
  },
  Fauna_CLS_LegalEntityMasterData_E: {
    __typename: { __type: "String!" },
    insuranceAlliance: { __type: "Fauna_CLS_InsuranceAlliance" },
    settlementNumber: { __type: "String" },
    taxID: { __type: "String" },
  },
  Fauna_CLS_OrganizationalUnit: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Fauna_Long!" },
    address: { __type: "Fauna_CLS_Address_E" },
    childOrganizationalUnits: { __type: "String" },
    email: { __type: "String" },
    isLegalEntity: { __type: "Boolean!" },
    legalEntityMasterData: { __type: "Fauna_CLS_LegalEntityMasterData_E" },
    name: { __type: "String!" },
    parentOrganizationalUnit: { __type: "Fauna_CLS_OrganizationalUnit" },
    patientServing: { __type: "Fauna_CLS_PatientServing" },
    phone: { __type: "String" },
    type: { __type: "Fauna_CLS_Type" },
  },
  Fauna_CLS_OrganizationalUnits_E: {
    __typename: { __type: "String!" },
    auth0InvitationId: { __type: "String" },
    organizationalUnit: { __type: "Fauna_CLS_OrganizationalUnit" },
    roles: { __type: "[Fauna_CLS_Role]" },
  },
  Fauna_CLS_Role: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Fauna_Long!" },
    auth0Id: { __type: "String!" },
    organizationalUnitE: { __type: "Fauna_CLS_OrganizationalUnits_E" },
    type: { __type: "Fauna_CLS_RoleType!" },
  },
  Fauna_USR_Address: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Fauna_Long!" },
    city: { __type: "String!" },
    country: { __type: "String!" },
    createdAt: { __type: "Fauna_Time" },
    deletedAt: { __type: "Fauna_Time" },
    postalCode: { __type: "String!" },
    street: { __type: "String!" },
    streetNo: { __type: "String!" },
    user: { __type: "Fauna_USR_User!" },
  },
  Fauna_USR_CoPaymentStatus_E: {
    __typename: { __type: "String!" },
    status: { __type: "Boolean!" },
    validTo: { __type: "Fauna_Time" },
  },
  Fauna_USR_CostReimbursement_E: {
    __typename: { __type: "String!" },
    someField: { __type: "String" },
  },
  Fauna_USR_DormantEntitlement_E: {
    __typename: { __type: "String!" },
    end: { __type: "Fauna_Time" },
    start: { __type: "Fauna_Time" },
    type: { __type: "Fauna_USR_DormantType" },
  },
  Fauna_USR_Employee: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Fauna_Long!" },
    createdAt: { __type: "Fauna_Time" },
    deletedAt: { __type: "Fauna_Time" },
    licenceId: { __type: "String" },
    status: { __type: "Fauna_USR_EmployeeStatus!" },
    user: { __type: "Fauna_USR_User!" },
  },
  Fauna_USR_ExaminationCertificate: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Fauna_Long!" },
    error: { __type: "Fauna_USR_ExaminationCertificationResult" },
    hash: { __type: "String" },
    insuranceContract: { __type: "Fauna_USR_InsuranceContract" },
    ts: { __type: "Fauna_Time" },
  },
  Fauna_USR_InsuranceCompany: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Fauna_Long!" },
    country: { __type: "String" },
    createdAt: { __type: "Fauna_Time" },
    deletedAt: { __type: "Fauna_Time" },
    id: { __type: "String!" },
    name: { __type: "String!" },
    type: { __type: "Fauna_USR_InsuranceType!" },
    wop: { __type: "Fauna_USR_WOP!" },
  },
  Fauna_USR_InsuranceContract: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Fauna_Long!" },
    coPaymentStatus: { __type: "Fauna_USR_CoPaymentStatus_E" },
    company: { __type: "Fauna_USR_InsuranceCompany!" },
    costReimbursement: { __type: "Fauna_USR_CostReimbursement_E" },
    coverageEnd: { __type: "Fauna_Time" },
    coverageStart: { __type: "Fauna_Time" },
    dormantEntitlement: { __type: "Fauna_USR_DormantEntitlement_E" },
    examinationCertificates: { __type: "[Fauna_USR_ExaminationCertificate]" },
    id: { __type: "String!" },
    patient: { __type: "Fauna_USR_Patient!" },
    selectiveContract: { __type: "Fauna_USR_SelectiveContract_E" },
    settlingCostBearer: { __type: "Int" },
    type: { __type: "Fauna_USR_LegalInsuredType" },
  },
  Fauna_USR_Patient: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Fauna_Long!" },
    careLevel: { __type: "Int" },
    createdAt: { __type: "Fauna_Time" },
    deletedAt: { __type: "Fauna_Time" },
    familyDoctor: { __type: "String" },
    isWard: { __type: "Boolean" },
    lastAnamnesisAt: { __type: "Fauna_Time" },
    nextAppointment: { __type: "Fauna_Time" },
    primaryInsurance: { __type: "Fauna_USR_InsuranceContract" },
    status: { __type: "Fauna_USR_PatientStatus!" },
    user: { __type: "Fauna_USR_User!" },
  },
  Fauna_USR_SelectiveContract_E: {
    __typename: { __type: "String!" },
    dentist: { __type: "Int" },
    medical: { __type: "Int" },
    type: { __type: "String" },
  },
  Fauna_USR_User: {
    __typename: { __type: "String!" },
    _id: { __type: "ID!" },
    _ts: { __type: "Fauna_Long!" },
    addresses: { __type: "[Fauna_USR_Address]" },
    auth0Id: { __type: "String" },
    birthdate: { __type: "Fauna_Time" },
    createdAt: { __type: "Fauna_Time" },
    deletedAt: { __type: "Fauna_Time" },
    email: { __type: "String" },
    employee: { __type: "Fauna_USR_Employee" },
    firstName: { __type: "String!" },
    gender: { __type: "String" },
    image: { __type: "String" },
    lastName: { __type: "String!" },
    patient: { __type: "Fauna_USR_Patient" },
    phone: { __type: "String" },
    profession: { __type: "String" },
  },
  ImageResizeInput: {
    fit: { __type: "ImageFit" },
    height: { __type: "Int" },
    width: { __type: "Int" },
  },
  ImageTransformationInput: { resize: { __type: "ImageResizeInput" } },
  Location: {
    __typename: { __type: "String!" },
    distance: { __type: "Float!", __args: { from: "LocationInput!" } },
    latitude: { __type: "Float!" },
    longitude: { __type: "Float!" },
  },
  LocationInput: {
    latitude: { __type: "Float!" },
    longitude: { __type: "Float!" },
  },
  Node: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    stage: { __type: "Stage!" },
    $on: { __type: "$Node!" },
  },
  Note: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    createdBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    documentInStages: {
      __type: "[Note!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    history: {
      __type: "[Version!]!",
      __args: { limit: "Int!", skip: "Int!", stageOverride: "Stage" },
    },
    id: { __type: "ID!" },
    publishedAt: { __type: "DateTime" },
    publishedBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    scheduledIn: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        forceParentLocale: "Boolean",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    stage: { __type: "Stage!" },
    text: { __type: "RichText!" },
    updatedAt: { __type: "DateTime!" },
    updatedBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
  },
  NoteConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "NoteWhereUniqueInput!" },
  },
  NoteConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[NoteEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  NoteCreateInput: {
    createdAt: { __type: "DateTime" },
    text: { __type: "RichTextAST!" },
    updatedAt: { __type: "DateTime" },
  },
  NoteCreateManyInlineInput: {
    connect: { __type: "[NoteWhereUniqueInput!]" },
    create: { __type: "[NoteCreateInput!]" },
  },
  NoteCreateOneInlineInput: {
    connect: { __type: "NoteWhereUniqueInput" },
    create: { __type: "NoteCreateInput" },
  },
  NoteEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Note!" },
  },
  NoteManyWhereInput: {
    AND: { __type: "[NoteWhereInput!]" },
    NOT: { __type: "[NoteWhereInput!]" },
    OR: { __type: "[NoteWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "NoteWhereStageInput" },
    documentInStages_none: { __type: "NoteWhereStageInput" },
    documentInStages_some: { __type: "NoteWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  NoteUpdateInput: { text: { __type: "RichTextAST" } },
  NoteUpdateManyInlineInput: {
    connect: { __type: "[NoteConnectInput!]" },
    create: { __type: "[NoteCreateInput!]" },
    delete: { __type: "[NoteWhereUniqueInput!]" },
    disconnect: { __type: "[NoteWhereUniqueInput!]" },
    set: { __type: "[NoteWhereUniqueInput!]" },
    update: { __type: "[NoteUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[NoteUpsertWithNestedWhereUniqueInput!]" },
  },
  NoteUpdateManyInput: { text: { __type: "RichTextAST" } },
  NoteUpdateManyWithNestedWhereInput: {
    data: { __type: "NoteUpdateManyInput!" },
    where: { __type: "NoteWhereInput!" },
  },
  NoteUpdateOneInlineInput: {
    connect: { __type: "NoteWhereUniqueInput" },
    create: { __type: "NoteCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "NoteUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "NoteUpsertWithNestedWhereUniqueInput" },
  },
  NoteUpdateWithNestedWhereUniqueInput: {
    data: { __type: "NoteUpdateInput!" },
    where: { __type: "NoteWhereUniqueInput!" },
  },
  NoteUpsertInput: {
    create: { __type: "NoteCreateInput!" },
    update: { __type: "NoteUpdateInput!" },
  },
  NoteUpsertWithNestedWhereUniqueInput: {
    data: { __type: "NoteUpsertInput!" },
    where: { __type: "NoteWhereUniqueInput!" },
  },
  NoteWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  NoteWhereInput: {
    AND: { __type: "[NoteWhereInput!]" },
    NOT: { __type: "[NoteWhereInput!]" },
    OR: { __type: "[NoteWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    documentInStages_every: { __type: "NoteWhereStageInput" },
    documentInStages_none: { __type: "NoteWhereStageInput" },
    documentInStages_some: { __type: "NoteWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    scheduledIn_every: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_none: { __type: "ScheduledOperationWhereInput" },
    scheduledIn_some: { __type: "ScheduledOperationWhereInput" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  NoteWhereStageInput: {
    AND: { __type: "[NoteWhereStageInput!]" },
    NOT: { __type: "[NoteWhereStageInput!]" },
    OR: { __type: "[NoteWhereStageInput!]" },
    compareWithParent: { __type: "NoteWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  NoteWhereUniqueInput: { id: { __type: "ID" } },
  PageInfo: {
    __typename: { __type: "String!" },
    endCursor: { __type: "String" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    pageSize: { __type: "Int" },
    startCursor: { __type: "String" },
  },
  PublishLocaleInput: {
    locale: { __type: "Locale!" },
    stages: { __type: "[Stage!]!" },
  },
  RGBA: {
    __typename: { __type: "String!" },
    a: { __type: "RGBATransparency!" },
    b: { __type: "RGBAHue!" },
    g: { __type: "RGBAHue!" },
    r: { __type: "RGBAHue!" },
  },
  RGBAInput: {
    a: { __type: "RGBATransparency!" },
    b: { __type: "RGBAHue!" },
    g: { __type: "RGBAHue!" },
    r: { __type: "RGBAHue!" },
  },
  RichText: {
    __typename: { __type: "String!" },
    html: { __type: "String!" },
    markdown: { __type: "String!" },
    raw: { __type: "RichTextAST!" },
    text: { __type: "String!" },
  },
  ScheduledOperation: {
    __typename: { __type: "String!" },
    affectedDocuments: {
      __type: "[ScheduledOperationAffectedDocument!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        forceParentLocale: "Boolean",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
      },
    },
    createdAt: { __type: "DateTime!" },
    createdBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    description: { __type: "String" },
    documentInStages: {
      __type: "[ScheduledOperation!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    errorMessage: { __type: "String" },
    id: { __type: "ID!" },
    publishedAt: { __type: "DateTime" },
    publishedBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    rawPayload: { __type: "Json!" },
    release: {
      __type: "ScheduledRelease",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    stage: { __type: "Stage!" },
    status: { __type: "ScheduledOperationStatus!" },
    updatedAt: { __type: "DateTime!" },
    updatedBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
  },
  ScheduledOperationAffectedDocument: {
    __typename: { __type: "String!" },
    $on: { __type: "$ScheduledOperationAffectedDocument!" },
  },
  ScheduledOperationConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "ScheduledOperationWhereUniqueInput!" },
  },
  ScheduledOperationConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[ScheduledOperationEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ScheduledOperationCreateManyInlineInput: {
    connect: { __type: "[ScheduledOperationWhereUniqueInput!]" },
  },
  ScheduledOperationCreateOneInlineInput: {
    connect: { __type: "ScheduledOperationWhereUniqueInput" },
  },
  ScheduledOperationEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScheduledOperation!" },
  },
  ScheduledOperationManyWhereInput: {
    AND: { __type: "[ScheduledOperationWhereInput!]" },
    NOT: { __type: "[ScheduledOperationWhereInput!]" },
    OR: { __type: "[ScheduledOperationWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    errorMessage: { __type: "String" },
    errorMessage_contains: { __type: "String" },
    errorMessage_ends_with: { __type: "String" },
    errorMessage_in: { __type: "[String]" },
    errorMessage_not: { __type: "String" },
    errorMessage_not_contains: { __type: "String" },
    errorMessage_not_ends_with: { __type: "String" },
    errorMessage_not_in: { __type: "[String]" },
    errorMessage_not_starts_with: { __type: "String" },
    errorMessage_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    release: { __type: "ScheduledReleaseWhereInput" },
    status: { __type: "ScheduledOperationStatus" },
    status_in: { __type: "[ScheduledOperationStatus]" },
    status_not: { __type: "ScheduledOperationStatus" },
    status_not_in: { __type: "[ScheduledOperationStatus]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ScheduledOperationUpdateManyInlineInput: {
    connect: { __type: "[ScheduledOperationConnectInput!]" },
    disconnect: { __type: "[ScheduledOperationWhereUniqueInput!]" },
    set: { __type: "[ScheduledOperationWhereUniqueInput!]" },
  },
  ScheduledOperationUpdateOneInlineInput: {
    connect: { __type: "ScheduledOperationWhereUniqueInput" },
    disconnect: { __type: "Boolean" },
  },
  ScheduledOperationWhereInput: {
    AND: { __type: "[ScheduledOperationWhereInput!]" },
    NOT: { __type: "[ScheduledOperationWhereInput!]" },
    OR: { __type: "[ScheduledOperationWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    errorMessage: { __type: "String" },
    errorMessage_contains: { __type: "String" },
    errorMessage_ends_with: { __type: "String" },
    errorMessage_in: { __type: "[String]" },
    errorMessage_not: { __type: "String" },
    errorMessage_not_contains: { __type: "String" },
    errorMessage_not_ends_with: { __type: "String" },
    errorMessage_not_in: { __type: "[String]" },
    errorMessage_not_starts_with: { __type: "String" },
    errorMessage_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    release: { __type: "ScheduledReleaseWhereInput" },
    status: { __type: "ScheduledOperationStatus" },
    status_in: { __type: "[ScheduledOperationStatus]" },
    status_not: { __type: "ScheduledOperationStatus" },
    status_not_in: { __type: "[ScheduledOperationStatus]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ScheduledOperationWhereUniqueInput: { id: { __type: "ID" } },
  ScheduledRelease: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    createdBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    description: { __type: "String" },
    documentInStages: {
      __type: "[ScheduledRelease!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    errorMessage: { __type: "String" },
    id: { __type: "ID!" },
    isActive: { __type: "Boolean!" },
    isImplicit: { __type: "Boolean!" },
    operations: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        forceParentLocale: "Boolean",
        last: "Int",
        locales: "[Locale!]",
        orderBy: "ScheduledOperationOrderByInput",
        skip: "Int",
        where: "ScheduledOperationWhereInput",
      },
    },
    publishedAt: { __type: "DateTime" },
    publishedBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
    releaseAt: { __type: "DateTime" },
    stage: { __type: "Stage!" },
    status: { __type: "ScheduledReleaseStatus!" },
    title: { __type: "String" },
    updatedAt: { __type: "DateTime!" },
    updatedBy: {
      __type: "User",
      __args: { forceParentLocale: "Boolean", locales: "[Locale!]" },
    },
  },
  ScheduledReleaseConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "ScheduledReleaseWhereUniqueInput!" },
  },
  ScheduledReleaseConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[ScheduledReleaseEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  ScheduledReleaseCreateInput: {
    createdAt: { __type: "DateTime" },
    description: { __type: "String" },
    errorMessage: { __type: "String" },
    isActive: { __type: "Boolean" },
    releaseAt: { __type: "DateTime" },
    title: { __type: "String" },
    updatedAt: { __type: "DateTime" },
  },
  ScheduledReleaseCreateManyInlineInput: {
    connect: { __type: "[ScheduledReleaseWhereUniqueInput!]" },
    create: { __type: "[ScheduledReleaseCreateInput!]" },
  },
  ScheduledReleaseCreateOneInlineInput: {
    connect: { __type: "ScheduledReleaseWhereUniqueInput" },
    create: { __type: "ScheduledReleaseCreateInput" },
  },
  ScheduledReleaseEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScheduledRelease!" },
  },
  ScheduledReleaseManyWhereInput: {
    AND: { __type: "[ScheduledReleaseWhereInput!]" },
    NOT: { __type: "[ScheduledReleaseWhereInput!]" },
    OR: { __type: "[ScheduledReleaseWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    errorMessage: { __type: "String" },
    errorMessage_contains: { __type: "String" },
    errorMessage_ends_with: { __type: "String" },
    errorMessage_in: { __type: "[String]" },
    errorMessage_not: { __type: "String" },
    errorMessage_not_contains: { __type: "String" },
    errorMessage_not_ends_with: { __type: "String" },
    errorMessage_not_in: { __type: "[String]" },
    errorMessage_not_starts_with: { __type: "String" },
    errorMessage_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    isActive: { __type: "Boolean" },
    isActive_not: { __type: "Boolean" },
    isImplicit: { __type: "Boolean" },
    isImplicit_not: { __type: "Boolean" },
    operations_every: { __type: "ScheduledOperationWhereInput" },
    operations_none: { __type: "ScheduledOperationWhereInput" },
    operations_some: { __type: "ScheduledOperationWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    releaseAt: { __type: "DateTime" },
    releaseAt_gt: { __type: "DateTime" },
    releaseAt_gte: { __type: "DateTime" },
    releaseAt_in: { __type: "[DateTime]" },
    releaseAt_lt: { __type: "DateTime" },
    releaseAt_lte: { __type: "DateTime" },
    releaseAt_not: { __type: "DateTime" },
    releaseAt_not_in: { __type: "[DateTime]" },
    status: { __type: "ScheduledReleaseStatus" },
    status_in: { __type: "[ScheduledReleaseStatus]" },
    status_not: { __type: "ScheduledReleaseStatus" },
    status_not_in: { __type: "[ScheduledReleaseStatus]" },
    title: { __type: "String" },
    title_contains: { __type: "String" },
    title_ends_with: { __type: "String" },
    title_in: { __type: "[String]" },
    title_not: { __type: "String" },
    title_not_contains: { __type: "String" },
    title_not_ends_with: { __type: "String" },
    title_not_in: { __type: "[String]" },
    title_not_starts_with: { __type: "String" },
    title_starts_with: { __type: "String" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ScheduledReleaseUpdateInput: {
    description: { __type: "String" },
    errorMessage: { __type: "String" },
    isActive: { __type: "Boolean" },
    releaseAt: { __type: "DateTime" },
    title: { __type: "String" },
  },
  ScheduledReleaseUpdateManyInlineInput: {
    connect: { __type: "[ScheduledReleaseConnectInput!]" },
    create: { __type: "[ScheduledReleaseCreateInput!]" },
    delete: { __type: "[ScheduledReleaseWhereUniqueInput!]" },
    disconnect: { __type: "[ScheduledReleaseWhereUniqueInput!]" },
    set: { __type: "[ScheduledReleaseWhereUniqueInput!]" },
    update: { __type: "[ScheduledReleaseUpdateWithNestedWhereUniqueInput!]" },
    upsert: { __type: "[ScheduledReleaseUpsertWithNestedWhereUniqueInput!]" },
  },
  ScheduledReleaseUpdateManyInput: {
    description: { __type: "String" },
    errorMessage: { __type: "String" },
    isActive: { __type: "Boolean" },
    releaseAt: { __type: "DateTime" },
    title: { __type: "String" },
  },
  ScheduledReleaseUpdateManyWithNestedWhereInput: {
    data: { __type: "ScheduledReleaseUpdateManyInput!" },
    where: { __type: "ScheduledReleaseWhereInput!" },
  },
  ScheduledReleaseUpdateOneInlineInput: {
    connect: { __type: "ScheduledReleaseWhereUniqueInput" },
    create: { __type: "ScheduledReleaseCreateInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "ScheduledReleaseUpdateWithNestedWhereUniqueInput" },
    upsert: { __type: "ScheduledReleaseUpsertWithNestedWhereUniqueInput" },
  },
  ScheduledReleaseUpdateWithNestedWhereUniqueInput: {
    data: { __type: "ScheduledReleaseUpdateInput!" },
    where: { __type: "ScheduledReleaseWhereUniqueInput!" },
  },
  ScheduledReleaseUpsertInput: {
    create: { __type: "ScheduledReleaseCreateInput!" },
    update: { __type: "ScheduledReleaseUpdateInput!" },
  },
  ScheduledReleaseUpsertWithNestedWhereUniqueInput: {
    data: { __type: "ScheduledReleaseUpsertInput!" },
    where: { __type: "ScheduledReleaseWhereUniqueInput!" },
  },
  ScheduledReleaseWhereInput: {
    AND: { __type: "[ScheduledReleaseWhereInput!]" },
    NOT: { __type: "[ScheduledReleaseWhereInput!]" },
    OR: { __type: "[ScheduledReleaseWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    createdBy: { __type: "UserWhereInput" },
    description: { __type: "String" },
    description_contains: { __type: "String" },
    description_ends_with: { __type: "String" },
    description_in: { __type: "[String]" },
    description_not: { __type: "String" },
    description_not_contains: { __type: "String" },
    description_not_ends_with: { __type: "String" },
    description_not_in: { __type: "[String]" },
    description_not_starts_with: { __type: "String" },
    description_starts_with: { __type: "String" },
    errorMessage: { __type: "String" },
    errorMessage_contains: { __type: "String" },
    errorMessage_ends_with: { __type: "String" },
    errorMessage_in: { __type: "[String]" },
    errorMessage_not: { __type: "String" },
    errorMessage_not_contains: { __type: "String" },
    errorMessage_not_ends_with: { __type: "String" },
    errorMessage_not_in: { __type: "[String]" },
    errorMessage_not_starts_with: { __type: "String" },
    errorMessage_starts_with: { __type: "String" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    isActive: { __type: "Boolean" },
    isActive_not: { __type: "Boolean" },
    isImplicit: { __type: "Boolean" },
    isImplicit_not: { __type: "Boolean" },
    operations_every: { __type: "ScheduledOperationWhereInput" },
    operations_none: { __type: "ScheduledOperationWhereInput" },
    operations_some: { __type: "ScheduledOperationWhereInput" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    publishedBy: { __type: "UserWhereInput" },
    releaseAt: { __type: "DateTime" },
    releaseAt_gt: { __type: "DateTime" },
    releaseAt_gte: { __type: "DateTime" },
    releaseAt_in: { __type: "[DateTime]" },
    releaseAt_lt: { __type: "DateTime" },
    releaseAt_lte: { __type: "DateTime" },
    releaseAt_not: { __type: "DateTime" },
    releaseAt_not_in: { __type: "[DateTime]" },
    status: { __type: "ScheduledReleaseStatus" },
    status_in: { __type: "[ScheduledReleaseStatus]" },
    status_not: { __type: "ScheduledReleaseStatus" },
    status_not_in: { __type: "[ScheduledReleaseStatus]" },
    title: { __type: "String" },
    title_contains: { __type: "String" },
    title_ends_with: { __type: "String" },
    title_in: { __type: "[String]" },
    title_not: { __type: "String" },
    title_not_contains: { __type: "String" },
    title_not_ends_with: { __type: "String" },
    title_not_in: { __type: "[String]" },
    title_not_starts_with: { __type: "String" },
    title_starts_with: { __type: "String" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
    updatedBy: { __type: "UserWhereInput" },
  },
  ScheduledReleaseWhereUniqueInput: { id: { __type: "ID" } },
  UnpublishLocaleInput: {
    locale: { __type: "Locale!" },
    stages: { __type: "[Stage!]!" },
  },
  User: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    documentInStages: {
      __type: "[User!]!",
      __args: {
        includeCurrent: "Boolean!",
        inheritLocale: "Boolean!",
        stages: "[Stage!]!",
      },
    },
    id: { __type: "ID!" },
    isActive: { __type: "Boolean!" },
    kind: { __type: "UserKind!" },
    name: { __type: "String!" },
    picture: { __type: "String" },
    publishedAt: { __type: "DateTime" },
    stage: { __type: "Stage!" },
    updatedAt: { __type: "DateTime!" },
  },
  UserConnectInput: {
    position: { __type: "ConnectPositionInput" },
    where: { __type: "UserWhereUniqueInput!" },
  },
  UserConnection: {
    __typename: { __type: "String!" },
    aggregate: { __type: "Aggregate!" },
    edges: { __type: "[UserEdge!]!" },
    pageInfo: { __type: "PageInfo!" },
  },
  UserCreateManyInlineInput: { connect: { __type: "[UserWhereUniqueInput!]" } },
  UserCreateOneInlineInput: { connect: { __type: "UserWhereUniqueInput" } },
  UserEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "User!" },
  },
  UserManyWhereInput: {
    AND: { __type: "[UserWhereInput!]" },
    NOT: { __type: "[UserWhereInput!]" },
    OR: { __type: "[UserWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    documentInStages_every: { __type: "UserWhereStageInput" },
    documentInStages_none: { __type: "UserWhereStageInput" },
    documentInStages_some: { __type: "UserWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    isActive: { __type: "Boolean" },
    isActive_not: { __type: "Boolean" },
    kind: { __type: "UserKind" },
    kind_in: { __type: "[UserKind]" },
    kind_not: { __type: "UserKind" },
    kind_not_in: { __type: "[UserKind]" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    picture: { __type: "String" },
    picture_contains: { __type: "String" },
    picture_ends_with: { __type: "String" },
    picture_in: { __type: "[String]" },
    picture_not: { __type: "String" },
    picture_not_contains: { __type: "String" },
    picture_not_ends_with: { __type: "String" },
    picture_not_in: { __type: "[String]" },
    picture_not_starts_with: { __type: "String" },
    picture_starts_with: { __type: "String" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
  },
  UserUpdateManyInlineInput: {
    connect: { __type: "[UserConnectInput!]" },
    disconnect: { __type: "[UserWhereUniqueInput!]" },
    set: { __type: "[UserWhereUniqueInput!]" },
  },
  UserUpdateOneInlineInput: {
    connect: { __type: "UserWhereUniqueInput" },
    disconnect: { __type: "Boolean" },
  },
  UserWhereComparatorInput: { outdated_to: { __type: "Boolean" } },
  UserWhereInput: {
    AND: { __type: "[UserWhereInput!]" },
    NOT: { __type: "[UserWhereInput!]" },
    OR: { __type: "[UserWhereInput!]" },
    _search: { __type: "String" },
    createdAt: { __type: "DateTime" },
    createdAt_gt: { __type: "DateTime" },
    createdAt_gte: { __type: "DateTime" },
    createdAt_in: { __type: "[DateTime]" },
    createdAt_lt: { __type: "DateTime" },
    createdAt_lte: { __type: "DateTime" },
    createdAt_not: { __type: "DateTime" },
    createdAt_not_in: { __type: "[DateTime]" },
    documentInStages_every: { __type: "UserWhereStageInput" },
    documentInStages_none: { __type: "UserWhereStageInput" },
    documentInStages_some: { __type: "UserWhereStageInput" },
    id: { __type: "ID" },
    id_contains: { __type: "ID" },
    id_ends_with: { __type: "ID" },
    id_in: { __type: "[ID]" },
    id_not: { __type: "ID" },
    id_not_contains: { __type: "ID" },
    id_not_ends_with: { __type: "ID" },
    id_not_in: { __type: "[ID]" },
    id_not_starts_with: { __type: "ID" },
    id_starts_with: { __type: "ID" },
    isActive: { __type: "Boolean" },
    isActive_not: { __type: "Boolean" },
    kind: { __type: "UserKind" },
    kind_in: { __type: "[UserKind]" },
    kind_not: { __type: "UserKind" },
    kind_not_in: { __type: "[UserKind]" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_in: { __type: "[String]" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_in: { __type: "[String]" },
    name_not_starts_with: { __type: "String" },
    name_starts_with: { __type: "String" },
    picture: { __type: "String" },
    picture_contains: { __type: "String" },
    picture_ends_with: { __type: "String" },
    picture_in: { __type: "[String]" },
    picture_not: { __type: "String" },
    picture_not_contains: { __type: "String" },
    picture_not_ends_with: { __type: "String" },
    picture_not_in: { __type: "[String]" },
    picture_not_starts_with: { __type: "String" },
    picture_starts_with: { __type: "String" },
    publishedAt: { __type: "DateTime" },
    publishedAt_gt: { __type: "DateTime" },
    publishedAt_gte: { __type: "DateTime" },
    publishedAt_in: { __type: "[DateTime]" },
    publishedAt_lt: { __type: "DateTime" },
    publishedAt_lte: { __type: "DateTime" },
    publishedAt_not: { __type: "DateTime" },
    publishedAt_not_in: { __type: "[DateTime]" },
    updatedAt: { __type: "DateTime" },
    updatedAt_gt: { __type: "DateTime" },
    updatedAt_gte: { __type: "DateTime" },
    updatedAt_in: { __type: "[DateTime]" },
    updatedAt_lt: { __type: "DateTime" },
    updatedAt_lte: { __type: "DateTime" },
    updatedAt_not: { __type: "DateTime" },
    updatedAt_not_in: { __type: "[DateTime]" },
  },
  UserWhereStageInput: {
    AND: { __type: "[UserWhereStageInput!]" },
    NOT: { __type: "[UserWhereStageInput!]" },
    OR: { __type: "[UserWhereStageInput!]" },
    compareWithParent: { __type: "UserWhereComparatorInput" },
    stage: { __type: "Stage" },
  },
  UserWhereUniqueInput: { id: { __type: "ID" } },
  Version: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    id: { __type: "ID!" },
    revision: { __type: "Int!" },
    stage: { __type: "Stage!" },
  },
  VersionWhereInput: {
    id: { __type: "ID!" },
    revision: { __type: "Int!" },
    stage: { __type: "Stage!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createAsset: { __type: "Asset", __args: { data: "AssetCreateInput!" } },
    createFauna: { __type: "Fauna", __args: { data: "FaunaCreateInput!" } },
    createNote: { __type: "Note", __args: { data: "NoteCreateInput!" } },
    createScheduledRelease: {
      __type: "ScheduledRelease",
      __args: { data: "ScheduledReleaseCreateInput!" },
    },
    deleteAsset: {
      __type: "Asset",
      __args: { where: "AssetWhereUniqueInput!" },
    },
    deleteFauna: {
      __type: "Fauna",
      __args: { where: "FaunaWhereUniqueInput!" },
    },
    deleteManyAssets: {
      __type: "BatchPayload!",
      __args: { where: "AssetManyWhereInput" },
    },
    deleteManyAssetsConnection: {
      __type: "AssetConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "AssetManyWhereInput",
      },
    },
    deleteManyFaunas: {
      __type: "BatchPayload!",
      __args: { where: "FaunaManyWhereInput" },
    },
    deleteManyFaunasConnection: {
      __type: "FaunaConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "FaunaManyWhereInput",
      },
    },
    deleteManyNotes: {
      __type: "BatchPayload!",
      __args: { where: "NoteManyWhereInput" },
    },
    deleteManyNotesConnection: {
      __type: "NoteConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "NoteManyWhereInput",
      },
    },
    deleteNote: { __type: "Note", __args: { where: "NoteWhereUniqueInput!" } },
    deleteScheduledOperation: {
      __type: "ScheduledOperation",
      __args: { where: "ScheduledOperationWhereUniqueInput!" },
    },
    deleteScheduledRelease: {
      __type: "ScheduledRelease",
      __args: { where: "ScheduledReleaseWhereUniqueInput!" },
    },
    publishAsset: {
      __type: "Asset",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "AssetWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    publishFauna: {
      __type: "Fauna",
      __args: { to: "[Stage!]!", where: "FaunaWhereUniqueInput!" },
    },
    publishManyAssets: {
      __type: "BatchPayload!",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        to: "[Stage!]!",
        where: "AssetManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyAssetsConnection: {
      __type: "AssetConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        locales: "[Locale!]",
        publishBase: "Boolean",
        skip: "Int",
        to: "[Stage!]!",
        where: "AssetManyWhereInput",
        withDefaultLocale: "Boolean",
      },
    },
    publishManyFaunas: {
      __type: "BatchPayload!",
      __args: { to: "[Stage!]!", where: "FaunaManyWhereInput" },
    },
    publishManyFaunasConnection: {
      __type: "FaunaConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        skip: "Int",
        to: "[Stage!]!",
        where: "FaunaManyWhereInput",
      },
    },
    publishManyNotes: {
      __type: "BatchPayload!",
      __args: { to: "[Stage!]!", where: "NoteManyWhereInput" },
    },
    publishManyNotesConnection: {
      __type: "NoteConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "Stage",
        last: "Int",
        skip: "Int",
        to: "[Stage!]!",
        where: "NoteManyWhereInput",
      },
    },
    publishNote: {
      __type: "Note",
      __args: { to: "[Stage!]!", where: "NoteWhereUniqueInput!" },
    },
    schedulePublishAsset: {
      __type: "Asset",
      __args: {
        locales: "[Locale!]",
        publishBase: "Boolean",
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "AssetWhereUniqueInput!",
        withDefaultLocale: "Boolean",
      },
    },
    schedulePublishFauna: {
      __type: "Fauna",
      __args: {
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "FaunaWhereUniqueInput!",
      },
    },
    schedulePublishNote: {
      __type: "Note",
      __args: {
        releaseAt: "DateTime",
        releaseId: "String",
        to: "[Stage!]!",
        where: "NoteWhereUniqueInput!",
      },
    },
    scheduleUnpublishAsset: {
      __type: "Asset",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        releaseAt: "DateTime",
        releaseId: "String",
        unpublishBase: "Boolean",
        where: "AssetWhereUniqueInput!",
      },
    },
    scheduleUnpublishFauna: {
      __type: "Fauna",
      __args: {
        from: "[Stage!]!",
        releaseAt: "DateTime",
        releaseId: "String",
        where: "FaunaWhereUniqueInput!",
      },
    },
    scheduleUnpublishNote: {
      __type: "Note",
      __args: {
        from: "[Stage!]!",
        releaseAt: "DateTime",
        releaseId: "String",
        where: "NoteWhereUniqueInput!",
      },
    },
    unpublishAsset: {
      __type: "Asset",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "AssetWhereUniqueInput!",
      },
    },
    unpublishFauna: {
      __type: "Fauna",
      __args: { from: "[Stage!]!", where: "FaunaWhereUniqueInput!" },
    },
    unpublishManyAssets: {
      __type: "BatchPayload!",
      __args: {
        from: "[Stage!]!",
        locales: "[Locale!]",
        unpublishBase: "Boolean",
        where: "AssetManyWhereInput",
      },
    },
    unpublishManyAssetsConnection: {
      __type: "AssetConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        locales: "[Locale!]",
        skip: "Int",
        stage: "Stage",
        unpublishBase: "Boolean",
        where: "AssetManyWhereInput",
      },
    },
    unpublishManyFaunas: {
      __type: "BatchPayload!",
      __args: { from: "[Stage!]!", where: "FaunaManyWhereInput" },
    },
    unpublishManyFaunasConnection: {
      __type: "FaunaConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        skip: "Int",
        stage: "Stage",
        where: "FaunaManyWhereInput",
      },
    },
    unpublishManyNotes: {
      __type: "BatchPayload!",
      __args: { from: "[Stage!]!", where: "NoteManyWhereInput" },
    },
    unpublishManyNotesConnection: {
      __type: "NoteConnection!",
      __args: {
        after: "ID",
        before: "ID",
        first: "Int",
        from: "[Stage!]!",
        last: "Int",
        skip: "Int",
        stage: "Stage",
        where: "NoteManyWhereInput",
      },
    },
    unpublishNote: {
      __type: "Note",
      __args: { from: "[Stage!]!", where: "NoteWhereUniqueInput!" },
    },
    updateAsset: {
      __type: "Asset",
      __args: { data: "AssetUpdateInput!", where: "AssetWhereUniqueInput!" },
    },
    updateFauna: {
      __type: "Fauna",
      __args: { data: "FaunaUpdateInput!", where: "FaunaWhereUniqueInput!" },
    },
    updateManyAssets: {
      __type: "BatchPayload!",
      __args: { data: "AssetUpdateManyInput!", where: "AssetManyWhereInput" },
    },
    updateManyAssetsConnection: {
      __type: "AssetConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "AssetUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "AssetManyWhereInput",
      },
    },
    updateManyFaunas: {
      __type: "BatchPayload!",
      __args: { data: "FaunaUpdateManyInput!", where: "FaunaManyWhereInput" },
    },
    updateManyFaunasConnection: {
      __type: "FaunaConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "FaunaUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "FaunaManyWhereInput",
      },
    },
    updateManyNotes: {
      __type: "BatchPayload!",
      __args: { data: "NoteUpdateManyInput!", where: "NoteManyWhereInput" },
    },
    updateManyNotesConnection: {
      __type: "NoteConnection!",
      __args: {
        after: "ID",
        before: "ID",
        data: "NoteUpdateManyInput!",
        first: "Int",
        last: "Int",
        skip: "Int",
        where: "NoteManyWhereInput",
      },
    },
    updateNote: {
      __type: "Note",
      __args: { data: "NoteUpdateInput!", where: "NoteWhereUniqueInput!" },
    },
    updateScheduledRelease: {
      __type: "ScheduledRelease",
      __args: {
        data: "ScheduledReleaseUpdateInput!",
        where: "ScheduledReleaseWhereUniqueInput!",
      },
    },
    upsertAsset: {
      __type: "Asset",
      __args: { upsert: "AssetUpsertInput!", where: "AssetWhereUniqueInput!" },
    },
    upsertFauna: {
      __type: "Fauna",
      __args: { upsert: "FaunaUpsertInput!", where: "FaunaWhereUniqueInput!" },
    },
    upsertNote: {
      __type: "Note",
      __args: { upsert: "NoteUpsertInput!", where: "NoteWhereUniqueInput!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    asset: {
      __type: "Asset",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "AssetWhereUniqueInput!",
      },
    },
    assetVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    assets: {
      __type: "[Asset!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "AssetOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "AssetWhereInput",
      },
    },
    assetsConnection: {
      __type: "AssetConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "AssetOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "AssetWhereInput",
      },
    },
    fauna: {
      __type: "Fauna",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "FaunaWhereUniqueInput!",
      },
    },
    faunaVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    faunas: {
      __type: "[Fauna!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "FaunaOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "FaunaWhereInput",
      },
    },
    faunasConnection: {
      __type: "FaunaConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "FaunaOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "FaunaWhereInput",
      },
    },
    node: {
      __type: "Node",
      __args: { id: "ID!", locales: "[Locale!]!", stage: "Stage!" },
    },
    note: {
      __type: "Note",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "NoteWhereUniqueInput!",
      },
    },
    noteVersion: {
      __type: "DocumentVersion",
      __args: { where: "VersionWhereInput!" },
    },
    notes: {
      __type: "[Note!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "NoteOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "NoteWhereInput",
      },
    },
    notesConnection: {
      __type: "NoteConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "NoteOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "NoteWhereInput",
      },
    },
    scheduledOperation: {
      __type: "ScheduledOperation",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "ScheduledOperationWhereUniqueInput!",
      },
    },
    scheduledOperations: {
      __type: "[ScheduledOperation!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ScheduledOperationOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ScheduledOperationWhereInput",
      },
    },
    scheduledOperationsConnection: {
      __type: "ScheduledOperationConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ScheduledOperationOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ScheduledOperationWhereInput",
      },
    },
    scheduledRelease: {
      __type: "ScheduledRelease",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "ScheduledReleaseWhereUniqueInput!",
      },
    },
    scheduledReleases: {
      __type: "[ScheduledRelease!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ScheduledReleaseOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ScheduledReleaseWhereInput",
      },
    },
    scheduledReleasesConnection: {
      __type: "ScheduledReleaseConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "ScheduledReleaseOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "ScheduledReleaseWhereInput",
      },
    },
    user: {
      __type: "User",
      __args: {
        locales: "[Locale!]!",
        stage: "Stage!",
        where: "UserWhereUniqueInput!",
      },
    },
    users: {
      __type: "[User!]!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "UserOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "UserWhereInput",
      },
    },
    usersConnection: {
      __type: "UserConnection!",
      __args: {
        after: "String",
        before: "String",
        first: "Int",
        last: "Int",
        locales: "[Locale!]!",
        orderBy: "UserOrderByInput",
        skip: "Int",
        stage: "Stage!",
        where: "UserWhereInput",
      },
    },
  },
  subscription: {},
  [SchemaUnionsKey]: {
    Node: [
      "Asset",
      "Fauna",
      "Note",
      "ScheduledOperation",
      "ScheduledRelease",
      "User",
    ],
    ScheduledOperationAffectedDocument: ["Asset", "Fauna", "Note"],
  },
} as const;

export interface Aggregate {
  __typename?: "Aggregate";
  count: ScalarsEnums["Int"];
}

/**
 * Asset system model
 */
export interface Asset {
  __typename?: "Asset";
  /**
   * The time the document was created
   */
  createdAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>;
  }) => ScalarsEnums["DateTime"];
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>;
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>;
  }) => Array<Asset>;
  /**
   * The file name
   */
  fileName: ScalarsEnums["String"];
  /**
   * The file handle
   */
  handle: ScalarsEnums["String"];
  /**
   * The height of the file
   */
  height?: Maybe<ScalarsEnums["Float"]>;
  /**
   * List of Asset versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>;
  }) => Array<Version>;
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"];
  /**
   * System Locale field
   */
  locale: ScalarsEnums["Locale"];
  /**
   * Get the other localizations for this document
   */
  localizations: (args: {
    /**
     * Decides if the current locale should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>;
    /**
     * Potential locales that should be returned.
     *
     * The order of locales will also override locale fall-backing behaviour in the query's subtree.
     *
     * Note any related model with localized fields in the query's subtree will be affected.
     * The first locale matching the provided list will be returned, localized entries that do not have the provided locale defined will be filtered out.
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     *
     * Consider using this in conjunction with forceParentLocale on the children relation fields.
     * @defaultValue `["de","en"]`
     */
    locales?: Maybe<Array<Locale>>;
  }) => Array<Asset>;
  /**
   * The mime type of the file
   */
  mimeType?: Maybe<ScalarsEnums["String"]>;
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>;
  }) => Maybe<ScalarsEnums["DateTime"]>;
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<ScheduledOperationWhereInput>;
  }) => Array<ScheduledOperation>;
  /**
   * The file size
   */
  size?: Maybe<ScalarsEnums["Float"]>;
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"];
  /**
   * The time the document was updated
   */
  updatedAt: (args: {
    /**
     * Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
     * @defaultValue `"COMBINED"`
     */
    variation?: Maybe<SystemDateTimeFieldVariation>;
  }) => ScalarsEnums["DateTime"];
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: (args?: {
    transformation?: Maybe<AssetTransformationInput>;
  }) => ScalarsEnums["String"];
  /**
   * The file width
   */
  width?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * A connection to a list of items.
 */
export interface AssetConnection {
  __typename?: "AssetConnection";
  aggregate: Aggregate;
  /**
   * A list of edges.
   */
  edges: Array<AssetEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An edge in a connection.
 */
export interface AssetEdge {
  __typename?: "AssetEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge.
   */
  node: Asset;
}

export interface BatchPayload {
  __typename?: "BatchPayload";
  /**
   * The number of nodes that have been affected by the Batch operation.
   */
  count: ScalarsEnums["Long"];
}

/**
 * Representing a color value comprising of HEX, RGBA and css color values
 */
export interface Color {
  __typename?: "Color";
  css: ScalarsEnums["String"];
  hex: ScalarsEnums["Hex"];
  rgba: RGBA;
}

export interface DocumentVersion {
  __typename?: "DocumentVersion";
  createdAt: ScalarsEnums["DateTime"];
  data?: Maybe<ScalarsEnums["Json"]>;
  id: ScalarsEnums["ID"];
  revision: ScalarsEnums["Int"];
  stage: ScalarsEnums["Stage"];
}

export interface Fauna {
  __typename?: "Fauna";
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>;
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>;
  }) => Array<Fauna>;
  /**
   * List of Fauna versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>;
  }) => Array<Version>;
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"];
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  role?: Maybe<Array<Fauna_CLS_Role>>;
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<ScheduledOperationWhereInput>;
  }) => Array<ScheduledOperation>;
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"];
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"];
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  user?: Maybe<Array<Fauna_USR_User>>;
}

/**
 * A connection to a list of items.
 */
export interface FaunaConnection {
  __typename?: "FaunaConnection";
  aggregate: Aggregate;
  /**
   * A list of edges.
   */
  edges: Array<FaunaEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An edge in a connection.
 */
export interface FaunaEdge {
  __typename?: "FaunaEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge.
   */
  node: Fauna;
}

export interface Fauna_CLS_Address_E {
  __typename?: "Fauna_CLS_Address_E";
  city: ScalarsEnums["String"];
  country: ScalarsEnums["String"];
  postalCode: ScalarsEnums["String"];
  street: ScalarsEnums["String"];
  streetNo: ScalarsEnums["String"];
}

export interface Fauna_CLS_InsuranceAlliance {
  __typename?: "Fauna_CLS_InsuranceAlliance";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Fauna_Long"];
  address?: Maybe<Fauna_CLS_Address_E>;
  email?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["String"];
  name: ScalarsEnums["String"];
  phone?: Maybe<ScalarsEnums["String"]>;
}

export interface Fauna_CLS_LegalEntityMasterData_E {
  __typename?: "Fauna_CLS_LegalEntityMasterData_E";
  insuranceAlliance?: Maybe<Fauna_CLS_InsuranceAlliance>;
  settlementNumber?: Maybe<ScalarsEnums["String"]>;
  taxID?: Maybe<ScalarsEnums["String"]>;
}

export interface Fauna_CLS_OrganizationalUnit {
  __typename?: "Fauna_CLS_OrganizationalUnit";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Fauna_Long"];
  address?: Maybe<Fauna_CLS_Address_E>;
  childOrganizationalUnits?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  isLegalEntity: ScalarsEnums["Boolean"];
  legalEntityMasterData?: Maybe<Fauna_CLS_LegalEntityMasterData_E>;
  name: ScalarsEnums["String"];
  parentOrganizationalUnit?: Maybe<Fauna_CLS_OrganizationalUnit>;
  patientServing?: Maybe<ScalarsEnums["Fauna_CLS_PatientServing"]>;
  phone?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["Fauna_CLS_Type"]>;
}

export interface Fauna_CLS_OrganizationalUnits_E {
  __typename?: "Fauna_CLS_OrganizationalUnits_E";
  auth0InvitationId?: Maybe<ScalarsEnums["String"]>;
  organizationalUnit?: Maybe<Fauna_CLS_OrganizationalUnit>;
  roles?: Maybe<Array<Maybe<Fauna_CLS_Role>>>;
}

export interface Fauna_CLS_Role {
  __typename?: "Fauna_CLS_Role";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Fauna_Long"];
  auth0Id: ScalarsEnums["String"];
  organizationalUnitE?: Maybe<Fauna_CLS_OrganizationalUnits_E>;
  type: ScalarsEnums["Fauna_CLS_RoleType"];
}

export interface Fauna_USR_Address {
  __typename?: "Fauna_USR_Address";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Fauna_Long"];
  city: ScalarsEnums["String"];
  country: ScalarsEnums["String"];
  createdAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  deletedAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  postalCode: ScalarsEnums["String"];
  street: ScalarsEnums["String"];
  streetNo: ScalarsEnums["String"];
  user: Fauna_USR_User;
}

export interface Fauna_USR_CoPaymentStatus_E {
  __typename?: "Fauna_USR_CoPaymentStatus_E";
  status: ScalarsEnums["Boolean"];
  validTo?: Maybe<ScalarsEnums["Fauna_Time"]>;
}

export interface Fauna_USR_CostReimbursement_E {
  __typename?: "Fauna_USR_CostReimbursement_E";
  someField?: Maybe<ScalarsEnums["String"]>;
}

export interface Fauna_USR_DormantEntitlement_E {
  __typename?: "Fauna_USR_DormantEntitlement_E";
  end?: Maybe<ScalarsEnums["Fauna_Time"]>;
  start?: Maybe<ScalarsEnums["Fauna_Time"]>;
  type?: Maybe<ScalarsEnums["Fauna_USR_DormantType"]>;
}

export interface Fauna_USR_Employee {
  __typename?: "Fauna_USR_Employee";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Fauna_Long"];
  createdAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  deletedAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  licenceId?: Maybe<ScalarsEnums["String"]>;
  status: ScalarsEnums["Fauna_USR_EmployeeStatus"];
  user: Fauna_USR_User;
}

export interface Fauna_USR_ExaminationCertificate {
  __typename?: "Fauna_USR_ExaminationCertificate";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Fauna_Long"];
  /**
   * Error codes
   */
  error?: Maybe<ScalarsEnums["Fauna_USR_ExaminationCertificationResult"]>;
  /**
   * Available as 'pz' in examination certificate object
   */
  hash?: Maybe<ScalarsEnums["String"]>;
  insuranceContract?: Maybe<Fauna_USR_InsuranceContract>;
  /**
   * Time when certificate was generated
   */
  ts?: Maybe<ScalarsEnums["Fauna_Time"]>;
}

export interface Fauna_USR_InsuranceCompany {
  __typename?: "Fauna_USR_InsuranceCompany";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Fauna_Long"];
  country?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  deletedAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  /**
   * Insurance company id
   */
  id: ScalarsEnums["String"];
  /**
   * Name of insurance company
   */
  name: ScalarsEnums["String"];
  type: ScalarsEnums["Fauna_USR_InsuranceType"];
  wop: ScalarsEnums["Fauna_USR_WOP"];
}

export interface Fauna_USR_InsuranceContract {
  __typename?: "Fauna_USR_InsuranceContract";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Fauna_Long"];
  coPaymentStatus?: Maybe<Fauna_USR_CoPaymentStatus_E>;
  company: Fauna_USR_InsuranceCompany;
  costReimbursement?: Maybe<Fauna_USR_CostReimbursement_E>;
  coverageEnd?: Maybe<ScalarsEnums["Fauna_Time"]>;
  coverageStart?: Maybe<ScalarsEnums["Fauna_Time"]>;
  dormantEntitlement?: Maybe<Fauna_USR_DormantEntitlement_E>;
  examinationCertificates?: Maybe<
    Array<Maybe<Fauna_USR_ExaminationCertificate>>
  >;
  id: ScalarsEnums["String"];
  patient: Fauna_USR_Patient;
  selectiveContract?: Maybe<Fauna_USR_SelectiveContract_E>;
  settlingCostBearer?: Maybe<ScalarsEnums["Int"]>;
  type?: Maybe<ScalarsEnums["Fauna_USR_LegalInsuredType"]>;
}

export interface Fauna_USR_Patient {
  __typename?: "Fauna_USR_Patient";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Fauna_Long"];
  careLevel?: Maybe<ScalarsEnums["Int"]>;
  createdAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  deletedAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  familyDoctor?: Maybe<ScalarsEnums["String"]>;
  isWard?: Maybe<ScalarsEnums["Boolean"]>;
  lastAnamnesisAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  nextAppointment?: Maybe<ScalarsEnums["Fauna_Time"]>;
  primaryInsurance?: Maybe<Fauna_USR_InsuranceContract>;
  status: ScalarsEnums["Fauna_USR_PatientStatus"];
  user: Fauna_USR_User;
}

export interface Fauna_USR_SelectiveContract_E {
  __typename?: "Fauna_USR_SelectiveContract_E";
  dentist?: Maybe<ScalarsEnums["Int"]>;
  medical?: Maybe<ScalarsEnums["Int"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface Fauna_USR_User {
  __typename?: "Fauna_USR_User";
  /**
   * The document's ID.
   */
  _id: ScalarsEnums["ID"];
  /**
   * The document's timestamp.
   */
  _ts: ScalarsEnums["Fauna_Long"];
  addresses?: Maybe<Array<Maybe<Fauna_USR_Address>>>;
  auth0Id?: Maybe<ScalarsEnums["String"]>;
  birthdate?: Maybe<ScalarsEnums["Fauna_Time"]>;
  createdAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  deletedAt?: Maybe<ScalarsEnums["Fauna_Time"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  employee?: Maybe<Fauna_USR_Employee>;
  firstName: ScalarsEnums["String"];
  gender?: Maybe<ScalarsEnums["String"]>;
  image?: Maybe<ScalarsEnums["String"]>;
  lastName: ScalarsEnums["String"];
  patient?: Maybe<Fauna_USR_Patient>;
  phone?: Maybe<ScalarsEnums["String"]>;
  profession?: Maybe<ScalarsEnums["String"]>;
}

/**
 * Representing a geolocation point with latitude and longitude
 */
export interface Location {
  __typename?: "Location";
  distance: (args: { from: LocationInput }) => ScalarsEnums["Float"];
  latitude: ScalarsEnums["Float"];
  longitude: ScalarsEnums["Float"];
}

/**
 * An object with an ID
 */
export interface Node {
  __typename?:
    | "Asset"
    | "Fauna"
    | "Note"
    | "ScheduledOperation"
    | "ScheduledRelease"
    | "User";
  /**
   * The id of the object.
   */
  id: ScalarsEnums["ID"];
  /**
   * The Stage of an object
   */
  stage: ScalarsEnums["Stage"];
  $on: $Node;
}

export interface Note {
  __typename?: "Note";
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>;
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>;
  }) => Array<Note>;
  /**
   * List of Note versions
   */
  history: (args: {
    /**
     * @defaultValue `10`
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * This is optional and can be used to fetch the document version history for a specific stage instead of the current one
     */
    stageOverride?: Maybe<Stage>;
  }) => Array<Version>;
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"];
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  scheduledIn: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<ScheduledOperationWhereInput>;
  }) => Array<ScheduledOperation>;
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"];
  text: RichText;
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"];
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
}

/**
 * A connection to a list of items.
 */
export interface NoteConnection {
  __typename?: "NoteConnection";
  aggregate: Aggregate;
  /**
   * A list of edges.
   */
  edges: Array<NoteEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An edge in a connection.
 */
export interface NoteEdge {
  __typename?: "NoteEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge.
   */
  node: Note;
}

/**
 * Information about pagination in a connection.
 */
export interface PageInfo {
  __typename?: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor?: Maybe<ScalarsEnums["String"]>;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: ScalarsEnums["Boolean"];
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: ScalarsEnums["Boolean"];
  /**
   * Number of items in the current page.
   */
  pageSize?: Maybe<ScalarsEnums["Int"]>;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor?: Maybe<ScalarsEnums["String"]>;
}

/**
 * Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()
 */
export interface RGBA {
  __typename?: "RGBA";
  a: ScalarsEnums["RGBATransparency"];
  b: ScalarsEnums["RGBAHue"];
  g: ScalarsEnums["RGBAHue"];
  r: ScalarsEnums["RGBAHue"];
}

/**
 * Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values
 */
export interface RichText {
  __typename?: "RichText";
  /**
   * Returns HTMl representation
   */
  html: ScalarsEnums["String"];
  /**
   * Returns Markdown representation
   */
  markdown: ScalarsEnums["String"];
  /**
   * Returns AST representation
   */
  raw: ScalarsEnums["RichTextAST"];
  /**
   * Returns plain-text contents of RichText
   */
  text: ScalarsEnums["String"];
}

/**
 * Scheduled Operation system model
 */
export interface ScheduledOperation {
  __typename?: "ScheduledOperation";
  affectedDocuments: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `affectedDocuments` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `affectedDocuments` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars["Int"]>;
  }) => Array<ScheduledOperationAffectedDocument>;
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  /**
   * Operation description
   */
  description?: Maybe<ScalarsEnums["String"]>;
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>;
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>;
  }) => Array<ScheduledOperation>;
  /**
   * Operation error message
   */
  errorMessage?: Maybe<ScalarsEnums["String"]>;
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"];
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  /**
   * Raw operation payload including all details, this field is subject to change
   */
  rawPayload: ScalarsEnums["Json"];
  /**
   * The release this operation is scheduled for
   */
  release: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `release` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `release` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<ScheduledRelease>;
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"];
  /**
   * operation Status
   */
  status: ScalarsEnums["ScheduledOperationStatus"];
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"];
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
}

export interface ScheduledOperationAffectedDocument {
  __typename?: "Asset" | "Fauna" | "Note";
  $on: $ScheduledOperationAffectedDocument;
}

/**
 * A connection to a list of items.
 */
export interface ScheduledOperationConnection {
  __typename?: "ScheduledOperationConnection";
  aggregate: Aggregate;
  /**
   * A list of edges.
   */
  edges: Array<ScheduledOperationEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An edge in a connection.
 */
export interface ScheduledOperationEdge {
  __typename?: "ScheduledOperationEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge.
   */
  node: ScheduledOperation;
}

/**
 * Scheduled Release system model
 */
export interface ScheduledRelease {
  __typename?: "ScheduledRelease";
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * User that created this document
   */
  createdBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  /**
   * Release description
   */
  description?: Maybe<ScalarsEnums["String"]>;
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>;
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>;
  }) => Array<ScheduledRelease>;
  /**
   * Release error message
   */
  errorMessage?: Maybe<ScalarsEnums["String"]>;
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"];
  /**
   * Whether scheduled release should be run
   */
  isActive: ScalarsEnums["Boolean"];
  /**
   * Whether scheduled release is implicit
   */
  isImplicit: ScalarsEnums["Boolean"];
  /**
   * Operations to run with this release
   */
  operations: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `operations` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `operations` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<ScheduledOperationOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<ScheduledOperationWhereInput>;
  }) => Array<ScheduledOperation>;
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  /**
   * User that last published this document
   */
  publishedBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
  /**
   * Release date and time
   */
  releaseAt?: Maybe<ScalarsEnums["DateTime"]>;
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"];
  /**
   * Release Status
   */
  status: ScalarsEnums["ScheduledReleaseStatus"];
  /**
   * Release Title
   */
  title?: Maybe<ScalarsEnums["String"]>;
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"];
  /**
   * User that last updated this document
   */
  updatedBy: (args?: {
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     *
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: Maybe<Array<Locale>>;
  }) => Maybe<User>;
}

/**
 * A connection to a list of items.
 */
export interface ScheduledReleaseConnection {
  __typename?: "ScheduledReleaseConnection";
  aggregate: Aggregate;
  /**
   * A list of edges.
   */
  edges: Array<ScheduledReleaseEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An edge in a connection.
 */
export interface ScheduledReleaseEdge {
  __typename?: "ScheduledReleaseEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge.
   */
  node: ScheduledRelease;
}

/**
 * User system model
 */
export interface User {
  __typename?: "User";
  /**
   * The time the document was created
   */
  createdAt: ScalarsEnums["DateTime"];
  /**
   * Get the document in other stages
   */
  documentInStages: (args: {
    /**
     * Decides if the current stage should be included or not
     * @defaultValue `false`
     */
    includeCurrent?: Maybe<Scalars["Boolean"]>;
    /**
     * Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
     * @defaultValue `false`
     */
    inheritLocale?: Maybe<Scalars["Boolean"]>;
    /**
     * Potential stages that should be returned
     * @defaultValue `["DRAFT","PUBLISHED"]`
     */
    stages?: Maybe<Array<Stage>>;
  }) => Array<User>;
  /**
   * The unique identifier
   */
  id: ScalarsEnums["ID"];
  /**
   * Flag to determine if user is active or not
   */
  isActive: ScalarsEnums["Boolean"];
  /**
   * User Kind. Can be either MEMBER, PAT or PUBLIC
   */
  kind: ScalarsEnums["UserKind"];
  /**
   * The username
   */
  name: ScalarsEnums["String"];
  /**
   * Profile Picture url
   */
  picture?: Maybe<ScalarsEnums["String"]>;
  /**
   * The time the document was published. Null on documents in draft stage.
   */
  publishedAt?: Maybe<ScalarsEnums["DateTime"]>;
  /**
   * System stage field
   */
  stage: ScalarsEnums["Stage"];
  /**
   * The time the document was updated
   */
  updatedAt: ScalarsEnums["DateTime"];
}

/**
 * A connection to a list of items.
 */
export interface UserConnection {
  __typename?: "UserConnection";
  aggregate: Aggregate;
  /**
   * A list of edges.
   */
  edges: Array<UserEdge>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
}

/**
 * An edge in a connection.
 */
export interface UserEdge {
  __typename?: "UserEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge.
   */
  node: User;
}

export interface Version {
  __typename?: "Version";
  createdAt: ScalarsEnums["DateTime"];
  id: ScalarsEnums["ID"];
  revision: ScalarsEnums["Int"];
  stage: ScalarsEnums["Stage"];
}

export interface Mutation {
  __typename?: "Mutation";
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset: (args: { data: AssetCreateInput }) => Maybe<Asset>;
  /**
   * Create one fauna
   */
  createFauna: (args: { data: FaunaCreateInput }) => Maybe<Fauna>;
  /**
   * Create one note
   */
  createNote: (args: { data: NoteCreateInput }) => Maybe<Note>;
  /**
   * Create one scheduledRelease
   */
  createScheduledRelease: (args: {
    data: ScheduledReleaseCreateInput;
  }) => Maybe<ScheduledRelease>;
  /**
   * Delete one asset from _all_ existing stages. Returns deleted document.
   */
  deleteAsset: (args: {
    /**
     * Document to delete
     */
    where: AssetWhereUniqueInput;
  }) => Maybe<Asset>;
  /**
   * Delete one fauna from _all_ existing stages. Returns deleted document.
   */
  deleteFauna: (args: {
    /**
     * Document to delete
     */
    where: FaunaWhereUniqueInput;
  }) => Maybe<Fauna>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<AssetManyWhereInput>;
  }) => BatchPayload;
  /**
   * Delete many Asset documents, return deleted documents
   */
  deleteManyAssetsConnection: (args?: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Documents to delete
     */
    where?: Maybe<AssetManyWhereInput>;
  }) => AssetConnection;
  /**
   * Delete many Fauna documents
   * @deprecated Please use the new paginated many mutation (deleteManyFaunasConnection)
   */
  deleteManyFaunas: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<FaunaManyWhereInput>;
  }) => BatchPayload;
  /**
   * Delete many Fauna documents, return deleted documents
   */
  deleteManyFaunasConnection: (args?: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Documents to delete
     */
    where?: Maybe<FaunaManyWhereInput>;
  }) => FaunaConnection;
  /**
   * Delete many Note documents
   * @deprecated Please use the new paginated many mutation (deleteManyNotesConnection)
   */
  deleteManyNotes: (args?: {
    /**
     * Documents to delete
     */
    where?: Maybe<NoteManyWhereInput>;
  }) => BatchPayload;
  /**
   * Delete many Note documents, return deleted documents
   */
  deleteManyNotesConnection: (args?: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Documents to delete
     */
    where?: Maybe<NoteManyWhereInput>;
  }) => NoteConnection;
  /**
   * Delete one note from _all_ existing stages. Returns deleted document.
   */
  deleteNote: (args: {
    /**
     * Document to delete
     */
    where: NoteWhereUniqueInput;
  }) => Maybe<Note>;
  /**
   * Delete and return scheduled operation
   */
  deleteScheduledOperation: (args: {
    /**
     * Document to delete
     */
    where: ScheduledOperationWhereUniqueInput;
  }) => Maybe<ScheduledOperation>;
  /**
   * Delete one scheduledRelease from _all_ existing stages. Returns deleted document.
   */
  deleteScheduledRelease: (args: {
    /**
     * Document to delete
     */
    where: ScheduledReleaseWhereUniqueInput;
  }) => Maybe<ScheduledRelease>;
  /**
   * Publish one asset
   */
  publishAsset: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>;
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Document to publish
     */
    where: AssetWhereUniqueInput;
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>;
  }) => Maybe<Asset>;
  /**
   * Publish one fauna
   */
  publishFauna: (args: {
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Document to publish
     */
    where: FaunaWhereUniqueInput;
  }) => Maybe<Fauna>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: (args: {
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>;
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<AssetManyWhereInput>;
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>;
  }) => BatchPayload;
  /**
   * Publish many Asset documents
   */
  publishManyAssetsConnection: (args: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Document localizations to publish
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<AssetManyWhereInput>;
    /**
     * Whether to include the default locale when publishBase is true
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>;
  }) => AssetConnection;
  /**
   * Publish many Fauna documents
   * @deprecated Please use the new paginated many mutation (publishManyFaunasConnection)
   */
  publishManyFaunas: (args: {
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<FaunaManyWhereInput>;
  }) => BatchPayload;
  /**
   * Publish many Fauna documents
   */
  publishManyFaunasConnection: (args: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>;
    last?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<FaunaManyWhereInput>;
  }) => FaunaConnection;
  /**
   * Publish many Note documents
   * @deprecated Please use the new paginated many mutation (publishManyNotesConnection)
   */
  publishManyNotes: (args: {
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<NoteManyWhereInput>;
  }) => BatchPayload;
  /**
   * Publish many Note documents
   */
  publishManyNotesConnection: (args: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    from?: Maybe<Stage>;
    last?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Stages to publish documents to
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Identifies documents in each stage to be published
     */
    where?: Maybe<NoteManyWhereInput>;
  }) => NoteConnection;
  /**
   * Publish one note
   */
  publishNote: (args: {
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Document to publish
     */
    where: NoteWhereUniqueInput;
  }) => Maybe<Note>;
  /**
   * Schedule to publish one asset
   */
  schedulePublishAsset: (args: {
    /**
     * Optional localizations to publish
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * Whether to publish the base document
     * @defaultValue `true`
     */
    publishBase?: Maybe<Scalars["Boolean"]>;
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>;
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>;
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Document to publish
     */
    where: AssetWhereUniqueInput;
    /**
     * Whether to include the default locale when publishBase is set
     * @defaultValue `true`
     */
    withDefaultLocale?: Maybe<Scalars["Boolean"]>;
  }) => Maybe<Asset>;
  /**
   * Schedule to publish one fauna
   */
  schedulePublishFauna: (args: {
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>;
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>;
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Document to publish
     */
    where: FaunaWhereUniqueInput;
  }) => Maybe<Fauna>;
  /**
   * Schedule to publish one note
   */
  schedulePublishNote: (args: {
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>;
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>;
    /**
     * Publishing target stage
     * @defaultValue `["PUBLISHED"]`
     */
    to?: Maybe<Array<Stage>>;
    /**
     * Document to publish
     */
    where: NoteWhereUniqueInput;
  }) => Maybe<Note>;
  /**
   * Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishAsset: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>;
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>;
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>;
    /**
     * Document to unpublish
     */
    where: AssetWhereUniqueInput;
  }) => Maybe<Asset>;
  /**
   * Unpublish one fauna from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishFauna: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>;
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>;
    /**
     * Document to unpublish
     */
    where: FaunaWhereUniqueInput;
  }) => Maybe<Fauna>;
  /**
   * Unpublish one note from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  scheduleUnpublishNote: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    /**
     * Release at point in time, will create new release containing this operation
     */
    releaseAt?: Maybe<Scalars["DateTime"]>;
    /**
     * Optionally attach this scheduled operation to an existing release
     */
    releaseId?: Maybe<Scalars["String"]>;
    /**
     * Document to unpublish
     */
    where: NoteWhereUniqueInput;
  }) => Maybe<Note>;
  /**
   * Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishAsset: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    /**
     * Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * Unpublish complete document including default localization and relations from stages. Can be disabled.
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>;
    /**
     * Document to unpublish
     */
    where: AssetWhereUniqueInput;
  }) => Maybe<Asset>;
  /**
   * Unpublish one fauna from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishFauna: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    /**
     * Document to unpublish
     */
    where: FaunaWhereUniqueInput;
  }) => Maybe<Fauna>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>;
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<AssetManyWhereInput>;
  }) => BatchPayload;
  /**
   * Find many Asset documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyAssetsConnection: (args: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Locales to unpublish
     */
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>;
    /**
     * Whether to unpublish the base document and default localization
     * @defaultValue `true`
     */
    unpublishBase?: Maybe<Scalars["Boolean"]>;
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<AssetManyWhereInput>;
  }) => AssetConnection;
  /**
   * Unpublish many Fauna documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFaunasConnection)
   */
  unpublishManyFaunas: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<FaunaManyWhereInput>;
  }) => BatchPayload;
  /**
   * Find many Fauna documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyFaunasConnection: (args: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    last?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>;
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<FaunaManyWhereInput>;
  }) => FaunaConnection;
  /**
   * Unpublish many Note documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNotesConnection)
   */
  unpublishManyNotes: (args: {
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    /**
     * Identifies documents in each stage
     */
    where?: Maybe<NoteManyWhereInput>;
  }) => BatchPayload;
  /**
   * Find many Note documents that match criteria in specified stage and unpublish from target stages
   */
  unpublishManyNotesConnection: (args: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    first?: Maybe<Scalars["Int"]>;
    /**
     * Stages to unpublish documents from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    last?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Stage to find matching documents in
     * @defaultValue `"DRAFT"`
     */
    stage?: Maybe<Stage>;
    /**
     * Identifies documents in draft stage
     */
    where?: Maybe<NoteManyWhereInput>;
  }) => NoteConnection;
  /**
   * Unpublish one note from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
   */
  unpublishNote: (args: {
    /**
     * Stages to unpublish document from
     * @defaultValue `["PUBLISHED"]`
     */
    from?: Maybe<Array<Stage>>;
    /**
     * Document to unpublish
     */
    where: NoteWhereUniqueInput;
  }) => Maybe<Note>;
  /**
   * Update one asset
   */
  updateAsset: (args: {
    data: AssetUpdateInput;
    where: AssetWhereUniqueInput;
  }) => Maybe<Asset>;
  /**
   * Update one fauna
   */
  updateFauna: (args: {
    data: FaunaUpdateInput;
    where: FaunaWhereUniqueInput;
  }) => Maybe<Fauna>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: (args: {
    /**
     * Updates to document content
     */
    data: AssetUpdateManyInput;
    /**
     * Documents to apply update on
     */
    where?: Maybe<AssetManyWhereInput>;
  }) => BatchPayload;
  /**
   * Update many Asset documents
   */
  updateManyAssetsConnection: (args: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    /**
     * Updates to document content
     */
    data: AssetUpdateManyInput;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Documents to apply update on
     */
    where?: Maybe<AssetManyWhereInput>;
  }) => AssetConnection;
  /**
   * Update many faunas
   * @deprecated Please use the new paginated many mutation (updateManyFaunasConnection)
   */
  updateManyFaunas: (args: {
    /**
     * Updates to document content
     */
    data: FaunaUpdateManyInput;
    /**
     * Documents to apply update on
     */
    where?: Maybe<FaunaManyWhereInput>;
  }) => BatchPayload;
  /**
   * Update many Fauna documents
   */
  updateManyFaunasConnection: (args: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    /**
     * Updates to document content
     */
    data: FaunaUpdateManyInput;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Documents to apply update on
     */
    where?: Maybe<FaunaManyWhereInput>;
  }) => FaunaConnection;
  /**
   * Update many notes
   * @deprecated Please use the new paginated many mutation (updateManyNotesConnection)
   */
  updateManyNotes: (args: {
    /**
     * Updates to document content
     */
    data: NoteUpdateManyInput;
    /**
     * Documents to apply update on
     */
    where?: Maybe<NoteManyWhereInput>;
  }) => BatchPayload;
  /**
   * Update many Note documents
   */
  updateManyNotesConnection: (args: {
    after?: Maybe<Scalars["ID"]>;
    before?: Maybe<Scalars["ID"]>;
    /**
     * Updates to document content
     */
    data: NoteUpdateManyInput;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Documents to apply update on
     */
    where?: Maybe<NoteManyWhereInput>;
  }) => NoteConnection;
  /**
   * Update one note
   */
  updateNote: (args: {
    data: NoteUpdateInput;
    where: NoteWhereUniqueInput;
  }) => Maybe<Note>;
  /**
   * Update one scheduledRelease
   */
  updateScheduledRelease: (args: {
    data: ScheduledReleaseUpdateInput;
    where: ScheduledReleaseWhereUniqueInput;
  }) => Maybe<ScheduledRelease>;
  /**
   * Upsert one asset
   */
  upsertAsset: (args: {
    upsert: AssetUpsertInput;
    where: AssetWhereUniqueInput;
  }) => Maybe<Asset>;
  /**
   * Upsert one fauna
   */
  upsertFauna: (args: {
    upsert: FaunaUpsertInput;
    where: FaunaWhereUniqueInput;
  }) => Maybe<Fauna>;
  /**
   * Upsert one note
   */
  upsertNote: (args: {
    upsert: NoteUpsertInput;
    where: NoteWhereUniqueInput;
  }) => Maybe<Note>;
}

export interface Query {
  __typename?: "Query";
  /**
   * Retrieve a single asset
   */
  asset: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `Asset` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where: AssetWhereUniqueInput;
  }) => Maybe<Asset>;
  /**
   * Retrieve document version
   */
  assetVersion: (args: { where: VersionWhereInput }) => Maybe<DocumentVersion>;
  /**
   * Retrieve multiple assets
   */
  assets: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `Asset` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<AssetOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<AssetWhereInput>;
  }) => Array<Asset>;
  /**
   * Retrieve multiple assets using the Relay connection interface
   */
  assetsConnection: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `Asset` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<AssetOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<AssetWhereInput>;
  }) => AssetConnection;
  /**
   * Retrieve a single fauna
   */
  fauna: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `Fauna` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where: FaunaWhereUniqueInput;
  }) => Maybe<Fauna>;
  /**
   * Retrieve document version
   */
  faunaVersion: (args: { where: VersionWhereInput }) => Maybe<DocumentVersion>;
  /**
   * Retrieve multiple faunas
   */
  faunas: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `Fauna` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<FaunaOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<FaunaWhereInput>;
  }) => Array<Fauna>;
  /**
   * Retrieve multiple faunas using the Relay connection interface
   */
  faunasConnection: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `Fauna` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<FaunaOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<FaunaWhereInput>;
  }) => FaunaConnection;
  /**
   * Fetches an object given its ID
   */
  node: (args: {
    /**
     * The ID of an object
     */
    id: Scalars["ID"];
    /**
     * Defines which locales should be returned.
     *
     * Note that `Node` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
  }) => Maybe<Node>;
  /**
   * Retrieve a single note
   */
  note: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `Note` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where: NoteWhereUniqueInput;
  }) => Maybe<Note>;
  /**
   * Retrieve document version
   */
  noteVersion: (args: { where: VersionWhereInput }) => Maybe<DocumentVersion>;
  /**
   * Retrieve multiple notes
   */
  notes: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `Note` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<NoteOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<NoteWhereInput>;
  }) => Array<Note>;
  /**
   * Retrieve multiple notes using the Relay connection interface
   */
  notesConnection: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `Note` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<NoteOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<NoteWhereInput>;
  }) => NoteConnection;
  /**
   * Retrieve a single scheduledOperation
   */
  scheduledOperation: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledOperation` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where: ScheduledOperationWhereUniqueInput;
  }) => Maybe<ScheduledOperation>;
  /**
   * Retrieve multiple scheduledOperations
   */
  scheduledOperations: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledOperation` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<ScheduledOperationOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<ScheduledOperationWhereInput>;
  }) => Array<ScheduledOperation>;
  /**
   * Retrieve multiple scheduledOperations using the Relay connection interface
   */
  scheduledOperationsConnection: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledOperation` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<ScheduledOperationOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<ScheduledOperationWhereInput>;
  }) => ScheduledOperationConnection;
  /**
   * Retrieve a single scheduledRelease
   */
  scheduledRelease: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledRelease` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where: ScheduledReleaseWhereUniqueInput;
  }) => Maybe<ScheduledRelease>;
  /**
   * Retrieve multiple scheduledReleases
   */
  scheduledReleases: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledRelease` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<ScheduledReleaseOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<ScheduledReleaseWhereInput>;
  }) => Array<ScheduledRelease>;
  /**
   * Retrieve multiple scheduledReleases using the Relay connection interface
   */
  scheduledReleasesConnection: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `ScheduledRelease` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<ScheduledReleaseOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<ScheduledReleaseWhereInput>;
  }) => ScheduledReleaseConnection;
  /**
   * Retrieve a single user
   */
  user: (args: {
    /**
     * Defines which locales should be returned.
     *
     * Note that `User` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where: UserWhereUniqueInput;
  }) => Maybe<User>;
  /**
   * Retrieve multiple users
   */
  users: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `User` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<UserOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<UserWhereInput>;
  }) => Array<User>;
  /**
   * Retrieve multiple users using the Relay connection interface
   */
  usersConnection: (args: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    /**
     * Defines which locales should be returned.
     *
     * Note that `User` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     *
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     * @defaultValue `["en"]`
     */
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<UserOrderByInput>;
    skip?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `"PUBLISHED"`
     */
    stage?: Maybe<Stage>;
    where?: Maybe<UserWhereInput>;
  }) => UserConnection;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Aggregate: Aggregate;
  Asset: Asset;
  AssetConnection: AssetConnection;
  AssetEdge: AssetEdge;
  BatchPayload: BatchPayload;
  Color: Color;
  DocumentVersion: DocumentVersion;
  Fauna: Fauna;
  FaunaConnection: FaunaConnection;
  FaunaEdge: FaunaEdge;
  Fauna_CLS_Address_E: Fauna_CLS_Address_E;
  Fauna_CLS_InsuranceAlliance: Fauna_CLS_InsuranceAlliance;
  Fauna_CLS_LegalEntityMasterData_E: Fauna_CLS_LegalEntityMasterData_E;
  Fauna_CLS_OrganizationalUnit: Fauna_CLS_OrganizationalUnit;
  Fauna_CLS_OrganizationalUnits_E: Fauna_CLS_OrganizationalUnits_E;
  Fauna_CLS_Role: Fauna_CLS_Role;
  Fauna_USR_Address: Fauna_USR_Address;
  Fauna_USR_CoPaymentStatus_E: Fauna_USR_CoPaymentStatus_E;
  Fauna_USR_CostReimbursement_E: Fauna_USR_CostReimbursement_E;
  Fauna_USR_DormantEntitlement_E: Fauna_USR_DormantEntitlement_E;
  Fauna_USR_Employee: Fauna_USR_Employee;
  Fauna_USR_ExaminationCertificate: Fauna_USR_ExaminationCertificate;
  Fauna_USR_InsuranceCompany: Fauna_USR_InsuranceCompany;
  Fauna_USR_InsuranceContract: Fauna_USR_InsuranceContract;
  Fauna_USR_Patient: Fauna_USR_Patient;
  Fauna_USR_SelectiveContract_E: Fauna_USR_SelectiveContract_E;
  Fauna_USR_User: Fauna_USR_User;
  Location: Location;
  Mutation: Mutation;
  Note: Note;
  NoteConnection: NoteConnection;
  NoteEdge: NoteEdge;
  PageInfo: PageInfo;
  Query: Query;
  RGBA: RGBA;
  RichText: RichText;
  ScheduledOperation: ScheduledOperation;
  ScheduledOperationConnection: ScheduledOperationConnection;
  ScheduledOperationEdge: ScheduledOperationEdge;
  ScheduledRelease: ScheduledRelease;
  ScheduledReleaseConnection: ScheduledReleaseConnection;
  ScheduledReleaseEdge: ScheduledReleaseEdge;
  Subscription: Subscription;
  User: User;
  UserConnection: UserConnection;
  UserEdge: UserEdge;
  Version: Version;
}
export type SchemaObjectTypesNames =
  | "Aggregate"
  | "Asset"
  | "AssetConnection"
  | "AssetEdge"
  | "BatchPayload"
  | "Color"
  | "DocumentVersion"
  | "Fauna"
  | "FaunaConnection"
  | "FaunaEdge"
  | "Fauna_CLS_Address_E"
  | "Fauna_CLS_InsuranceAlliance"
  | "Fauna_CLS_LegalEntityMasterData_E"
  | "Fauna_CLS_OrganizationalUnit"
  | "Fauna_CLS_OrganizationalUnits_E"
  | "Fauna_CLS_Role"
  | "Fauna_USR_Address"
  | "Fauna_USR_CoPaymentStatus_E"
  | "Fauna_USR_CostReimbursement_E"
  | "Fauna_USR_DormantEntitlement_E"
  | "Fauna_USR_Employee"
  | "Fauna_USR_ExaminationCertificate"
  | "Fauna_USR_InsuranceCompany"
  | "Fauna_USR_InsuranceContract"
  | "Fauna_USR_Patient"
  | "Fauna_USR_SelectiveContract_E"
  | "Fauna_USR_User"
  | "Location"
  | "Mutation"
  | "Note"
  | "NoteConnection"
  | "NoteEdge"
  | "PageInfo"
  | "Query"
  | "RGBA"
  | "RichText"
  | "ScheduledOperation"
  | "ScheduledOperationConnection"
  | "ScheduledOperationEdge"
  | "ScheduledRelease"
  | "ScheduledReleaseConnection"
  | "ScheduledReleaseEdge"
  | "Subscription"
  | "User"
  | "UserConnection"
  | "UserEdge"
  | "Version";

export interface $Node {
  Asset?: Asset;
  Fauna?: Fauna;
  Note?: Note;
  ScheduledOperation?: ScheduledOperation;
  ScheduledRelease?: ScheduledRelease;
  User?: User;
}

export interface $ScheduledOperationAffectedDocument {
  Asset?: Asset;
  Fauna?: Fauna;
  Note?: Note;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  AssetOrderByInput: AssetOrderByInput | undefined;
  DocumentFileTypes: DocumentFileTypes | undefined;
  FaunaOrderByInput: FaunaOrderByInput | undefined;
  Fauna_CLS_PatientServing: Fauna_CLS_PatientServing | undefined;
  Fauna_CLS_RoleType: Fauna_CLS_RoleType | undefined;
  Fauna_CLS_Type: Fauna_CLS_Type | undefined;
  Fauna_USR_DormantType: Fauna_USR_DormantType | undefined;
  Fauna_USR_EmployeeStatus: Fauna_USR_EmployeeStatus | undefined;
  Fauna_USR_ExaminationCertificationResult:
    | Fauna_USR_ExaminationCertificationResult
    | undefined;
  Fauna_USR_InsuranceType: Fauna_USR_InsuranceType | undefined;
  Fauna_USR_LegalInsuredType: Fauna_USR_LegalInsuredType | undefined;
  Fauna_USR_PatientStatus: Fauna_USR_PatientStatus | undefined;
  Fauna_USR_WOP: Fauna_USR_WOP | undefined;
  ImageFit: ImageFit | undefined;
  Locale: Locale | undefined;
  NoteOrderByInput: NoteOrderByInput | undefined;
  ScheduledOperationOrderByInput: ScheduledOperationOrderByInput | undefined;
  ScheduledOperationStatus: ScheduledOperationStatus | undefined;
  ScheduledReleaseOrderByInput: ScheduledReleaseOrderByInput | undefined;
  ScheduledReleaseStatus: ScheduledReleaseStatus | undefined;
  Stage: Stage | undefined;
  SystemDateTimeFieldVariation: SystemDateTimeFieldVariation | undefined;
  UserKind: UserKind | undefined;
  UserOrderByInput: UserOrderByInput | undefined;
  _FilterKind: _FilterKind | undefined;
  _MutationInputFieldKind: _MutationInputFieldKind | undefined;
  _MutationKind: _MutationKind | undefined;
  _OrderDirection: _OrderDirection | undefined;
  _RelationInputCardinality: _RelationInputCardinality | undefined;
  _RelationInputKind: _RelationInputKind | undefined;
  _RelationKind: _RelationKind | undefined;
  _SystemDateTimeFieldVariation: _SystemDateTimeFieldVariation | undefined;
}
