const {Schema, model} = require('mongoose');

const BooSchema = new Schema({
    name: { type: String, required:true},
    empresa: {type: String, required:true},
    cantidad: {type: Number, required: true},
    imagePath: {type: String},
    code: {type:String, required: true},
    created_at: {type: Date, default: Date.now}
});
module.exports = model('Producto', BooSchema);