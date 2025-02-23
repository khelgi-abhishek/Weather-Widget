import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1722858344552-7acf888a7046?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwbmF0dXJlfGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1738231964694-e44cc1b8e62b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1687418992343-38c7d2751406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhaW4lMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D";

   
    return (
        <div className="InfoBox">
            {/* <h1>Weather Info - {info.weather}</h1> */}
            <div className="Box">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL: COLD_URL}
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{
                        info.humidity > 80
                         ? <ThunderstormIcon/> 
                         :info.temp > 15 
                         ? <WbSunnyIcon/>
                         : < AcUnitIcon/>
                         }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Temperature = {info.temp}°C
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Humidity = {info.humidity}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Min Temp = {info.tempMin}°C | Max Temp = {info.tempMax}°C
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        The weather can be described as <i>{info.weather} </i>and Feels Like = {info.feelSLike}°C
                    </Typography>
                </CardContent>
                
            </Card>
            </div>
        </div>
    );
}
