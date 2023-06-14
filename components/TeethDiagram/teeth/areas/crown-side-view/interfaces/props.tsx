export interface CrownSideViewProps {
  children?: React.ReactNode;
  customStyles?: string;
}

export interface CrownProps {
  children?: React.ReactNode;
  /** toothnumber to render crown | number */
  tooth: number;
  /** variant to specify visualization | string */
  variant?: string;
  /** to render AnchorLeft or not  */
  leftAnchor?: boolean;
  /** to render AnchorRight or not */
  rightAnchor?: boolean;
  customStyles?: string;
}

export interface CrownSideViewContainerProps {
  children: React.ReactNode;
  customStyles?: string;
}
