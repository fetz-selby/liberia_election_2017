import express from 'express';
import _ from 'lodash';

export default class ResultsRoutes{ 
    
    constructor(ResultModel, CenterModel, CountySummaryModel, CenterSummaryModel, NationalSummaryModel, RejectedModel, RawModel, centers, candidates, countys){
        this.ResultModel = ResultModel;
        this.CenterModel = CenterModel;
        this.CountySummaryModel = CountySummaryModel;
        this.CenterSummaryModel = CenterSummaryModel;
        this.NationalSummaryModel = NationalSummaryModel;
        this.RejectedModel = RejectedModel;
        this.RawModel = RawModel;
        this.centers = centers;
        this.candidates = candidates;
        this.countys = countys;

        this.autoUpdate();
    }

    routes(){
        const app = this;
        const resultsRouter = express.Router();

        resultsRouter.route('/')
            .get((req, res)=>{  
                app.ResultModel.findAll().then(results => {
                    res.status(200).json(results);
                });
            });

        resultsRouter.route('/candidatecountysummary/county/:id')
            .get((req, res)=>{  
                app.CountySummaryModel.findAll({where : {county_id : req.params.id}}).then((results) => {
                    res.status(200).json(results);
                });
            }); 

        resultsRouter.route('/summary/totalvotes/')
            .get((req, res)=>{  
                app.ResultModel.sum('votes', {where : {status : 'A'}}).then((results) => {
                    res.status(200).json({total : results});
                });
            }); 

        resultsRouter.route('/summary/totaldeclared/')
            .get((req, res)=>{  
                app.ResultModel.findAndCountAll({where : {status : 'A'}, group : 'center_id'}).then((results) => {
                    res.status(200).json({total : results.rows.length});
                });
            }); 

        resultsRouter.route('/summary/totaldistricts/')
            .get((req, res)=>{  
                app.CenterModel.findAndCountAll({where : {status : 'A'}}).then((results) => {
                    res.status(200).json({total : results.count});
                });
            }); 

        resultsRouter.route('/summary/totalnational/')
            .get((req, res)=>{  
                app.NationalSummaryModel.findAll({where : {status : 'A'}}).then((candidates) => {
                    res.status(200).json(candidates);
                });
            }); 

            
        resultsRouter.route('/totaldistricts/declared/county/:id')
            .get((req, res)=>{  
                app.RawModel.findAndCountAll({where : {county_id : req.params.id, status : 'A'}})
                .then((results) => {
                    res.status(200).json({total : results.count, data : results.rows});
                });
            });

        resultsRouter.route('/totalactualvotes/county/:id')
            .get((req, res)=>{  
                app.ResultModel.sum('votes', {where : {county_id : req.params.id, status : 'A'}}).then((results) => {
                    if(results){
                        res.status(200).json({total : results});                        
                    }else{
                        res.status(200).json({total : 0});                        
                    }
                });
            });

        resultsRouter.route('/totalactualvotes/center/:code')
            .get((req, res)=>{  
                app.ResultModel.sum('votes', {where : {code : req.params.code, status : 'A'}}).then((results) => {
                    if(results){
                        res.status(200).json({total : results});                        
                    }else{
                        res.status(200).json({total : 0});                        
                    }
                });
            });

        resultsRouter.route('/summary/group/county/:id')
            .get((req, res)=>{
                app.ResultModel.findAll({where: {county_id:req.params.id, status: 'A'}, group: 'code'}).then((results)=>{
                    if(results){
                        app.processCountyCenters(res, results);
                    }
                })
            }); 

        resultsRouter.route('/candidatecentersummary/code/:code')
            .get((req, res)=>{  
                app.CenterSummaryModel.findAll({where : {code : req.params.code, status: 'A'}}).then((results) => {
                    res.status(200).json(results);
                });
            }); 

        resultsRouter.route('/candidatedistrictsummary/code/:code')
            .get((req, res)=>{  
                app.ResultModel.findAll({where : {code : req.params.code, status: 'A'}}).then((results) => {
                    res.status(200).json(results);
                });
            }); 

        resultsRouter.route('/totalrejected/county/:id')
            .get((req, res)=>{  
                //Code, rejected here
                app.processCountyRejectedVotes(res, req.params.id);
            }); 

        resultsRouter.route('/totalrejected/center/:code')
            .get((req, res)=>{  
                //Code, rejected here
                app.processCenterRejectedVotes(res, req.params.code);
            }); 

        resultsRouter.route('/')
            .post((req, res)=>{
                
                if(Object.keys(req.body) != 0){
                    if(this.isFormatValid(req.body)){
                        this.setResult(req.body, res)
                    }
                       
                }else if(Object.keys(req.query) != 0){
                    if(this.isFormatValid(req.query)){
                        this.setResult(req.query, res);
                    }
                }
            }); 

        resultsRouter.route('/compute/centers')
            .get((req, res)=>{
                app.updateSummaryCenters(res);
            }); 

        resultsRouter.route('/compute/countys')
            .get((req, res)=>{
                app.updateSummaryCountys(res);
            }); 

        resultsRouter.route('/compute/national')
            .get((req, res)=>{
                app.updateNational(res);
            }); 

        resultsRouter.route('/compute/all')
            .get((req, res)=>{
                app.updateNational(null);
                app.updateSummaryCountys(null);
                app.updateSummaryCenters(null);

                setTimeout(()=>{
                    res.status(200).send('Successful');
                }, 20*1000);
            }); 

        resultsRouter.route('/:id')
            .delete((req, res)=>{
                
            });

        return resultsRouter;
    }

