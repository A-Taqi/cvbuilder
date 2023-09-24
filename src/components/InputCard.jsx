import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";

function InputCard({children, cardTitle, onSubmit}) {
    const handleSubmit = () => {
        onSubmit();
      };

    return (
        <Card sx={{ maxWidth: 600, margin: 'auto', marginBottom: 3 }}>
            <CardHeader title={cardTitle}/>
            <CardContent>
                {children}
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleSubmit}>Submit</Button>
            </CardActions>
        </Card>
    )
}

export default InputCard