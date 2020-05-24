const express = require('express');
const connectDB = require('./config/db');

const app = express();

/* Connect the Mongo database */
connectDB();

/* Body parser middleware */
app.use(express.json({ extended: false, encodedUrl: true }));

app.get('/', (req, res) => res.send('API Running'));

/* Routes */
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
