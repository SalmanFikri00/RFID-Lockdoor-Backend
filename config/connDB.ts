// config/db.ts
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/RFID-Lockdoor');
    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (err: any) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

export { connectDB };
