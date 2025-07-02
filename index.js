require('dotenv').config();
const express = require('express');
const app = express();
const { getAccessToken } = require('./routes/dropboxToken');

app.get('/dropbox-token', async (req, res) => {
  try {
    const token = await getAccessToken();
    res.json({ access_token: token });
  } catch (error) {
    console.error('Erro ao gerar token:', error.message);
    res.status(500).json({ error: 'Erro ao gerar token do Dropbox' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
