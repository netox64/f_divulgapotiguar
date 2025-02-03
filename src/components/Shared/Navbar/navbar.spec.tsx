import { render, screen } from "@testing-library/react";
import { NavBar } from "./index";

jest.mock("../../Atons/NavItem", () => ({NavItem: ({ routeName }: { routeName: string }) => <div>{routeName}</div>}));

describe("<NavBar />", () => {

  test("renders correctly with all routes", () => {
    render(<NavBar />);
    const routes = ["home", "register", "contact", "login"];

    routes.forEach((route) => {
      const element = screen.getByText(route);
      expect(element).toBeInTheDocument();
    });
  });

});