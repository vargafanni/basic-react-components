export interface IColumnDefinition {
  field: string;
  header: string;
  renderer?: (data: unknown) => JSX.Element;
  align?: EAlign;
}

export interface ITableParams {
  caption?: {
    text: string;
    element?: JSX.Element;
  };
  columnDefinitions: IColumnDefinition[];
  data: Array<unknown>;
}

export enum EAlign {
  RIGHT = "right",
  Left = "left",
}
