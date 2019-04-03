const defaultState = {
    isLoading: true,
    currentPath: "/"
};


const AppReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "APP_LOADED":
            state = {
                ...state,
                isLoading: false
            };
            break;
        default:
    }
    return state;
};

export default AppReducer;
