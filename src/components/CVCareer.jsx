import { useTheme } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";

function CVCareer({data}) {
    const theme = useTheme();

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', marginX: 10, marginY: 5}}>
            <Box sx={{backgroundColor: theme.palette.secondary.light}}>
                <Typography variant="h5" sx={{textAlign:'center', p:2, fontWeight: 600, color: theme.palette.secondary.contrastText}}>
                    Career
                </Typography>
            </Box>
            <Box>
                    {data ? data.map((entry, index) => {
                        return (
                            <Box key={index} sx={{display: 'flex', flexDirection: 'row', marginY: 1}}>
                                <Box flex={1}>
                                    <Typography>
                                        {new Date(entry.dateFrom).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' })} – {entry.dateTo ? new Date(entry.dateTo).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' }) : 'present'}
                                    </Typography>
                                </Box>
                                <Box flex={3}>
                                    <Box sx={{flexDirection: 'column'}}>
                                        <Typography fontWeight={600}>
                                            {entry.company}
                                        </Typography>
                                        <Typography>
                                            {entry.position}
                                        </Typography>
                                        <Typography>
                                            {entry.role}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    }) : ''}
                </Box>
        </Box>
        
    );
}

export default CVCareer;