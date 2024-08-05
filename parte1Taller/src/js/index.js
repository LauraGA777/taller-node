const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const projectRoot = path.resolve(__dirname,'..');

app.use(express.static(path.join(projectRoot, 'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(projectRoot,'public','index.html'))
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
});