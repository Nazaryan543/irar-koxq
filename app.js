const http = require('http');

const server = http.createServer(function(req, res){

for(i=1; i<=10;i=i+1){
    res.write(i.toString())}
res.end()

})
server.listen(3000)