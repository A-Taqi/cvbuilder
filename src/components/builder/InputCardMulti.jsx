import InputCard from "./InputCard";
import { Button, Box} from "@mui/material";
import { Add, Cancel, Delete, Save } from "@mui/icons-material";
import { useState, useEffect } from "react";

function InputCardMulti({title, onSubmit, children, newEntry, data}) {
    const [entries, setEntries] = useState(data ?? []);
    const [showForm, setShowForm] = useState(false);

    const handleOnSubmit = () => {
        onSubmit(entries);
    }

    const handleAddEntry = () => {
        setEntries([
            ...entries,
            newEntry()
        ])
        setShowForm(false);
    }

    const deleteEntry = (index) => {
        setEntries( entries.filter((_,i) => i !== index));
    }

    const cancelForm = () => {
        setShowForm(false);
    }

    useEffect(() => {
        if (data) {
            setEntries(data);
        }
    }, [data]);

    return (
        <InputCard cardTitle={title} onSubmit={handleOnSubmit}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center'}}>
                {entries.map((entry, index) => {
                    return (
                        <Button key={index} variant="contained" endIcon={<Delete />} sx={{borderRadius: 4}} onClick={() => deleteEntry(index)}>
                            {entry.title}
                        </Button>
                    );
                })}
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1, mb: 2 }, flexDirection: 'column', display: showForm ? 'flex':'none' }}>
                {children}
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 2}}>
                <Box sx={{display: showForm ? 'flex':'none', gap: 2}}>
                    <Button variant="outlined" startIcon={<Cancel />} onClick={cancelForm}>
                        Cancel
                    </Button>
                    <Button variant="contained" endIcon={<Save />} onClick={handleAddEntry}>
                        Save
                    </Button>
                </Box>
                <Button sx={{display: showForm ? 'none':'flex', borderRadius: 4}} variant="contained" endIcon={<Add />} onClick={() => setShowForm(true)}>
                    Add {title}
                </Button>
            </Box>
        </InputCard>
    );
}

export default InputCardMulti;