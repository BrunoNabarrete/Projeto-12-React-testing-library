import React from 'react';
import { screen, render } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testando o componente About', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    render(<About />);

    const aboutInfo = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(aboutInfo).toBeInTheDocument();
  });
  it('Teste se há dois paragráfos sobre a Pokedéx', () => {
    renderWithRouter(<About />);
    const firstPara = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    expect(firstPara).toBeInTheDocument();

    const secondPara = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
    expect(secondPara).toBeInTheDocument();
  });
  it('Teste se há uma imagem sendo renderizado', () => {
    renderWithRouter(<About />);

    const image = screen.getByAltText('Pokédex');

    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
