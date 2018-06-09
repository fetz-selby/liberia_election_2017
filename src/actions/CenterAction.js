import dispatcher from '../dispatcher';
import axios from 'axios';

export function loadCenters(token, id){
    //axios.get('http://localhost:8002/api/v1/centers/county/'+id, {params :{token}})    
    axios.get('/api/v1/centers/county/'+id, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "CENTER_CENTERS_READY",
                data: res.data
            });
        }
    });
}

export function loadTotalDistrictsInCenter(token, code){
    //axios.get('http://localhost:8002/api/v1/centers/totaldistricts/center/'+code, {params :{token}})    
    axios.get('/api/v1/centers/totaldistricts/center/'+code, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "CENTER_TOTAL_DISTRICTS",
                data: res.data
            });
        }
    });
}

export function loadTotalExpectedVotesInCenter(token, code){
    //axios.get('http://localhost:8002/api/v1/centers/totalvotes/center/'+code, {params :{token}})    
    axios.get('/api/v1/centers/totalvotes/center/'+code, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "CENTER_TOTAL_CENTER_VOTES",
                data: res.data
            });
        }
    });
}

export function loadTotalActualVotesInCenter(token, code){
    //axios.get('http://localhost:8002/api/v1/results/totalactualvotes/center/'+code, {params :{token}})    
    axios.get('/api/v1/results/totalactualvotes/center/'+code, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "CENTER_TOTAL_ACTUAL_CENTER_VOTES",
                data: res.data
            });
        }
    });
}

export function loadCenterRejected(token, code){
    //axios.get('http://localhost:8002/api/v1/results/totalrejected/center/'+code, {params :{token}})    
    axios.get('/api/v1/results/totalrejected/center/'+code, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "CENTER_REJECTED_CENTER",
                data: res.data
            });
        }
    });
}

export function loadCenterData(token, code){
    //axios.get('http://localhost:8002/api/v1/results/candidatecentersummary/code/'+code, {params :{token}})    
    axios.get('/api/v1/results/candidatecentersummary/code/'+code, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "CENTER_CHART_CENTER",
                data: res.data
            });
        }
    });
}

export function loadDistrictData(token, code){
    //axios.get('http://localhost:8002/api/v1/results/candidatedistrictsummary/code/'+code, {params :{token}})    
    axios.get('/api/v1/results/candidatedistrictsummary/code/'+code, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "CENTER_CHART_DISTRICT",
                data: res.data
            });
        }
    });
}