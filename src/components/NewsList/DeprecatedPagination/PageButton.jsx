import { useNavigate } from 'react-router-dom'

export default function PageButton({ value, url }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(url)
    }

    if (!value) return null
    
    return (
        <li key={value}>
            <button onClick={handleClick}>{value}</button>
        </li>
    )
}