import { BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import SearchPage from './pages/SearchPage'

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to={"/"}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"/>
                </Link>
            </header>
            <Routes>
                <Route path="/" element={<Navigate to="search" replace />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <footer>
                <p>Copyright 2022</p>
            </footer>
        </BrowserRouter>
    )
}
