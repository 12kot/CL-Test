import { render } from "@testing-library/react";
import { Loader } from "common/components/loader/loader.component";
import "@testing-library/jest-dom";

describe("Loader", () => {
  test("renders loader with correct styles", () => {
    const { container } = render(<Loader color="red" />);

    const loader = container.firstChild as HTMLElement;
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveStyle({
      borderColor: "red",
      borderLeftColor: "transparent",
    });
  });
});
