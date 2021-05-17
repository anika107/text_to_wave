const express = require('express');
var txtomp3 = require("text-to-mp3");
const fs = require('fs');
const body = require('body-parser');
const app = express();

app.set('view engine','ejs');

app.use(body.urlencoded({extended:true}));
app.use(body.json());


app.get('/',(req, res)=>{
    res.render('index(9)');
    
})
app.post('/generate', (req, res) =>{
    var msg = req.body.msg;
    console.log(msg);
    txtomp3.getMp3(msg, function(err, binaryStream){
        if(err){
          console.log(err);
          return;
        }
        var file = fs.createWriteStream("FileName.mp3"); // write it down the file
        file.write(binaryStream);
        file.end();
      });
    res.render('index(9)');
})

app.listen(3000, () => console.log("Server is Running..."));