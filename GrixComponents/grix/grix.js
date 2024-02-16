//2018 (C) AutoSync Erick Andrade 

/* Estrutura de Pastas

    _build
        (automatic generation)
    
    Grix
        (engine)
    Pages
        layout.js
        Index.js
    Components
        Containers
        Buttons
        Inputs
        Images
    Server
        database
        engine
    Public
        .svg
        .png

*/

var fs = require('fs')
var path = require('path')

var path = '../build'

var stream = fs.createWriteStream('index.html')


var main = require('../pages/index')

//Creating Stylesheet 
var styleSheet = fs.createWriteStream('style.css')
var style = require('../pages/layout')
styleSheet.end(style())

var script = main()

var html = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    ${script}
</body>

</html>
`

stream.end(html)


// var http = require('http')

// http.createServer(function (req, res) {
//     var html = buildHtml(req)

//     res.writeHead(200, {
//         'Content-Type' : 'text/html',
//         'Content-Length' : html.length,
//         'expires' : new Date().toUTCString()
//     })
//     res.end(html)
// }).listen(8080)

// function buildHtml(req) {
//     var header = ''
//     var body = ''

//     return '<!DOCTYPE html>'
//        + '<html><head>' + header + '</head><body>' + body + '</body></html>';
// }
