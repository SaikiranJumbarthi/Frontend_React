import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider } from './js/context/AuthContext';
import { CompaniesProvider } from './js/context/CompaniesContext';
import App from './App';

test('renders companies directory', async () => {
  render(
    <AuthProvider>
      <CompaniesProvider>
        <App />
      </CompaniesProvider>
    </AuthProvider>
  );
  
  // Wait for loading to complete
  await waitFor(() => {
    expect(screen.queryByText(/loading companies/i)).not.toBeInTheDocument();
  }, { timeout: 3000 });
  
  // Check if login and register buttons are present in navbar
  const loginButton = screen.getByRole('button', { name: /login/i });
  const registerButton = screen.getByRole('button', { name: /register/i });
  expect(loginButton).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
});
