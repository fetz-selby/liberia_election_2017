import express from 'express';
import request from 'request';
    
export default class CountysRoutes{

    constructor(CountyModel){
        this.CountyModel = CountyModel;
    }

    routes(){
        const app = this;
        const countyRouter = express.Router();

        countyRouter.route('/')
            .get((req, res)=>{  
                app.CountyModel.findAll({where: {status:'A'}, limit: 150}).then(countys => {
                    res.status(200).json(countys);
                })
            });   

        countyRouter.route('/:id')
            .get((req, res)=>{
                app.CenterModel.findById(req.params.id).then(county => {
                    res.status(200).json(county);
                })
            }); 

        countyRouter.route('/')
            .post((req, res)=>{
                if(req.body){
                    app.CenterModel.create(req.body).then((county)=>{
                        res.status(200).json(county);                                
                    })
                }else{
                    res.status(200).send('Data not saved!');
                }
            }); 

        countyRouter.route('/:id')
            .delete((req, res)=>{
                
            });

        return countyRouter;
    }

};