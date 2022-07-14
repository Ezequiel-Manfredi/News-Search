import Article from './Article'

export default function News({ news }) {
    const newslist = news?.map(
        (article, index) => <Article {...article} key={index} />
    )

    return (
        <ul>
            {newslist}
        </ul>
    )
}
