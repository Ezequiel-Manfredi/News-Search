import '@testing-library/jest-dom'
import NewsList from './index'
import { NEWS_STUB, NOT_NEWS_STUB, ERROR_API_STUB } from './mockApiResponse'
import { waitFor, render, screen, cleanup } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

const originalError = console.error

const stubFetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(NEWS_STUB)
})
global.fetch = stubFetch

const mockUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}))

describe('<NewsList/>', () => {
    afterEach(cleanup)
    
    beforeAll(() => {
        console.error = (...args) => {
            if (/Warning.*not wrapped in act/.test(args[0])) {
                return
            }
            originalError.call(console, ...args)
        }
    })

    afterAll(() => {
        console.error = originalError
    })

    test('Si no recibe una palabra no debe aparecer una lista de noticias', async () => {
        render(<NewsList word={''} page={1} />)
        const newsList = await waitFor(() => screen.queryByRole('news-list'))
        expect(newsList).not.toBeInTheDocument()
    })

    test('Al realizar una busqueda mientras se carga el contenido debe aparecer un loading', async () => {
        render(<NewsList word={'javascript'} page={1} />)
        const loading = screen.queryByRole('spinner')
        expect(loading).toBeInTheDocument()
    })

    test('Al realizar una busqueda valida debe aparecer una lista de noticias', async () => {
        await act(async () => {
            render(<NewsList word={'javascript'} page={1} />)
        })
        const newsList = screen.getByRole('news-list')
        expect(newsList).toBeInTheDocument()
        expect(newsList.childNodes[1].childNodes).toHaveLength(10)
    })

    test('Al realizar una busqueda valida sin coincidencias debe aparecer mensaje de error',async () => {
        const stubFetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(NOT_NEWS_STUB)
        })
        global.fetch = stubFetch

        await act(async () => {
            render(<NewsList word={'testtesttest'} page={1} />)
        })
        const newsList = screen.queryByRole('news-list')
        expect(newsList).not.toBeInTheDocument()
        const message = screen.getByText('No encontramos ninguna noticia con la palabra clave')
        expect(message).toBeInTheDocument()
    })
    test('Al realizar una busqueda con error de parametros debe aparecer mensaje de error',async () => {
        const stubFetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(ERROR_API_STUB)
        })
        global.fetch = stubFetch

        await act(async () => {
            render(<NewsList word={'testtesttest'} page={1} />)
        })
        const newsList = screen.queryByRole('news-list')
        expect(newsList).not.toBeInTheDocument()
        const message = screen.getByText('No has ingresado ninguna palabra clave')
        expect(message).toBeInTheDocument()
    })
})