import { useState, useEffect } from 'react'
import Loading from '../Loading'
import Notices from './Notices'
import Pagination from './Pagination'
import getDataAPI from '../../services/getDataAPI'

export default function NoticeList({ word, page }) {
    const [load, setLoad] = useState(false)
    const [notices, setNotices] = useState(null)
    const [totalResults,setTotalResults] = useState(0)

    useEffect(() => {
        setLoad(true)
        const query = getDataAPI(word, page)
        query.then(res => {
            if (res.status === 'ok') {
                setNotices(res.articles)
                setTotalResults(res.totalResults)
            } else {
                setNotices(null)
            }
            setLoad(false)
        }).catch(rej => console.error(rej))
    }, [word, page])

    if (!word || !page) return null

    if (load || !notices || notices.length === 0) return <Loading load={load} />

    return (
        <section>
            <p>Está viendo {notices.length} noticias de {totalResults} resultados</p>
            <Notices notices={notices} />
            <Pagination maxPage={Math.ceil(totalResults / 10)} word={word} page={parseInt(page)} />
        </section>
    )
}
