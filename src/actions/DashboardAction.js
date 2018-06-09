import dispatcher from '../dispatcher';
import axios from 'axios';

export function loadCenters(token){
    //axios.get('http://localhost:8001/api/v1/centers', {params :{token}})    
    axios.get('/api/v1/centers', {params :{token}})
    .then((res)=>{
        if(res.data){
            console.log('size of centers ::: '+res.data.length);
            dispatcher.dispatch({
                type : "DASH_CENTERS_READY",
                data: res.data
            });
        }
    });
}

export function loadCenter(token, id){
    //axios.get('http://localhost:8001/api/v1/centers/county/'+id, {params :{token}})    
    axios.get('/api/v1/centers/county/'+id, {params :{token}})
    .then((res)=>{
        if(res.data !== null){
            dispatcher.dispatch({
                type : "DASH_CENTERS_READY",
                data: res.data
            });
        }
    });
}

export function loadCountys(token){
    //axios.get('http://localhost:8001/api/v1/countys', {params :{token}})    
    axios.get('/api/v1/countys', {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "DASH_COUNTYS_READY",
                data: res.data
            });
        }
    });
}

export function loadCounty(token, id){
    //axios.get('http://localhost:8001/api/v1/countys/'+id, {params :{token}})    
    axios.get('/api/v1/countys/'+id, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "DASH_COUNTYS_READY",
                data: res.data
            });
        }
    });
}

export function loadCountyData(token, id){
    //axios.get('http://localhost:8001/api/v1/results/candidatecountysummary/county/'+id, {params :{token}})    
    axios.get('/api/v1/results/candidatecountysummary/county/'+id, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "DASH_N_COUNTY",
                data: res.data
            });
        }
    });
}

export function loadCenterData(token, code){
    //axios.get('http://localhost:8001/api/v1/results/candidatecentersummary/code/'+code, {params :{token}})    
    axios.get('/api/v1/results/candidatecentersummary/code/'+code, {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "DASH_N_CENTER",
                data: res.data
            });
        }
    });
}

export function loadTotalDistricts(token){
    //axios.get('http://localhost:8001/api/v1/results/summary/totaldistricts', {params :{token}})    
    axios.get('/api/v1/results/summary/totaldistricts', {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "DASH_TOTAL_DISTRICTS",
                data: res.data
            });
        }
    });
}

export function loadTotalDeclared(token){
    //axios.get('http://localhost:8001/api/v1/results/summary/totaldeclared', {params :{token}})    
    axios.get('/api/v1/results/summary/totaldeclared', {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "DASH_TOTAL_DECLARED",
                data: res.data
            });
        }
    });
}

export function loadTotalVotes(token){
    //axios.get('http://localhost:8001/api/v1/results/summary/totalvotes', {params :{token}})    
    axios.get('/api/v1/results/summary/totalvotes', {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "DASH_TOTAL_VOTES",
                data: res.data
            });
        }
    });
}

export function loadTotalNational(token){
    //axios.get('http://localhost:8001/api/v1/results/summary/totalnational', {params :{token}})    
    axios.get('/api/v1/results/summary/totalnational', {params :{token}})
    .then((res)=>{
        if(res.data){
            dispatcher.dispatch({
                type : "DASH_TOTAL_NATIONAL",
                data: res.data
            });
        }
    });
}