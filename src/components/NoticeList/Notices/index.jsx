import Notice from './Notice'

export default function Notices({ notices }) {
    const noticeslist = notices?.map(
        (notice, index) => <Notice {...notice} key={index} />
    )

    return (
        <ul>
            {noticeslist}
        </ul>
    )
}