    isFormatValid(format){
        if(format){
            if(format.center_id != null && parseInt(format.center_id) > 0 &&
                format.results){
                    //Grab center code for summation of values
                    return true;
                    
                }else{
                    return false;
                }
        }else{
            return false;
        }
    }

    setResult(data, res){
        const app = this;        
        const center_id = data.center_id;
        const rejected = data.rejected;

        let candidatesAndVotes = [];

        //Check if result exists
        const county_id = this.getCountyId(center_id);

        app.RawModel.destroy({where : {center_id, county_id}})
        .then(()=>{
            app.RawModel.create({center_id, county_id}).then(()=>{

                app.RejectedModel.destroy({where : {center_id : center_id}}).then(()=>{        
                    app.ResultModel.destroy({where :{center_id}}).then(()=>{
    
                            app.CenterModel.findOne({where : {id : center_id}}).then((center)=>{
                                if(center){
                                    const code = center.code;
                                    const county_id = center.county_id;
                                    const address = center.address;
                                    const center_name = center.name;
    
                                    //Save Rejected
                                    app.RejectedModel.create({center_id, code, county_id, votes : rejected, status : 'A'});
                    
                                    //for(const candidate_id in data.results){
                                    const tmpArray = app.getStringToArray(data.results);
                                    tmpArray.map((d)=>{
                                        const candidate_id = d.split(':')[0];
                                        const votes = d.split(':')[1];
    
                                        candidatesAndVotes.push({name: this.fetchForName(candidate_id), rejected: rejected, code : code, county_id : county_id, candidate_id : candidate_id, center_id : center_id, address,center_name, votes});                                
                                    });
                                    //}
                    
                                    //Push into results
                                    if(candidatesAndVotes.length > 0){
                                        app.ResultModel.bulkCreate(candidatesAndVotes);
                                    }
                    
                                    res.status(200).json({success : true});                
                                }else{
                                    res.status(403).send('center_id not found');
                                }
                    
                            })
                        })
                });
    
            });

        })  
    }

    getCountyId(center_id){
        const tmpCenter = this.centers.find((center)=>{return parseInt(center.center_id) === parseInt(center_id)});
        return tmpCenter.county_id;
    }

    getStringToArray(data){
        //Split
        console.log('array => '+data.split(','));
        return data.split(',');
    }

    processCountyRejectedVotes(res, data){
        const app = this;
        const county_id = data;

        app.RejectedModel.sum('votes', {where : {county_id, status : 'A'}}).then((results)=>{
            if(results){
                res.status(200).json({total : results});
            }else{
                res.status(200).json({total : 0});
            }
        })
    }

    processCenterRejectedVotes(res, data){
        const app = this;
        const code = data;

        app.RejectedModel.sum('votes', {where : {code, status : 'A'}}).then((results)=>{
            if(results){
                res.status(200).json({total : results});
            }else{
                res.status(200).json({total : 0});
            }
        })
    }

