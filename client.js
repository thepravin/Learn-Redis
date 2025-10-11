const { createClient  } = require('ioredis');

const client = createClient ();

module.exports = client;
