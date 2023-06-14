export interface impressionListProps {
  id: number;
  heading: string;
  description: string;
  image: string;
  price: string;
  options: impressionOptionsProps[];
}

export interface impressionOptionsProps {
  localStorageCount: number;
  selectedTeeth: number;
  id: number;
}

export interface impressionFormProps {
  id: number;
  question: string;
  options: impressionFormOptionsProps[];
}

export interface impressionFormOptionsProps {
  id: number;
  name: string;
  count: number;
}
