import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class SignupStore extends EventEmitter{
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
    }

    initUser (...user){
        this.user = user;
        this.emit('signup');
    }

    doMsisdnValidate(action){
        if(action.isMsisdnError){
            this.emit('signup_msisdn_error');
        }else if(action.isMsisdnExist){
            this.emit('signup_msisdn_exists');
        }else if(!action.isMsisdnExist){
            this.emit('signup_msisdn_not_exists');
        }
    }

    doEmailValidate(action){
        if(action.isEmailError){
            this.emit('signup_email_error');
        }else if(action.isEmailExist){
            this.emit('signup_email_exists');
        }else if(!action.isEmailExist){
            this.emit('signup_email_not_exists');
        }
    }

    getUser(){
        return this.user;
    }

    onSignupComplete(data){
        this.emit('signup_complete');
    }

    onCorporateExist(action){
        if(action.data){
            this.emit('signup_corporate_exist');
        }else{
            this.emit('signup_corporate_not_exist');
        }
    }

    onCountyLoaded(data){
        data.map((county)=>{
            this.allCountys.push({value: county.id, label : county.name});
            return county;
        })

        this.emit('signup_countys_loaded');
    }

    getCountys(){
        return this.allCountys;
    }

    handleActions(action){
        switch(action.type){
            case 'VALIDATE_MSISDN' : {
                this.doMsisdnValidate(action);
                break;
            } 
            case 'VALIDATE_EMAIL' : {
                this.doEmailValidate(action);
                break;
            } 
            case 'SIGNUP_USER' : {
                break;
            } 
            case 'SIGNUP_COMPLETE' :{
                this.onSignupComplete(action.data);
                break;
            }
            case 'CORPORATE_EXIST' :{
                this.onCorporateExist(action);
                break;
            }
            case 'SIGNUP_COUNTYS_LOADED' :{
                this.onCountyLoaded(action.data);
                break;
            }
            default:{}
        }
    }

}

const signupStore = new SignupStore();
dispatcher.register(signupStore.handleActions.bind(signupStore));

export default signupStore;