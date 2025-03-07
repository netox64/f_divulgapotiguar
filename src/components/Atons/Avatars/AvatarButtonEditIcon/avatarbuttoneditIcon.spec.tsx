import { render, screen, fireEvent } from '@testing-library/react';
import { AvatarButtonEditIcon } from './';

describe('AvatarButtonEditIcon', () => {
    
  test('renders the button correctly', () => {
    render(<AvatarButtonEditIcon fnClic={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('triggers function when clicked', () => {
    const handleClick = jest.fn();
    render(<AvatarButtonEditIcon fnClic={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('contains an SVG icon inside the button', async () => {
    render(<AvatarButtonEditIcon fnClic={() => {}} />);
    const svgElement = await screen.getByTestId("icon");
    expect(svgElement.tagName).toBe('svg');
  });
});
