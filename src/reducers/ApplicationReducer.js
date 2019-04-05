import {changeStep} from "../actions/ApplicationActions";
import store from "../Store";

const regExps = {
    name: /^[A-Za-z]{3,20}$/,
    companyName: /^[A-Za-z]+[A-Za-z0-9]$/,
    email: /^[a-z]+[a-z._]{2,}@[a-z]+[a-z.]+.[a-z]{2,}$/,
    website: /^(http|https):\/\/[a-z]+.[a-z._-]+[a-z]+$/,
    address: /^(.){10,}/,
    mobile: /^[1-9]{1,1}[0-9]{9,9}$/,
    gender: /^(male|female|other)$/
};

const defaultState = {
    personal: {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        gender: ""
    },
    business: {
        name: "",
        website: "",
        email: "",
        phone: "",
        address: ""
    },
    activeStep: 0,
    confirmed: false,
    errors: {
        personal: {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            address: "",
            gender: ""
        },
        business: {
            name: "",
            website: "",
            email: "",
            phone: "",
            address: ""
        },
        confirmed: ""
    }
};


const ApplicationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "APPLICATION_MODEL_CHANGED":
            state = {
                ...state,
                [action.payload.type]: {
                    ...state[action.payload.type],
                    [action.payload.model]: action.payload.value
                }
            };
            break;
        case "APPLICATION_STEP_CHANGED":
            state = {
                ...state,
                activeStep: ((state.activeStep >= 2 && action.payload > 0) || (state.activeStep <= 0 && action.payload < 0)) ? state.activeStep : state.activeStep+action.payload
            };
            break;
        case "APPLICATION_CONFIRMATION_CHANGED":
            state = {
                ...state,
                confirmed: action.payload
            };
            break;

        case "APPLICATION_CHECK_ERRORS":
            let { errors, newState } = getErrors(state);
            if(errors){
                state = {
                    ...newState,
                }
            }
            else{
                state = {
                    ...state,
                    activeStep: ((state.activeStep >= 3 && action.payload > 0) || (state.activeStep <= 0 && action.payload < 0)) ? state.activeStep : state.activeStep+action.payload
                };
            }

            break;
        default:
    }
    return state;
};

function getErrors(state) {
    let result = false;
    let newState = {
        ...state
    };
    let step = state.activeStep;
    if(step === 0){
        if(!regExps.name.test(state.personal.firstName)){
            newState.errors.personal.firstName = "First name should contain only letter & must be of min 3 chars";
            result = true;
        }
        else{
            console.log(regExps.name.test(state.personal.firstName))
            newState.errors.personal.firstName = "";
        }
        if(!regExps.name.test(state.personal.lastName)){
            newState.errors.personal.lastName = "Last name should contain only letter & must be of min 3 chars";
            result = true;
        }
        else{
            newState.errors.personal.lastName = "";
        }
        if(!regExps.mobile.test(state.personal.mobile)){
            newState.errors.personal.mobile = "Invalid mobile number";
            result = true;
        }
        else{
            newState.errors.personal.mobile = "";
        }
        if(!regExps.email.test(state.personal.email)){
            newState.errors.personal.email = "Invalid email";
            result = true;
        }
        else{
            newState.errors.personal.email = "";
        }
        if(!regExps.address.test(state.personal.address)){
            newState.errors.personal.address = "Invalid address";
            result = true;
        }
        else{
            newState.errors.personal.address = "";
        }
        if(!regExps.gender.test(state.personal.gender)){
            newState.errors.personal.gender = "Invalid gender";
            result = true;
        }
        else{
            newState.errors.personal.gender = "";
        }
    }
    else if(step === 1){
        if(!regExps.gender.test(state.personal.gender)){
            newState.errors.personal.gender = "Invalid gender";
            result = true;
        }
        else{
            newState.errors.personal.gender = "";
        }

        if(!regExps.name.test(state.business.name)){
            newState.errors.business.name = "Business name should contain only letter & must be of min 3 chars";
            result = true;
        }
        else{
            newState.errors.business.name = "";
        }
        if(!regExps.website.test(state.business.website)){
            newState.errors.business.website = "Invalid website";
            result = true;
        }
        else{
            newState.errors.business.website = "";
        }
        if(!regExps.mobile.test(state.business.phone)){
            newState.errors.business.phone = "Invalid mobile number";
            result = true;
        }
        else{
            newState.errors.business.phone = "";
        }
        if(!regExps.email.test(state.business.email)){
            newState.errors.business.email = "Invalid email";
            result = true;
        }
        else{
            newState.errors.business.email = "";
        }
        if(regExps.address.test(state.business.address)){
            newState.errors.business.address = "Invalid address";
            result = true;
        }
        else{
            newState.errors.business.address = "";
        }
    }
    else{
        if(!state.confirmed){
            newState.errors.confirmed = "Please accept the terms & Conditions.";
            result = true;
        }
        else{
            newState.errors.confirmed = "";
        }
    }

    return {
        errors: result,
        newState: newState
    };
}

export default ApplicationReducer;
