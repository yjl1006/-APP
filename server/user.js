const express = require('express')
const utility = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const _filter = {pwd:0,__v:0}

Router.get('/list',function(req,res){
    // User.remove({},function () {
    //
    // })
    User.find({},function(err,doc){
        return res.json(doc)
    })
})
Router.post('/login',function (req,res) {
    const {user,pwd} = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function (err,doc) {
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        res.cookie('userId',doc._id)
        return res.json({code:0,data:doc})
    })
})
Router.post('/register',function(req,res){
    const {user,pwd,type} = req.body
    User.findOne({user:user},function (err,doc) {
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        const userModel = new User({user,pwd:md5Pwd(pwd),type})
        userModel.save(function (e,d) {
            if(e){
                return res.json({code:1,msg:'后端出错了'})
            }
            const {user,type,_id} = d
            res.cookie('userId',_id)
            return res.json({code:0,data:{user,type,_id}})
        })

    })
})
Router.get('/info',function(req,res){
    const {userId} = req.cookies
    if(!userId){
        return res.json({"code":1})
    }
    User.findOne({_id:userId},_filter,function (err,doc) {
        if(err){
            return res.json({"code":1,msg:'后端出错'})
        }
        return res.json({code:0,data:doc})
    })
})


function md5Pwd(pwd){
    const salt = 'yujl@1006'
    return utility.md5(utility.md5(pwd+salt))
}

module.exports = Router