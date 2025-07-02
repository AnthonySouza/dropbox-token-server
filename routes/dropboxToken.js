const axios = require('axios');

async function getAccessToken() {
  const response = await axios.post('https://api.dropboxapi.com/oauth2/token', null, {
    params: {
      grant_type: 'refresh_token',
      refresh_token: process.env.DROPBOX_REFRESH_TOKEN,
      client_id: process.env.DROPBOX_CLIENT_ID,
      client_secret: process.env.DROPBOX_CLIENT_SECRET
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return response.data.access_token;
}

module.exports = { getAccessToken };
