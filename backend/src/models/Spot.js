const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, 
{
    toJSON:{
        virtuals: true,
    }
}
);

//Fazendo um virtual para retornar a URL
SpotSchema.virtual('thumbnail_url').get(function(){
    return `https://aircnc-meme.herokuapp.com/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot',SpotSchema);