const http = require('http')

const stream = require('stream')

http.createServer(function(req, res) {
   if(req["method"] != "POST")
      return res.end("Server responds to POST requests only.");

   // 'OK' HTTP code
   res.writeHead(200, {'content-type': 'text/plain'})

   res.on('data', function(data){
      data.toString().toUpperCase();
   });

   req.pipe(res);
   res.end();
}).listen(process.argv[2]);