import { useState, useEffect } from 'react'
import { Box, Alert } from '@mui/material'
import Loading from '../Loading'
import News from './News'
import Pagination from './Pagination'
import getDataAPI from '../../services/getDataAPI'
import Exception from '../Exception'

export default function NewsList({ word, page }) {
    const [load, setLoad] = useState(false)
    const [exception, setException] = useState('')
    const [news, setNews] = useState(null)
    const [totalResults,setTotalResults] = useState(0)

    useEffect(() => {
        setLoad(true)
        if (word) {
            const query = getDataAPI(word, page)
            query.then(res => {
                if (res.status === 'ok') {
                    setNews(res.articles)
                    setTotalResults(res.totalResults)
                    if (res.totalResults === 0) setException('parameterNotFound')
                } else {
                    setNews(null)
                    setException(res.code)
                }
                setLoad(false)
            })
        }
    }, [word, page])

    if (!word) return null

    if (load) return <Loading />

    if (!news || news.length === 0) return <Exception message={exception} />

    return (
        <Box component='section' role={'news-list'}>
            <Alert severity="info">
                Está viendo {news.length} noticias de {totalResults} resultados
            </Alert>
            <News news={news} />
            <Pagination maxPage={Math.ceil(totalResults / 10)} word={word} page={parseInt(page)} />
        </Box>
    )
}
