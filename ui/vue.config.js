const fs = require('fs');
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 80,
    host: '0.0.0.0',
    public: "newsfacts.us",
    disableHostCheck: true
  }
};
