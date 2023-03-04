import mongoose from 'mongoose';
import config from './config';

(async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database is connected');
  } catch (error) {
    console.log(error);
  }
})();