    updateSummaryCenters(res){
        const app = this;
        const centers = app.centers;
        const candidates = app.candidates;
        
        //Grab all centers in ResultModel

        app.CenterSummaryModel.destroy({where : {id : {$gt : 0}}}).then(()=>{
            app.ResultModel.findAll({where:{status : 'A'}, group : 'code'}).then((tmpcenters)=>{
                if(tmpcenters){
                    tmpcenters.map((center)=>{
                        candidates.map((candidate)=>{
                            app.ResultModel.sum('votes', {where : {candidate_id : parseInt(candidate.id), code : center.code, status:'A'}}).then((result)=>{
                                if(result){
                                    const candidateName = app.fetchForName(candidate.id);                            
                                    app.CenterSummaryModel.create({candidate_name : candidateName, 
                                                                   center_name : center.center_name,
                                                                   candidate_id : candidate.id, 
                                                                   votes : result, 
                                                                   code : center.code, 
                                                                   county_id : center.county_id,  
                                                                   status:'A'}).then((centerResult)=>{
                                        //console.log('One summary added');
                                    })
                                }
                            })
                        })
                    })

                    if(res){
                        setTimeout(()=>{
                            res.status(200).json({success : true});
                        }, 10*1000);
                    }
                }
            })
        })

    }

    updateSummaryCountys(res){
        const app = this;
        const countys = app.countys;
        const candidates = app.candidates;

        app.CountySummaryModel.destroy({where : {id :{$gt : 0}}}).then(()=>{
            candidates.map((candidate)=>{
                countys.map((county)=>{
                    app.ResultModel.sum('votes', {where : {candidate_id : parseInt(candidate.id), county_id : county.id, status : 'A'}}).then((result)=>{
                        if(result){
                            app.CountySummaryModel.create({candidate_id : candidate.id, candidate_name : candidate.name, county_name: county.name, county_id : county.id, votes : result, status : 'A'}).then((countyResult)=>{
                                //console.log('One county added');
                            })
                        }
                    })
                })
            })
            if(res){
                setTimeout(()=>{
                    res.status(200).json({success : true});
                }, 5*1000);
             }
        })
    }

    updateNational(res){
        const app = this;
        const candidates = app.candidates;

        app.NationalSummaryModel.destroy({where : {id : {$gt : 0}}}).then(()=>{
            candidates.map((candidate)=>{
                const candidate_id = candidate.id;
                const candidate_name = candidate.name;

                app.ResultModel.sum('votes', {where : {candidate_id, status : 'A'}}).then((results)=>{
                    if(results){
                        app.NationalSummaryModel.create({candidate_id, candidate_name, votes : results, status : 'A'})
                    }
                })
            });
            if(res){
                setTimeout(()=>{
                    res.status(200).json({success : true});
                }, 5*1000);
            }
        })

    }

    fetchForName(candidate_id){
        const candidate = _.find(this.candidates, (candidate)=>{            
                                return parseInt(candidate.id) === parseInt(candidate_id);
                            });

        return candidate.name;
    }

    processCountyCenters(res, results){
        const app = this;
        const candidates = app.candidates;
        let codes = [];
        const centers = app.centers;

        //Grab the center codes and name

        results.map((result)=>{
            const code = result.code;
            const local_center = centers.find((center)=>{return center.code === code});

            if(local_center){
                codes.push({name : local_center.name, code: local_center.code});                
            }
        })

        //For each candidate, loop through all the codes
        let bigArray = [];
        let categories = [];

        candidates.map((candidate, j)=>{
            const candidate_id = candidate.id;
            let votesArray = [];

            codes.map((code, i)=>{
                app.ResultModel.sum('votes', {where: {code:code.code, candidate_id: candidate_id}}).then((result)=>{
                    if(result){
                        votesArray.push(result);
                    }else{
                        votesArray.push(0);
                    }

                    if(i === (codes.length-1)){
                        bigArray.push({name : candidate.name, data : votesArray});                       
                    }

                    if(categories.length < codes.length){
                        categories.push(code.name);
                    }

                    if(j === (candidates.length-1) && i === (codes.length-1)){
                        res.status(200).json({categories : categories, series:bigArray});
                    }                                                          
                })
            })

        });
    }

    autoUpdate(){
        const app = this;
        setInterval(()=>{
            console.log('Updating started ...');
            app.updateNational(null);
            app.updateSummaryCountys(null);
            app.updateSummaryCenters(null)
        }, 15 * 60 * 1000);
    }
}