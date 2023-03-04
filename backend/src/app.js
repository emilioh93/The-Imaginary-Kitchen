import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import CategoryRoutes from './routes/category.routes';
import MenuRoutes from './routes/menu.routes';

const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
const corsOptions = {};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my application.' });
});

app.use('/api/categories', CategoryRoutes);
app.use('/api/menus', MenuRoutes);

export default app;
