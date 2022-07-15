import '@testing-library/jest-dom'
import NewsSearch from './index';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}));

describe('<NewsSearch />', () => {
    it('El componente debe aparecer en el documento',() => {
        render(<NewsSearch word={''} />);
        const search = screen.getByRole('search-form');
        expect(search).toBeInTheDocument();
    })

    it('No se puede apretar el boton de buscar cuando hay menos de 3 caracteres en el input', () => {
        render(<NewsSearch word={''} />);
        const search = screen.getByRole('search-form');
        const searchInput = search.querySelector('input');
        const searchButton = search.querySelector('button');

        act(() => {
            fireEvent.change(searchInput, { target: { value: '12' } });
            fireEvent.click(searchButton);
            expect(mockUseNavigate).not.toHaveBeenCalled();
        });
    })

    it('Se puede apretar el boton de buscar cuando hay más de 3 caracteres en el input', () => {
        render(<NewsSearch word={''} />);
        const search = screen.getByRole('search-form');
        const searchInput = search.querySelector('input');
        const searchButton = search.querySelector('button');

        act(() => {
            fireEvent.change(searchInput, { target: { value: '123' } });
            fireEvent.click(searchButton);
            expect(mockUseNavigate).toHaveBeenCalled();
        });
    })

    it('El input guarda correctamente valores anteriores', () => {
        let value = 'test'
        render(<NewsSearch word={value} />);
        const search = screen.getByRole('search-form');
        const searchInput = search.querySelector('input');

        expect(searchInput.value).toContain(value)
    })
})