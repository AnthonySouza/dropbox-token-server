const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const { getAccessToken } = require('./routes/dropboxToken');

// Permitir requisições apenas do seu domínio Webflow
app.use(cors({
  origin: true
}));

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
