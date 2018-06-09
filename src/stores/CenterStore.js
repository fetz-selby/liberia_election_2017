import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import cookie from 'react-cookies';
import format from 'format-number';
import _ from 'lodash'

class CenterStore extends EventEmitter{
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

        this.totalDistricts = 0;
        this.totalExpectedCenterVotes = 0;
        this.totalActualCenterVotes = 0;
        this.totalRejectedCenterVotes = 0;

        this.centerDataPIE = [];
        this.centerDataBarCategories = [];
        this.centerDataBarSeries = [];
       
        this.centerTableData = {header : [], rows : []};

        this.rejected = 0;
    }

   

    doCentersReady(data){
        this.allCenters = [];

        data.map((center)=>{
            this.allCenters.push({value: center.code, label : center.name+' ('+center.code+')'});
        })

        this.emit('center_centers_loaded');
    }

    doTotalDistricts(data){
        const formatStyle = format({integerSeparator:','});
        this.totalDistricts = formatStyle(data.total);

        this.emit('center_total_districts');
    }

    doTotalExpectedCenterVotes(data){
        const formatStyle = format({integerSeparator:','});
        this.totalExpectedCenterVotes = formatStyle(data.total);

        this.emit('center_total_center_votes');
    }

    doTotalActualCenterVotes(data){
        const formatStyle = format({integerSeparator:','});
        this.totalActualCenterVotes = formatStyle(data.total);

        this.emit('center_total_actual_center_votes');
    }

    doTotalRejectedCenterVotes(data){
        const formatStyle = format({integerSeparator:','});
        this.totalRejectedCenterVotes = formatStyle(data.total);

        this.emit('center_total_rejected');
    }

    doCharts(data){
        const app = this;
        this.centerDataPIE = [];
        this.centerDataBarCategories = [];
        this.centerDataBarSeries = [];
        data.map((d)=>{
            app.centerDataPIE.push({name : d.candidate_name, y : d.votes});
            app.centerDataBarCategories.push(d.candidate_name);
            app.centerDataBarSeries.push(parseInt(d.votes));
        });

        this.emit('center_n_center');
    }

    doDistrictsCharts(data){
        const app = this;
        const formatStyle = format({integerSeparator:','});
        
        //Form Headers
        // {
        //     "id": 12,
        //     "name": "WEAH GEORGE MANNEH",
        //     "code": "3006",
        //     "address": "Gbah-Jakeh",
        //     "county_id": 1,
        //     "votes": 110,
        //     "rejected": 24,
        //     "status": "A",
        //     "created_at": "2017-10-03T08:25:30.000Z",
        //     "updated_at": "2017-10-03T08:25:30.000Z",
        //     "candidate_id": 4,
        //     "center_id": 11
        // }

        let tmpHeader = [];
        let tmpcandidates = [];

        data.map((can)=>{
            tmpHeader.push(can.center_id);
            tmpcandidates.push(can.name);
        });

        //Sort values
        let headers = _.uniq(tmpHeader);
        let candidates = _.uniq(tmpcandidates);
        let rows = [];        

        const min = _.min(headers);

        //Create Headers
        let finalHeader = [];
        finalHeader.push('Names');

        headers.map((head)=>{
            const val = (parseInt(head) - min)+1;
            const obj = data.find((v)=>{return v.center_id === head});

            finalHeader.push(obj.address+' ('+val+')');
        })


        //Loop by name
        candidates.map((candidate)=>{
            let votes = [];
            votes.push(candidate);
            headers.map((head)=>{
                data.map((data)=>{
                    if(candidate === data.name && head === data.center_id){
                        
                        votes.push(formatStyle(data.votes));
                    }
                })
                if(votes.length === 1){
                    votes.push(0);
                }
            })
            rows.push(votes);
        })


        this.centerTableData = {header : finalHeader, rows : rows};
        
        this.emit('center_t_center');
    }

    getCenters(){
        return this.allCenters;
    }

    getTotalDistricts(){
        return this.totalDistricts;
    }

    getTotalExpectedCenterVotes(){
        return this.totalExpectedCenterVotes;
    }

    getTotalActualCenterVotes(){
        return this.totalActualCenterVotes;
    }

    getTotalRejectedVotes(){
        return this.totalRejectedCenterVotes;
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

    getCenterTableData(){
        return this.centerTableData;
    }

    getToken(){
        // return cookie.load('token');
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdG5hbWUiOiJFdmVyeSIsImxhc3RuYW1lIjoiT25lIiwiZW1haWwiOiJsb2dpbkBlbGVjdGlvbi5jb20iLCJtc2lzZG4iOiIwMjQ0MTExMTExIiwicGFzc3dvcmQiOiJkYWYzOGY5OWE3NTE0Njk3YTFjOTBmZDUzMTgwNzYyY2UyODYyOWI5YTU5ZDJlM2E2ZmYxMjBjNWVkM2IzNjZmIiwic3RhdHVzIjoiQSIsImNyZWF0ZWRfYXQiOiIyMDE3LTEwLTExVDAwOjM2OjEwLjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxNy0xMC0xMVQwMDozNjoxMC4wMDBaIiwiY291bnR5X2lkIjoyfSwiaWF0IjoxNTA3ODAxNDMzLCJleHAiOjE1MDg4MzgyMzN9.HEF4NUwMS6RtgkGtyoAVCjBB0fQjFJ-sO7E124D_6yQ';        
    }

    

    handleActions(action){
        switch(action.type){
            
            case 'CENTER_CENTERS_READY' : {
                this.doCentersReady(action.data);
                break;
            } 
            case 'CENTER_TOTAL_DISTRICTS' : {
                this.doTotalDistricts(action.data);
                break;
            } 
            case 'CENTER_TOTAL_CENTER_VOTES' : {
                this.doTotalExpectedCenterVotes(action.data);
                break;
            } 
            case 'CENTER_TOTAL_ACTUAL_CENTER_VOTES' : {
                this.doTotalActualCenterVotes(action.data);
                break;
            } 
            case 'CENTER_REJECTED_CENTER' : {
                this.doTotalRejectedCenterVotes(action.data);
                break;
            } 
            case 'CENTER_CHART_CENTER' : {
                this.doCharts(action.data);
                break;
            } 
            case 'CENTER_CHART_DISTRICT' : {
                this.doDistrictsCharts(action.data);
                break;
            } 
            
            
            default:{}
        }
    }

}

const centerStore = new CenterStore();
dispatcher.register(centerStore.handleActions.bind(centerStore));

export default centerStore;