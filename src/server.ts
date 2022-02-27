import * as bodyParser from "body-parser";
import api from "./api/index";

const express = require('express');
const app = express();
const port = 3000;
app.use(bodyParser.json({ limit: '10mb' }));

app.use('/api', api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
