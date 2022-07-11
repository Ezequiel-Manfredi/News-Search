export default function Loading({ load }) {
    const message = 'No hemos encontrado noticias en base al criterio de busqueda'

    if (load) return <div className="spinner"></div>
    return <p className="error-msg">{message}</p>
}
