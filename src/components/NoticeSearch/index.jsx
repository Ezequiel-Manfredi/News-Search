import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NoticeSearch({ word }) {
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
        <form>
            <input type="search" placeholder='Palabra Clave' value={search} onChange={handleChange} />
            <button type="submit" disabled={!isValid} onClick={handleClick}>
                Buscar
            </button>
        </form>
    )
}
