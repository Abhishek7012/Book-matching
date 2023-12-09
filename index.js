const express = require('express');
const cors = require('cors');
const connectDB = require('./Connectiondb');
const Data = require('./Datamodel');
const app = express();
const PORT = 5000;
const { booksdata } = require('./Booksdata');
const Book = require('./Booksdatamodel');


app.use(cors());
app.use(express.json());

connectDB();

app.get('/data1', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/data2', async (req, res) => {
  try {
    const newItems = await Data.insertMany(req.body);
    res.json({ message: 'Item added successfully' });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const initializeDatabase = async () => {
    try {
      const existingDataCount = await Book.countDocuments();
      if (existingDataCount === 0) {
        await Book.insertMany(booksdata);
        console.log('Books data has been successfully inserted into the database');
      } else {
        console.log('Books data already exists in the database');
      }
    } catch (error) {
      console.error('Error initializing the database with books data:', error);
    }
  };

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  initializeDatabase();
});
