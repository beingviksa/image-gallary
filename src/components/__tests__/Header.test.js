import { render } from "@testing-library/react";
import Header from "../Header";

it("render the header content", () => {
  const { getByTestId } = render(<Header />);
  const headerContent = getByTestId("header-content");
  expect(headerContent).toBeInTheDocument();
});
