import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import PokemonDetails from '../pages/PokemonDetails';

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

describe('Teste do componente PokemonDetails', () => {
  it('Testar se as informações estão sendo mostradas', () => {
    renderWithRouter(<PokemonDetails
      isPokemonFavoriteById={ {} }
      match={ { params: { id: '25' } } }
      pokemonList={ [pokemon] }
      onUpdateFavoritePokemon={ () => {} }
    />);

    const name = screen.getByRole('heading', { name: /pikachu details/i, level: 2 });
    const image = screen.getByRole('img', { name: /Pikachu sprite/i });
    const summary = screen.getByRole('heading', { name: /summary/i, level: 2 });
    const summaryText = screen.getByText(/this intelligent pokémon roasts hard berries/i);
    const mapPikachu = screen.getByRole('heading', { name: /game locations of pikachu/i, level: 2 });
    const map = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(summaryText).toBeInTheDocument();
    expect(mapPikachu).toBeInTheDocument();
    expect(map.length).toBe(2);
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(image.alt).toBe('Pikachu sprite');
  });
  it('Testar se conseguimos favoritar na página de details', () => {
    const onUpdateFavoritePokemon = jest.fn();

    renderWithRouter(
      <PokemonDetails
        isPokemonFavoriteById={ {} }
        match={ { params: { id: '25' } } }
        pokemonList={ [pokemon] }
        onUpdateFavoritePokemon={ onUpdateFavoritePokemon }
      />,
    );

    const favoriteButton = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });

    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton.checked).toBe(false);

    favoriteButton.click();
    expect(onUpdateFavoritePokemon).toBeCalledTimes(1);
    expect(favoriteButton.checked).toBe(true);
  });
});
