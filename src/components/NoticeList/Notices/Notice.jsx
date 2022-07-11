export default function Notice({ title, urlToImage, url, source, publishedAt, description }) {
    let dateObj = new Date(publishedAt)
    let date = dateObj.toLocaleDateString('es-AR').replaceAll('/','-')
    let time = dateObj.toLocaleTimeString('es-AR', {hour: '2-digit', minute: '2-digit'})
    
    return (
        <li>
            <a target="_blank" rel="noopener noreferrer" href={url}>
                <article>
                    <p>{source.name}</p>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </article>
                <img src={urlToImage} />
                <p>
                    Publicado el: {date} a las {time} hs.
                </p>
            </a>
        </li>
    )
}
