const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const path = require('path')

// app.get('/',(req,res)=>{
// res.end('<h1>Home</h1>')
// })

// app.get('/about',(req,res)=>{
//     res.end('<h1>about</h1>')
//     })

    app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build'))
})

app.listen(PORT,()=>{
    console.log("https://www.youtube.com/watch?v=wG7hX8Np1Pg&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD")
})