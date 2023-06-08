const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const { Sequelize } = require('sequelize')
const Chat = require("./models/chat")

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db/database.sqlite"
})

// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Dialog API',
            description: 'Dialog API Information',
            contact: {
                name: 'Developer Name',
            },
            servers: ['http://localhost:3000'],
        },
    },
    apis: ['./routes/v1/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const cors = require('cors');
const { start } = require('repl');
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json())

app.use('/api/v1', require('./routes/v1'))


// app.post('/api/v1/dialogs', (req, res) => {
//     console.log(req.body.question)
//     let matchFound = false;
//     dialogs.forEach(dialog => {
//         if(dialog.question === req.body.question) {
//             matchFound = true;
//             return res.status(200).json({response : dialog.answer})
//         }
//     })
//     if(!matchFound) {
//         res.status(200).json({ message: "pas de réponse à vous apporter" })
//     }
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// function middleware(req, res, next) {
//     console.log('coucou')
//     next()
// }

//route 404
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/view/404.html')
})


async function startServer() {
    try {
        await sequelize.authenticate()
        console.log("connexion réussie")
    } catch (error) {
        console.error("erreur de connexion", error)
    }
}

startServer()