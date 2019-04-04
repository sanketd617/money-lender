export function changeLoanType(payload) {
    return {
        type: "PREDICTOR_LOAN_TYPE_CHANGED",
        payload: payload
    }
}

export function changeModel(payload) {
    return {
        type: "PREDICTOR_MODEL_CHANGED",
        payload: payload
    }
}

let timer = null;

export function getInterest(payload) {
    const url = `https://ftl-frontend-test.herokuapp.com/interest?amount=${payload.loanAmount}&numMonths=${payload.termLength}`;
    return dispatch => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        dispatch(interestFetched(result))
                    },
                    (error) => {
                        console.error(error)
                    }
                )
        }, 500);
    }
}

export function interestFetched(data) {
    return {
        type: "PREDICTOR_INTEREST_FETCHED",
        payload: {
            loanAmount: data.principal.amount,
            termLength: data.numPayments,
            interestRate: data.interestRate,
            monthlyPayment: data.monthlyPayment.amount
        }
    };
}

