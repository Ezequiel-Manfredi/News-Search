import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Alert, CircularProgress, Pagination } from '@mui/material'
import News from './News'
import getDataAPI from '../../services/getDataAPI'
import Exception from '../Exception'

export default function NewsList({ word, page }) {
    const [load, setLoad] = useState(false)
    const [exception, setException] = useState('')
    const [news, setNews] = useState(null)
    const [totalResults,setTotalResults] = useState(0)
    const navigate = useNavigate()

    const handlePagination = (_evt,page) => {
        navigate(`/search?page=${page}&word=${word}`)
    }

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

    if (load) return <CircularProgress role={'spinner'}/>

    if (!news || news.length === 0) return <Exception message={exception} />

    let maxPage = Math.ceil(totalResults / 10)
    return (
        <Box component='section' role={'news-list'}>
            <Alert severity="info">
                Está viendo {news.length} noticias de {totalResults} resultados
            </Alert>
            <News news={news} />
            <Pagination count={maxPage>10 ? 10 : maxPage} page={parseInt(page)} onChange={handlePagination} showFirstButton showLastButton hidePrevButton hideNextButton className='' />
        </Box>
    )
}
