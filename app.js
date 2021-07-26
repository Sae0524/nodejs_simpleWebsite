const http = require('http') //create a object
const time = require("./dataTime");

const port = 8001

const server = http.createServer((req,resp)=> {
    switch(req.url) {
        case '/':
            resp.end(
                `<html>
                    <head>
                        <title>First node app</title>
                        <style>
                        </style>
                    </head>
                    <body>
                        <h1>Welcome to my first node app</h1> 
                        <h4>Today is ${time.myDataTime()}</h4>      
                    </body>
                </html>
                `
            )
            break;
            case '/aboutme': 
            resp.end(
                `<html>
                    <head>
                        <title>First node app</title>
                    </head>
                    <body>
                        <h1>Welcome to About me page</h1>    
                        <ul>
                          <li>Sae Mikado</li>
                          <li>Osaka, Japan</li>
                        </ul>
                    </body>
                </html>
                `
            )
            break;
            case '/blog': 
            resp.end(
                `<html>
                    <head>
                        <title>First node app</title>
                    </head>
                    <body>
                        <h1>Welcome to Blog page</h1>        
                    </body>
                </html>
                `
            )
            break;
            default: 
            resp.end(
                `<html>
                    <head>
                        <title>First node app</title>
                    </head>
                    <body>
                        <h1>404 Page not found</h1>        
                    </body>
                </html>
                `
            )
    }
    
    
});
server.listen(port, () => {
    console.log(`server is now listening from port ${port}`)
})

















