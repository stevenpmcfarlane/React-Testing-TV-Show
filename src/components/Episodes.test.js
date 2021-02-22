import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Episodes from "./Episodes";

const getDataMock = jest.fn();
test("renders without error", () => {
  render(<Episodes getData={getDataMock} />);
});
