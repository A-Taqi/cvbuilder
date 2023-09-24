import { Box, FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import InputCardMulti from "./InputCardMulti";
import { DateRange, HistoryEdu, School } from "@mui/icons-material";
import { useState } from "react";

function EducationInput({data, onSubmit}) {
    const [newSchool, setNewSchool] = useState('');
    const [newDegree, setNewDegree] = useState('');
    const [newFromDate, setNewFromDate] = useState('');
    const [newToDate, setNewToDate] = useState('');

    const addEducation = () => {
        const newEntry = {
            title: newSchool,
            school: newSchool,
            degree: newDegree,
            dateFrom: newFromDate,
            dateTo: newToDate,
          };
        setNewSchool('');
        setNewDegree('');
        setNewFromDate('');
        setNewToDate('');
        return newEntry;

    }

    const handleSubmit = (entries) => {
        onSubmit(entries);
    }

    return (
        <InputCardMulti title="Education" onSubmit={handleSubmit} entries={data} newEntry={addEducation}>
            <FormControl variant="standard">
                    <InputLabel htmlFor="school-input">
                        School
                    </InputLabel>
                    <Input
                        id="school-input"
                        startAdornment={
                            <InputAdornment position="start">
                                <School />
                            </InputAdornment>
                        }
                        value={newSchool}
                        onChange={(e) => setNewSchool(e.target.value)}
                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="degree-input">
                        Degree
                    </InputLabel>
                    <Input
                        id="degree-input"
                        startAdornment={
                            <InputAdornment position="start">
                                <HistoryEdu />
                            </InputAdornment>
                        }
                        value={newDegree}
                        onChange={(e) => setNewDegree(e.target.value)}
                    />
                </FormControl>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: 10}}>
                    <FormControl variant="standard" sx={{flex: 1}}>
                        <InputLabel htmlFor="from-input">
                            From
                        </InputLabel>
                        <Input
                            id="email-input"
                            startAdornment={
                                <InputAdornment position="start">
                                    <DateRange />
                                </InputAdornment>
                            }
                            value={newFromDate}
                            onChange={(e) => setNewFromDate(e.target.value)}
                            type="date"
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{flex: 1}}>
                        <InputLabel htmlFor="to-input">
                            To
                        </InputLabel>
                        <Input
                            id="to-input"
                            startAdornment={
                                <InputAdornment position="start">
                                    <DateRange />
                                </InputAdornment>
                            }
                            value={newToDate}
                            onChange={(e) => setNewToDate(e.target.value)}
                            type="date"
                        />
                    </FormControl>
                </Box>
        </InputCardMulti>
    );
}

export default EducationInput;