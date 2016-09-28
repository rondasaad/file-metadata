var express = require('express');
var path = require('path');
var multer = require('multer');
var upload = multer({dest: 'upload/'});
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.post('/get-file-size', upload.single('file'), function(req, res){
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify({size:req.file.size}));
    
});
app.listen(process.env.PORT || 8080);