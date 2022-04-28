import {combineReducers} from "redux";
import { superherosReducer } from './superheros';

export const rootReducer = combineReducers({
    superheros: superherosReducer
});