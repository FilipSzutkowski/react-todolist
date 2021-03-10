import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3001);

let tasks = [
  { name: 'Do dishes', id: 1, checked: false },
  { name: 'Clean the stove', id: 2, checked: false },
  { name: 'Make a sandwich', id: 3, checked: false },
  { name: 'Call mom', id: 4, checked: true },
];

let user = {
  name: 'Hobbit',
  auth: 'randomStringAndNumber',
  tasks: tasks,
};

app.get('/user', (req, res) => {
  res.status(200).json(user);
});

app.post('/profile', (req, res) => {
  const { name, auth, tasks } = req.body;
  const userAuth = name === user.name && auth === user.auth;
  if (!userAuth) {
    res.status(500).json('wrong credz');
    return;
  }
  user = { ...user, tasks: tasks };

  res.status(200).json(tasks.length);
});

app.listen(app.get('port'), function () {
  console.log('server running', app.get('port'));
});
