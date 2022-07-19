import { BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom'
import { Box } from '@mui/material'
import ErrorPage from './pages/ErrorPage'
import SearchPage from './pages/SearchPage'

export default function App() {
    return (
        <BrowserRouter>
            <Box component='header' className='max-w-[100vw] h-[10vh] border-b pb-4'>
                <Link to={"/"}>
                    <img className='h-full' src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"/>
                </Link>
            </Box>
            <Box component='main' className='max-w-[100vw] min-h-[80vh] flex flex-col gap-6 p-8 justify-center items-center'>
                <Routes>
                    <Route path="/" element={<Navigate to="search" replace />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Box>
            <Box component='footer' className='border-t max-w-[100vw] h-[10vh]'>
                <p className='text-center p-4'>Copyright 2022</p>
            </Box>
        </BrowserRouter>
    )
}
