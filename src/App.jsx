import { BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import ErrorPage from './pages/ErrorPage'
import SearchPage from './pages/SearchPage'

export default function App() {
    return (
        <BrowserRouter>
            <Box component='header' className='max-w-[100vw] h-[10vh] border-b'>
                <Link to={"/"} className='flex justify-center items-center gap-4 w-[10%] m-auto text-center'>
                    <img src="/news-icon.svg" className='h-[10vh]'/>
                    <Typography variant='button' component='p'>
                        News Search
                    </Typography>
                </Link>
            </Box>
            <Box 
                component='main' 
                className={`
                    max-w-[100vw] min-h-[80vh] 
                    flex flex-col gap-6 px-2 py-8 
                    sm:p-8 justify-center items-center
                `}
            >
                <Routes>
                    <Route path="/" element={<Navigate to="search" replace />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Box>
            <Box component='footer' className='border-t max-w-[100vw] h-[10vh]'>
                <Typography variant='body1' component="p" className='text-center p-4'>
                    Copyright 2022
                </Typography>
            </Box>
        </BrowserRouter>
    )
}
