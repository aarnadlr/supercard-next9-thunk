require('dotenv').config();

const withSass = require('@zeit/next-sass')

module.exports = withSass({
  env: {
    // Reference a variable that was defined in the .env file
    // and make it available at Build Time
    TEST_VAR: process.env.TEST_VAR
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.test.js$/,
        loader: 'ignore-loader'
      }
    );
    return config;
  }
});
