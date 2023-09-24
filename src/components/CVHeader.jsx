import { Email, Phone } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function CVHeader( {data}) {
    const theme = useTheme();
    const contactInfoStyle = {
        textAlign: 'center', 
        p: 2, 
        color: theme.palette.primary.contrastText, 
        flex: 1, 
        display: 'flex', 
        gap: 1, 
        alignItems: 'center', 
        justifyContent: 'center'}

    return (
        <Box sx={{backgroundColor: theme.palette.primary.dark}}>
                    <Typography variant="h2" sx={{textAlign:'center', p:2, color:theme.palette.primary.contrastText}}>
                        {data ? data.fullName : ''}
                    </Typography>
                    <Divider sx={{backgroundColor: theme.palette.primary.contrastText}} />
                    <Box display='flex' textAlign='center'>
                        <Typography variant="h6" sx={contactInfoStyle}>
                            <Email/>
                            {data ? data.email : ''}
                        </Typography>
                        <Typography variant="h6" sx={contactInfoStyle}>
                            <Phone/>
                            {data ? data.phone : ''}
                        </Typography>
                    </Box>
            </Box>
    )
}

export default CVHeader;