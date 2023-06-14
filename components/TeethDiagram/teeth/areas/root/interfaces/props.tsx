export interface RootProps {
  children?: React.ReactNode;
  customStyles?: string;
}

export interface MappedRootProps {
  tooth: number;
  customStyles: string;
  variant: string;
}
