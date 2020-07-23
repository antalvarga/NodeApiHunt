const mongoose = require('mongoose');

const ChurchSchema = new mongoose.Schema({
    nameChurch: {
        type: String
        , required: true
    }
    , churchPastor: {
        type: String
        , required: true
    }
    , contact: {
        type: String
        , required: true
    }
    , createdAt: {
        type: Date
        , default: Date.now
    }

});

mongoose.model('Church', ChurchSchema);

