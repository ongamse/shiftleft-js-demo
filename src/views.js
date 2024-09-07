const secured = require('./Controllers/Secured');

module.exports = app => {
  // Exploits app Env
  app.get('/env', (req, res) => {
    console.log(app.get(req.query.lookup));
    res.send(app.get(req.query.lookup));
  });
  app.get(`/login`, (req, res) => res.render('Login'));

  const vm = require('vm2').createContext();
let result = '';
try {
  result = vm.eval(req.query.userInput);
} catch (ex) {
  console.error(ex);
}
res.render('UserInput', {
  userInput: req.query.userInput,
  result,
  date: new Date().toUTCString()
});
    res.render('UserInput', {
      userInput: req.query.userInput,
      result,
      date: new Date().toUTCString()
    });
  });

  app.get(`/`, secured.get);
  app.post(`/`, secured.post);
};
