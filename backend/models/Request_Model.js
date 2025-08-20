const mongoose = require('mongoose');
const Request_Model  = mongoose.Schema({    
    subscriber_id : {
        type : mongoose.Schema.Types.ObjectId , ref : 'user'
    },
    email : {
        type : String
    },
    description : {
        type : String
    },
    Status : {
        type : String
    },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('request_model' , Request_Model);