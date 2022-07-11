import { useSearchParams } from 'react-router-dom'
import NoticeList from '../../components/NoticeList'
import NoticeSearch from '../../components/NoticeSearch'

export default function SearchPage() {
    const [queryParams] = useSearchParams()
    const page = queryParams.get('page') || 1
    const word = queryParams.get('word') || ''

    return (
        <main>
            <NoticeSearch word={word} />
            <NoticeList word={word} page={page} />
        </main>
    )
}
