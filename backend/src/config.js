import { config } from 'dotenv';
config();

export default {
  mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/real-estate-db',
  secret: process.env.SECRET_KEY,
};
