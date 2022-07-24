import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Box } from '@mui/material'

export default function NewsSearch({ word }) {
    const [search, setSearch] = useState(word)
    const [isValid, setIsValid] = useState(word.length > 2)
    const navigate = useNavigate()

    const handleChange = ({ target: { value } }) => {
        setSearch(value)
        setIsValid(value.length > 2)
    }

    const handleClick = e => {
        e.preventDefault()
        navigate(`/search?page=1&word=${search}`)
    }

    return (
        <Box role={'search-form'} component="form" className='flex flex-col w-full justify-center items-center gap-2'>
            <TextField 
                value={search} 
                onChange={handleChange} 
                required type="search" 
                variant="outlined" 
                label="Palabra Clave" 
                autoComplete="off"
                className='w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%]'
            />
            <Button 
                disabled={!isValid} 
                onClick={handleClick} 
                variant="contained" 
                type="submit" 
                className='w-[50%] sm:w-[40%] md:w-[30%] lg:w-[20%]'
            >Buscar</Button>
        </Box>
    )
}
