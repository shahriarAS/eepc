// // Package Import
// import { createStore } from "redux"
// import { composeWithDevTools } from 'redux-devtools-extension';

// // Component Import
// import EEPCReducer from "./eepcReducer"

// const store = createStore(EEPCReducer, composeWithDevTools())

// export default store


// Package Import
import { createStore } from "redux"
// import { composeWithDevTools } from 'redux-devtools-extension';

// Component Import
 import EEPCReducer from "./eepcReducer"

const store = createStore(EEPCReducer)

export default store