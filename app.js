const http = require('http');

const server = http.createServer(function(req, res,min,max,){
    min = 1;
    max = 8;
    let S=0;
    for(i=min; i<=max; i++){
      res.write(i.toString()+"+")
       S=S+i}
    
      res.write("="+ S.toString())
      res.end()


})
server.listen(3000)
