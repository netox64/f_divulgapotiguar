import { render, screen } from "@testing-library/react";
import { CardAnuncio } from ".";

describe("<CardAnuncio />", () => {

    // Given globals
    beforeEach(() => {
        render(<CardAnuncio title={"anuncio#1"} body={"texto"} url={"/url/id"} />);
    });

    test("The card anuncio must be rendered on the screen", async () => {
        // When
        const elemento = await screen.findByTestId("card-anuncio");

        // Then
        expect(elemento).toBeInTheDocument();
    });

    test("Must contain between classes the CSS", async () => {
        // When
        const elemento = screen.findByTestId("card-anuncio");

        //Then
        expect((await elemento).className).toMatch(/w-full max-w-\[300px\] min-h-\[200px\] bg-slate-200 rounded-2xl flex flex-col items-center p-4 shadow-lg/);
    });

});