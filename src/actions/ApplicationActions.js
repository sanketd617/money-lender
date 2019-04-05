export function changeModel(payload) {
    return {
        type: "APPLICATION_MODEL_CHANGED",
        payload: payload
    }
}

export function changeStep(payload) {
    return {
        type: "APPLICATION_STEP_CHANGED",
        payload: payload
    }
}

export function setConfirmed(payload) {
    return {
        type: "APPLICATION_CONFIRMATION_CHANGED",
        payload: payload
    }
}


export function checkErrorsAndForward(payload) {
    return {
        type: "APPLICATION_CHECK_ERRORS",
        payload: payload
    }
}

