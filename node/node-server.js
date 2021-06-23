let express = require('express');
let path = require('path');
const { raw } = require('body-parser');
const e = require('express');

let app = express();

let debug_console=true

//
// Accès aux ressources
//
let dir = path.join(__dirname, '../gen/output/')
app.use(express.static(dir));

if(debug_console)console.log(" Using "+dir)



const fs = require('fs').promises;


//
// CB à la route '/'
//
app.get('/', function (req, res)  {
         fs.readFile("../gen/output/index.html").then(
             contents => {
                     res.setHeader("Content-Type", "text/html");
                     res.writeHead(200);
                     res.end(contents);
                 }
             )
     }
 )




// BUG:app.listen : Si le port demandé est déja oqp, le try...catch émis par listen ne fonctionne pas
try{
    server = app.listen(8004, function () {
        let host = server.address().address
        let port = server.address().port
        console.log(" Server listening http://%s:%s", host, port)
    })
}
catch (e){
    console.log(e.toString())
}
