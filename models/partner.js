const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    
    name: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Partner', partnerSchema)