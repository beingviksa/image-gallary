import { fireEvent, render } from "@testing-library/react";
import Image from "../Image";

describe("<Image/>", () => {
  const props = {
    path: "src/images/tajmahal.jpeg",
    alt: "TajMahal",
    shape: "circle",
    description:
      "The Taj Mahal, is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.",
  };

  it("render the Image Component", () => {
    const { container } = render(<Image {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("show modal on click of Image", () => {
    const { getByTestId } = render(<Image {...props} />);
    const placeImage = getByTestId("TajMahal-image");

    fireEvent.click(placeImage);

    const modal = getByTestId("modal-container");
    expect(modal).toBeInTheDocument();
  });
});
