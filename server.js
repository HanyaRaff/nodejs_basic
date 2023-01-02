const http = require('http')
const fs = require('fs');

const server = http.createServer((req,res) =>{
    //setHeader
    res.setHeader('Content-Type', 'text/html');

    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'home.html'
            break;
        case '/about':
            path += 'about.html'
            break;
    
        default:
            path += '404.html'
            break;
    }

    fs.readFile(path,(err, data)=>{
        if (err) {
            Console.log(err)
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })

})




const port = 3000 

server.listen(port, 'localhost', ()=>{
    console.log(`Server Running on port ${port}`)
})