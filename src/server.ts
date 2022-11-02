/**
 * Required External Modules
 */
 import express  from 'express';
 import * as dotenv from 'dotenv';
 import cors from 'cors';
 import helmet from 'helmet';
 import { routeApi } from "./routes/Api";
 import { errorHandler} from "./middleware/error"
 import { notFoundHandler} from "./middleware/not-found"

 dotenv.config() //load env variables from local .env


 
 /**
 * App Variables
 */

// condition pass check
if(!process.env.PORT){
  process.exit(1)
}

// If yes, parse its value as a number(1) type (ts), and initiate an instance of Express app: otherwise exit
const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()


/**
 * App Configuration
 */

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use("/api/menu/items", routeApi)
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})