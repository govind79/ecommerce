import {createStore} from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./Redux/reducers/main";


const store = createStore(rootreducer);

export default store;