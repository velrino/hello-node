var http = require('http');

var server = http.createServer(
  function(req, res)
  {
      res.end("<html><body>Portal de Noticia</body></html>");
  }
);

server.listen(4000);
