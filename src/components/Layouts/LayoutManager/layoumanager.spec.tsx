import { render, screen } from "@testing-library/react";
import { LayoutManager } from ".";

describe("<LayoutManager />", () => {

    //Given globals
    beforeEach(() => {
        render(<LayoutManager><></><></></LayoutManager>);
    });

    test("the LayoutManager should render on screen with the expected text", async () => {
        // When - Act  
        const elemento = await screen.findByTestId("layout-manager");

        //Then  - Assert
        expect(elemento).toBeInTheDocument();
    });

    test("Must contain 1 container for sidevar and 1 container for content", async () => {
        // When - Act  
        const sidebar = await screen.findByTestId("container-sidebar");
        const content = await screen.findByTestId("container-content");

        //Then  - Assert
        expect(sidebar).toBeInTheDocument();
        expect(content).toBeInTheDocument();
    });

    test("should apply correct flex classes", async () => {
        // When - Act  
        const layoutManager = await screen.findByTestId("layout-manager");
        const sidebar = await screen.findByTestId("container-sidebar");
        const content = await screen.findByTestId("container-content");

        //Then  - Assert
        expect(layoutManager).toHaveClass("flex"); 
        expect(sidebar).toHaveClass("p-4 md:w-[35%] lg:w-[35%] xl:w-[15%]"); 
        expect(content).toHaveClass("p-4 flex flex-row flex-wrap md:w-[65%] xl:w-[85%]");
    });
});