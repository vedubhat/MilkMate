const config = require('config')
const mongoose = require('mongoose');
mongoose
.connect(`${config.get("ATLAS-URI")}milkmate`)
.then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
})

module.exports = mongoose.connection;