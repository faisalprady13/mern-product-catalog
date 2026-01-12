import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MONGODB CONNECTED SUCCESSFULLY!');
  } catch (error) {
    console.error('error connecting to MONGODB', error);
    process.exit(1);
  }
};

export default connectDB;
