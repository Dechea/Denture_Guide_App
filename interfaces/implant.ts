export interface implantFormProps {
  filterName: string;
  id: number;
  option: string[];
}
[];

export interface implantProductOptionProps {
  id: number;
  localStorageCount: number;
  selectedTeeth: number;
}

interface ImplantDetailsProps {
  [key: string]: string;
}

export interface implantProductListProps {
  id: string;
  implant: any;
  options: implantProductOptionProps[];
}
[];

export interface implantProductOptionsProps {
  selectedTeeth: number;
}
