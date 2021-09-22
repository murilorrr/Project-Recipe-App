import React, { useHistory } from 'react';
// import  from '../pages';

import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';

import '@testing-library/jest-dom';

describe('1 - Teste de Rotas', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
  });
  test('Rota NotFound, quando a rota não for a nenhuma especificada', () => {
    const { history } = useHistory();
    history.push('/tralala');
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
