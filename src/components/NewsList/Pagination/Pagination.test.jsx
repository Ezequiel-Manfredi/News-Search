import '@testing-library/jest-dom'
import Pagination from './index'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

const mockUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}))

describe('<Pagination/>', () => {
    afterEach(cleanup)

    test('La paginacion debe tener 4 botones en la pagina 1', async () => {
        render(<Pagination maxPage={10} word={'javascript'} page={1} />)
        const paginationList = screen.getByRole('pagination-list')
        expect(paginationList.childNodes).toHaveLength(4)
    })

    test('La paginacion debe tener 5 botones en la pagina 2', async () => {
        render(<Pagination maxPage={10} word={'javascript'} page={2} />)
        const paginationList = screen.getByRole('pagination-list')
        expect(paginationList.childNodes).toHaveLength(5)
    })

    test('La paginacion debe tener 5 botones en la pagina 9', async () => {
        render(<Pagination maxPage={10} word={'javascript'} page={9} />)
        const paginationList = screen.getByRole('pagination-list')
        expect(paginationList.childNodes).toHaveLength(5)
    })

    test('La paginacion debe tener 4 botones en la ultima pagina', async () => {
        render(<Pagination maxPage={10} word={'javascript'} page={10} />)
        const paginationList = screen.getByRole('pagination-list')
        expect(paginationList.childNodes).toHaveLength(4)
    })

    test('la paginacion maxima debe ser 10 aunque pueda haber mas', () => {
        render(<Pagination maxPage={11} word={'javascript'} page={11} />)
        const paginationButton = screen.getByText('10',{ selector: 'button' })
        expect(paginationButton).toBeInTheDocument()
    })

    test('Al presionar algun boton de la paginacion debe redirigir la pagina web', () => {
        render(<Pagination maxPage={10} word={'javascript'} page={1} />)
        const paginationButton = screen.getByText('2',{ selector: 'button' })
        act(() => {
            fireEvent.click(paginationButton)
            expect(mockUseNavigate).toBeCalled()
        })
    })
})