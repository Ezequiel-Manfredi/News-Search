import { Stack } from '@mui/material'
import Article from './Article'

export default function News({ news }) {
    const newslist = news?.map(
        (article, index) => <Article {...article} key={index} />
    )

    return (
        <Stack component='ul' spacing={4} className='sm:w-[70%] sm:mx-auto py-8'>
            {newslist}
        </Stack>
    )
}
