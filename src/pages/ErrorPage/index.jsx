import { Typography, Alert, AlertTitle } from '@mui/material'

export default function ErrorPage() {
    return (
        <>
            <Alert severity="error" className=''>
                <AlertTitle>
                    <Typography variant="h1" component="h2" className='text-center'>
                        Error 404
                    </Typography>
                </AlertTitle>
                <Typography variant="h5" component="p" className='text-center'>
                    OOPS!!! Recurso no encontrado
                </Typography>
            </Alert>
        </>
    )
}
