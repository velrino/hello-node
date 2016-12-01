var http = require('http');

var server = http.createServer(
  function(req, res)
  {
    var route = req.url;

    if (route == '/tech')
      return res.end("<html><body>Portal de Noticias sobre Tecnologia</body></html>");
    else if (route == '/economic')
      return res.end("<html><body>Portal de Noticias sobre Economia</body></html>");
    else
      return res.end("<html><body>Portal de Noticias </body></html>");
  }
);

server.listen(4000);
