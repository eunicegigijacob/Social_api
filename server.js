const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
