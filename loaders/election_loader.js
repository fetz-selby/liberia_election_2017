var electionData = require('../resources/liberia_election_data.json');
var _ = require('lodash');
var fs = require('fs');

var countys = [],
    names = [];

electionData.map((data)=>{
    // var bank_name = bank.name,
    //     code = bank.code,
    //     branch = bank.branch,
    //     b_code = bank.b_code;

    // var bank = {name : bank_name, code : code};
    
    countys.push(data.county);
});

//Unique collection

var uniqueCountys = _.uniq(countys),
    countyWithId = [],
    centersWithCountyId = [],
    centersWithMappedCountyId = [];

//Associate all county's with id's
uniqueCountys.map((county, i)=>{
    countyWithId.push({id : i+1, name : county, status : 'A'});
});

//Grab all centers under county's
countyWithId.map((county)=>{
    var centers = _.filter(electionData, (data)=>{return data.county === county.name});
    centersWithCountyId.push({county_id : county.id, centers : centers});
});

//Construct centers with county id's
centersWithCountyId.map((data)=>{
    var county_id = data.county_id;
    var centers = data.centers;

    centers.map((center)=>{
        centersWithMappedCountyId.push({name : center.name, address : center.address, polling_place : center.polling_place, code : center.center_code, total_voters : center.total_voters, county_id : county_id, msisdn: '', status : 'A'});
    });
})

fs.writeFile('countys.json', JSON.stringify(countyWithId),  function(err) {
    if (err) {
       return console.error(err);
    }
    
    console.log("countys written successfully!");
 });

fs.writeFile('centers.json', JSON.stringify(centersWithMappedCountyId),  function(err) {
    if (err) {
       return console.error(err);
    }
    
    console.log("centers written successfully!");
 });