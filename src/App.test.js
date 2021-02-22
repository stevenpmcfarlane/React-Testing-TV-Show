import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

test("renders without error", () => {
  render(<App />);
});
