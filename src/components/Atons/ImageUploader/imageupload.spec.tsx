import { render, screen } from '@testing-library/react';
import { ImageUploader } from '.';

// Mocking toast
jest.mock('react-toastify', () => ({ toast: { success: jest.fn(), error: jest.fn() } }));

describe('<ImageUploader />', () => {

    // Given
    const mockOnUpload = jest.fn().mockResolvedValue('/uploads/imoveis/4e3b1de8964e540ba6b71a800.jpg');
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
    });

    test("The component must be rendered on screen", () => {
        // Given
        const fn = jest.fn();
        render(<ImageUploader onUpload={fn} />);

        // When
        const elemento = screen.getByTestId("file-input");

        // Then
        expect(elemento).toBeInTheDocument();
    });

    test('renders component with default label', () => {
        render(<ImageUploader onUpload={mockOnUpload} />);

        // Then
        expect(screen.getByText('Escolha uma imagem')).toBeInTheDocument();
    });

    test('renders component with custom label', () => {
        render(<ImageUploader onUpload={mockOnUpload} label="Upload Image" />);

        // Then
        expect(screen.getByText('Upload Image')).toBeInTheDocument();
    });
});