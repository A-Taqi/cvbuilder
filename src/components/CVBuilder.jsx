import { useState } from "react";
import Container from '@mui/material/Container';
import GeneralInfoInput from './builder/GeneralInfoInput';
import EducationInput from "./builder/EducationInput";
import CareerInput from "./builder/CareerInput";

function CVBuilder({data, onUpdate}) {
    const handleGeneralInfoSubmit = (data) => {
        onUpdate({generalInfo: data});
      };

    const handleEducationSubmit = (data) => {
        onUpdate({education: data});
    };

    const handleCareerSubmit = (data) => {
        onUpdate({career: data});
    };

    return (
        <Container>
            <GeneralInfoInput data={data.generalInfo} onSubmit={handleGeneralInfoSubmit}/>
            <EducationInput data={data.education} onSubmit={handleEducationSubmit}/>
            <CareerInput data={data.career} onSubmit={handleCareerSubmit}/>
        </Container>  
    )
}

export default CVBuilder;