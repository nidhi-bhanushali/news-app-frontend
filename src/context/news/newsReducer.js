import {
    ADD_NEWS,
    NEWS_ERROR,
    GET_NEWS 
} from '../types';

export default (state , action) => {
    switch(action.type) {
        case GET_NEWS:
            return{
                ...state,
                news: action.payload,
                loading: false
            }
        case ADD_NEWS:
        return{
            ...state,
            news: [...state.news , action.payload],
            loading: false
        };
        case NEWS_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}