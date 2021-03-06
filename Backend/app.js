const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
require('dotenv').config();

// const userRouter = require("./routes/user");
const eventsRouter = require('./routes/event');
const paymentsRouter = require('./routes/payment');
const adminRouter = require('./routes/admin');
const workshopRouter = require('./routes/workshop');
const swaggerDoc = require('./swagger.json');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Connected to DB!')
);

app.get('/', (req, res) => {
  res.send('hello');
});

// app.use("/user", userRouter);
app.use('/event', eventsRouter);
app.use('/workshop', workshopRouter);
app.use('/admin', adminRouter);
app.use('/payments', paymentsRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
