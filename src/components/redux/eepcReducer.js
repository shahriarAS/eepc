import initialState from "./initialState";

function EEPCReducer(state = initialState, action) {
    switch (action.type) {
        case "finish_loading":
            return {
                ...state,
                loading_status: "finished"
            }
        case "start_loading":
            return {
                ...state,
                loading_status: "loading"
            }
        case "populate_sfcategory":
            const category = Object.values(action.payload)
            return {
                ...state,
                SFCategory: category
            }
        case "populate_sfdata":
            return {
                ...state,
                SFData: action.payload
            }
        case "login":
            return {
                ...state,
                user: action.payload
            }
        case "logout":
            return {
                ...state,
                user: ""
            }
        default:
            return state

    }
}

export default EEPCReducer;