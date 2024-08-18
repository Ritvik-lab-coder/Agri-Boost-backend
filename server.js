import app from "./App.js";
import cloudinary from 'cloudinary'
import 'colors'

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`.bgMagenta.white);
});