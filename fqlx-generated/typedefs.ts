
  import {
    AllMethods,
    FirstMethods,
    PaginateData,
    WhereMethods,
    ByIdMethods,
    CreateMethods,
    DeleteMethods,
    ExecMethods,
    PromisifyExecMethods,
    UpdateMethods,
    FirstWhereMethods
  } from 'fqlx-client'
  
export interface Ts {
    /**
 * isoString for the Ts
 */
 isoString: string;

  }


  export interface TsInput {
    /**
 * isoString for the Ts
 */
 isoString: string;

  } 


  export interface TsMethods {
      /**
       * all method get the set of all documents in the Ts collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Ts>} method returns the set of all documents in Ts collection for the given range.
       * 
       * @example
       * query.Ts.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Ts>;

      /**
       * create method creates a Ts document in the collection with the provided property values.
       * 
       * @param {TsInput} input - will be the Ts which you want to add.
         * @param { string } input.isoString IsoString for the Ts
       *
       * @returns {CreateMethods<Ts>} return new document.
       * 
       * @example
       * query.Ts.create({  
 * isoString: "Value of the isoString"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: TsInput): CreateMethods<Ts>;

      /**
       * byId method get a Ts document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Ts, TsInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Ts.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Ts, TsInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Ts) => boolean) | string): FirstWhereMethods<Ts>;
    }


  export interface PatientFile {
    /**
 * id for the PatientFile
 */
 id: string;
/**
 * ts for the PatientFile
 */
 ts: Ts;
/**
 * patient for the PatientFile
 */
 patient: Patient;
/**
 * teeth for the PatientFile
 */
 teeth: Tooth[];

  }


  export interface PatientFileInput {
    /**
 * ts for the PatientFile
 */
 ts: Ts;
/**
 * patient for the PatientFile
 */
 patient: Patient;
/**
 * teeth for the PatientFile
 */
 teeth: Tooth[];

  } 


  export interface PatientFileMethods {
      /**
       * all method get the set of all documents in the PatientFile collection.
       * 
       * @param
       * 
       * @returns {AllMethods<PatientFile>} method returns the set of all documents in PatientFile collection for the given range.
       * 
       * @example
       * query.PatientFile.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<PatientFile>;

      /**
       * create method creates a PatientFile document in the collection with the provided property values.
       * 
       * @param {PatientFileInput} input - will be the PatientFile which you want to add.
         * @param { Ts } input.ts Ts for the PatientFile
* @param { Patient } input.patient Patient for the PatientFile
* @param { Tooth[] } input.teeth Teeth for the PatientFile
       *
       * @returns {CreateMethods<PatientFile>} return new document.
       * 
       * @example
       * query.PatientFile.create({  
 * ts: "Value of the ts"   
 * patient: "Value of the patient"   
 * teeth: "Value of the teeth"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: PatientFileInput): CreateMethods<PatientFile>;

      /**
       * byId method get a PatientFile document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<PatientFile, PatientFileInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.PatientFile.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<PatientFile, PatientFileInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: PatientFile) => boolean) | string): FirstWhereMethods<PatientFile>;
    }


  export interface Patient {
    /**
 * name for the Patient
 */
 name: string;
/**
 * avatar for the Patient
 */
 avatar: string;
/**
 * status for the Patient
 */
 status: string;

  }


  export interface PatientInput {
    /**
 * name for the Patient
 */
 name: string;
/**
 * avatar for the Patient
 */
 avatar: string;
/**
 * status for the Patient
 */
 status: string;

  } 


  export interface PatientMethods {
      /**
       * all method get the set of all documents in the Patient collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Patient>} method returns the set of all documents in Patient collection for the given range.
       * 
       * @example
       * query.Patient.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Patient>;

      /**
       * create method creates a Patient document in the collection with the provided property values.
       * 
       * @param {PatientInput} input - will be the Patient which you want to add.
         * @param { string } input.name Name for the Patient
* @param { string } input.avatar Avatar for the Patient
* @param { string } input.status Status for the Patient
       *
       * @returns {CreateMethods<Patient>} return new document.
       * 
       * @example
       * query.Patient.create({  
 * name: "Value of the name"   
 * avatar: "Value of the avatar"   
 * status: "Value of the status"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: PatientInput): CreateMethods<Patient>;

      /**
       * byId method get a Patient document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Patient, PatientInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Patient.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Patient, PatientInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Patient) => boolean) | string): FirstWhereMethods<Patient>;
    }


  export interface Root {
    /**
 * findings for the Root
 */
 findings: Finding[];
/**
 * treatmentDoc for the Root
 */
 treatmentDoc: TreatmentDoc;
/**
 * addon for the Root
 */
 addon: BodyPartLeaf;
/**
 * leftRoot for the Root
 */
 leftRoot: BodyPartLeaf;
/**
 * middleRoot for the Root
 */
 middleRoot: BodyPartLeaf;
/**
 * rightRoot for the Root
 */
 rightRoot: BodyPartLeaf;

  }


  export interface RootInput {
    /**
 * findings for the Root
 */
 findings: Finding[];
/**
 * treatmentDoc for the Root
 */
 treatmentDoc: TreatmentDoc;
/**
 * addon for the Root
 */
 addon: BodyPartLeaf;
/**
 * leftRoot for the Root
 */
 leftRoot: BodyPartLeaf;
/**
 * middleRoot for the Root
 */
 middleRoot: BodyPartLeaf;
/**
 * rightRoot for the Root
 */
 rightRoot: BodyPartLeaf;

  } 


  export interface RootMethods {
      /**
       * all method get the set of all documents in the Root collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Root>} method returns the set of all documents in Root collection for the given range.
       * 
       * @example
       * query.Root.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Root>;

      /**
       * create method creates a Root document in the collection with the provided property values.
       * 
       * @param {RootInput} input - will be the Root which you want to add.
         * @param { Finding[] } input.findings Findings for the Root
* @param { TreatmentDoc } input.treatmentDoc TreatmentDoc for the Root
* @param { BodyPartLeaf } input.addon Addon for the Root
* @param { BodyPartLeaf } input.leftRoot LeftRoot for the Root
* @param { BodyPartLeaf } input.middleRoot MiddleRoot for the Root
* @param { BodyPartLeaf } input.rightRoot RightRoot for the Root
       *
       * @returns {CreateMethods<Root>} return new document.
       * 
       * @example
       * query.Root.create({  
 * findings: "Value of the findings"   
 * treatmentDoc: "Value of the treatmentDoc"   
 * addon: "Value of the addon"   
 * leftRoot: "Value of the leftRoot"   
 * middleRoot: "Value of the middleRoot"   
 * rightRoot: "Value of the rightRoot"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: RootInput): CreateMethods<Root>;

      /**
       * byId method get a Root document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Root, RootInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Root.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Root, RootInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Root) => boolean) | string): FirstWhereMethods<Root>;
    }


  export interface Crown {
    /**
 * findings for the Crown
 */
 findings: Finding[];
/**
 * treatmentDoc for the Crown
 */
 treatmentDoc: TreatmentDoc;
/**
 * addon for the Crown
 */
 addon: BodyPartLeaf;
/**
 * toothNeck for the Crown
 */
 toothNeck: BodyPartLeaf;
/**
 * left for the Crown
 */
 left: BodyPartLeaf;
/**
 * right for the Crown
 */
 right: BodyPartLeaf;
/**
 * center for the Crown
 */
 center: BodyPartLeaf;
/**
 * outside for the Crown
 */
 outside: BodyPartLeaf;
/**
 * inside for the Crown
 */
 inside: BodyPartLeaf;

  }


  export interface CrownInput {
    /**
 * findings for the Crown
 */
 findings: Finding[];
/**
 * treatmentDoc for the Crown
 */
 treatmentDoc: TreatmentDoc;
/**
 * addon for the Crown
 */
 addon: BodyPartLeaf;
/**
 * toothNeck for the Crown
 */
 toothNeck: BodyPartLeaf;
/**
 * left for the Crown
 */
 left: BodyPartLeaf;
/**
 * right for the Crown
 */
 right: BodyPartLeaf;
/**
 * center for the Crown
 */
 center: BodyPartLeaf;
/**
 * outside for the Crown
 */
 outside: BodyPartLeaf;
/**
 * inside for the Crown
 */
 inside: BodyPartLeaf;

  } 


  export interface CrownMethods {
      /**
       * all method get the set of all documents in the Crown collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Crown>} method returns the set of all documents in Crown collection for the given range.
       * 
       * @example
       * query.Crown.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Crown>;

      /**
       * create method creates a Crown document in the collection with the provided property values.
       * 
       * @param {CrownInput} input - will be the Crown which you want to add.
         * @param { Finding[] } input.findings Findings for the Crown
* @param { TreatmentDoc } input.treatmentDoc TreatmentDoc for the Crown
* @param { BodyPartLeaf } input.addon Addon for the Crown
* @param { BodyPartLeaf } input.toothNeck ToothNeck for the Crown
* @param { BodyPartLeaf } input.left Left for the Crown
* @param { BodyPartLeaf } input.right Right for the Crown
* @param { BodyPartLeaf } input.center Center for the Crown
* @param { BodyPartLeaf } input.outside Outside for the Crown
* @param { BodyPartLeaf } input.inside Inside for the Crown
       *
       * @returns {CreateMethods<Crown>} return new document.
       * 
       * @example
       * query.Crown.create({  
 * findings: "Value of the findings"   
 * treatmentDoc: "Value of the treatmentDoc"   
 * addon: "Value of the addon"   
 * toothNeck: "Value of the toothNeck"   
 * left: "Value of the left"   
 * right: "Value of the right"   
 * center: "Value of the center"   
 * outside: "Value of the outside"   
 * inside: "Value of the inside"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: CrownInput): CreateMethods<Crown>;

      /**
       * byId method get a Crown document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Crown, CrownInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Crown.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Crown, CrownInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Crown) => boolean) | string): FirstWhereMethods<Crown>;
    }


  export interface Tooth {
    /**
 * name for the Tooth
 */
 name: string;
/**
 * root for the Tooth
 */
 root: Root;
/**
 * crown for the Tooth
 */
 crown: Crown;

  }


  export interface ToothInput {
    /**
 * name for the Tooth
 */
 name: string;
/**
 * root for the Tooth
 */
 root: Root;
/**
 * crown for the Tooth
 */
 crown: Crown;

  } 


  export interface ToothMethods {
      /**
       * all method get the set of all documents in the Tooth collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Tooth>} method returns the set of all documents in Tooth collection for the given range.
       * 
       * @example
       * query.Tooth.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Tooth>;

      /**
       * create method creates a Tooth document in the collection with the provided property values.
       * 
       * @param {ToothInput} input - will be the Tooth which you want to add.
         * @param { string } input.name Name for the Tooth
* @param { Root } input.root Root for the Tooth
* @param { Crown } input.crown Crown for the Tooth
       *
       * @returns {CreateMethods<Tooth>} return new document.
       * 
       * @example
       * query.Tooth.create({  
 * name: "Value of the name"   
 * root: "Value of the root"   
 * crown: "Value of the crown"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: ToothInput): CreateMethods<Tooth>;

      /**
       * byId method get a Tooth document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Tooth, ToothInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Tooth.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Tooth, ToothInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Tooth) => boolean) | string): FirstWhereMethods<Tooth>;
    }


  export interface BodyPartLeaf {
    /**
 * findings for the BodyPartLeaf
 */
 findings: Finding[];
/**
 * treatmentDocs for the BodyPartLeaf
 */
 treatmentDocs: TreatmentDoc[];

  }


  export interface BodyPartLeafInput {
    /**
 * findings for the BodyPartLeaf
 */
 findings: Finding[];
/**
 * treatmentDocs for the BodyPartLeaf
 */
 treatmentDocs: TreatmentDoc[];

  } 


  export interface BodyPartLeafMethods {
      /**
       * all method get the set of all documents in the BodyPartLeaf collection.
       * 
       * @param
       * 
       * @returns {AllMethods<BodyPartLeaf>} method returns the set of all documents in BodyPartLeaf collection for the given range.
       * 
       * @example
       * query.BodyPartLeaf.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<BodyPartLeaf>;

      /**
       * create method creates a BodyPartLeaf document in the collection with the provided property values.
       * 
       * @param {BodyPartLeafInput} input - will be the BodyPartLeaf which you want to add.
         * @param { Finding[] } input.findings Findings for the BodyPartLeaf
* @param { TreatmentDoc[] } input.treatmentDocs TreatmentDocs for the BodyPartLeaf
       *
       * @returns {CreateMethods<BodyPartLeaf>} return new document.
       * 
       * @example
       * query.BodyPartLeaf.create({  
 * findings: "Value of the findings"   
 * treatmentDocs: "Value of the treatmentDocs"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: BodyPartLeafInput): CreateMethods<BodyPartLeaf>;

      /**
       * byId method get a BodyPartLeaf document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<BodyPartLeaf, BodyPartLeafInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.BodyPartLeaf.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<BodyPartLeaf, BodyPartLeafInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: BodyPartLeaf) => boolean) | string): FirstWhereMethods<BodyPartLeaf>;
    }


  export interface Finding {
    /**
 * name for the Finding
 */
 name: string;
/**
 * value for the Finding
 */
 value: string;
/**
 * areas for the Finding
 */
 areas: Area[];
/**
 * localizations for the Finding
 */
 localizations: TreatmentLocalization[];

  }


  export interface FindingInput {
    /**
 * name for the Finding
 */
 name: string;
/**
 * value for the Finding
 */
 value: string;
/**
 * areas for the Finding
 */
 areas: Area[];
/**
 * localizations for the Finding
 */
 localizations: TreatmentLocalization[];

  } 


  export interface FindingMethods {
      /**
       * all method get the set of all documents in the Finding collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Finding>} method returns the set of all documents in Finding collection for the given range.
       * 
       * @example
       * query.Finding.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Finding>;

      /**
       * create method creates a Finding document in the collection with the provided property values.
       * 
       * @param {FindingInput} input - will be the Finding which you want to add.
         * @param { string } input.name Name for the Finding
* @param { string } input.value Value for the Finding
* @param { Area[] } input.areas Areas for the Finding
* @param { TreatmentLocalization[] } input.localizations Localizations for the Finding
       *
       * @returns {CreateMethods<Finding>} return new document.
       * 
       * @example
       * query.Finding.create({  
 * name: "Value of the name"   
 * value: "Value of the value"   
 * areas: "Value of the areas"   
 * localizations: "Value of the localizations"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: FindingInput): CreateMethods<Finding>;

      /**
       * byId method get a Finding document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Finding, FindingInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Finding.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Finding, FindingInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Finding) => boolean) | string): FirstWhereMethods<Finding>;
    }


  export interface TreatmentDoc {
    /**
 * treatment for the TreatmentDoc
 */
 treatment: Treatment;
/**
 * selectedProducts for the TreatmentDoc
 */
 selectedProducts: SelectedProduct[];

  }


  export interface TreatmentDocInput {
    /**
 * treatment for the TreatmentDoc
 */
 treatment: Treatment;
/**
 * selectedProducts for the TreatmentDoc
 */
 selectedProducts: SelectedProduct[];

  } 


  export interface TreatmentDocMethods {
      /**
       * all method get the set of all documents in the TreatmentDoc collection.
       * 
       * @param
       * 
       * @returns {AllMethods<TreatmentDoc>} method returns the set of all documents in TreatmentDoc collection for the given range.
       * 
       * @example
       * query.TreatmentDoc.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<TreatmentDoc>;

      /**
       * create method creates a TreatmentDoc document in the collection with the provided property values.
       * 
       * @param {TreatmentDocInput} input - will be the TreatmentDoc which you want to add.
         * @param { Treatment } input.treatment Treatment for the TreatmentDoc
* @param { SelectedProduct[] } input.selectedProducts SelectedProducts for the TreatmentDoc
       *
       * @returns {CreateMethods<TreatmentDoc>} return new document.
       * 
       * @example
       * query.TreatmentDoc.create({  
 * treatment: "Value of the treatment"   
 * selectedProducts: "Value of the selectedProducts"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: TreatmentDocInput): CreateMethods<TreatmentDoc>;

      /**
       * byId method get a TreatmentDoc document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<TreatmentDoc, TreatmentDocInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.TreatmentDoc.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<TreatmentDoc, TreatmentDocInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: TreatmentDoc) => boolean) | string): FirstWhereMethods<TreatmentDoc>;
    }


  export interface SelectedProduct {
    /**
 * selectedProduct for the SelectedProduct
 */
 selectedProduct: Product;
/**
 * quantity for the SelectedProduct
 */
 quantity: number;

  }


  export interface SelectedProductInput {
    /**
 * selectedProduct for the SelectedProduct
 */
 selectedProduct: Product;
/**
 * quantity for the SelectedProduct
 */
 quantity: number;

  } 


  export interface SelectedProductMethods {
      /**
       * all method get the set of all documents in the SelectedProduct collection.
       * 
       * @param
       * 
       * @returns {AllMethods<SelectedProduct>} method returns the set of all documents in SelectedProduct collection for the given range.
       * 
       * @example
       * query.SelectedProduct.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<SelectedProduct>;

      /**
       * create method creates a SelectedProduct document in the collection with the provided property values.
       * 
       * @param {SelectedProductInput} input - will be the SelectedProduct which you want to add.
         * @param { Product } input.selectedProduct SelectedProduct for the SelectedProduct
* @param { number } input.quantity Quantity for the SelectedProduct
       *
       * @returns {CreateMethods<SelectedProduct>} return new document.
       * 
       * @example
       * query.SelectedProduct.create({  
 * selectedProduct: "Value of the selectedProduct"   
 * quantity: "Value of the quantity"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: SelectedProductInput): CreateMethods<SelectedProduct>;

      /**
       * byId method get a SelectedProduct document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<SelectedProduct, SelectedProductInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.SelectedProduct.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<SelectedProduct, SelectedProductInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: SelectedProduct) => boolean) | string): FirstWhereMethods<SelectedProduct>;
    }


  export interface Product {
    
  }


  export interface ProductInput {
    
  } 


  export interface ProductMethods {
      /**
       * all method get the set of all documents in the Product collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Product>} method returns the set of all documents in Product collection for the given range.
       * 
       * @example
       * query.Product.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Product>;

      /**
       * create method creates a Product document in the collection with the provided property values.
       * 
       * @param {ProductInput} input - will be the Product which you want to add.
         
       *
       * @returns {CreateMethods<Product>} return new document.
       * 
       * @example
       * query.Product.create({  
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: ProductInput): CreateMethods<Product>;

      /**
       * byId method get a Product document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Product, ProductInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Product.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Product, ProductInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Product) => boolean) | string): FirstWhereMethods<Product>;
    }


  export interface TreatmentGroup {
    /**
 * name for the TreatmentGroup
 */
 name: string;
/**
 * treatments for the TreatmentGroup
 */
 treatments: Treatment[];
/**
 * localizations for the TreatmentGroup
 */
 localizations: TreatmentLocalization[];

  }


  export interface TreatmentGroupInput {
    /**
 * name for the TreatmentGroup
 */
 name: string;
/**
 * treatments for the TreatmentGroup
 */
 treatments: Treatment[];
/**
 * localizations for the TreatmentGroup
 */
 localizations: TreatmentLocalization[];

  } 


  export interface TreatmentGroupMethods {
      /**
       * all method get the set of all documents in the TreatmentGroup collection.
       * 
       * @param
       * 
       * @returns {AllMethods<TreatmentGroup>} method returns the set of all documents in TreatmentGroup collection for the given range.
       * 
       * @example
       * query.TreatmentGroup.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<TreatmentGroup>;

      /**
       * create method creates a TreatmentGroup document in the collection with the provided property values.
       * 
       * @param {TreatmentGroupInput} input - will be the TreatmentGroup which you want to add.
         * @param { string } input.name Name for the TreatmentGroup
* @param { Treatment[] } input.treatments Treatments for the TreatmentGroup
* @param { TreatmentLocalization[] } input.localizations Localizations for the TreatmentGroup
       *
       * @returns {CreateMethods<TreatmentGroup>} return new document.
       * 
       * @example
       * query.TreatmentGroup.create({  
 * name: "Value of the name"   
 * treatments: "Value of the treatments"   
 * localizations: "Value of the localizations"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: TreatmentGroupInput): CreateMethods<TreatmentGroup>;

      /**
       * byId method get a TreatmentGroup document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<TreatmentGroup, TreatmentGroupInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.TreatmentGroup.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<TreatmentGroup, TreatmentGroupInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: TreatmentGroup) => boolean) | string): FirstWhereMethods<TreatmentGroup>;
    }


  export interface Treatment {
    /**
 * name for the Treatment
 */
 name: string;
/**
 * areas for the Treatment
 */
 areas: Area[];
/**
 * localizations for the Treatment
 */
 localizations: TreatmentLocalization[];

  }


  export interface TreatmentInput {
    /**
 * name for the Treatment
 */
 name: string;
/**
 * areas for the Treatment
 */
 areas: Area[];
/**
 * localizations for the Treatment
 */
 localizations: TreatmentLocalization[];

  } 


  export interface TreatmentMethods {
      /**
       * all method get the set of all documents in the Treatment collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Treatment>} method returns the set of all documents in Treatment collection for the given range.
       * 
       * @example
       * query.Treatment.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Treatment>;

      /**
       * create method creates a Treatment document in the collection with the provided property values.
       * 
       * @param {TreatmentInput} input - will be the Treatment which you want to add.
         * @param { string } input.name Name for the Treatment
* @param { Area[] } input.areas Areas for the Treatment
* @param { TreatmentLocalization[] } input.localizations Localizations for the Treatment
       *
       * @returns {CreateMethods<Treatment>} return new document.
       * 
       * @example
       * query.Treatment.create({  
 * name: "Value of the name"   
 * areas: "Value of the areas"   
 * localizations: "Value of the localizations"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: TreatmentInput): CreateMethods<Treatment>;

      /**
       * byId method get a Treatment document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Treatment, TreatmentInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Treatment.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Treatment, TreatmentInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Treatment) => boolean) | string): FirstWhereMethods<Treatment>;
    }


  export interface Area {
    /**
 * name for the Area
 */
 name: string;

  }


  export interface AreaInput {
    /**
 * name for the Area
 */
 name: string;

  } 


  export interface AreaMethods {
      /**
       * all method get the set of all documents in the Area collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Area>} method returns the set of all documents in Area collection for the given range.
       * 
       * @example
       * query.Area.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Area>;

      /**
       * create method creates a Area document in the collection with the provided property values.
       * 
       * @param {AreaInput} input - will be the Area which you want to add.
         * @param { string } input.name Name for the Area
       *
       * @returns {CreateMethods<Area>} return new document.
       * 
       * @example
       * query.Area.create({  
 * name: "Value of the name"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: AreaInput): CreateMethods<Area>;

      /**
       * byId method get a Area document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Area, AreaInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Area.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Area, AreaInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: Area) => boolean) | string): FirstWhereMethods<Area>;
    }


  export interface TreatmentLocalization {
    /**
 * name for the TreatmentLocalization
 */
 name: string;
/**
 * synonyms for the TreatmentLocalization
 */
 synonyms: string[];
/**
 * locale for the TreatmentLocalization
 */
 locale: string;

  }


  export interface TreatmentLocalizationInput {
    /**
 * name for the TreatmentLocalization
 */
 name: string;
/**
 * synonyms for the TreatmentLocalization
 */
 synonyms: string[];
/**
 * locale for the TreatmentLocalization
 */
 locale: string;

  } 


  export interface TreatmentLocalizationMethods {
      /**
       * all method get the set of all documents in the TreatmentLocalization collection.
       * 
       * @param
       * 
       * @returns {AllMethods<TreatmentLocalization>} method returns the set of all documents in TreatmentLocalization collection for the given range.
       * 
       * @example
       * query.TreatmentLocalization.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<TreatmentLocalization>;

      /**
       * create method creates a TreatmentLocalization document in the collection with the provided property values.
       * 
       * @param {TreatmentLocalizationInput} input - will be the TreatmentLocalization which you want to add.
         * @param { string } input.name Name for the TreatmentLocalization
* @param { string[] } input.synonyms Synonyms for the TreatmentLocalization
* @param { string } input.locale Locale for the TreatmentLocalization
       *
       * @returns {CreateMethods<TreatmentLocalization>} return new document.
       * 
       * @example
       * query.TreatmentLocalization.create({  
 * name: "Value of the name"   
 * synonyms: "Value of the synonyms"   
 * locale: "Value of the locale"   
       * }).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: TreatmentLocalizationInput): CreateMethods<TreatmentLocalization>;

      /**
       * byId method get a TreatmentLocalization document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<TreatmentLocalization, TreatmentLocalizationInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.TreatmentLocalization.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<TreatmentLocalization, TreatmentLocalizationInput>

       /**
        * first where method get the first matching value from the Set.
        * 
        * @param {(inputCondition: ((data: T) => boolean) | string)} function takes in a document of type T and returns a boolean
        * 
        * @returns {FirstWhereMethods<T>}  returns the first matching value in the Set, or null if the Set is empty or no values match.
        * 
        * @example
        * query.Address.all().firstWhere((data) => data.country == 'uk').exec();
        * OR
        * query.Address.all().firstWhere(`(data) => data.${dynamicKey} == "${dynamicValueToCheck}"`).exec();
        * 
        * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/set/firstwhere#description See more...}
        */
       firstWhere(inputCondition: ((data: TreatmentLocalization) => boolean) | string): FirstWhereMethods<TreatmentLocalization>;
    }


  export interface Query {
    /**
 * @returns This return fqlx methods for the PatientFile 
 */ 
PatientFile: PaginateData<PatientFile> & PatientFileMethods;
/**
 * @returns This return fqlx methods for the Ts 
 */ 
 Ts:  PaginateData<Ts> & TsMethods;
/**
 * @returns This return fqlx methods for the Patient 
 */ 
Patient: PaginateData<Patient> & PatientMethods;
/**
 * @returns This return fqlx methods for the Tooth 
 */ 
Tooth: PaginateData<Tooth> & ToothMethods;
/**
 * @returns This return fqlx methods for the Root 
 */ 
 Root:  PaginateData<Root> & RootMethods;
/**
 * @returns This return fqlx methods for the Crown 
 */ 
 Crown:  PaginateData<Crown> & CrownMethods;
/**
 * @returns This return fqlx methods for the BodyPartLeaf 
 */ 
BodyPartLeaf: PaginateData<BodyPartLeaf> & BodyPartLeafMethods;
/**
 * @returns This return fqlx methods for the Finding 
 */ 
Finding: PaginateData<Finding> & FindingMethods;
/**
 * @returns This return fqlx methods for the TreatmentDoc 
 */ 
TreatmentDoc: PaginateData<TreatmentDoc> & TreatmentDocMethods;
/**
 * @returns This return fqlx methods for the SelectedProduct 
 */ 
SelectedProduct: PaginateData<SelectedProduct> & SelectedProductMethods;
/**
 * @returns This return fqlx methods for the Product 
 */ 
Product: PaginateData<Product> & ProductMethods;
/**
 * @returns This return fqlx methods for the TreatmentGroup 
 */ 
TreatmentGroup: PaginateData<TreatmentGroup> & TreatmentGroupMethods;
/**
 * @returns This return fqlx methods for the Treatment 
 */ 
Treatment: PaginateData<Treatment> & TreatmentMethods;
/**
 * @returns This return fqlx methods for the Area 
 */ 
Area: PaginateData<Area> & AreaMethods;
/**
 * @returns This return fqlx methods for the TreatmentLocalization 
 */ 
TreatmentLocalization: PaginateData<TreatmentLocalization> & TreatmentLocalizationMethods;

  }