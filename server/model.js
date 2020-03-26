const mongoose = require("mongoose");
const db_user ="mongodb://localhost:27017/muke3"
mongoose.connect(db_user)

const Schema = mongoose.Schema

const models = {
    user:{
        "user":{type:String,'require':true},
        "pwd":{type:String,'require':true}
    },
    chat:{
        "chatId":{type:String,'require':true},
    }
}

for(let m in models){
            mongoose.model(m,new Schema(models[m]))
}
module.exports = {
    getModel:function (name) {
        return mongoose.model(name)
    }
}