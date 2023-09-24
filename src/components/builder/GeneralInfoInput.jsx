import { Box, FormControl, FormHelperText, Input, InputAdornment, InputLabel } from "@mui/material";
import InputCard from "./InputCard";
import { AccountCircle, Email, Phone } from "@mui/icons-material";
import { useState, useEffect } from "react";

function GeneralInfoInput({data, onSubmit}) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        onSubmit({fullName, email, phone})
      };

    useEffect(() => {
        if (data) {
            setFullName(data.fullName);
            setEmail(data.email);
            setPhone(data.phone);
        }
    }, [data]);

    return (
        <InputCard cardTitle={'General Information'} onSubmit={handleSubmit}>
            <Box sx={{ '& > :not(style)': { m: 1, mb: 2 }, display: 'flex', flexDirection: 'column' }}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="name-input">
                        Name
                    </InputLabel>
                    <Input
                        id="name-input"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </FormControl>
                <FormControl variant="standard">
                    
                    <InputLabel htmlFor="email-input">
                        Email
                    </InputLabel>
                    <Input
                        id="email-input"
                        startAdornment={
                            <InputAdornment position="start">
                                <Email />
                            </InputAdornment>
                        }
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        
                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="phone-input">
                        Phone
                    </InputLabel>
                    <Input
                        id="email-input"
                        startAdornment={
                            <InputAdornment position="start">
                                <Phone />
                            </InputAdornment>
                        }
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </FormControl>
            </Box>
        </InputCard>
    )
}

export default GeneralInfoInput;