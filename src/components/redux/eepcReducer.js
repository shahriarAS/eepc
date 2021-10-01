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
        case "populate_sfCategory":
            const CFcategory = Object.values(action.payload)
            return {
                ...state,
                SFCategory: CFcategory
            }
        case "populate_sfData":
            return {
                ...state,
                SFData: action.payload
            }
        case "populate_vbCategory":
            const VBcategory = Object.values(action.payload)
            return {
                ...state,
                VBCategory: VBcategory
            }
        case "populate_vbData":
            return {
                ...state,
                VBData: action.payload
            }
        case "populate_grammarCategory":
            const grammarCategory = Object.values(action.payload)
            return {
                ...state,
                GrammarCategory: grammarCategory
            }
        case "populate_grammarData":
            // console.log(action.payload)
            return {
                ...state,
                GrammarData: action.payload
            }
        case "populate_paragraphCategory":
            const paragraphCategory = Object.values(action.payload)
            return {
                ...state,
                ParagraphCategory: paragraphCategory
            }
        case "populate_paragraphData":
            // console.log(action.payload)
            return {
                ...state,
                ParagraphData: action.payload
            }
        case "populate_compositionCategory":
            const compositionCategory = Object.values(action.payload)
            return {
                ...state,
                CompositionCategory: compositionCategory
            }
        case "populate_compositionData":
            // console.log(action.payload)
            return {
                ...state,
                CompositionData: action.payload
            }
        case "populate_dialgoueCategory":
            const dialgoueCategory = Object.values(action.payload)
            return {
                ...state,
                DialogueCategory: dialgoueCategory
            }
        case "populate_dialgoueData":
            // console.log(action.payload)
            return {
                ...state,
                DialogueData: action.payload
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