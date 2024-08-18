import { render, screen } from "@testing-library/react";
import { Footer } from "../common/components/footer/footer.component";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Footer", () => {
  test("renders footer with navigation links", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("footer.home")).toBeInTheDocument();
    expect(screen.getByText("footer.catalog")).toBeInTheDocument();
    expect(screen.getByText("footer.messages")).toBeInTheDocument();
    expect(screen.getByText("footer.profile")).toBeInTheDocument();
  });
});
