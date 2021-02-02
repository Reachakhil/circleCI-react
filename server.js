const express = require('express');
const path = require('path');
const app = express(),
port = process.env.PORT ||  3000;
app.use(express.static(path.join(__dirname, '../reactcicd/build')));
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../reactcicd/build/index.html'));
});
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});