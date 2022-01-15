const http = require('http');
const path = require('path');
const bodyParser=require('body-parser');
const express = require('express');

const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');


const app =express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use(adminRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);



// const url = req.url;
// const method = req.method;
// if (url === '/') {
//     console.log("jelll");
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<form action="/message" method=POST><input type="text" name="message" value="John"><input type="submit" value="Submit"></form>');
//     res.write('</html>');
//     res.end()
// }
// if (url === '/message' && method === 'POST') {
//     const body = [];
//     req.on('data', (chunk) => {
//         console.log(chunk);
//         body.push(chunk)
//         console.log(body);
//     });
//     req.on('end', () => {
//         const parsedBody = Buffer.concat(body).toString();
//         console.log(parsedBody);
        
//     })
//     fs.writeFileSync('hello.txt', parsedBody);
//     console.log("jelll");
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('/');
//     res.write('</html>');
//     res.end();
// }