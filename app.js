const express = require('express');
const sequelize = require('./config/connection');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/events', eventRoutes);
app.use('/users', userRoutes);

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
