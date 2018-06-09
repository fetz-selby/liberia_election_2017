import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import session from 'express-session';
import expressValidator from 'express-validator';

import UserRoutes from './router/users_router';
import CandidatesRoutes from './router/candidates_router';
import CentersRoutes from './router/centers_router';
import ResultsRoutes from './router/results_router';
import CountysRoutes from './router/countys_router';

import AuthRoutes from './router/auth_router';

import UtilsRoutes from './router/utils_router';
//import SessionsRouters from './router/session_router';

import * as models from './models/models';
import * as d from './config';
import request from 'request';

import jwt from 'jsonwebtoken';


export default class App {

    constructor(){
        this.app = express();
        this.initExpress(this.app);
        this.initSQLAndRouters(this.app);
        this.finalize(this.app);
    }

    initExpress(app){
        app.use(bodyParser.json({limit: '50mb'}));
        app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        app.use(cookieParser());
        app.use(expressValidator([]));
        app.use(session({resave:true, saveUninitialized: true, 
                        secret: 'thequickbrownfoxjumpedoverthelazydogs',
                        cookieName: 'session',
                        duration: 30*60*1000, 
                        activeDuration: 5*60*1000, 
                        httpOnly: true, 
                        cookie: {secure: false }}));

        //CORS enabling
        app.use((req, res, next)=>{
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
          next();
        });

        //logging
        app.use(logger('dev'));

        app.use(express.static('build'));


        //Disable cache
        app.use((req, res, next) => {
            res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
            res.header('Expires', '-1');
            res.header('Pragma', 'no-cache');
            next();
        });

        app.get('/', (req, res)=>{
            res.redirect('./index.html');
        });

    }

    validate(req, res, next){
        // const app = express();

        // //JSON Web Token Secret
        // app.set('token', d.config.secret);

        //  // check header or url parameters or post parameters for token
        // const token = req.body.token || req.query.token || req.headers['x-access-token'];
        
        // // decode token
        // if(token) {
    
        //     // verifies secret and checks exp
        //     jwt.verify(token, app.get('token'), function(err, decoded) {      
        //         if (err) {
        //             return res.json({ success: false, message: 'Failed to authenticate token.' });    
        //         } else {
        //             // if everything is good, save to request for use in other routes
        //             req.decoded = decoded;    
        //             next();
        //         }
        //     });
    
        // }else{
    
        //     // if there is no token
        //     // return an error
        //     return res.status(403).send({ 
        //         success: false, 
        //         message: 'No token provided.' 
        //     });
    
        // }

        next();
    }

    initSQLAndRouters(app){
        const dbConfig = d.sequelize;

        //Setting up models

        const candidateModel = models.candidatesModel(dbConfig);
        const resultModel = models.resultsModel(dbConfig);
        const inboundModel = models.inboundsModel(dbConfig);

        const countyModel = models.countysModel(dbConfig);
        const centerModel = models.centersModel(dbConfig);
        const usersModel = models.usersModel(dbConfig);
        const centerSummaryModel = models.centerSummarysModel(dbConfig);
        const countySummaryModel = models.countySummarysModel(dbConfig);
        const nationalSummaryModel = models.nationalSummarysModel(dbConfig);
        const rejectedVotesModel = models.rejectedVotesModel(dbConfig); 
        const rawModel = models.rawModel(dbConfig);        
        

        // Setting relationships

        rejectedVotesModel.belongsTo(centerModel);
        rejectedVotesModel.belongsTo(countyModel);

        resultModel.belongsTo(candidateModel);
        resultModel.belongsTo(centerModel);
        resultModel.belongsTo(countyModel);

        centerModel.belongsTo(countyModel);
        usersModel.belongsTo(countyModel);

        centerSummaryModel.belongsTo(candidateModel);
        centerSummaryModel.belongsTo(countyModel);

        countySummaryModel.belongsTo(candidateModel);
        countySummaryModel.belongsTo(countyModel);

        nationalSummaryModel.belongsTo(candidateModel);

        rawModel.belongsTo(countyModel);
        rawModel.belongsTo(centerModel);

        // Loading 
        const candidatesData = require('./loaders/candidates.json');        
        const countysData = require('./loaders/countys.json');
        const centersData = require('./loaders/centers.json');

        const allCandidates = require('./loaders/allcandidates.json');
        const allCenters = require('./loaders/allcenters.json');
        const allCountys = require('./loaders/allcountys.json');

        // dbConfig.sync({force:true}).then(()=>{
        //     candidateModel.bulkCreate(candidatesData);            
        //     countyModel.bulkCreate(countysData);                        
        //     centerModel.bulkCreate(centersData);
        //     usersModel.bulkCreate([{firstname: 'Election', lastname : 'Gods', email : 'egods@election.com', msisdn : '0244000000', password:'pa55w0rd', county_id : 1},
        //     {firstname: 'Every', lastname : 'One', email : 'login@election.com', msisdn : '0244111111', password:'loginlogin', county_id : 2}]);
        // })

        const users = new UserRoutes(usersModel);
        const candidates = new CandidatesRoutes(candidateModel);
        const centers = new CentersRoutes(centerModel);
        const results = new ResultsRoutes(resultModel, centerModel, countySummaryModel, centerSummaryModel, nationalSummaryModel, rejectedVotesModel, rawModel,  allCenters, allCandidates, allCountys);
        const countys = new CountysRoutes(countyModel);
        
        const utils = new UtilsRoutes(usersModel, countyModel);
        const auth = new AuthRoutes(usersModel);

        // Set Middleware to check for sessions

        //app.use('/api/v1/*', this.validate); 

        app.use('/api/v1/users', users.routes());
        app.use('/api/v1/candidates', candidates.routes());  
        app.use('/api/v1/centers', centers.routes());  
        app.use('/api/v1/results', results.routes());  
        app.use('/api/v1/countys', countys.routes());          
        
        app.use('/api/utils', utils.routes());
        app.use('/api/auth', auth.routes());
    }

    finalize(app){
        const PORT = d.config.PORT;
        app.listen(parseInt(PORT), ()=>{
            console.log('Running on PORT ::: '+PORT);
        });
    }

}

const server = new App();