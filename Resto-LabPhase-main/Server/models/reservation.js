const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
    name: {type:String,required:true},
    phone: {type:String,required:true},
    person: {type:String,required:true},
    date: Date,
    time: {type:String,required:true},
    message: {type:String},
    status: {type:String,default:'pending',enum:['pending','accepted','rejected']},
})

module.exports = mongoose.model('Reservation', ReservationSchema);