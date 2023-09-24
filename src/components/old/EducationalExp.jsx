import { useState, useEffect } from "react";
import FormSection from "./FormSection";

function EducationalExp({onSubmit, education}) {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [educations, setEducations] = useState([]);

    // Function to gather data and send it to the parent component
    const handleFormSubmit = () => {
        // Call the onSubmit function with the data
        // Format dateFrom and dateTo to "MM/YYYY" format
        const formattedDateFrom = dateFrom ? new Date(dateFrom).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' }) : '';
        const formattedDateTo = dateTo ? new Date(dateTo).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' }) : 'present';

        // Call the onSubmit function with the data
        setEducations([...educations, { school, degree, dateFrom: formattedDateFrom, dateTo: formattedDateTo }]);
    };

    // Use useEffect to listen for changes in the educations state
    useEffect(() => {
        // Call the onSubmit function with the updated educations data
        if (educations.length !== 0) {
            onSubmit(educations);
        }
            
    }, [educations, onSubmit]);

    return (
        <FormSection title="Education" onSubmit={handleFormSubmit} multi={true} records={education}>
            <div className="form-container">
                <div className="form-row">
                    <label>School</label>
                    <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Degree</label>
                    <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>From</label>
                    <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>To</label>
                    <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
                </div>
            </div>
        </FormSection>
    )
}

export default EducationalExp;