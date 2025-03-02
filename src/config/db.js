const mongoose=require('mongoose')
const dotenv=require('dotenv')



dotenv.config(); // Dotenv configuration

mongoose.connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Failed to connect DB', err);
  });

module.exports = mongoose;
