import dispatcher from '../dispatcher';
import axios from 'axios';

export function loadCountys(token){
    //axios.get('http://localhost:8002/api/v1/countys', {params :{token}})    
    axios.get('/api/v1/countys', {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "COUNTY_COUNTYS_READY",
                data: res.data
            });
        }
    });
}

export function loadTotalDistrictsInCounty(token, id){
    //axios.get('http://localhost:8002/api/v1/centers/totaldistricts/county/'+id, {params :{token}})    
    axios.get('/api/v1/centers/totaldistricts/county/'+id, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "COUNTY_TOTAL_DISTRICTS",
                data: res.data
            });
        }
    });
}

export function loadTotalDistrictsDeclaredInCounty(token, id){
    //axios.get('http://localhost:8002/api/v1/results/totaldistricts/declared/county/'+id, {params :{token}})    
    axios.get('/api/v1/results/totaldistricts/declared/county/'+id, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "COUNTY_TOTAL_DECLARED_DISTRICTS",
                data: res.data
            });
        }
    });
}

export function loadTotalExpectedVotesInCounty(token, id){
    //axios.get('http://localhost:8002/api/v1/centers/totalvotes/county/'+id, {params :{token}})    
    axios.get('/api/v1/centers/totalvotes/county/'+id, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "COUNTY_TOTAL_COUNTY_VOTES",
                data: res.data
            });
        }
    });
}

export function loadTotalActualVotesInCounty(token, id){
    //axios.get('http://localhost:8002/api/v1/results/totalactualvotes/county/'+id, {params :{token}})    
    axios.get('/api/v1/results/totalactualvotes/county/'+id, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "COUNTY_TOTAL_ACTUAL_COUNTY_VOTES",
                data: res.data
            });
        }
    });
}

export function loadCountyData(token, id){
    //axios.get('http://localhost:8002/api/v1/results/candidatecountysummary/county/'+id, {params :{token}})    
    axios.get('/api/v1/results/candidatecountysummary/county/'+id, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "COUNTY_C_COUNTY",
                data: res.data
            });
        }
    });
}

export function loadCountyGroupData(token, id){
    //axios.get('http://localhost:8002/api/v1/results/summary/group/county/'+id, {params :{token}})    
    axios.get('/api/v1/results/summary/group/county/'+id, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "COUNTY_GROUP_COUNTY",
                data: res.data
            });
        }
    });
}

export function loadCountyRejected(token, id){
    //axios.get('http://localhost:8002/api/v1/results/totalrejected/county/'+id, {params :{token}})    
    axios.get('/api/v1/results/totalrejected/county/'+id, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "COUNTY_REJECTED_COUNTY",
                data: res.data
            });
        }
    });
}