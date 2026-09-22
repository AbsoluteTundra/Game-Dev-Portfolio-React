import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

test('renders the portfolio landing page', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );

  expect(screen.getByText(/welcome to my portfolio/i)).toBeInTheDocument();
});
