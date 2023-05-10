const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/v1/dialogs', (req, res) => {

    const dialogs = [
        {
            question : "salut",
            answer : "coucou"
        },
        {
            question : "ça va",
            answer : "oui"
        }
    ]

    res.status(200).json({ message: dialogs })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})