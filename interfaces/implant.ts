export interface implantFormProps {
  filterName: string;
  id: number;
  option: string[];
}
[];

export interface implantProductOptionsProps {
  id: number;
  localStorageCount: number;
  selectedTeeth: number[];
  size: number;
}

export interface implantProductListProps {
  id: number;
  heading: string;
  price: string;
  image: string;
  options: implantProductOptionsProps[];
  description: string;
  onSelectImplant: Function;
  selectedTeeth: number[];
  selectedImplants: {
    [key: string]: boolean;
  };
}
[];

export interface implantProductOptionProps {
  productId: number;
  optionId: number;
  localStorageCount: number;
  selectedTeeth: number[];
  size: number;
  onSelectImplant: Function;
  selectedImplants: {
    [key: string]: boolean;
  };
}
