import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { Pokedex } from '../pages';
import pokemonList from '../data';

describe('Teste o componente Pokedex', () => {
  it('Testar se na página há um head H2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ { null: null } }
    />);

    const textH2 = screen.getByRole('heading', { name: /Encountered Pokémon/i, level: 2 });

    expect(textH2).toBeInTheDocument();
  });
  it('Testar se o botão de próximo pokemon existe', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ { null: null } }
    />);

    const textBntNext = screen.getByRole('button', { name: /Próximo Pokémon/i });
    expect(textBntNext).toBeInTheDocument();
  });
  it('Teste sobre o botão de próximo do pokedex vai renderizar o pokemon correto', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ { null: null } }
    />);
    const firstPokemon = screen.getByText(/Pikachu/i);
    expect(firstPokemon).toBeInTheDocument();
    const nextBtn = screen.getByRole('button', { name: /Próximo Pokémon/i });
    userEvent.click(nextBtn);

    const secondPokemon = screen.getByText(/Charmander/i);
    expect(secondPokemon).toBeInTheDocument();
  });
  it('testar se mostra sucessivos pokemons diferente ao clicar no botão de pŕoximo pokemon', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ { null: null } }
    />);
    const firstPokemon = screen.getByText(/pikachu/i);
    expect(firstPokemon).toBeInTheDocument();
    const nextBtn = screen.getByRole('button', { name: /Próximo Pokémon/i });
    userEvent.click(nextBtn);
    userEvent.click(nextBtn);
    const threePokemon = screen.getByText(/Caterpie/i);
    expect(threePokemon).toBeInTheDocument();
  });
  it('teste ao clicar multiplas vezes no botão de próximo pokemon, precisa voltar para o pikachu depois do ultimo', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ { null: null } }
    />);
    const firstPokemon = screen.getByText(/Pikachu/i);
    expect(firstPokemon).toBeInTheDocument();
    const nextBtn = screen.getByRole('button', { name: /Próximo Pokémon/i });
    userEvent.click(nextBtn);
    userEvent.click(nextBtn);
    userEvent.click(nextBtn);
    userEvent.click(nextBtn);
    userEvent.click(nextBtn);
    userEvent.click(nextBtn);
    userEvent.click(nextBtn);
    userEvent.click(nextBtn);
    userEvent.click(nextBtn);
    expect(firstPokemon).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um Pokemon por vez', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ { null: null } }
    />);
    const pokemonImg = screen.getAllByRole('img', { name: /sprite/i });
    expect(pokemonImg.length).toBe(1);
  });
  it('teste se há botões de filtro', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ { null: null } }
    />);

    const filterBtn = screen.getAllByTestId('pokemon-type-button');
    filterBtn.forEach((btn) => {
      expect(btn).toBeInTheDocument();
    });

    const psychicBtn = screen.getByRole('button', { name: /psychic/i });
    const nextBtn = screen.getByRole('button', { name: /Próximo Pokémon/i });
    const allBtn = screen.getByRole('button', { name: /all/i });
    expect(psychicBtn).toBeInTheDocument();
    expect(allBtn).toBeInTheDocument();
    userEvent.click(psychicBtn);
    expect(nextBtn).toBeInTheDocument();
    expect(allBtn).toBeInTheDocument();
    const firstPsyc = screen.getByText(/alakazam/i);
    expect(firstPsyc).toBeInTheDocument();
    userEvent.click(nextBtn);
    const secondPsyc = screen.getByText(/mew/i);
    expect(secondPsyc).toBeInTheDocument();
    expect(allBtn).toBeInTheDocument();
  });
  it('teste se o pokedex tem um botão de reset filtro', () => {
    renderWithRouter(<Pokedex
      pokemonList={ pokemonList }
      isPokemonFavoriteById={ { null: null } }
    />);

    const resetBtn = screen.getByRole('button', { name: /all/i });
    const firstPokemon = screen.getByText(/Pikachu/i);
    expect(resetBtn).toBeInTheDocument();
    expect(firstPokemon).toBeInTheDocument();
    userEvent.click(resetBtn);
    expect(firstPokemon).toBeInTheDocument();
  });
});
