import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a html node', () => {
  const { container } = render(<App />);
  const child = container.firstChild;
  expect(child).toBeTruthy();
});
