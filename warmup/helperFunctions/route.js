module.exports ={
  '/hello': function(req, res){
    res.write('hello');
    res.end();
  },
  '/goodbye': function(req, res){
    res.write('goodbye');
    res.end();
  },
  '/': function(req, res){
    res.write('default');
    res.end();
  }
};
