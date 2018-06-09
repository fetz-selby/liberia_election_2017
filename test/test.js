var chai = require("chai"),
should = require('should'),
expect = require('chai').expect,
request = require('request'),
d = require('../config'),
url = d.config.IP+':'+d.config.PORT+'/api/',
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IkEiLCJpZCI6MywiZmlyc3RuYW1lIjoiRW1tYW51ZWwiLCJsYXN0bmFtZSI6IlNlbGJ5IiwiZW1haWwiOiJzZWxieUBlbGVjdGlvbmh1Yi5jb20iLCJtc2lzZG4iOiIwMjQ0MDAwMDAxIiwicGFzc3dvcmQiOiI1Y2VmOThmMDFkZjNjZmJiYTRkZGU3NDUwZTk1ZmQ3MmY3YWZjYjk0ZmJmMmI4MjhiMWM1YTE4YzBhODQzYjExIiwiY291bnR5X2lkIjoxMiwidXBkYXRlZF9hdCI6IjIwMTctMTAtMDdUMjI6NTA6NTEuMDUxWiIsImNyZWF0ZWRfYXQiOiIyMDE3LTEwLTA3VDIyOjUwOjUxLjA1MVoifSwiaWF0IjoxNTA3NDE2NjUxLCJleHAiOjE1MDg0NTM0NTF9.8SmntVApCiJihJIfHK-3v-5x6kf9-0UD_e0KXvvWZi4",
user = {};


chai.should();
chai.use(require('chai-things'));

describe('Results#POSTING', function(){

    before(function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 12, results : "1:4500, 2:3010", rejected : 26}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });	
    });

    it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 11, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 10, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 13, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });
    it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 14, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 15, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 16, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 17, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 18, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 19, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 20, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 21, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 22, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 23, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 24, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 25, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 26, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 27, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 28, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 29, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 30, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 31, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 32, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 33, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 34, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 35, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 36, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 37, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 38, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 39, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 40, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 41, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 42, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 43, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 44, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 45, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 46, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 47, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 48, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 49, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 50, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 51, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 52, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 53, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 54, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 55, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 56, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 57, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 58, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 59, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 60, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 61, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 62, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 63, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 64, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 65, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 66, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 67, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 68, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 69, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 70, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 71, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 72, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 73, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 74, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 75, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 76, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 77, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 78, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 79, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 80, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 81, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 82, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 83, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 84, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 85, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 86, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 87, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 88, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 89, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 90, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 91, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 92, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 93, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 94, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 95, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 96, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 97, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 98, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 99, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 100, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 101, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 102, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 103, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 104, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 105, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 106, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 107, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 108, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 109, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 110, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 111, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 112, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 113, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 114, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 115, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 116, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 117, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 118, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 119, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 120, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 121, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 122, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 123, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 124, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 125, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 126, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 127, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 128, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 129, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 130, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 131, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 132, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 133, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 134, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 135, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 136, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 137, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 138, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 139, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });it('# 2', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 140, results : "1:900, 2:211", rejected : 24}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 3', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 141, results : "1:3500, 2:1010", rejected : 22}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

    it('# 4', function(done){
        request({
            uri: url+'v1/results',
            method: 'POST',
            json: true,
            //qs : {username : 'selby@hrcf.com', password : 'pa55w0rd01'},
            body : {token : token, center_id : 142, results : "1:5222, 2:1044", rejected : 19}          
        }, function(error, response, body){
            //token = body.token;
            done();
        });
    });

});