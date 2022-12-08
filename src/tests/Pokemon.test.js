import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { Pokemon } from '../components';

const pokemon = {
  id: 25,
  name: 'Pikachu',
  type: 'Electric',
  averageWeight: {
    value: '6.0',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Kanto Viridian Forest',
      map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
    },
    {
      location: 'Kanto Power Plant',
      map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
    },
  ],
  summary: 'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.',
};

describe('teste o componente Pokemon', () => {
  it('Teste se é renderizado corretamente o card', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);

    const pokemonFirst = screen.getByText(/pikachu/i);
    const typePokemon = screen.getByText(/Electric/i);
    const weightPokemon = screen.getByText(/Average weight: 6.0 kg/i);
    const image = screen.getByRole('img', { name: /Pikachu sprite/i });
    expect(pokemonFirst).toBeInTheDocument();
    expect(typePokemon).toBeInTheDocument();
    expect(weightPokemon).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image.alt).toBe('Pikachu sprite');
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  it('Teste se o pokemon card é renderizado com o link para mais detalhes', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    expect(detailsLink).toBeInTheDocument();
    userEvent.click(detailsLink);
    expect(detailsLink.href).toBe('http://localhost/pokemon/25');
  });
  it('teste se ao clicar no link é redirecionado para a página correta', () => {
    const { history } = renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });
  it('testar se o icone de favoritar o pokemon está funcionando', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);

    const favoriteImage = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(favoriteImage).toBeInTheDocument();
    expect(favoriteImage.src).toBe('http://localhost/star-icon.svg');
  });
});
