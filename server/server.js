const express = require('express');
const mongoose = require('mongoose')
//链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('111213');
})
// 类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
// User.create({
//     user:'imooc',
//     age:18
// },function (err,doc) {
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
//新建app
const app = express();

app.get('/',function(req,res){
    res.send('<h1>hello world</h1>')
});
app.get('/data',function (req,res) {
    User.find({},function (err,doc) {
        return res.json(doc)
    })
})
app.listen(9093,function(){
    console.log('node 9093');
});