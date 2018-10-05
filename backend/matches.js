var mongoose =require('mongoose');

//match schema

var matchSchema=mongoose.Schema({
    team:{
        type:String,
        require:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

// var Match = module.exports=mongoose.model('match',matchSchema);

// // get match
// module.exports.getMatch=function(){
// //Match.find();
// }

