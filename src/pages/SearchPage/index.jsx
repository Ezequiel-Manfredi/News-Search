import { useSearchParams } from 'react-router-dom'
import NewsList from '../../components/NewsList'
import NewsSearch from '../../components/NewsSearch'

export default function SearchPage() {
    const [queryParams] = useSearchParams()
    const page = queryParams.get('page') || 1
    const word = queryParams.get('word') || ''

    return (
        <main>
            <NewsSearch word={word} />
            <NewsList word={word} page={page} />
        </main>
    )
}
