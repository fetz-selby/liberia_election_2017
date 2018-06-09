import Sequelize from 'sequelize';
import _ from 'lodash';

var utils = require('../services/utils');

export function candidatesModel(config){
	const candidate = config.define('candidates', {
      name: {
        type: Sequelize.STRING,
      },
      party: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      }
	  }, {underscored: true});

	  return candidate;
}

export function resultsModel(config){
	const log = config.define('results', {
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      center_name: {
        type: Sequelize.STRING
      },
      address:{
        type: Sequelize.STRING
      },
      county_id :{
        type : Sequelize.INTEGER
      },
      votes: {
        type: Sequelize.INTEGER
      },
      rejected: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      }
    }, {underscored: true});
    
    //candidate_id
    //center_id

	  return log;
}

export function centerSummarysModel(config){
	const center_summary = config.define('center_summarys', {
      candidate_id: {
        type: Sequelize.INTEGER
      },
      candidate_name : {
        type : Sequelize.STRING
      },
      center_name : {
        type : Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING,
      },
      county_id :{
        type : Sequelize.INTEGER
      },
      votes: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      }
    }, {underscored: true});
    
	  return center_summary;
}

export function rejectedVotesModel(config){
	const rejected_votes = config.define('rejected_votes', {
      center_id: {
        type: Sequelize.INTEGER
      },
      code : {
        type : Sequelize.STRING
      },
      county_id : {
        type : Sequelize.INTEGER
      },
      votes :{
        type : Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      }
    }, {underscored: true});
    
	  return rejected_votes;
}

export function countySummarysModel(config){
	const county_summary = config.define('county_summarys', {
      candidate_id: {
        type: Sequelize.INTEGER
      },
      candidate_name : {
        type : Sequelize.STRING
      },
      county_name : {
        type : Sequelize.STRING
      },
      county_id: {
        type: Sequelize.INTEGER,
      },
      votes: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      }
    }, {underscored: true});

	  return county_summary;
}

export function nationalSummarysModel(config){
	const national_summary = config.define('national_summarys', {
      candidate_id: {
        type: Sequelize.INTEGER,
      },
      candidate_name : {
        type : Sequelize.STRING,
      },
      votes: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      }
    }, {underscored: true});

	  return national_summary;
}

export function inboundsModel(config){
	const inbound = config.define('inbounds', {
      msisdn: {
        type: Sequelize.STRING
      },
      results: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      }
	  }, {underscored: true});

	  return inbound;
}

export function countysModel(config){
	const county = config.define('countys', {
      name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      }
	  }, {underscored: true});

	  return county;
}

export function centersModel(config){
	const center = config.define('centers', {
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING,
        validate : {
          isNumeric : true
        }
      },
      address: {
        type: Sequelize.STRING,
      },
      msisdn: {
        type: Sequelize.STRING
      },
      polling_place: {
        type: Sequelize.STRING,
      },
      total_voters:{
        type : Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      }
	  }, {underscored: true});

	  return center;
}

export function rawModel(config){
	const raw = config.define('raws', {
      center_id :{
        type : Sequelize.INTEGER
      },
      county_id : {
        type : Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      }
	  }, {underscored: true});

	  return raw;
}

export function usersModel(config){
	const users = config.define('users', {
      firstname: {
        type: Sequelize.STRING,
        set(val) {
          this.setDataValue('firstname', _.capitalize(val).trim());
        }
      },
      lastname: {
        type: Sequelize.STRING,
        set(val) {
          this.setDataValue('lastname', _.capitalize(val).trim());
        }
      },
      email: {
        type: Sequelize.STRING,
        unique : true,
        validate : {
            isEmail : true
        }, set(val) {
          this.setDataValue('email', (val).trim());
        }
      },
      msisdn: {
        type: Sequelize.STRING,
        unique : true,
        validate : {
            isNumeric : true
        }, set(val) {
          this.setDataValue('msisdn', (val).trim());
        }
      },
      password: {
        type: Sequelize.STRING,
        set(val) {
          this.setDataValue('password', utils.getHash(val.trim()));
        }
	    },
	    status: {
        type: Sequelize.STRING(1),
        defaultValue : 'A'
      }
    
    //county_id
	}, {underscored: true});

	return users;
}