
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
    FirstWhereMethods,
    SetMethods,
  } from 'fauna-typed'
  
export interface Ts {
    /**
 * isoString for the Ts
 */
 isoString?: string;

  }


  export interface TsInput {
    /**
 * isoString for the Ts
 */
 isoString?: string;

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
       * @param {TsInput | string} input - will be the Ts which you want to add.
         * @param { string } input.isoString IsoString for the Ts
       *
       * @returns {CreateMethods<Ts>} return new document.
       * 
       * @example
       * query.Ts.create({  
 * isoString: "Value of the isoString"   
       * }).exec()
       * OR
       * query.Ts.create(`{  
 * isoString: "Value of the isoString"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (TsInput | string)): CreateMethods<Ts>;

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
 id?: string;
/**
 * ts for the PatientFile
 */
 ts?: Ts;
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
 * id for the PatientFile
 */
 id?: string;
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
       * @param {PatientFileInput | string} input - will be the PatientFile which you want to add.
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
       * OR
       * query.PatientFile.create(`{  
 * ts: "Value of the ts"   
 * patient: "Value of the patient"   
 * teeth: "Value of the teeth"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (PatientFileInput | string)): CreateMethods<PatientFile>;

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
 avatar?: string;
/**
 * status for the Patient
 */
 status?: string;

  }


  export interface PatientInput {
    /**
 * name for the Patient
 */
 name: string;
/**
 * avatar for the Patient
 */
 avatar?: string;
/**
 * status for the Patient
 */
 status?: string;

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
       * @param {PatientInput | string} input - will be the Patient which you want to add.
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
       * OR
       * query.Patient.create(`{  
 * name: "Value of the name"   
 * avatar: "Value of the avatar"   
 * status: "Value of the status"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (PatientInput | string)): CreateMethods<Patient>;

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
 findings?: Finding[];
/**
 * treatmentDoc for the Root
 */
 treatmentDoc: TreatmentDoc;
/**
 * addon for the Root
 */
 addon?: BodyPartLeaf;
/**
 * leftRoot for the Root
 */
 leftRoot?: BodyPartLeaf;
/**
 * middleRoot for the Root
 */
 middleRoot?: BodyPartLeaf;
/**
 * rightRoot for the Root
 */
 rightRoot?: BodyPartLeaf;

  }


  export interface RootInput {
    /**
 * findings for the Root
 */
 findings?: Finding[];
/**
 * treatmentDoc for the Root
 */
 treatmentDoc: TreatmentDoc;
/**
 * addon for the Root
 */
 addon?: BodyPartLeaf;
/**
 * leftRoot for the Root
 */
 leftRoot?: BodyPartLeaf;
/**
 * middleRoot for the Root
 */
 middleRoot?: BodyPartLeaf;
/**
 * rightRoot for the Root
 */
 rightRoot?: BodyPartLeaf;

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
       * @param {RootInput | string} input - will be the Root which you want to add.
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
       * OR
       * query.Root.create(`{  
 * findings: "Value of the findings"   
 * treatmentDoc: "Value of the treatmentDoc"   
 * addon: "Value of the addon"   
 * leftRoot: "Value of the leftRoot"   
 * middleRoot: "Value of the middleRoot"   
 * rightRoot: "Value of the rightRoot"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (RootInput | string)): CreateMethods<Root>;

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
 findings?: Finding[];
/**
 * treatmentDoc for the Crown
 */
 treatmentDoc: TreatmentDoc;
/**
 * addon for the Crown
 */
 addon?: BodyPartLeaf;
/**
 * toothNeck for the Crown
 */
 toothNeck?: BodyPartLeaf;
/**
 * left for the Crown
 */
 left?: BodyPartLeaf;
/**
 * right for the Crown
 */
 right?: BodyPartLeaf;
/**
 * center for the Crown
 */
 center?: BodyPartLeaf;
/**
 * outside for the Crown
 */
 outside?: BodyPartLeaf;
/**
 * inside for the Crown
 */
 inside?: BodyPartLeaf;

  }


  export interface CrownInput {
    /**
 * findings for the Crown
 */
 findings?: Finding[];
/**
 * treatmentDoc for the Crown
 */
 treatmentDoc: TreatmentDoc;
/**
 * addon for the Crown
 */
 addon?: BodyPartLeaf;
/**
 * toothNeck for the Crown
 */
 toothNeck?: BodyPartLeaf;
/**
 * left for the Crown
 */
 left?: BodyPartLeaf;
/**
 * right for the Crown
 */
 right?: BodyPartLeaf;
/**
 * center for the Crown
 */
 center?: BodyPartLeaf;
/**
 * outside for the Crown
 */
 outside?: BodyPartLeaf;
/**
 * inside for the Crown
 */
 inside?: BodyPartLeaf;

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
       * @param {CrownInput | string} input - will be the Crown which you want to add.
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
       * OR
       * query.Crown.create(`{  
 * findings: "Value of the findings"   
 * treatmentDoc: "Value of the treatmentDoc"   
 * addon: "Value of the addon"   
 * toothNeck: "Value of the toothNeck"   
 * left: "Value of the left"   
 * right: "Value of the right"   
 * center: "Value of the center"   
 * outside: "Value of the outside"   
 * inside: "Value of the inside"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (CrownInput | string)): CreateMethods<Crown>;

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
       * @param {ToothInput | string} input - will be the Tooth which you want to add.
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
       * OR
       * query.Tooth.create(`{  
 * name: "Value of the name"   
 * root: "Value of the root"   
 * crown: "Value of the crown"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (ToothInput | string)): CreateMethods<Tooth>;

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
 findings?: Finding[];
/**
 * treatmentDocs for the BodyPartLeaf
 */
 treatmentDocs?: TreatmentDoc[];

  }


  export interface BodyPartLeafInput {
    /**
 * findings for the BodyPartLeaf
 */
 findings?: Finding[];
/**
 * treatmentDocs for the BodyPartLeaf
 */
 treatmentDocs?: TreatmentDoc[];

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
       * @param {BodyPartLeafInput | string} input - will be the BodyPartLeaf which you want to add.
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
       * OR
       * query.BodyPartLeaf.create(`{  
 * findings: "Value of the findings"   
 * treatmentDocs: "Value of the treatmentDocs"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (BodyPartLeafInput | string)): CreateMethods<BodyPartLeaf>;

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
 name?: string;
/**
 * value for the Finding
 */
 value?: string;
/**
 * areas for the Finding
 */
 areas?: Area[];
/**
 * localizations for the Finding
 */
 localizations?: TreatmentLocalization[];

  }


  export interface FindingInput {
    /**
 * name for the Finding
 */
 name?: string;
/**
 * value for the Finding
 */
 value?: string;
/**
 * areas for the Finding
 */
 areas?: Area[];
/**
 * localizations for the Finding
 */
 localizations?: TreatmentLocalization[];

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
       * @param {FindingInput | string} input - will be the Finding which you want to add.
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
       * OR
       * query.Finding.create(`{  
 * name: "Value of the name"   
 * value: "Value of the value"   
 * areas: "Value of the areas"   
 * localizations: "Value of the localizations"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (FindingInput | string)): CreateMethods<Finding>;

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
 selectedProducts?: SelectedProduct[];

  }


  export interface TreatmentDocInput {
    /**
 * treatment for the TreatmentDoc
 */
 treatment: Treatment;
/**
 * selectedProducts for the TreatmentDoc
 */
 selectedProducts?: SelectedProduct[];

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
       * @param {TreatmentDocInput | string} input - will be the TreatmentDoc which you want to add.
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
       * OR
       * query.TreatmentDoc.create(`{  
 * treatment: "Value of the treatment"   
 * selectedProducts: "Value of the selectedProducts"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (TreatmentDocInput | string)): CreateMethods<TreatmentDoc>;

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
 selectedProduct?: Product;
/**
 * quantity for the SelectedProduct
 */
 quantity?: number;

  }


  export interface SelectedProductInput {
    /**
 * selectedProduct for the SelectedProduct
 */
 selectedProduct?: Product;
/**
 * quantity for the SelectedProduct
 */
 quantity?: number;

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
       * @param {SelectedProductInput | string} input - will be the SelectedProduct which you want to add.
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
       * OR
       * query.SelectedProduct.create(`{  
 * selectedProduct: "Value of the selectedProduct"   
 * quantity: "Value of the quantity"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (SelectedProductInput | string)): CreateMethods<SelectedProduct>;

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


  export interface Price {
    /**
 * amount for the Price
 */
 amount?: number;
/**
 * currency for the Price
 */
 currency?: string;

  }


  export interface PriceInput {
    /**
 * amount for the Price
 */
 amount?: number;
/**
 * currency for the Price
 */
 currency?: string;

  } 


  export interface PriceMethods {
      /**
       * all method get the set of all documents in the Price collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Price>} method returns the set of all documents in Price collection for the given range.
       * 
       * @example
       * query.Price.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Price>;

      /**
       * create method creates a Price document in the collection with the provided property values.
       * 
       * @param {PriceInput | string} input - will be the Price which you want to add.
         * @param { number } input.amount Amount for the Price
* @param { string } input.currency Currency for the Price
       *
       * @returns {CreateMethods<Price>} return new document.
       * 
       * @example
       * query.Price.create({  
 * amount: "Value of the amount"   
 * currency: "Value of the currency"   
       * }).exec()
       * OR
       * query.Price.create(`{  
 * amount: "Value of the amount"   
 * currency: "Value of the currency"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (PriceInput | string)): CreateMethods<Price>;

      /**
       * byId method get a Price document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Price, PriceInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Price.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Price, PriceInput>

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
       firstWhere(inputCondition: ((data: Price) => boolean) | string): FirstWhereMethods<Price>;
    }


  export interface ProductLocalization {
    /**
 * name for the ProductLocalization
 */
 name?: string;
/**
 * locale for the ProductLocalization
 */
 locale: string;
/**
 * description for the ProductLocalization
 */
 description?: string;
/**
 * price for the ProductLocalization
 */
 price: Price;

  }


  export interface ProductLocalizationInput {
    /**
 * name for the ProductLocalization
 */
 name?: string;
/**
 * locale for the ProductLocalization
 */
 locale: string;
/**
 * description for the ProductLocalization
 */
 description?: string;
/**
 * price for the ProductLocalization
 */
 price: Price;

  } 


  export interface ProductLocalizationMethods {
      /**
       * all method get the set of all documents in the ProductLocalization collection.
       * 
       * @param
       * 
       * @returns {AllMethods<ProductLocalization>} method returns the set of all documents in ProductLocalization collection for the given range.
       * 
       * @example
       * query.ProductLocalization.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<ProductLocalization>;

      /**
       * create method creates a ProductLocalization document in the collection with the provided property values.
       * 
       * @param {ProductLocalizationInput | string} input - will be the ProductLocalization which you want to add.
         * @param { string } input.name Name for the ProductLocalization
* @param { string } input.locale Locale for the ProductLocalization
* @param { string } input.description Description for the ProductLocalization
* @param { Price } input.price Price for the ProductLocalization
       *
       * @returns {CreateMethods<ProductLocalization>} return new document.
       * 
       * @example
       * query.ProductLocalization.create({  
 * name: "Value of the name"   
 * locale: "Value of the locale"   
 * description: "Value of the description"   
 * price: "Value of the price"   
       * }).exec()
       * OR
       * query.ProductLocalization.create(`{  
 * name: "Value of the name"   
 * locale: "Value of the locale"   
 * description: "Value of the description"   
 * price: "Value of the price"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (ProductLocalizationInput | string)): CreateMethods<ProductLocalization>;

      /**
       * byId method get a ProductLocalization document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<ProductLocalization, ProductLocalizationInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.ProductLocalization.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<ProductLocalization, ProductLocalizationInput>

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
       firstWhere(inputCondition: ((data: ProductLocalization) => boolean) | string): FirstWhereMethods<ProductLocalization>;
    }


  export interface Manufacturer {
    /**
 * name for the Manufacturer
 */
 name?: string;

  }


  export interface ManufacturerInput {
    /**
 * name for the Manufacturer
 */
 name?: string;

  } 


  export interface ManufacturerMethods {
      /**
       * all method get the set of all documents in the Manufacturer collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Manufacturer>} method returns the set of all documents in Manufacturer collection for the given range.
       * 
       * @example
       * query.Manufacturer.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Manufacturer>;

      /**
       * create method creates a Manufacturer document in the collection with the provided property values.
       * 
       * @param {ManufacturerInput | string} input - will be the Manufacturer which you want to add.
         * @param { string } input.name Name for the Manufacturer
       *
       * @returns {CreateMethods<Manufacturer>} return new document.
       * 
       * @example
       * query.Manufacturer.create({  
 * name: "Value of the name"   
       * }).exec()
       * OR
       * query.Manufacturer.create(`{  
 * name: "Value of the name"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (ManufacturerInput | string)): CreateMethods<Manufacturer>;

      /**
       * byId method get a Manufacturer document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Manufacturer, ManufacturerInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Manufacturer.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Manufacturer, ManufacturerInput>

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
       firstWhere(inputCondition: ((data: Manufacturer) => boolean) | string): FirstWhereMethods<Manufacturer>;
    }


  export interface Implant {
    /**
 * implantLine for the Implant
 */
 implantLine?: string;
/**
 * material for the Implant
 */
 material?: string;
/**
 * levels for the Implant
 */
 levels?: string[];
/**
 * platformSwitch for the Implant
 */
 platformSwitch?: boolean;
/**
 * insertionPost for the Implant
 */
 insertionPost?: string;
/**
 * length for the Implant
 */
 length?: number;
/**
 * lengthNeck for the Implant
 */
 lengthNeck?: number;
/**
 * diameterPlatform for the Implant
 */
 diameterPlatform?: number;

  }


  export interface ImplantInput {
    /**
 * implantLine for the Implant
 */
 implantLine?: string;
/**
 * material for the Implant
 */
 material?: string;
/**
 * levels for the Implant
 */
 levels?: string[];
/**
 * platformSwitch for the Implant
 */
 platformSwitch?: boolean;
/**
 * insertionPost for the Implant
 */
 insertionPost?: string;
/**
 * length for the Implant
 */
 length?: number;
/**
 * lengthNeck for the Implant
 */
 lengthNeck?: number;
/**
 * diameterPlatform for the Implant
 */
 diameterPlatform?: number;

  } 


  export interface ImplantMethods {
      /**
       * all method get the set of all documents in the Implant collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Implant>} method returns the set of all documents in Implant collection for the given range.
       * 
       * @example
       * query.Implant.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Implant>;

      /**
       * create method creates a Implant document in the collection with the provided property values.
       * 
       * @param {ImplantInput | string} input - will be the Implant which you want to add.
         * @param { string } input.implantLine ImplantLine for the Implant
* @param { string } input.material Material for the Implant
* @param { string[] } input.levels Levels for the Implant
* @param { boolean } input.platformSwitch PlatformSwitch for the Implant
* @param { string } input.insertionPost InsertionPost for the Implant
* @param { number } input.length Length for the Implant
* @param { number } input.lengthNeck LengthNeck for the Implant
* @param { number } input.diameterPlatform DiameterPlatform for the Implant
       *
       * @returns {CreateMethods<Implant>} return new document.
       * 
       * @example
       * query.Implant.create({  
 * implantLine: "Value of the implantLine"   
 * material: "Value of the material"   
 * levels: "Value of the levels"   
 * platformSwitch: "Value of the platformSwitch"   
 * insertionPost: "Value of the insertionPost"   
 * length: "Value of the length"   
 * lengthNeck: "Value of the lengthNeck"   
 * diameterPlatform: "Value of the diameterPlatform"   
       * }).exec()
       * OR
       * query.Implant.create(`{  
 * implantLine: "Value of the implantLine"   
 * material: "Value of the material"   
 * levels: "Value of the levels"   
 * platformSwitch: "Value of the platformSwitch"   
 * insertionPost: "Value of the insertionPost"   
 * length: "Value of the length"   
 * lengthNeck: "Value of the lengthNeck"   
 * diameterPlatform: "Value of the diameterPlatform"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (ImplantInput | string)): CreateMethods<Implant>;

      /**
       * byId method get a Implant document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Implant, ImplantInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Implant.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Implant, ImplantInput>

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
       firstWhere(inputCondition: ((data: Implant) => boolean) | string): FirstWhereMethods<Implant>;
    }


  export interface Abutment {
    /**
 * implantLine for the Abutment
 */
 implantLine?: string;
/**
 * abutmentLine for the Abutment
 */
 abutmentLine?: string;
/**
 * platformSwitch for the Abutment
 */
 platformSwitch?: boolean;
/**
 * workflows for the Abutment
 */
 workflows?: string[];
/**
 * retention for the Abutment
 */
 retention?: string;
/**
 * material for the Abutment
 */
 material?: string;
/**
 * angle for the Abutment
 */
 angle?: number;
/**
 * diameterPlatform for the Abutment
 */
 diameterPlatform?: number;
/**
 * heightsGingiva for the Abutment
 */
 heightsGingiva?: number[];
/**
 * indication for the Abutment
 */
 indication?: string;

  }


  export interface AbutmentInput {
    /**
 * implantLine for the Abutment
 */
 implantLine?: string;
/**
 * abutmentLine for the Abutment
 */
 abutmentLine?: string;
/**
 * platformSwitch for the Abutment
 */
 platformSwitch?: boolean;
/**
 * workflows for the Abutment
 */
 workflows?: string[];
/**
 * retention for the Abutment
 */
 retention?: string;
/**
 * material for the Abutment
 */
 material?: string;
/**
 * angle for the Abutment
 */
 angle?: number;
/**
 * diameterPlatform for the Abutment
 */
 diameterPlatform?: number;
/**
 * heightsGingiva for the Abutment
 */
 heightsGingiva?: number[];
/**
 * indication for the Abutment
 */
 indication?: string;

  } 


  export interface AbutmentMethods {
      /**
       * all method get the set of all documents in the Abutment collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Abutment>} method returns the set of all documents in Abutment collection for the given range.
       * 
       * @example
       * query.Abutment.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Abutment>;

      /**
       * create method creates a Abutment document in the collection with the provided property values.
       * 
       * @param {AbutmentInput | string} input - will be the Abutment which you want to add.
         * @param { string } input.implantLine ImplantLine for the Abutment
* @param { string } input.abutmentLine AbutmentLine for the Abutment
* @param { boolean } input.platformSwitch PlatformSwitch for the Abutment
* @param { string[] } input.workflows Workflows for the Abutment
* @param { string } input.retention Retention for the Abutment
* @param { string } input.material Material for the Abutment
* @param { number } input.angle Angle for the Abutment
* @param { number } input.diameterPlatform DiameterPlatform for the Abutment
* @param { number[] } input.heightsGingiva HeightsGingiva for the Abutment
* @param { string } input.indication Indication for the Abutment
       *
       * @returns {CreateMethods<Abutment>} return new document.
       * 
       * @example
       * query.Abutment.create({  
 * implantLine: "Value of the implantLine"   
 * abutmentLine: "Value of the abutmentLine"   
 * platformSwitch: "Value of the platformSwitch"   
 * workflows: "Value of the workflows"   
 * retention: "Value of the retention"   
 * material: "Value of the material"   
 * angle: "Value of the angle"   
 * diameterPlatform: "Value of the diameterPlatform"   
 * heightsGingiva: "Value of the heightsGingiva"   
 * indication: "Value of the indication"   
       * }).exec()
       * OR
       * query.Abutment.create(`{  
 * implantLine: "Value of the implantLine"   
 * abutmentLine: "Value of the abutmentLine"   
 * platformSwitch: "Value of the platformSwitch"   
 * workflows: "Value of the workflows"   
 * retention: "Value of the retention"   
 * material: "Value of the material"   
 * angle: "Value of the angle"   
 * diameterPlatform: "Value of the diameterPlatform"   
 * heightsGingiva: "Value of the heightsGingiva"   
 * indication: "Value of the indication"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (AbutmentInput | string)): CreateMethods<Abutment>;

      /**
       * byId method get a Abutment document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Abutment, AbutmentInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Abutment.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Abutment, AbutmentInput>

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
       firstWhere(inputCondition: ((data: Abutment) => boolean) | string): FirstWhereMethods<Abutment>;
    }


  export interface HealingAbutment {
    /**
 * implantLine for the HealingAbutment
 */
 implantLine?: string;
/**
 * shape for the HealingAbutment
 */
 shape?: string;
/**
 * platformSwitch for the HealingAbutment
 */
 platformSwitch?: boolean;
/**
 * wprkflows for the HealingAbutment
 */
 wprkflows?: string[];
/**
 * material for the HealingAbutment
 */
 material?: string;
/**
 * diameterPlatform for the HealingAbutment
 */
 diameterPlatform?: number;
/**
 * heightGingiva for the HealingAbutment
 */
 heightGingiva?: number;

  }


  export interface HealingAbutmentInput {
    /**
 * implantLine for the HealingAbutment
 */
 implantLine?: string;
/**
 * shape for the HealingAbutment
 */
 shape?: string;
/**
 * platformSwitch for the HealingAbutment
 */
 platformSwitch?: boolean;
/**
 * wprkflows for the HealingAbutment
 */
 wprkflows?: string[];
/**
 * material for the HealingAbutment
 */
 material?: string;
/**
 * diameterPlatform for the HealingAbutment
 */
 diameterPlatform?: number;
/**
 * heightGingiva for the HealingAbutment
 */
 heightGingiva?: number;

  } 


  export interface HealingAbutmentMethods {
      /**
       * all method get the set of all documents in the HealingAbutment collection.
       * 
       * @param
       * 
       * @returns {AllMethods<HealingAbutment>} method returns the set of all documents in HealingAbutment collection for the given range.
       * 
       * @example
       * query.HealingAbutment.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<HealingAbutment>;

      /**
       * create method creates a HealingAbutment document in the collection with the provided property values.
       * 
       * @param {HealingAbutmentInput | string} input - will be the HealingAbutment which you want to add.
         * @param { string } input.implantLine ImplantLine for the HealingAbutment
* @param { string } input.shape Shape for the HealingAbutment
* @param { boolean } input.platformSwitch PlatformSwitch for the HealingAbutment
* @param { string[] } input.wprkflows Wprkflows for the HealingAbutment
* @param { string } input.material Material for the HealingAbutment
* @param { number } input.diameterPlatform DiameterPlatform for the HealingAbutment
* @param { number } input.heightGingiva HeightGingiva for the HealingAbutment
       *
       * @returns {CreateMethods<HealingAbutment>} return new document.
       * 
       * @example
       * query.HealingAbutment.create({  
 * implantLine: "Value of the implantLine"   
 * shape: "Value of the shape"   
 * platformSwitch: "Value of the platformSwitch"   
 * wprkflows: "Value of the wprkflows"   
 * material: "Value of the material"   
 * diameterPlatform: "Value of the diameterPlatform"   
 * heightGingiva: "Value of the heightGingiva"   
       * }).exec()
       * OR
       * query.HealingAbutment.create(`{  
 * implantLine: "Value of the implantLine"   
 * shape: "Value of the shape"   
 * platformSwitch: "Value of the platformSwitch"   
 * wprkflows: "Value of the wprkflows"   
 * material: "Value of the material"   
 * diameterPlatform: "Value of the diameterPlatform"   
 * heightGingiva: "Value of the heightGingiva"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (HealingAbutmentInput | string)): CreateMethods<HealingAbutment>;

      /**
       * byId method get a HealingAbutment document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<HealingAbutment, HealingAbutmentInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.HealingAbutment.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<HealingAbutment, HealingAbutmentInput>

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
       firstWhere(inputCondition: ((data: HealingAbutment) => boolean) | string): FirstWhereMethods<HealingAbutment>;
    }


  export interface TemporaryAbutment {
    /**
 * implantLine for the TemporaryAbutment
 */
 implantLine?: string;
/**
 * abutmentLines for the TemporaryAbutment
 */
 abutmentLines?: string[];
/**
 * platformSwitch for the TemporaryAbutment
 */
 platformSwitch?: boolean;
/**
 * retention for the TemporaryAbutment
 */
 retention?: string;
/**
 * material for the TemporaryAbutment
 */
 material?: string;
/**
 * diameterPlatform for the TemporaryAbutment
 */
 diameterPlatform?: number;
/**
 * indication for the TemporaryAbutment
 */
 indication?: string;

  }


  export interface TemporaryAbutmentInput {
    /**
 * implantLine for the TemporaryAbutment
 */
 implantLine?: string;
/**
 * abutmentLines for the TemporaryAbutment
 */
 abutmentLines?: string[];
/**
 * platformSwitch for the TemporaryAbutment
 */
 platformSwitch?: boolean;
/**
 * retention for the TemporaryAbutment
 */
 retention?: string;
/**
 * material for the TemporaryAbutment
 */
 material?: string;
/**
 * diameterPlatform for the TemporaryAbutment
 */
 diameterPlatform?: number;
/**
 * indication for the TemporaryAbutment
 */
 indication?: string;

  } 


  export interface TemporaryAbutmentMethods {
      /**
       * all method get the set of all documents in the TemporaryAbutment collection.
       * 
       * @param
       * 
       * @returns {AllMethods<TemporaryAbutment>} method returns the set of all documents in TemporaryAbutment collection for the given range.
       * 
       * @example
       * query.TemporaryAbutment.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<TemporaryAbutment>;

      /**
       * create method creates a TemporaryAbutment document in the collection with the provided property values.
       * 
       * @param {TemporaryAbutmentInput | string} input - will be the TemporaryAbutment which you want to add.
         * @param { string } input.implantLine ImplantLine for the TemporaryAbutment
* @param { string[] } input.abutmentLines AbutmentLines for the TemporaryAbutment
* @param { boolean } input.platformSwitch PlatformSwitch for the TemporaryAbutment
* @param { string } input.retention Retention for the TemporaryAbutment
* @param { string } input.material Material for the TemporaryAbutment
* @param { number } input.diameterPlatform DiameterPlatform for the TemporaryAbutment
* @param { string } input.indication Indication for the TemporaryAbutment
       *
       * @returns {CreateMethods<TemporaryAbutment>} return new document.
       * 
       * @example
       * query.TemporaryAbutment.create({  
 * implantLine: "Value of the implantLine"   
 * abutmentLines: "Value of the abutmentLines"   
 * platformSwitch: "Value of the platformSwitch"   
 * retention: "Value of the retention"   
 * material: "Value of the material"   
 * diameterPlatform: "Value of the diameterPlatform"   
 * indication: "Value of the indication"   
       * }).exec()
       * OR
       * query.TemporaryAbutment.create(`{  
 * implantLine: "Value of the implantLine"   
 * abutmentLines: "Value of the abutmentLines"   
 * platformSwitch: "Value of the platformSwitch"   
 * retention: "Value of the retention"   
 * material: "Value of the material"   
 * diameterPlatform: "Value of the diameterPlatform"   
 * indication: "Value of the indication"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (TemporaryAbutmentInput | string)): CreateMethods<TemporaryAbutment>;

      /**
       * byId method get a TemporaryAbutment document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<TemporaryAbutment, TemporaryAbutmentInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.TemporaryAbutment.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<TemporaryAbutment, TemporaryAbutmentInput>

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
       firstWhere(inputCondition: ((data: TemporaryAbutment) => boolean) | string): FirstWhereMethods<TemporaryAbutment>;
    }


  export interface Impression {
    /**
 * type for the Impression
 */
 type?: string;
/**
 * implantLine for the Impression
 */
 implantLine?: string;
/**
 * abutmentLines for the Impression
 */
 abutmentLines?: string[];
/**
 * diameterPlatform for the Impression
 */
 diameterPlatform?: number;
/**
 * platformSwitch for the Impression
 */
 platformSwitch?: boolean;

  }


  export interface ImpressionInput {
    /**
 * type for the Impression
 */
 type?: string;
/**
 * implantLine for the Impression
 */
 implantLine?: string;
/**
 * abutmentLines for the Impression
 */
 abutmentLines?: string[];
/**
 * diameterPlatform for the Impression
 */
 diameterPlatform?: number;
/**
 * platformSwitch for the Impression
 */
 platformSwitch?: boolean;

  } 


  export interface ImpressionMethods {
      /**
       * all method get the set of all documents in the Impression collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Impression>} method returns the set of all documents in Impression collection for the given range.
       * 
       * @example
       * query.Impression.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Impression>;

      /**
       * create method creates a Impression document in the collection with the provided property values.
       * 
       * @param {ImpressionInput | string} input - will be the Impression which you want to add.
         * @param { string } input.type Type for the Impression
* @param { string } input.implantLine ImplantLine for the Impression
* @param { string[] } input.abutmentLines AbutmentLines for the Impression
* @param { number } input.diameterPlatform DiameterPlatform for the Impression
* @param { boolean } input.platformSwitch PlatformSwitch for the Impression
       *
       * @returns {CreateMethods<Impression>} return new document.
       * 
       * @example
       * query.Impression.create({  
 * type: "Value of the type"   
 * implantLine: "Value of the implantLine"   
 * abutmentLines: "Value of the abutmentLines"   
 * diameterPlatform: "Value of the diameterPlatform"   
 * platformSwitch: "Value of the platformSwitch"   
       * }).exec()
       * OR
       * query.Impression.create(`{  
 * type: "Value of the type"   
 * implantLine: "Value of the implantLine"   
 * abutmentLines: "Value of the abutmentLines"   
 * diameterPlatform: "Value of the diameterPlatform"   
 * platformSwitch: "Value of the platformSwitch"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (ImpressionInput | string)): CreateMethods<Impression>;

      /**
       * byId method get a Impression document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Impression, ImpressionInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Impression.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Impression, ImpressionInput>

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
       firstWhere(inputCondition: ((data: Impression) => boolean) | string): FirstWhereMethods<Impression>;
    }


  export interface LabScrew {
    /**
 * implantLine for the LabScrew
 */
 implantLine?: string;
/**
 * abutmentLine for the LabScrew
 */
 abutmentLine?: string;
/**
 * material for the LabScrew
 */
 material?: string;
/**
 * maxTorque for the LabScrew
 */
 maxTorque?: number;
/**
 * length for the LabScrew
 */
 length?: number;
/**
 * diameterPlatforms for the LabScrew
 */
 diameterPlatforms?: number[];

  }


  export interface LabScrewInput {
    /**
 * implantLine for the LabScrew
 */
 implantLine?: string;
/**
 * abutmentLine for the LabScrew
 */
 abutmentLine?: string;
/**
 * material for the LabScrew
 */
 material?: string;
/**
 * maxTorque for the LabScrew
 */
 maxTorque?: number;
/**
 * length for the LabScrew
 */
 length?: number;
/**
 * diameterPlatforms for the LabScrew
 */
 diameterPlatforms?: number[];

  } 


  export interface LabScrewMethods {
      /**
       * all method get the set of all documents in the LabScrew collection.
       * 
       * @param
       * 
       * @returns {AllMethods<LabScrew>} method returns the set of all documents in LabScrew collection for the given range.
       * 
       * @example
       * query.LabScrew.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<LabScrew>;

      /**
       * create method creates a LabScrew document in the collection with the provided property values.
       * 
       * @param {LabScrewInput | string} input - will be the LabScrew which you want to add.
         * @param { string } input.implantLine ImplantLine for the LabScrew
* @param { string } input.abutmentLine AbutmentLine for the LabScrew
* @param { string } input.material Material for the LabScrew
* @param { number } input.maxTorque MaxTorque for the LabScrew
* @param { number } input.length Length for the LabScrew
* @param { number[] } input.diameterPlatforms DiameterPlatforms for the LabScrew
       *
       * @returns {CreateMethods<LabScrew>} return new document.
       * 
       * @example
       * query.LabScrew.create({  
 * implantLine: "Value of the implantLine"   
 * abutmentLine: "Value of the abutmentLine"   
 * material: "Value of the material"   
 * maxTorque: "Value of the maxTorque"   
 * length: "Value of the length"   
 * diameterPlatforms: "Value of the diameterPlatforms"   
       * }).exec()
       * OR
       * query.LabScrew.create(`{  
 * implantLine: "Value of the implantLine"   
 * abutmentLine: "Value of the abutmentLine"   
 * material: "Value of the material"   
 * maxTorque: "Value of the maxTorque"   
 * length: "Value of the length"   
 * diameterPlatforms: "Value of the diameterPlatforms"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (LabScrewInput | string)): CreateMethods<LabScrew>;

      /**
       * byId method get a LabScrew document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<LabScrew, LabScrewInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.LabScrew.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<LabScrew, LabScrewInput>

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
       firstWhere(inputCondition: ((data: LabScrew) => boolean) | string): FirstWhereMethods<LabScrew>;
    }


  export interface ImplantReplica {
    /**
 * implantLine for the ImplantReplica
 */
 implantLine?: string;
/**
 * material for the ImplantReplica
 */
 material?: string;
/**
 * diameterPlatform for the ImplantReplica
 */
 diameterPlatform?: number;
/**
 * workflows for the ImplantReplica
 */
 workflows?: string[];

  }


  export interface ImplantReplicaInput {
    /**
 * implantLine for the ImplantReplica
 */
 implantLine?: string;
/**
 * material for the ImplantReplica
 */
 material?: string;
/**
 * diameterPlatform for the ImplantReplica
 */
 diameterPlatform?: number;
/**
 * workflows for the ImplantReplica
 */
 workflows?: string[];

  } 


  export interface ImplantReplicaMethods {
      /**
       * all method get the set of all documents in the ImplantReplica collection.
       * 
       * @param
       * 
       * @returns {AllMethods<ImplantReplica>} method returns the set of all documents in ImplantReplica collection for the given range.
       * 
       * @example
       * query.ImplantReplica.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<ImplantReplica>;

      /**
       * create method creates a ImplantReplica document in the collection with the provided property values.
       * 
       * @param {ImplantReplicaInput | string} input - will be the ImplantReplica which you want to add.
         * @param { string } input.implantLine ImplantLine for the ImplantReplica
* @param { string } input.material Material for the ImplantReplica
* @param { number } input.diameterPlatform DiameterPlatform for the ImplantReplica
* @param { string[] } input.workflows Workflows for the ImplantReplica
       *
       * @returns {CreateMethods<ImplantReplica>} return new document.
       * 
       * @example
       * query.ImplantReplica.create({  
 * implantLine: "Value of the implantLine"   
 * material: "Value of the material"   
 * diameterPlatform: "Value of the diameterPlatform"   
 * workflows: "Value of the workflows"   
       * }).exec()
       * OR
       * query.ImplantReplica.create(`{  
 * implantLine: "Value of the implantLine"   
 * material: "Value of the material"   
 * diameterPlatform: "Value of the diameterPlatform"   
 * workflows: "Value of the workflows"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (ImplantReplicaInput | string)): CreateMethods<ImplantReplica>;

      /**
       * byId method get a ImplantReplica document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<ImplantReplica, ImplantReplicaInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.ImplantReplica.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<ImplantReplica, ImplantReplicaInput>

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
       firstWhere(inputCondition: ((data: ImplantReplica) => boolean) | string): FirstWhereMethods<ImplantReplica>;
    }


  export interface Screwdriver {
    /**
 * lengthFunctional for the Screwdriver
 */
 lengthFunctional?: number;
/**
 * lengthFull for the Screwdriver
 */
 lengthFull?: number;
/**
 * type for the Screwdriver
 */
 type?: string;

  }


  export interface ScrewdriverInput {
    /**
 * lengthFunctional for the Screwdriver
 */
 lengthFunctional?: number;
/**
 * lengthFull for the Screwdriver
 */
 lengthFull?: number;
/**
 * type for the Screwdriver
 */
 type?: string;

  } 


  export interface ScrewdriverMethods {
      /**
       * all method get the set of all documents in the Screwdriver collection.
       * 
       * @param
       * 
       * @returns {AllMethods<Screwdriver>} method returns the set of all documents in Screwdriver collection for the given range.
       * 
       * @example
       * query.Screwdriver.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<Screwdriver>;

      /**
       * create method creates a Screwdriver document in the collection with the provided property values.
       * 
       * @param {ScrewdriverInput | string} input - will be the Screwdriver which you want to add.
         * @param { number } input.lengthFunctional LengthFunctional for the Screwdriver
* @param { number } input.lengthFull LengthFull for the Screwdriver
* @param { string } input.type Type for the Screwdriver
       *
       * @returns {CreateMethods<Screwdriver>} return new document.
       * 
       * @example
       * query.Screwdriver.create({  
 * lengthFunctional: "Value of the lengthFunctional"   
 * lengthFull: "Value of the lengthFull"   
 * type: "Value of the type"   
       * }).exec()
       * OR
       * query.Screwdriver.create(`{  
 * lengthFunctional: "Value of the lengthFunctional"   
 * lengthFull: "Value of the lengthFull"   
 * type: "Value of the type"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (ScrewdriverInput | string)): CreateMethods<Screwdriver>;

      /**
       * byId method get a Screwdriver document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<Screwdriver, ScrewdriverInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.Screwdriver.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<Screwdriver, ScrewdriverInput>

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
       firstWhere(inputCondition: ((data: Screwdriver) => boolean) | string): FirstWhereMethods<Screwdriver>;
    }


  export interface OrientationAid {
    /**
 * material for the OrientationAid
 */
 material?: string;
/**
 * singleUse for the OrientationAid
 */
 singleUse?: boolean;
/**
 * lengthFunctional for the OrientationAid
 */
 lengthFunctional?: number;
/**
 * lengthFull for the OrientationAid
 */
 lengthFull?: number;
/**
 * type for the OrientationAid
 */
 type?: string;

  }


  export interface OrientationAidInput {
    /**
 * material for the OrientationAid
 */
 material?: string;
/**
 * singleUse for the OrientationAid
 */
 singleUse?: boolean;
/**
 * lengthFunctional for the OrientationAid
 */
 lengthFunctional?: number;
/**
 * lengthFull for the OrientationAid
 */
 lengthFull?: number;
/**
 * type for the OrientationAid
 */
 type?: string;

  } 


  export interface OrientationAidMethods {
      /**
       * all method get the set of all documents in the OrientationAid collection.
       * 
       * @param
       * 
       * @returns {AllMethods<OrientationAid>} method returns the set of all documents in OrientationAid collection for the given range.
       * 
       * @example
       * query.OrientationAid.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<OrientationAid>;

      /**
       * create method creates a OrientationAid document in the collection with the provided property values.
       * 
       * @param {OrientationAidInput | string} input - will be the OrientationAid which you want to add.
         * @param { string } input.material Material for the OrientationAid
* @param { boolean } input.singleUse SingleUse for the OrientationAid
* @param { number } input.lengthFunctional LengthFunctional for the OrientationAid
* @param { number } input.lengthFull LengthFull for the OrientationAid
* @param { string } input.type Type for the OrientationAid
       *
       * @returns {CreateMethods<OrientationAid>} return new document.
       * 
       * @example
       * query.OrientationAid.create({  
 * material: "Value of the material"   
 * singleUse: "Value of the singleUse"   
 * lengthFunctional: "Value of the lengthFunctional"   
 * lengthFull: "Value of the lengthFull"   
 * type: "Value of the type"   
       * }).exec()
       * OR
       * query.OrientationAid.create(`{  
 * material: "Value of the material"   
 * singleUse: "Value of the singleUse"   
 * lengthFunctional: "Value of the lengthFunctional"   
 * lengthFull: "Value of the lengthFull"   
 * type: "Value of the type"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (OrientationAidInput | string)): CreateMethods<OrientationAid>;

      /**
       * byId method get a OrientationAid document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<OrientationAid, OrientationAidInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.OrientationAid.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<OrientationAid, OrientationAidInput>

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
       firstWhere(inputCondition: ((data: OrientationAid) => boolean) | string): FirstWhereMethods<OrientationAid>;
    }


  export interface ProtectionAid {
    /**
 * material for the ProtectionAid
 */
 material?: string;
/**
 * singleUse for the ProtectionAid
 */
 singleUse?: boolean;
/**
 * diameterPlatform for the ProtectionAid
 */
 diameterPlatform?: number;

  }


  export interface ProtectionAidInput {
    /**
 * material for the ProtectionAid
 */
 material?: string;
/**
 * singleUse for the ProtectionAid
 */
 singleUse?: boolean;
/**
 * diameterPlatform for the ProtectionAid
 */
 diameterPlatform?: number;

  } 


  export interface ProtectionAidMethods {
      /**
       * all method get the set of all documents in the ProtectionAid collection.
       * 
       * @param
       * 
       * @returns {AllMethods<ProtectionAid>} method returns the set of all documents in ProtectionAid collection for the given range.
       * 
       * @example
       * query.ProtectionAid.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<ProtectionAid>;

      /**
       * create method creates a ProtectionAid document in the collection with the provided property values.
       * 
       * @param {ProtectionAidInput | string} input - will be the ProtectionAid which you want to add.
         * @param { string } input.material Material for the ProtectionAid
* @param { boolean } input.singleUse SingleUse for the ProtectionAid
* @param { number } input.diameterPlatform DiameterPlatform for the ProtectionAid
       *
       * @returns {CreateMethods<ProtectionAid>} return new document.
       * 
       * @example
       * query.ProtectionAid.create({  
 * material: "Value of the material"   
 * singleUse: "Value of the singleUse"   
 * diameterPlatform: "Value of the diameterPlatform"   
       * }).exec()
       * OR
       * query.ProtectionAid.create(`{  
 * material: "Value of the material"   
 * singleUse: "Value of the singleUse"   
 * diameterPlatform: "Value of the diameterPlatform"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (ProtectionAidInput | string)): CreateMethods<ProtectionAid>;

      /**
       * byId method get a ProtectionAid document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<ProtectionAid, ProtectionAidInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.ProtectionAid.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<ProtectionAid, ProtectionAidInput>

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
       firstWhere(inputCondition: ((data: ProtectionAid) => boolean) | string): FirstWhereMethods<ProtectionAid>;
    }


  export interface ClampingAid {
    /**
 * implantLine for the ClampingAid
 */
 implantLine?: string;
/**
 * abutmentLine for the ClampingAid
 */
 abutmentLine?: string;
/**
 * material for the ClampingAid
 */
 material?: string;
/**
 * singleUse for the ClampingAid
 */
 singleUse?: boolean;
/**
 * diameterPlatform for the ClampingAid
 */
 diameterPlatform?: number;

  }


  export interface ClampingAidInput {
    /**
 * implantLine for the ClampingAid
 */
 implantLine?: string;
/**
 * abutmentLine for the ClampingAid
 */
 abutmentLine?: string;
/**
 * material for the ClampingAid
 */
 material?: string;
/**
 * singleUse for the ClampingAid
 */
 singleUse?: boolean;
/**
 * diameterPlatform for the ClampingAid
 */
 diameterPlatform?: number;

  } 


  export interface ClampingAidMethods {
      /**
       * all method get the set of all documents in the ClampingAid collection.
       * 
       * @param
       * 
       * @returns {AllMethods<ClampingAid>} method returns the set of all documents in ClampingAid collection for the given range.
       * 
       * @example
       * query.ClampingAid.all().exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-all#signature See more...}
       */
      all(): AllMethods<ClampingAid>;

      /**
       * create method creates a ClampingAid document in the collection with the provided property values.
       * 
       * @param {ClampingAidInput | string} input - will be the ClampingAid which you want to add.
         * @param { string } input.implantLine ImplantLine for the ClampingAid
* @param { string } input.abutmentLine AbutmentLine for the ClampingAid
* @param { string } input.material Material for the ClampingAid
* @param { boolean } input.singleUse SingleUse for the ClampingAid
* @param { number } input.diameterPlatform DiameterPlatform for the ClampingAid
       *
       * @returns {CreateMethods<ClampingAid>} return new document.
       * 
       * @example
       * query.ClampingAid.create({  
 * implantLine: "Value of the implantLine"   
 * abutmentLine: "Value of the abutmentLine"   
 * material: "Value of the material"   
 * singleUse: "Value of the singleUse"   
 * diameterPlatform: "Value of the diameterPlatform"   
       * }).exec()
       * OR
       * query.ClampingAid.create(`{  
 * implantLine: "Value of the implantLine"   
 * abutmentLine: "Value of the abutmentLine"   
 * material: "Value of the material"   
 * singleUse: "Value of the singleUse"   
 * diameterPlatform: "Value of the diameterPlatform"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (ClampingAidInput | string)): CreateMethods<ClampingAid>;

      /**
       * byId method get a ClampingAid document by its document ID.
       * This will returns available Fqlx byId methods
       * 
       * @param {string} id - The ID of the document to retrieve
       * 
       * @returns {ByIdMethods<ClampingAid, ClampingAidInput>} return document when it exists and is accessible, else return
       * null when the document does not exist or is inaccessible.
       * 
       * @example
       * query.ClampingAid.byId("21545645646554").exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-byid#signature See more...}
       */
       byId(id: string): ByIdMethods<ClampingAid, ClampingAidInput>

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
       firstWhere(inputCondition: ((data: ClampingAid) => boolean) | string): FirstWhereMethods<ClampingAid>;
    }


  export interface Product {
    /**
 * id for the Product
 */
 id?: string;
/**
 * manufacturerProductId for the Product
 */
 manufacturerProductId: string;
/**
 * manufacturer for the Product
 */
 manufacturer: Manufacturer;
/**
 * image for the Product
 */
 image?: string;
/**
 * localizations for the Product
 */
 localizations: ProductLocalization[];
/**
 * implant for the Product
 */
 implant?: Implant;
/**
 * abutment for the Product
 */
 abutment?: Abutment;
/**
 * healingAbutment for the Product
 */
 healingAbutment?: HealingAbutment;
/**
 * temporaryAbutment for the Product
 */
 temporaryAbutment?: TemporaryAbutment;
/**
 * impression for the Product
 */
 impression?: Impression;
/**
 * labScrew for the Product
 */
 labScrew?: LabScrew;
/**
 * implantReplica for the Product
 */
 implantReplica?: ImplantReplica;
/**
 * screwdriver for the Product
 */
 screwdriver?: Screwdriver;
/**
 * orientationAid for the Product
 */
 orientationAid?: OrientationAid;
/**
 * protectionAid for the Product
 */
 protectionAid?: ProtectionAid;
/**
 * clampingAid for the Product
 */
 clampingAid?: ClampingAid;

  }


  export interface ProductInput {
    /**
 * id for the Product
 */
 id?: string;
/**
 * manufacturerProductId for the Product
 */
 manufacturerProductId: string;
/**
 * manufacturer for the Product
 */
 manufacturer: Manufacturer;
/**
 * image for the Product
 */
 image?: string;
/**
 * localizations for the Product
 */
 localizations: ProductLocalization[];
/**
 * implant for the Product
 */
 implant?: Implant;
/**
 * abutment for the Product
 */
 abutment?: Abutment;
/**
 * healingAbutment for the Product
 */
 healingAbutment?: HealingAbutment;
/**
 * temporaryAbutment for the Product
 */
 temporaryAbutment?: TemporaryAbutment;
/**
 * impression for the Product
 */
 impression?: Impression;
/**
 * labScrew for the Product
 */
 labScrew?: LabScrew;
/**
 * implantReplica for the Product
 */
 implantReplica?: ImplantReplica;
/**
 * screwdriver for the Product
 */
 screwdriver?: Screwdriver;
/**
 * orientationAid for the Product
 */
 orientationAid?: OrientationAid;
/**
 * protectionAid for the Product
 */
 protectionAid?: ProtectionAid;
/**
 * clampingAid for the Product
 */
 clampingAid?: ClampingAid;

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
       * @param {ProductInput | string} input - will be the Product which you want to add.
         * @param { string } input.manufacturerProductId ManufacturerProductId for the Product
* @param { Manufacturer } input.manufacturer Manufacturer for the Product
* @param { string } input.image Image for the Product
* @param { ProductLocalization[] } input.localizations Localizations for the Product
* @param { Implant } input.implant Implant for the Product
* @param { Abutment } input.abutment Abutment for the Product
* @param { HealingAbutment } input.healingAbutment HealingAbutment for the Product
* @param { TemporaryAbutment } input.temporaryAbutment TemporaryAbutment for the Product
* @param { Impression } input.impression Impression for the Product
* @param { LabScrew } input.labScrew LabScrew for the Product
* @param { ImplantReplica } input.implantReplica ImplantReplica for the Product
* @param { Screwdriver } input.screwdriver Screwdriver for the Product
* @param { OrientationAid } input.orientationAid OrientationAid for the Product
* @param { ProtectionAid } input.protectionAid ProtectionAid for the Product
* @param { ClampingAid } input.clampingAid ClampingAid for the Product
       *
       * @returns {CreateMethods<Product>} return new document.
       * 
       * @example
       * query.Product.create({  
 * manufacturerProductId: "Value of the manufacturerProductId"   
 * manufacturer: "Value of the manufacturer"   
 * image: "Value of the image"   
 * localizations: "Value of the localizations"   
 * implant: "Value of the implant"   
 * abutment: "Value of the abutment"   
 * healingAbutment: "Value of the healingAbutment"   
 * temporaryAbutment: "Value of the temporaryAbutment"   
 * impression: "Value of the impression"   
 * labScrew: "Value of the labScrew"   
 * implantReplica: "Value of the implantReplica"   
 * screwdriver: "Value of the screwdriver"   
 * orientationAid: "Value of the orientationAid"   
 * protectionAid: "Value of the protectionAid"   
 * clampingAid: "Value of the clampingAid"   
       * }).exec()
       * OR
       * query.Product.create(`{  
 * manufacturerProductId: "Value of the manufacturerProductId"   
 * manufacturer: "Value of the manufacturer"   
 * image: "Value of the image"   
 * localizations: "Value of the localizations"   
 * implant: "Value of the implant"   
 * abutment: "Value of the abutment"   
 * healingAbutment: "Value of the healingAbutment"   
 * temporaryAbutment: "Value of the temporaryAbutment"   
 * impression: "Value of the impression"   
 * labScrew: "Value of the labScrew"   
 * implantReplica: "Value of the implantReplica"   
 * screwdriver: "Value of the screwdriver"   
 * orientationAid: "Value of the orientationAid"   
 * protectionAid: "Value of the protectionAid"   
 * clampingAid: "Value of the clampingAid"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (ProductInput | string)): CreateMethods<Product>;

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
 name?: string;
/**
 * treatments for the TreatmentGroup
 */
 treatments?: Treatment[];
/**
 * localizations for the TreatmentGroup
 */
 localizations?: TreatmentLocalization[];

  }


  export interface TreatmentGroupInput {
    /**
 * name for the TreatmentGroup
 */
 name?: string;
/**
 * treatments for the TreatmentGroup
 */
 treatments?: Treatment[];
/**
 * localizations for the TreatmentGroup
 */
 localizations?: TreatmentLocalization[];

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
       * @param {TreatmentGroupInput | string} input - will be the TreatmentGroup which you want to add.
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
       * OR
       * query.TreatmentGroup.create(`{  
 * name: "Value of the name"   
 * treatments: "Value of the treatments"   
 * localizations: "Value of the localizations"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (TreatmentGroupInput | string)): CreateMethods<TreatmentGroup>;

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
 areas?: Area[];
/**
 * localizations for the Treatment
 */
 localizations?: TreatmentLocalization[];

  }


  export interface TreatmentInput {
    /**
 * name for the Treatment
 */
 name: string;
/**
 * areas for the Treatment
 */
 areas?: Area[];
/**
 * localizations for the Treatment
 */
 localizations?: TreatmentLocalization[];

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
       * @param {TreatmentInput | string} input - will be the Treatment which you want to add.
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
       * OR
       * query.Treatment.create(`{  
 * name: "Value of the name"   
 * areas: "Value of the areas"   
 * localizations: "Value of the localizations"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (TreatmentInput | string)): CreateMethods<Treatment>;

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
 name?: string;

  }


  export interface AreaInput {
    /**
 * name for the Area
 */
 name?: string;

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
       * @param {AreaInput | string} input - will be the Area which you want to add.
         * @param { string } input.name Name for the Area
       *
       * @returns {CreateMethods<Area>} return new document.
       * 
       * @example
       * query.Area.create({  
 * name: "Value of the name"   
       * }).exec()
       * OR
       * query.Area.create(`{  
 * name: "Value of the name"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (AreaInput | string)): CreateMethods<Area>;

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
 name?: string;
/**
 * synonyms for the TreatmentLocalization
 */
 synonyms?: string[];
/**
 * locale for the TreatmentLocalization
 */
 locale?: string;

  }


  export interface TreatmentLocalizationInput {
    /**
 * name for the TreatmentLocalization
 */
 name?: string;
/**
 * synonyms for the TreatmentLocalization
 */
 synonyms?: string[];
/**
 * locale for the TreatmentLocalization
 */
 locale?: string;

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
       * @param {TreatmentLocalizationInput | string} input - will be the TreatmentLocalization which you want to add.
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
       * OR
       * query.TreatmentLocalization.create(`{  
 * name: "Value of the name"   
 * synonyms: "Value of the synonyms"   
 * locale: "Value of the locale"   
       * }`).exec()
       * 
       * @see {@link https://fqlx-beta--fauna-docs.netlify.app/fqlx/beta/reference/schema_entities/collection/instance-create#signature See more...}
       */
    create(input: (TreatmentLocalizationInput | string)): CreateMethods<TreatmentLocalization>;

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
    Set: SetMethods;
    /**
 * @returns This return fqlx methods for the PatientFile 
 */ 
PatientFile: PatientFileMethods;
/**
 * @returns This return fqlx methods for the Patient 
 */ 
Patient: PatientMethods;
/**
 * @returns This return fqlx methods for the Tooth 
 */ 
Tooth: ToothMethods;
/**
 * @returns This return fqlx methods for the BodyPartLeaf 
 */ 
BodyPartLeaf: BodyPartLeafMethods;
/**
 * @returns This return fqlx methods for the Finding 
 */ 
Finding: FindingMethods;
/**
 * @returns This return fqlx methods for the TreatmentDoc 
 */ 
TreatmentDoc: TreatmentDocMethods;
/**
 * @returns This return fqlx methods for the SelectedProduct 
 */ 
SelectedProduct: SelectedProductMethods;
/**
 * @returns This return fqlx methods for the ProductLocalization 
 */ 
ProductLocalization: ProductLocalizationMethods;
/**
 * @returns This return fqlx methods for the Product 
 */ 
Product: ProductMethods;
/**
 * @returns This return fqlx methods for the TreatmentGroup 
 */ 
TreatmentGroup: TreatmentGroupMethods;
/**
 * @returns This return fqlx methods for the Treatment 
 */ 
Treatment: TreatmentMethods;
/**
 * @returns This return fqlx methods for the Area 
 */ 
Area: AreaMethods;
/**
 * @returns This return fqlx methods for the TreatmentLocalization 
 */ 
TreatmentLocalization: TreatmentLocalizationMethods;

  }