import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o App.js', () => {
  it('Testando se ao topo da aplicação encontra links de navegação Home', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
  });
  it('Testando se ao topo da aplicação encontra o link de navegação About', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
  });
  it('Testando se ao topo da aplicação encontra o link de navegação Favorite', () => {
    renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
    expect(favoriteLink).toBeInTheDocument();
  });
  it('Teste se ao clicar no link de navegação Home é redirecianado a URL correta', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    userEvent.click(homeLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  it('Teste se ao clicar no link de navegação About, é redirecionado a URL correta', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  it('Teste se ao clicar no link de navegação Favorite, é redirecionado a URL correta', () => {
    const { history } = renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(favoriteLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  it('Teste se ao redirecionar para uma URL inválida, renderiza um Not Found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/xablau');
    });

    const notFoundTitle = screen.getByRole('heading', { name: 'Page requested not found' });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
