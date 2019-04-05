const defaultState = {
    isLoading: true,
    currentPath: "/",
    isDrawerOpened: false
};


const AppReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "APP_LOADED":
            state = {
                ...state,
                isLoading: false
            };
            break;
        case "APP_DRAWER_TOGGLED":
            console.log("lskj")
            state = {
                ...state,
                isDrawerOpened: !state.isDrawerOpened
            };
            break;
        default:
    }
    return state;
};

export default AppReducer;
