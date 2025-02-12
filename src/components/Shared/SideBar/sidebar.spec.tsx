import { render, screen } from "@testing-library/react";
import { SideBar } from ".";
import Canivete from "@/components/Utils/canivete";

describe("<SideBar />", () => {
    //Given globals
    beforeEach(() => {
        render(
            <SideBar username={""} img={""} />
        );
    });

    test("should render the Avatar within it", () => {
        // When
        const avatar = screen.getByTestId("container-avatar");

        // Then
        expect(avatar).toBeInTheDocument();
    });

    test("should render the navigation links", () => {
        //Given
        const links = ["profile", "manager", "categorias","planos","imoveis"];

        // When  <--> Then
        links.forEach((link) => {
            const linkElement = screen.getByText(Canivete.captalizeFirstLetter(link));
            expect(linkElement).toBeInTheDocument();
        });
    });

    test("should render logout button", () => {
        // When 
        const logoutButton = screen.getByTestId("logout");

        // Then
        expect(logoutButton).toBeInTheDocument();
    });

});