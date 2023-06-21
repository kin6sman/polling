const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = requrie('body-parser');


const app = express();

app.listen(PORT, () => {
  console.log("Server is running : " + PORT);
})