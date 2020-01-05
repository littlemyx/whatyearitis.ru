import React from "react";
import { render } from "@testing-library/react";
import Year from "./Year";

test("renders learn react link", () => {
  const { getByText } = render(<Year />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
