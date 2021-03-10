import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());

let user = {
  name: 'Hobbit',
  auth: 'randomStringAndNumber',
  tasks: [],
};

app.post('/profile', (req, res) => {
  const { name, auth, tasks } = req.body;
  const userAuth = name === user.name && auth === user.auth;
  if (!userAuth) {
    res.status(500).send('wrong credz');
    return;
  }
  user = { ...user, tasks: tasks };

  res.status(200).json(tasks.length);
});

app.listen(app.get('port'), function () {
  console.log('server running', app.get('port'));
});
