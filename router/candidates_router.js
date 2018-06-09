import express from 'express';
import request from 'request';
    
export default class CandidatesRoutes{

    constructor(CandidateModel){
        this.CandidateModel = CandidateModel;
    }

    routes(){
        const app = this;
        const candidateRouter = express.Router();

        candidateRouter.route('/')
            .get((req, res)=>{  
                app.CandidateModel.findAll({where: {status:'A'}, limit: 150}).then(candidates => {
                    res.status(200).json(candidates);
                })
            });   

        candidateRouter.route('/:id')
            .get((req, res)=>{
                app.CandidateModel.findById(req.params.id).then(candidate => {
                    res.status(200).json(candidate);
                })
            }); 

        candidateRouter.route('/')
            .post((req, res)=>{
                if(req.body){
                    app.CandidateModel.create(req.body).then((candidate)=>{
                        res.status(200).json(candidate);                                
                    })
                }else{
                    res.status(200).send('Data not saved!');
                }
            }); 

        candidateRouter.route('/:id')
            .delete((req, res)=>{
                
            });

        return candidateRouter;
    }

};