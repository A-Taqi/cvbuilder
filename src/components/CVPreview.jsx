import { Email, Phone } from "@mui/icons-material";
import { Box, Container, CssBaseline, Divider, Paper, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import CVHeader from "./CVHeader";
import CVEducation from "./CVEducation";
import CVCareer from "./CVCareer";

function CVPreview({data}) {
    const theme = useTheme();

    return (
        <Container>
            <Paper sx={{maxWidth: 1920, minHeight: 1080, margin: 'auto'}}>
                <CVHeader data={data.generalInfo}/>
                <CVEducation data={data.education}/>
                <CVCareer data={data.career}/>
            </Paper>
        </Container>
        
        
    )
}

export default CVPreview;