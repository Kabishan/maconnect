/* Importing Mongoose and Global Values */
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

/* Connecting Mongoose to MongoDB */
const connectDB = async () => {
  try {
    /* Added these parameters to resolve 
       deprecated warnings */
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    /* Exit the process if something goes wrong */
    process.exit(1);
  }
};

/* Exporting this function to be made available 
   to other modules */
module.exports = connectDB;
