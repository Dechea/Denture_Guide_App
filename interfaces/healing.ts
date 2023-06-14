export interface healingProductListProps {
  id: number;
  image: string;
  heading: string;
  description: string[];
  price: string;
  options: healingOptionsProps[];
  patientFileId: string;
}

export interface healingOptionsProps {
  id: number;
  selectedTeeth: number;
  localStorageCount: number;
}

export interface healingFormProps {
  id: number;
  name: string;
  count: number;
}
[];
