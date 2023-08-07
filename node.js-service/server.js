const express = require('express'); 
const app = express();

const cors = require('cors'); 
app.use(cors()); 

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }))

const home = '/'; 
// app.get(home, (req, res) => {
//     res.send("server started i am home ")
// }); 

const port = '3001'; 
app.listen(port, () => {
    console.log('Server started succesfully  . . . . ')
})

const userRouter = require('./Routes/userRouter')
app.use('/', userRouter)

const appRouter = require('./Routes/appRouter'); 
app.use('/', appRouter); 