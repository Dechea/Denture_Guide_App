export interface implantFormProps {
  filterName: string;
  id: number;
  option: string[];
}
[];

export interface implantProductOptionsProps {
  id: number;
  localStorageCount: number;
  selectedTeeth: number;
  size: number;
}

interface ImplantDetailsProps {
  [key: string]: string;
}

export interface implantProductListProps {
  id: number;
  heading: string;
  description: string;
  image: string;
  barcode: string;
  price: string;
  implantDetails: ImplantDetailsProps[];
  inStorage?: boolean;
  storageNumber?: number;
  options: implantProductOptionsProps[];
  onSelectImplant: Function;
  selectedTeeth: number[];
  selectedImplants: {
    [key: string]: boolean;
  };
}
[];
// export interface implantProductListProps {
//   id: number;
//   heading: string;
//   price: string;
//   image: string;
//   options: implantProductOptionsProps[];
//   description: string;
//   onSelectImplant: Function;
//   selectedTeeth: number[];
//   selectedImplants: {
//     [key: string]: boolean;
//   };
// }
// [];

export interface implantProductOptionProps {
  productId: number;
  optionId: number;
  // localStorageCount: number;
  selectedTeeth: number;
  // size: number;
  // onSelectImplant: Function;
  // selectedImplants: {
  //   [key: string]: boolean;
  // };
}
