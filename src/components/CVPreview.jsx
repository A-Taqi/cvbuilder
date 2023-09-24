import { Email, Phone } from "@mui/icons-material";
import { Box, Container, CssBaseline, Divider, Paper, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import CVHeader from "./preview/CVHeader";
import CVSection from "./preview/CVSection";
import { useState, useEffect } from "react";

function CVPreview({data}) {
    const theme = useTheme();
    const [formattedEducation, setFormattedEducation] = useState([]);
    const [formattedCareer, setFormattedCareer] = useState([]);

    useEffect(() => {
        if (data) {
            if(data.education) {
                setFormattedEducation(data.education.map(item => ({
                    title: item.school,
                    subtitle: item.degree,
                    dateFrom: item.dateFrom,
                    dateTo: item.dateTo
                })));
            }

            if(data.career) {
                setFormattedCareer(data.career.map(item => ({
                    title: item.company,
                    subtitle: item.position,
                    body: item.role,
                    dateFrom: item.dateFrom,
                    dateTo: item.dateTo
                })));
            }
        }
    }, [data]);

    return (
        <Container>
            <Paper sx={{maxWidth: 960, margin: 'auto'}}>
                <CVHeader data={data.generalInfo}/>
                <CVSection title="Education" data={formattedEducation}/>
                <CVSection title="Career" data={formattedCareer}/>
            </Paper>
        </Container>
        
        
    )
}

export default CVPreview;