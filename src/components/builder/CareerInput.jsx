import { Box, FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import InputCardMulti from "./InputCardMulti";
import { Badge, Business, DateRange, More } from "@mui/icons-material";
import { useState } from "react";

function CareerInput({data, onSubmit}) {
    const [newCompany, setNewCompany] = useState('');
    const [newPosition, setNewPosition] = useState('');
    const [newRole, setNewRole] = useState('');
    const [newdateFrom, setNewdateFrom] = useState('');
    const [newdateTo, setNewdateTo] = useState('');

    const addCareer = () => {
        const newEntry = {
            title: newCompany,
            company: newCompany,
            position: newPosition,
            role: newRole,
            dateFrom: newdateFrom,
            dateTo: newdateTo,
        };
        setNewCompany('');
        setNewPosition('');
        setNewRole('');
        setNewdateFrom('');
        setNewdateTo('');
        return newEntry;

    }

    const handleSubmit = (entries) => {
        onSubmit(entries);
    }

    return (
        <InputCardMulti title="Career" onSubmit={handleSubmit} entries={data} newEntry={addCareer} data={data}>
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
            <FormControl variant="standard">
                <InputLabel htmlFor="school-input">
                    Company
                </InputLabel>
                <Input
                    id="school-input"
                    startAdornment={
                        <InputAdornment position="start">
                            <Business />
                        </InputAdornment>
                    }
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="degree-input">
                    Position
                </InputLabel>
                <Input
                    id="degree-input"
                    startAdornment={
                        <InputAdornment position="start">
                            <Badge />
                        </InputAdornment>
                    }
                    value={newPosition}
                    onChange={(e) => setNewPosition(e.target.value)}
                />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="degree-input">
                    Role
                </InputLabel>
                <Input
                    id="degree-input"
                    startAdornment={
                        <InputAdornment position="start">
                            <More />
                        </InputAdornment>
                    }
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    multiline
                />
            </FormControl>
        </InputCardMulti>
    );
}

export default CareerInput;