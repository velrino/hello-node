var http = require('http');

class Render
{
 constructor( res )
 {
   this.res = res ;
 }
 default(){
    return this.res.end("<html><body>Portal de Noticias </body></html>");
 }
 economic()
 {
    return this.res.end("<html><body>Portal de Noticias sobre Economia</body></html>");
 }
 tech()
 {
    return this.res.end("<html><body>Portal de Noticias sobre Tecnologia</body></html>");
 }
}

return server();

function server()
{
  var server = http.createServer(
    function(req, res)
    {
      var route = req.url;
      var render = new Render( res );

      if (route == '/tech')
        return render.tech( );
      else if (route == '/economic')
        return render.economic( );
      else
        return render.default( );
    }
  );
  return server.listen(4000);
}
