import { Edit, Save } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { useState } from "react";

function InputCard({children, cardTitle, onSubmit}) {
    const sxDisabled = {pointerEvents: 'none', opacity: 0.5};
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = () => {
        onSubmit();
        setDisabled(true);
      };

    return (
        <Card sx={{ maxWidth: 600, margin: 'auto', marginBottom: 3 }}>
            <CardHeader title={cardTitle} action={
                disabled ? 
                <Button size="small" variant="contained" startIcon={<Edit/>} onClick={() => setDisabled(false)}>Edit</Button>
                :
                ''
            }></CardHeader>
            <CardContent sx={disabled ? sxDisabled : ''}>
                {children}
            </CardContent>
            <CardActions sx={{justifyContent: 'end'}}>
                {disabled ? 
                    ''
                    :
                    <Button size="small" variant="contained" startIcon={<Save/>} onClick={handleSubmit}>Submit</Button>
                }
            </CardActions>
        </Card>
    )
}

export default InputCard