import Cell from "./Cell";
import "./table.scss";
import { ITableParams } from "./TableInterfacesEnums";
import React from "react";

function Table({ params }: { params: ITableParams }): JSX.Element {
  return (
    <table>
      <caption>
        <div>
          <div className="title">{params.caption?.text}</div>
          {params.caption?.element}
        </div>
      </caption>
      <thead>
        <tr>
          {params.columnDefinitions.map((column) => {
            return (
              <th key={column.field} scope="col" className={column.align}>
                {column.header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {params.data.map((row, index) => {
          return (
            <tr key={index}>
              {params.columnDefinitions.map((column) => {
                return <Cell key={`${column.field}${index}`} data={row} column={column} />;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
