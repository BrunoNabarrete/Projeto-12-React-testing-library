import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Teste no componente NotFound', () => {
  it('Teste se há um heading H2 com o teste Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const titleHead = screen.getByText(/page requested not found/i);
    expect(titleHead).toBeInTheDocument();
  });
  it('Teste se a página renderiza a imagem corretamente', () => {
    renderWithRouter(<NotFound />);

    const image = screen.getByAltText('Pikachu crying because the page requested was not found');
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
