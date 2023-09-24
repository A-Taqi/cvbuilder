import { Box, FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import InputCardMulti from "./InputCardMulti";
import { DateRange, HistoryEdu, School } from "@mui/icons-material";
import { useState } from "react";

function EducationInput({data, onSubmit}) {
    const [newSchool, setNewSchool] = useState('');
    const [newDegree, setNewDegree] = useState('');
    const [newdateFrom, setNewdateFrom] = useState('');
    const [newdateTo, setNewdateTo] = useState('');

    const addEducation = () => {
        const newEntry = {
            title: newSchool,
            school: newSchool,
            degree: newDegree,
            dateFrom: newdateFrom,
            dateTo: newdateTo,
          };
        setNewSchool('');
        setNewDegree('');
        setNewdateFrom('');
        setNewdateTo('');
        return newEntry;

    }

    const handleSubmit = (entries) => {
        onSubmit(entries);
    }

    return (
        <InputCardMulti title="Education" onSubmit={handleSubmit} newEntry={addEducation} data={data}>
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
                            value={newdateFrom}
                            onChange={(e) => setNewdateFrom(e.target.value)}
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
                            value={newdateTo}
                            onChange={(e) => setNewdateTo(e.target.value)}
                            type="date"
                        />
                    </FormControl>
                </Box>
        </InputCardMulti>
    );
}

export default EducationInput;