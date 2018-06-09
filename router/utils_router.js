import express from 'express';
import request from 'request';
import dateformat from 'dateformat';
import jwt from 'jsonwebtoken';
import * as d from '../config';

export default class UtilsRoutes{ 

constructor(UsersModel, CountyModel){
    this.UsersModel = UsersModel;
    this.CountyModel = CountyModel;
}

routes(){
    const app = this;
    const utilsRouter = express.Router();
    const utils = require('../services/utils');
    const expressApp = express();
    
    expressApp.set('token', d.config.secret);

    utilsRouter.route('/login')
    .get((req, res)=>{

        if(req.query && req.query.username.trim().length > 0 && req.query.password.trim().length > 0){
            if(utils.isValidEmail(req.query.username.trim())){
                app.UsersModel.findOne({where : {email : req.query.username, password : utils.getHash(req.query.password)}}).then(user => {
                    if(user){
                        const token = jwt.sign({user}, expressApp.get('token'), {expiresIn: '12d'});    
                        res.status(200).json({success : true, message : 'successful', token : token, user : user});
                    }else{
                        res.status(400).json('something wrong happened');
                    }
                });
            }else if(utils.isValidMSISDN(req.query.username.trim())){
                app.UsersModel.findOne({where : {msisdn : req.query.username, password : utils.getHash(req.query.password)}}).then(user => {
                    if(user){
                        const token = jwt.sign({user}, expressApp.get('token'), {expiresIn: '12d'});                            
                        res.status(200).json({success : true, message : 'successful', token : token, user : user});
                    }else{
                        res.status(400).send('something wrong happened');
                    }
                });
            }
        }else{
            res.status(200).send('Data not received');                                                                    
        }
    });  

    utilsRouter.route('/is_email_exist/:email')
        .get((req, res)=>{ 
            if(utils.isValidEmail(req.params.email.trim())){
                app.UsersModel.findOne({where : {email : req.params.email}}).then(user => {
                    if(user){
                        res.status(200).json({is_exist : true});                    
                    }else{
                        res.status(200).json({is_exist : false});                                        
                    }
                });
            }else{
                res.status(200).send('Wrong EMAIL format');
            }
        });   

    utilsRouter.route('/is_msisdn_exist/:msisdn')
        .get((req, res)=>{  
            if(utils.isValidMSISDN(req.params.msisdn.trim())){
                app.UsersModel.findOne({where : {msisdn : req.params.msisdn}}).then(user => {
                    if(user){
                        res.status(200).json({is_exist : true});                    
                    }else{
                        res.status(200).json({is_exist : false});                                        
                    }
                });
            }else{
                res.status(200).json('Wrong MSISN format');
            }
        }); 

    utilsRouter.route('/countys')
        .get((req, res)=>{ 
            app.CountyModel.findAll({where : {status : 'A'}}).then((countys) => {
                if(countys){
                    res.status(200).json(countys);                    
                }
            });
        });  

    utilsRouter.route('/adduser')
        .post((req, res)=>{
        
          if(Object.keys(req.body) != 0){
                app.UsersModel.create(req.body).then((user)=>{
                    const token = jwt.sign({user}, expressApp.get('token'), {expiresIn: '12d'});    
                    res.status(200).json({success : true, message : 'successful', token : token, user : user});    
                });
          }else if(Object.keys(req.params) != 0){
                app.UsersModel.create(req.params).then((user)=>{
                    const token = jwt.sign({user}, expressApp.get('token'), {expiresIn: '12d'});    
                    res.status(200).json({success : true, message : 'successful', token : token, user : user});    
                }).catch((error)=>{
                    if(error)
                        res.status(400).send('Could not save data');
                });
          }else{
              console.log('Passed NONE !!!');
          }
    }); 
    
        return utilsRouter;
    }
}