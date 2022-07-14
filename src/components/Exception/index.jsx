export default function Exception({ message }) {
    const errors = {
        'parametersMissing': 'No has ingresado ninguna palabra clave',
        'parameterNotFound': 'No encontramos ninguna noticia con la palabra clave'
    }

    return (
        <section>
            <h2>{errors[message]}</h2>
        </section>
    )
}