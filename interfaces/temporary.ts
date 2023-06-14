export interface temporaryProductListProps {
  id: number;
  heading: string;
  image: string;
  price: string;
  options: temporaryOptionsProps[];
  patientFileId: string;
}

export interface temporaryOptionsProps {
  localStorageCount: number;
  selectedTeeth: number;
  id: number;
}
