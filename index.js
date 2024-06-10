const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors')

const sequelize = require('./util/database');

const app = express();

const adminRoutes = require('./routes/admin');

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use('/admin', adminRoutes);

sequelize.sync().then(result => {
  app.listen(3000);
  console.log('server started on port 3000')

}).catch(err => {
  console.log(err);
})