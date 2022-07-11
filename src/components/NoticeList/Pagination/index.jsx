import { useNavigate } from 'react-router-dom'

export default function Pagination({ maxPage, page, word }) {
    const navigate = useNavigate()
    maxPage = maxPage>10 ? 10 : maxPage // api restringido hasta 10 paginas
    const pages = {
        '&lt;&lt;': 1,
        '&gt;&gt;': maxPage
    }

    const handleClick = e => {
        const pageNum = pages[e.target.innerHTML] || e.target.innerHTML
        navigate(`/search?page=${pageNum}&word=${word}`)
    }

    const pageList = ['<<', page - 1, page, page + 1, '>>'].map((p, i) => {
        if ((p !== 0 && p <= maxPage) || i === 0 || i === 4) {
            return (
                <li key={i}>
                    <button onClick={handleClick}>{p}</button>
                </li>
            )
        }
        return null
    })

    return (
        <ul>
            {pageList}
        </ul>
    )
}
