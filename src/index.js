import dotenv from "dotenv";
import connectDB from "./db/index.js";
const port = process.env.PORT || 8000;

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);     
    })
})
.catch((err) => {
    console.log("MONGODB Connection failed !!!!", err);
})










// const app = express();

// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=> {
//             console.log("ERROR: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=> {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch(error) {
//         console.log(error);
//         throw error;
//     }
// })()