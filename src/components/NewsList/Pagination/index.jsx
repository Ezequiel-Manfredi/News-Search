import PageButton from './PageButton'

export default function Pagination({ maxPage, page, word }) {
    maxPage = maxPage>10 ? 10 : maxPage // paginado de api restringido hasta 10 paginas
    let prevPage = page-1==0 ? null : page-1
    let nextPage = page+1>maxPage ? null : page+1

    return (
        <ul>
            <PageButton value={'<<'} url={`/search?page=${1}&word=${word}`} />
            <PageButton value={prevPage} url={`/search?page=${page-1}&word=${word}`} />
            <PageButton value={page} url={`/search?page=${page}&word=${word}`} />
            <PageButton value={nextPage} url={`/search?page=${page+1}&word=${word}`} />
            <PageButton value={'>>'} url={`/search?page=${maxPage}&word=${word}`} />
        </ul>
    )
}
