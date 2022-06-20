let express = require('express')
let path = require('path')
let app = express()
let port = 3000

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))

app.listen(port, () => console.log(`Servidor levantado con exito en http://localhost:${port}\n${__dirname}`))

