import express from 'express'
const app = express()
const PORT = 3000

app.get('/api/users', (req, res) => {
    res.status(200).json({ message: "Here are all the users." })
})

app.listen(PORT, () => console.log(`Server is listening here: http://localhost:${PORT}`))