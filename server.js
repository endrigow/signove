import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API route for healthcheck
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'SigHealth Node.js Backend',
    organization: 'Signove Tecnologia S.A.',
    timestamp: new Date().toISOString()
  });
});

// Mock API endpoint for contact/demo submissions
app.post('/api/contact', (req, res) => {
  const { name, email, org, interest, message } = req.body;
  console.log('[Signove Contact Request]', { name, email, org, interest, timestamp: new Date() });
  res.status(200).json({ success: true, message: 'Recebido com sucesso pelo servidor Signove' });
});

// Serve static frontend build
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback handler
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  SIGNOVE TECNOLOGIA S.A.`);
  console.log(`  Servidor Node.js + React Ativo`);
  console.log(`  Acesse: http://localhost:${PORT}`);
  console.log(`======================================================\n`);
});
