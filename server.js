require('dotenv').config();        
require('./db/db');                
const app = require('./app');      

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT} — 🌍 Mode: ${process.env.NODE_ENV || 'not set'}`);
});