import React from "react";
import { IColumnDefinition } from "./TableInterfacesEnums";

interface DataObject {
  [key: string]: unknown;
}

function Cell({ data, column }: { data: unknown; column: IColumnDefinition }): JSX.Element {
  let columnData = <></>;
  function isMyObject(object: unknown): object is DataObject {
    return object !== null && typeof object === "object";
  }
  const converted = isMyObject(data);
  if (converted) {
    const found = column.field in data;
    if (found) {
      columnData = <>{data[column.field]}</>;
    }
  }

  return (
    <td data-label={column.header} className={column.align}>
      {column.renderer !== undefined ? column.renderer(data) : columnData}
    </td>
  );
}
export default Cell;
