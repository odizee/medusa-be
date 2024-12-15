const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rolesRouter = require('./routes/roles');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/roles', rolesRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;