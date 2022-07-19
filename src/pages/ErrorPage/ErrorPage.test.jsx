import '@testing-library/jest-dom'
import ErrorPage from './index'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('<ErrorPage />', () => {
    test('Se debe visualizar un mensaje de error', () => {
        act(() => {
            render(<ErrorPage />)
        })
        const message = screen.getByText('Error 404', { selector: 'h2' })
        expect(message).toBeInTheDocument()
    })
})