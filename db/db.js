const mongoose = require('mongoose');

const atlasURI = process.env.MONGODB_URI;
const localURI = 'mongodb://localhost:27017/skillhub';

async function connectToDB() {
  try {

    console.log('🔌 Attempting MongoDB Atlas connection...');
    await mongoose.connect(atlasURI);
    console.log('✅ Connected to MongoDB Atlas');

  } catch (err) {

    console.warn('⚠️ Atlas connection failed. Trying local DB...');
    try {

      await mongoose.connect(localURI);
      console.log('✅ Connected to local MongoDB');

    } catch (localErr) {
      console.error('❌ Failed to connect to both Atlas and local MongoDB');
      console.error(localErr);
      process.exit(1);
    }
  }
}

connectToDB();
