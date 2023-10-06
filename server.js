const express = require('express');
require('dotenv').config();
const cors = require('cors')
const {pool} = require('./app/config/db.config')
const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/user', require('./app/routes/users/userRoute'))
app.use('/email', require('./app/routes/universal/emailVerificationRoute'))
app.use('/image', require('./app/routes/universal/imageUploadRoute'))


app.listen(PORT, () => {
    console.log(`Server is running on port `)
})