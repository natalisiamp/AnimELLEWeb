import { render, screen } from '@testing-library/react';
import Animelle from './App';

test('renders learn react link', () => {
  render(<Animelle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
