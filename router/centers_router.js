import express from 'express';
import request from 'request';
    
export default class CentersRoutes{

    constructor(CenterModel, UserModel){
        this.CenterModel = CenterModel;
    }

    routes(){
        const app = this;
        const centerRouter = express.Router();

        centerRouter.route('/')
            .get((req, res)=>{  
                app.CenterModel.findAll({where: {status:'A'}, group: 'code'}).then(centers => {
                    res.status(200).json(centers);
                })
            });   

        centerRouter.route('/:id')
            .get((req, res)=>{
                app.CenterModel.findById(req.params.id).then(center => {
                    res.status(200).json(center);
                })
            }); 

        centerRouter.route('/county/:id')
            .get((req, res)=>{
                app.CenterModel.findAll({where :{county_id : req.params.id, status : 'A'}, group: 'code'}).then(center => {
                    res.status(200).json(center);
                })
            }); 

        centerRouter.route('/totaldistricts/county/:id')
            .get((req, res)=>{
                app.CenterModel.findAndCountAll({where :{county_id : req.params.id, status : 'A'}}).then(results => {
                    res.status(200).json({total : results.count});
                })
            }); 

        centerRouter.route('/totaldistricts/center/:code')
            .get((req, res)=>{
                app.CenterModel.findAndCountAll({where :{code : req.params.code, status : 'A'}}).then(results => {
                    res.status(200).json({total : results.count});
                })
            }); 

        centerRouter.route('/totalvotes/county/:id')
            .get((req, res)=>{
                app.CenterModel.sum('total_voters', {where :{county_id : req.params.id, status : 'A'}}).then(results => {
                    if(results){
                        res.status(200).json({total : results});                        
                    }else{
                        res.status(200).json({total : 0});
                    }
                })
            }); 

        centerRouter.route('/totalvotes/center/:code')
            .get((req, res)=>{
                app.CenterModel.sum('total_voters', {where :{code : req.params.code, status : 'A'}}).then(results => {
                    if(results){
                        res.status(200).json({total : results});                        
                    }else{
                        res.status(200).json({total : 0});
                    }
                })
            }); 

        centerRouter.route('/')
            .post((req, res)=>{
                if(req.body){
                    app.CenterModel.create(req.body).then((center)=>{
                        res.status(200).json(center);                                
                    })
                }else{
                    res.status(200).send('Data not saved!');
                }
            }); 

        centerRouter.route('/:id')
            .delete((req, res)=>{
                
            });

        return centerRouter;
    }

};