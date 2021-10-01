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
        case "populate_spokenCategory":
            const spokenCategory = Object.values(action.payload)
            return {
                ...state,
                SpokenCategory: spokenCategory
            }
        case "populate_spokenData":
            // console.log(action.payload)
            return {
                ...state,
                SpokenData: action.payload
            }
        case "populate_cvCategory":
            const cvCategory = Object.values(action.payload)
            return {
                ...state,
                CVCategory: cvCategory
            }
        case "populate_cvData":
            // console.log(action.payload)
            return {
                ...state,
                CVData: action.payload
            }
        case "populate_applicationCategory":
            const applicationCategory = Object.values(action.payload)
            return {
                ...state,
                ApplicationCategory: applicationCategory
            }
        case "populate_applicationData":
            // console.log(action.payload)
            return {
                ...state,
                ApplicationData: action.payload
            }
        case "populate_letterCategory":
            const letterCategory = Object.values(action.payload)
            return {
                ...state,
                LetterCategory: letterCategory
            }
        case "populate_letterData":
            // console.log(action.payload)
            return {
                ...state,
                LetterData: action.payload
            }
        case "populate_storyCategory":
            const storyCategory = Object.values(action.payload)
            return {
                ...state,
                StoryCategory: storyCategory
            }
        case "populate_storyData":
            // console.log(action.payload)
            return {
                ...state,
                StoryData: action.payload
            }
        case "populate_graphCategory":
            const graphCategory = Object.values(action.payload)
            return {
                ...state,
                GraphCategory: graphCategory
            }
        case "populate_graphData":
            // console.log(action.payload)
            return {
                ...state,
                GraphData: action.payload
            }
        case "populate_emailCategory":
            const emailCategory = Object.values(action.payload)
            return {
                ...state,
                EmailCategory: emailCategory
            }
        case "populate_emailData":
            // console.log(action.payload)
            return {
                ...state,
                EmailData: action.payload
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