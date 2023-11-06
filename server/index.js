import 'dotenv/config'
import  express  from 'express';
import morgan from 'morgan';
import { Server as Socketserver } from 'socket.io';
import http from "http"
import cors from "cors"
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/index.js';

//configuracion Mongoose
const { userDB, password, PORT } = process.env;
const url = `mongodb+srv://${userDB}:${password}@cluster0.9siz8th.mongodb.net/`
mongoose.Promise = global.Promise

const app = express()

//creamos els ervidor con el  modulo http
const server = http.createServer(app)
const io = new Socketserver(server, { 
    cors: {
        origin: "*"
    }
})


//middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(router)
//conexion a la base de datos y esuchamos la aplicacion a travez del puerto 4000

mongoose.connect(url).then(()=> {
    console.log("Conexion a la BDD realizada con éxito")
    server.listen(PORT, () => {
        console.log("Servidor ejecutandose en http:localhost:", PORT);
    })
})

