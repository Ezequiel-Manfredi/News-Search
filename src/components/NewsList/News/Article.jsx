import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material'

export default function Article({ title, urlToImage, url, source, publishedAt, description }) {
    let dateObj = new Date(publishedAt)
    let date = dateObj.toLocaleDateString('es-AR').replaceAll('/','-')
    let time = dateObj.toLocaleTimeString('es-AR', {hour: '2-digit', minute: '2-digit'})
    
    return (
        <Card elevation={5} component='li' className='sm:p-4'>
            <CardActionArea component='a' target="_blank" rel="noopener noreferrer" href={url} >
                <Grid component='div' container>
                    <Grid item xs={12} md={6}>
                        <CardContent item component='article' className='flex flex-col gap-2'>
                            <Typography variant='subtitle1' component='p'>{source.name}</Typography>
                            <Typography variant='h5' component='h5' className='text-center sm:text-left'>
                                {title}
                            </Typography>
                            <Typography variant='body1' component='p'>{description}</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={6} className='flex items-center'>
                        <CardMedia component='img' height={10} image={urlToImage} className='m-auto'/>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography variant='overline' component='p' className='pl-4 pt-2'>
                            Publicado el: {date} a las {time} hs.
                        </Typography>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )
}
