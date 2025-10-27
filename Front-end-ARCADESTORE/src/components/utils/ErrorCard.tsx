
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ErrorCardProps{
    errorText: string | null
}

const  ErrorCard = ( { errorText }: ErrorCardProps) => {
  return (
     <Box sx={{
                flexGrow: 1,
                display: "flex", 
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}>
        <Card sx={{ 
                maxWidth: 275, 
                borderRadiu: 10, 
                maxHeight: 275,
                borderRadius: 3,
                boxShadow: "0px 0px 5px rgb(0,0,0,0.1)",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",  
            }}>
        <CardContent>
            <Typography variant="h6" component="div">
                {errorText}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">ReStar</Button>
        </CardActions>
        </Card>
    </Box>
  );
}

export default ErrorCard;