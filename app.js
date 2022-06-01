/**
 * Import External Lib
 */
import express from "express";
import bodyParser from "body-parser"
import cors from "cors"

/**
 * import Internal Lib
 */

import { RouterV1  } from "./routers";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1",RouterV1)

app.get('/', function (req, res) {
    res.send('Hello World')
})

/**
 * Create Static Port
 */
const port = 3000;
app.listen(port, function () {
    console.log("Server is listening at port:" + port);
}); 
