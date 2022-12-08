import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';

describe('Testando a pagina FavoritePokemon', () => {
  test('Testar se é exibido na tela o texto correto, caso não haja pokemon favorito', () => {
    renderWithRouter(<FavoritePokemon />);

    const textFind = screen.getByText(/no favorite pokémon found/i);
    expect(textFind).toBeInTheDocument();
  });
});
