import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import cookie from 'react-cookies';
import format from 'format-number';

class CountyStore extends EventEmitter{
    constructor(){
        super();
        this.user = {
            firstname : '',
            lastname : '',
            email : '',
            msisdn : '',
            password : ''
        }

        this.allCountys = [];
        this.totalDistricts = 0;
        this.totalDeclaredDistricts = 0;
        this.totalCountyVotes = 0;
        this.totalActualCountyVotes = 0;
        this.countyDataPIE = [];
        this.countyDataBarSeries = [];
        this.countyDataBarCategories = [];

        this.countyGroupSeries = [];
        this.countyGroupCategories = [];
        this.countyTableBody = [];
        this.countyTableHeader = ['Name', 'Votes'];

        this.rejected = 0;
    }

    getUser(){
        return this.user;
    }

    setCountyId(countyId){
        this.countyId = countyId;
        this.emit('county_county_change');
    }

    setCountName(countyName){
        this.countyName = countyName;
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

    getCountyName(){
        return this.countyName;
    }

    doCountysReady(data){
        this.allCountys = [];

        data.map((county)=>{
            this.allCountys.push({value: county.id, label : county.name});
        })

        this.emit('county_countys_loaded');
    }

    doTotalDistricts(data){
        const formatStyle = format({integerSeparator:','});
        this.totalDistricts = formatStyle(data);

        this.emit('county_total_district');
    }

    doTotalDeclaredDistricts(data){
        const formatStyle = format({integerSeparator:','});        
        this.totalDeclaredDistricts = formatStyle(data);

        this.emit('county_total_declared_districts');
    }

    doTotalCountyVotes(data){
        const formatStyle = format({integerSeparator:','});        
        this.totalCountyVotes = formatStyle(data);

        this.emit('county_total_county_votes');
    }

    doTotalActualCountyVotes(data){
        const formatStyle = format({integerSeparator:','});        
        this.totalActualCountyVotes = formatStyle(data);

        this.emit('county_total_actual_county_votes');
    }

    doCountyLoad(data){
        const app = this;
        this.countyDataPIE = [];
        this.countyDataBarCategories = [];
        this.countyDataBarSeries = [];
        this.countyTableBody = [];
        data.map((d)=>{
            app.countyDataPIE.push({name : d.candidate_name, y : d.votes});
            app.countyDataBarCategories.push(d.candidate_name);
            app.countyDataBarSeries.push(parseInt(d.votes));
            app.countyTableBody.push({name : d.candidate_name, votes : d.votes});
        });

        this.emit('county_c_county');
    }

    doCountyGroopLoad(data){       
        this.countyGroupCategories = data.categories;
        this.countyGroupSeries = data.series;

        this.emit('county_group');
    }

    doRejectedVotes(data){
        const formatStyle = format({integerSeparator:','});
        this.rejected = formatStyle(data.total);   

        this.emit('county_total_rejected');
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

    getTotalDistricts(){
        return this.totalDistricts;
    }

    getTotalDeclaredDistricts(){
        return this.totalDeclaredDistricts;
    }

    getTotalCountyVotes(){
        return this.totalCountyVotes;
    }

    getTotalActualCountyVotes(){
        return this.totalActualCountyVotes;
    }

    getCountyGroupCategories(){
        return this.countyGroupCategories;
    }

    getCountyGroupSeries(){
        return this.countyGroupSeries;
    }

    getCountyTotalRejected(){
        return this.rejected;
    }

    getCountyTableBody(){
        return this.countyTableBody;
    }

    getCountyTableHeader(){
        return this.countyTableHeader;
    }

    handleActions(action){
        switch(action.type){
            
            case 'COUNTY_COUNTYS_READY' : {
                this.doCountysReady(action.data);
                break;
            } 
            case 'COUNTY_TOTAL_DISTRICTS' : {
                this.doTotalDistricts(action.data.total);
                break;
            } 
            case 'COUNTY_TOTAL_DECLARED_DISTRICTS' :{
                this.doTotalDeclaredDistricts(action.data.total);
                break;
            }
            case 'COUNTY_TOTAL_COUNTY_VOTES' :{
                this.doTotalCountyVotes(action.data.total);
                break;
            }
            case 'COUNTY_TOTAL_ACTUAL_COUNTY_VOTES' :{
                this.doTotalActualCountyVotes(action.data.total);
                break;
            }
            case 'COUNTY_C_COUNTY' :{
                this.doCountyLoad(action.data);
                break;
            }
            case 'COUNTY_GROUP_COUNTY' :{
                this.doCountyGroopLoad(action.data);
                break;
            }
            case 'COUNTY_REJECTED_COUNTY' :{
                this.doRejectedVotes(action.data);
                break;
            }
            
            
            default:{}
        }
    }

}

const countyStore = new CountyStore();
dispatcher.register(countyStore.handleActions.bind(countyStore));

export default countyStore;