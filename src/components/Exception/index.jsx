import { Box, Alert } from '@mui/material'

export default function Exception({ message }) {
    const errors = {
        'parametersMissing': 'No has ingresado ninguna palabra clave',
        'parameterNotFound': 'No encontramos ninguna noticia con la palabra clave'
    }

    return (
        <Box component='section'>
            <Alert severity="error">
                {errors[message]}
            </Alert>
        </Box>
    )
}