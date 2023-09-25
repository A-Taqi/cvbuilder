import { useTheme } from '@mui/material/styles';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";

function CVSection({data, title}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', marginX: isMobile? 2: 5, marginY: isMobile? 3:5}}>
            <Box sx={{backgroundColor: theme.palette.secondary.light}}>
                <Typography variant="h5" sx={{textAlign:'center', fontWeight: 600, color: theme.palette.secondary.contrastText}}>
                    {title}
                </Typography>
            </Box>
            <Box>
                    {data ? data.map((entry, index) => {
                        return (
                            <Box key={index} sx={{display: 'flex', flexDirection: 'row', marginY: 2, gap:1}}>
                                <Box flex={1}>
                                    <Typography>
                                        {new Date(entry.dateFrom).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' })} – {entry.dateTo ? new Date(entry.dateTo).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' }) : 'present'}
                                    </Typography>
                                </Box>
                                <Box flex={3}>
                                    <Box sx={{flexDirection: 'column'}}>
                                        <Typography fontWeight={600}>
                                            {entry.title}
                                        </Typography>
                                        <Typography>
                                            {entry.subtitle}
                                        </Typography>
                                        <Typography>
                                            {entry.body}
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

export default CVSection;