import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Work In Progress/i);
  expect(linkElement).toBeInTheDocument();
});
