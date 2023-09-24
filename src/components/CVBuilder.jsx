import { useState } from "react";
import Container from '@mui/material/Container';
import GeneralInfoInput from './GeneralInfoInput';
import EducationInput from "./EducationInput";
import CareerInput from "./CareerInput";

function CVBuilder({onUpdate}) {
    const [generalInfoData, setGeneralInfoData] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [careerData, setCareerData] = useState([]);

    const handleGeneralInfoSubmit = (data) => {
        setGeneralInfoData(data);
        onUpdate({generalInfo: data});
      };

    const handleEducationSubmit = (data) => {
        setEducationData(data);
        onUpdate({education: data});
    };

    const handleCareerSubmit = (data) => {
        setCareerData(data);
        onUpdate({career: data});
    };

    return (
        <Container>
            <GeneralInfoInput data={generalInfoData} onSubmit={handleGeneralInfoSubmit}/>
            <EducationInput data={educationData} onSubmit={handleEducationSubmit}/>
            <CareerInput data={careerData} onSubmit={handleCareerSubmit}/>
        </Container>  
    )
}

export default CVBuilder;