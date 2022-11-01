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



/**
 * App Configuration
 * Define Middleware eg helmet (small middleware func that HTTP response headers)(provides defaults lik DNS prefetch control, frameguard, hidee powered-by, HSTS, IE No Open, DOn't Sniff MImetype and XSS filter)
 * CORS() - enables cors requests. 
 * Express json() - you parse incoming requests with json payloads to populate the request obj with a new body obj containing the parsed data gghhyvhbjbjbubbjhjujhjuyuh ghgjhj, ghbjhihu huguyjkjyugyuhj ttgfnbcewqazpmo mhsgufjnmm d,sjigdjbcajq0189724bc, bjxaeihdnfae, faqhbjbapqio943,  mhggsadffbgjnbui,jnuhbmbjhihknk
 */
//mount middleware functions from packages imported into the entry point module
app.use(helmet())
app.use(cors())
app.use(express.json())

/**
 * Server Activation
 * Creating Express Server
 * 
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

/**/

/**
 * Improve TS  Workflow by installing ts-node-dev - no need to recompile the entire project whenever there's a change in its source code. 
 * npm i -D te-node-dev
 * - ts-node-dev restarts a target Node.js process when oof the required files change.
 * 
 * ts-node-dev breakdown 
 * --respawn: keep watching for changes after the script has exited
 * --pretty: uses pretty diagnostic formatter (TS_Node_PRETTY)
 * --transpile-only: use TS's faster transpileModule (TS-NODE_TRANSPILE_ONLY)
 * src/index.ts : applications entry file
 * 
 * ts-node-dev is a tweaked version of node-dev  that uses ts-node under the hood
 */