/**
 * Required External Modules
 */
 import express  from 'express';
 import * as dotenv from 'dotenv';
 import cors from 'cors';
 import helmet from 'helmet';
 

 dotenv.config() //load env variables from local .env


 
 /**
 * App Variables
 * check if node js loaded the env variable port into process.env
 * If yes, parse its value as a number(1) type (ts)
 */

// condition pass check
if(!process.env.PORT){
  process.exit(1)
}

// If yes, parse its value as a number(1) type (ts), and initiate an instance of Express app: otherwise exit
const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()
