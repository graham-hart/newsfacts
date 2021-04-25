const fs = require('fs');
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 443,
    host: '0.0.0.0',
    public: "newsfacts.us",
    https: {
      key: fs.readFileSync('/etc/certs/privkey1.pem'),
      cert: fs.readFileSync('/etc/certs/fullchain1.pem'),
    },
  }
};
