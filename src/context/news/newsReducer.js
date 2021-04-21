import {
    ADD_NEWS,
    DELETE_NEWS,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_NEWS,
    CLEAR_FILTER,
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
        case DELETE_NEWS:
            return {
                ...state,
                news: state.news.filter(newsItem => newsItem.id !== action.payload)
            };
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return{
                ...state,
                current : null
            };
        case FILTER_NEWS:
            return{
                ...state,
                filtered: state.news.filter(newsItem => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return newsItem.title.match(regex) || newsItem.author.match(regex);
                })
            };
        case CLEAR_FILTER:
            return{
                ...state,
                filtered : null
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