export interface Tooth {
  children?: React.ReactNode;
  tooth: number;
  variant?: string;
  className?: string;
}

export interface ToothComponentProps {
  children?: React.ReactNode;
  customStyles?: string;
  tooth: number;
}

export interface ToothContainerProps {
  children: React.ReactNode;
  customStyles?: string;
  tooth?: number;
}

export interface ToothNumberProps {
  customStyles?: string;
  tooth: number;
  jawType: JawType;
}

export enum JawType {
  UPPER = 'upper',
  LOWER = 'lower',
}
