import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";

describe("Cell", () => {
  test("renders the Cell component with text", () => {
    const cell = render(
      <table>
        <tbody>
          <tr>
            <Cell
              data={{ field: "field value", field2: "other field value" }}
              column={{ header: "Header", field: "field" }}
            />
          </tr>
        </tbody>
      </table>
    );

    expect(cell.getByText("field value")).toBeTruthy();
  });
  test("renders the Cell component with renderer", () => {
    const renderer = (data: unknown): JSX.Element => {
      return <>{(data as { field: string }).field} is correct</>;
    };
    const cell = render(
      <table>
        <tbody>
          <tr>
            <Cell
              data={{ field: "field value" }}
              column={{ header: "Header", field: "field", renderer: renderer }}
            />
          </tr>
        </tbody>
      </table>
    );

    expect(cell.getByText("field value is correct")).toBeTruthy();
  });
});
