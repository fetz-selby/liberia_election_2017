import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import cookie from 'react-cookies';
import format from 'format-number';

class DashBoardStore extends EventEmitter{
    constructor(){
        super();
        this.user = {
            firstname : '',
            lastname : '',
            email : '',
            msisdn : '',
            password : ''
        }
        this.allCenters = [];
        this.allCountys = [];
        this.centerId = 0;
        this.countyDataPIE = [];
        this.countyDataBarCategories = [];
        this.countyDataBarSeries = [];

        this.centerDataPIE = [];
        this.centerDataBarCategories = [];
        this.centerDataBarSeries = [];
        this.totalDistricts = 0;
        this.totalDeclaredDistricts = 0;
        this.totalVotes = 0;

        this.nationalDataPIE = [];
        this.nationalDataBarCategories = [];
        this.nationalDataBarSeries = [];
        this.nationalDataPercentage = [{name : '', percentage : 0}];
        this.nationalPositionLimit = 0;

    }

    getUser(){
        return this.user;
    }

    doCentersReady(data){
        this.allCenters = [];
        data.map((center)=>{
            this.allCenters.push({value: center.code, label : center.name+' ('+center.code+')'});
            return center;
        })

        this.emit('dashboard_centers_loaded');
    }

    doCountyCandidatesLoad(data){
        const app = this;
        this.countyDataPIE = [];
        this.countyDataBarCategories = [];
        this.countyDataBarSeries = [];
        data.map((d)=>{
            app.countyDataPIE.push({name : d.candidate_name, y : d.votes});
            app.countyDataBarCategories.push(d.candidate_name);
            app.countyDataBarSeries.push(parseInt(d.votes));
        });

        this.emit('dash_n_county');
    }

    doCenterCandidatesLoad(data){
        const app = this;
        this.centerDataPIE = [];
        this.centerDataBarCategories = [];
        this.centerDataBarSeries = [];
        data.map((d)=>{
            app.centerDataPIE.push({name : d.candidate_name, y : d.votes});
            app.centerDataBarCategories.push(d.candidate_name);
            app.centerDataBarSeries.push(parseInt(d.votes));
        });

        this.emit('dash_n_center');
    }

    doTotalNational(data){
        const app = this;
        this.nationalDataPIE = [];
        this.nationalDataBarCategories = [];
        this.nationalDataBarSeries = [];
        this.nationalDataPercentage = [];

        const totalVotes = this.getSumVotes(data);
        this.nationalPositionLimit = data.length;
        data.map((d)=>{
            app.nationalDataPIE.push({name : d.candidate_name, y : d.votes});
            app.nationalDataBarCategories.push(d.candidate_name);
            app.nationalDataBarSeries.push(parseInt(d.votes));


            //Compute for percentage
            const percent = ((parseFloat(d.votes)/parseFloat(totalVotes))*100);

            app.nationalDataPercentage.push({name : d.candidate_name, percentage : Math.round(percent*100)/100 })
        });

        this.emit('dash_n_national');
    }

    getSumVotes(data){
        let sum = 0;

        data.map((d)=>{
            sum = sum + parseFloat(d.votes);
        })

        console.log('sum ::: '+sum);

        return sum;
    }


    doTotalDistricts(data){
        const formatStyle = format({integerSeparator:','});
        this.totalDistricts = formatStyle(data.total);

        this.emit('dash_total_district');
    }

    doTotalDeclared(data){
        const formatStyle = format({integerSeparator:','});
        this.totalDeclaredDistricts = formatStyle(data.total);

        this.emit('dash_total_declared');
    }

    doTotalVotes(data){
        const formatStyle = format({integerSeparator:','});
        this.totalVotes = formatStyle(data.total);

        this.emit('dash_total_votes');
    }

    getCountyDataPIE(){
        return this.countyDataPIE;
    }

    getCountyDataBarCategories(){
        return this.countyDataBarCategories;
    }

    getCountyDataBarSeries(){
        return this.countyDataBarSeries;
    }

    getCenterDataPIE(){
        return this.centerDataPIE;
    }

    getCenterDataBarCategories(){
        return this.centerDataBarCategories;
    }

    getCenterDataBarSeries(){
        return this.centerDataBarSeries;
    }

    getNationalDataBarSeries(){
        return this.nationalDataBarSeries;
    }

    getNationalDataBarCategories(){
        return this.nationalDataBarCategories;
    }

    getNationalDataPIE(){
        return this.nationalDataPIE;
    }

    setCountyId(countyId){
        this.countyId = countyId;
        this.emit('dashboard_county_change');
    }

    getCenters(){
        return this.allCenters;
    }

    getCountys(){
        return this.allCountys;
    }

    getToken(){
        // return cookie.load('token');
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdG5hbWUiOiJFdmVyeSIsImxhc3RuYW1lIjoiT25lIiwiZW1haWwiOiJsb2dpbkBlbGVjdGlvbi5jb20iLCJtc2lzZG4iOiIwMjQ0MTExMTExIiwicGFzc3dvcmQiOiJkYWYzOGY5OWE3NTE0Njk3YTFjOTBmZDUzMTgwNzYyY2UyODYyOWI5YTU5ZDJlM2E2ZmYxMjBjNWVkM2IzNjZmIiwic3RhdHVzIjoiQSIsImNyZWF0ZWRfYXQiOiIyMDE3LTEwLTExVDAwOjM2OjEwLjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxNy0xMC0xMVQwMDozNjoxMC4wMDBaIiwiY291bnR5X2lkIjoyfSwiaWF0IjoxNTA3ODAxNDMzLCJleHAiOjE1MDg4MzgyMzN9.HEF4NUwMS6RtgkGtyoAVCjBB0fQjFJ-sO7E124D_6yQ';        
        
    }

    getCountyId(){
        return this.countyId;
    }

    getTotalDistrict(){
        return this.totalDistricts;
    }

    getTotalDeclaredDistrict(){
        return this.totalDeclaredDistricts;
    }

    getTotalVotes(){
        return this.totalVotes;
    }

    getNationalPercentage(){
        return this.nationalDataPercentage;
    }

    getNationalPositionLimit(){
        return this.nationalPositionLimit;
    }

    doCountysReady(data){
        data.map((county)=>{
            this.allCountys.push({value: county.id, label : county.name});
            return county;
        })

        this.emit('dashboard_countys_loaded');
    }

    handleActions(action){
        switch(action.type){
            case 'DASH_CENTERS_READY' : {
                this.doCentersReady(action.data);
                break;
            } 
            case 'DASH_COUNTYS_READY' : {
                this.doCountysReady(action.data);
                break;
            } 
            case 'DASH_A_COUNTY' : {
                break;
            } 
            case 'DASH_A_CENTER' :{
                this.onSignupComplete(action.data);
                break;
            }
            case 'DASH_N_COUNTY':{
                this.doCountyCandidatesLoad(action.data);
                break;
            }
            case 'DASH_N_CENTER':{
                this.doCenterCandidatesLoad(action.data);
                break;
            }
            case 'DASH_TOTAL_DISTRICTS':{
                this.doTotalDistricts(action.data);
                break;
            }
            case 'DASH_TOTAL_DECLARED':{
                this.doTotalDeclared(action.data);
                break;
            }
            case 'DASH_TOTAL_VOTES':{
                this.doTotalVotes(action.data);
                break;
            }
            case 'DASH_TOTAL_NATIONAL':{
                this.doTotalNational(action.data);
                break;
            }

            

            default:{}
        }
    }

}

const dashStore = new DashBoardStore();
dispatcher.register(dashStore.handleActions.bind(dashStore));

export default dashStore;