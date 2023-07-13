const express = require('express');
const ConnecteDb = require('./config/db.js');
const taskRouter = require('./routes/taskRoute');
const app = express();
app.use(express.json());

app.use('/', taskRouter)

ConnecteDb();
const port = 4004;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
)