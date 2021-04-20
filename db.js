const mongoose = require('mongoose');

function connect() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.DBConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to database');
        resolve();
      })
      .catch((err) => {
        console.log('Failed to connect to database');
        console.log(err);
        reject(err);
      });
  });
}

function disconnect() {
  mongoose.disconnect();
}

module.exports = { connect, disconnect };