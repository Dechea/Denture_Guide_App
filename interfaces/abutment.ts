export interface abutmentProductListProps {
  id: number;
  image: string;
  heading: string;
  description: string[];
  price: string;
  options: abutmentOptionsProps[];
  patientFileId: string;
}

export interface abutmentOptionsProps {
  id: number;
  selectedTeeth: number;
  localStorageCount: number;
  onClick?: () => void;
}

export interface abutmentFormProps {
  id: number;
  name: string;
  count: number;
}
[];
